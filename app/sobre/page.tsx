export default function Sobre() {
  return (
    <main>
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <p className="eyebrow">Quem Somos</p>
          <h1 style={{ fontSize: "2.8rem", marginBottom: 16 }}>ResGatas</h1>
          <p className="about-subtitle">
            Resgate, cuidado e adoção consciente de gatas adultas em
            Itajaí&nbsp;–&nbsp;Santa Catarina. Há 7 anos transformando
            abandono em amor.
          </p>
          <div className="about-highlight">
            <div>
              <p className="about-label">Tempo de atuação</p>
              <p className="about-value">7 anos</p>
            </div>
            <div>
              <p className="about-label">Gatas resgatadas</p>
              <p className="about-value">+60</p>
            </div>
            <div>
              <p className="about-label">Tipo</p>
              <p className="about-value">Abrigo particular</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards de informação */}
      <section className="section">
        <div className="container about-grid">
          <article className="about-card">
            <h2>📋 Identificação</h2>
            <ul className="about-list">
              <li>Nome: ResGatas</li>
              <li>Cidade: Itajaí – Santa Catarina</li>
              <li>Endereço: R. Fortunato Tormena, Itajaí - SC, 88318-053</li>
              <li>Tempo de atuação: 7 anos</li>
              <li>Tipo: Abrigo particular</li>
            </ul>
          </article>

          <article className="about-card">
            <h2>🎯 Missão</h2>
            <ul className="about-list">
              <li>
                Resgatar, castrar e doar gatas adultas em estado de abandono
              </li>
            </ul>
            <h3>Animais</h3>
            <ul className="about-list">
              <li>Foco: gatas adultas (não filhotes)</li>
              <li>Número atual: mais de 60 gatas</li>
            </ul>
          </article>

          <article className="about-card">
            <h2>💰 Finanças</h2>
            <ul className="about-list">
              <li>Vive 100% de doações (sem auxílio público)</li>
              <li>Plataforma de doação: Apoia.se</li>
              <li>Meta mensal: R$ 6.000</li>
              <li>Arrecadação atual: ~R$ 906 por mês</li>
              <li>Número de apoiadores: 34 pessoas</li>
            </ul>
          </article>

          <article className="about-card">
            <h2>🛒 Gastos Mensais</h2>
            <ul className="about-list">
              <li>Consumo de ração: 10 kg a cada 3 dias</li>
              <li>
                Destinação: ração, patês, areia, vermífugos, vacinas, consultas
                veterinárias
              </li>
            </ul>
          </article>

          <article className="about-card">
            <h2>📜 Histórico</h2>
            <ul className="about-list">
              <li>
                27/05/2020 – Gata &ldquo;Alana&rdquo; internada com sonda
                gástrica na clínica Adharas
              </li>
            </ul>
          </article>

          <article className="about-card">
            <h2>📞 Contato</h2>
            <ul className="about-list">
              <li>Telefone: (47) 99212-9083</li>
              <li>
                Instagram:{" "}
                <a
                  href="https://instagram.com/ResGatas"
                  target="_blank"
                  rel="noreferrer"
                >
                  @ResGatas
                </a>
              </li>
              <li>
                Facebook:{" "}
                <a
                  href="https://facebook.com/ResGatas"
                  target="_blank"
                  rel="noreferrer"
                >
                  ResGatas
                </a>
              </li>
            </ul>
          </article>

          <article className="about-card">
            <h2>🕐 Horário de Funcionamento</h2>
            <ul className="about-list">
              <li>Segunda a sexta: 09h às 18h</li>
              <li>Sábado: 09h às 13h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
