import { useEffect, useState } from "react";

export default function App() {
  const SERVER_IP = "mc.dashmc.net";
  const [copied, setCopied] = useState(false);
  const [players, setPlayers] = useState(null);

  // Copiar IP
  const copyIP = async () => {
    await navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Obtener jugadores online
  useEffect(() => {
    fetch("https://api.mcstatus.io/v2/status/java/mc.dashmc.net")
      .then(res => res.json())
      .then(data => {
        setPlayers(data.players.online);
      })
      .catch(() => setPlayers("?"));
  }, []);

  return (
    <div className="app">
      <header className="hero fade-in">
        <h1>DashMC Network</h1>
        <p>BoxPvP · Eventos · PvP competitivo</p>

        <div className="ip-box" onClick={copyIP}>
          <span>{SERVER_IP}</span>
          <small>{copied ? "¡IP copiada!" : "Click para copiar"}</small>
        </div>

        <div className="players">
          👥 {players !== null ? `${players} jugadores online` : "Cargando..."}
        </div>
      </header>

      <section className="section slide-up">
        <h2>¿Qué es DashMC?</h2>
        <p>
          Una network de Minecraft centrada en BoxPvP con sistemas personalizados,
          rendimiento optimizado y una comunidad activa.
        </p>
      </section>

      <section className="section cards slide-up">
        <div className="card">⚔ BoxPvP competitivo</div>
        <div className="card">🎁 Eventos frecuentes</div>
        <div className="card">🚀 Alto rendimiento</div>
      </section>

      <footer className="footer fade-in">
        © 2025 DashMC Network — No afiliado con Mojang
      </footer>
    </div>
  );
}
