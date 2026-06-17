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
            Itajaí&nbsp;–&nbsp;Santa Catarina. Há 13 anos transformando
            abandono em amor.
          </p>
          <div className="about-highlight">
            <div>
              <p className="about-label">Tempo de atuação</p>
              <p className="about-value">13 anos</p>
            </div>
            <div>
              <p className="about-label">Gatas no santuário</p>
              <p className="about-value">~100</p>
            </div>
            <div>
              <p className="about-label">Tipo</p>
              <p className="about-value">Santuário</p>
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
              <li>Tempo de atuação: 13 anos</li>
              <li>Tipo: Santuário</li>
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
              <li>Número atual: aproximadamente 100 gatas</li>
              <li>Atenção: Somos um santuário. A grande maioria das gatas tem mais de 9 anos ou são ariscas, vivendo aqui definitivamente de forma segura. Somente gatas recém-resgatadas sociáveis (atualmente cerca de 6) estão para adoção.</li>
            </ul>
          </article>

          <article className="about-card">
            <h2>💰 Finanças</h2>
            <ul className="about-list">
              <li>Vive 100% de doações (sem auxílio público)</li>
              <li>Plataforma de doação: Apoia.se</li>
              <li>Meta mensal: R$ 10.000 (R$ 8.000 para gastos fixos + R$ 2.000 para veterinários/medicação)</li>
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
