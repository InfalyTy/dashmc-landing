export default function App() {
  const copyIP = () => {
    navigator.clipboard.writeText("mc.dashmc.net")
    alert("IP copiada al portapapeles")
  }

  return (
    <>
      <header className="hero">
        <h1>DashMC Network</h1>
        <p>Servidor Minecraft • BoxPvP • Network</p>

        <div className="ip-box" onClick={copyIP}>
          mc.dashmc.net
          <span>CLICK TO COPY</span>
        </div>
      </header>

      <section className="stats">
        <div className="stat">
          <h2>ONLINE</h2>
          <p>123</p>
        </div>

        <div className="stat">
          <h2>MODO</h2>
          <p>BoxPvP</p>
        </div>

        <div className="stat">
          <h2>VERSION</h2>
          <p>1.20.4</p>
        </div>
      </section>

      <footer>
        © DashMC Network
      </footer>
    </>
  )
}
