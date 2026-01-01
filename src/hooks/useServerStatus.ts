import { useState, useEffect } from "react";

interface ServerStatus {
  online: boolean;
  players: {
    online: number;
    max: number;
  };
  version?: string;
  motd?: string;
  isLoading: boolean;
  error?: string;
}

export const useServerStatus = (serverIP: string) => {
  const [status, setStatus] = useState<ServerStatus>({
    online: false,
    players: { online: 0, max: 0 },
    isLoading: true,
  });

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/3/${serverIP}`);
        const data = await response.json();

        if (data.online) {
          setStatus({
            online: true,
            players: {
              online: data.players?.online || 0,
              max: data.players?.max || 0,
            },
            version: data.version || "1.20.x",
            motd: data.motd?.clean?.[0] || "",
            isLoading: false,
          });
        } else {
          setStatus({
            online: false,
            players: { online: 0, max: 0 },
            isLoading: false,
          });
        }
      } catch (error) {
        setStatus({
          online: false,
          players: { online: 0, max: 0 },
          isLoading: false,
          error: "No se pudo conectar al servidor",
        });
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000); // Actualizar cada minuto

    return () => clearInterval(interval);
  }, [serverIP]);

  return status;
};
