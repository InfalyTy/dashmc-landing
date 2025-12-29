export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>DashMC Network</h1>
        <p>BoxPvP · Eventos · Comunidad competitiva</p>
        <div className="buttons">
          <a href="#" className="btn primary">Jugar ahora</a>
          <a href="#" className="btn secondary">Tienda</a>
        </div>
      </header>

      <section className="section">
        <h2>¿Qué es DashMC?</h2>
        <p>
          DashMC es una network de Minecraft centrada en el BoxPvP,
          con sistemas personalizados, eventos frecuentes y una
          experiencia optimizada para PvP competitivo.
        </p>
      </section>

      <section className="section cards">
        <div className="card">
          <h3>⚔ BoxPvP</h3>
          <p>Combate constante, mejoras y progresión competitiva.</p>
        </div>
        <div className="card">
          <h3>🎁 Eventos</h3>
          <p>Eventos especiales, recompensas únicas y temporadas.</p>
        </div>
        <div className="card">
          <h3>🚀 Rendimiento</h3>
          <p>Servidor optimizado para 1.20.x sin lag.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 DashMC Network — No afiliado con Mojang</p>
      </footer>
    </div>
  );
}
