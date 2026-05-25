import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="container">
          <p className="hero-eyebrow">ONG · Resgate · Adoção</p>
          <h1 className="hero-title">
            Transformando abandono em <span>histórias de amor</span>
          </h1>
          <p className="hero-subtitle">
            A ResGatas resgata, castra e encontra lares para gatas adultas em
            Itajaí&nbsp;–&nbsp;SC. Com sua ajuda, já cuidamos de mais de 60
            gatinhas.
          </p>
          <div className="hero-actions">
            <Link href="/gatos" className="btn btn-primary">
              🐱 Conhecer os gatinhos
            </Link>
            <Link href="/ajudar" className="btn btn-outline">
              ❤ Quero ajudar
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">+60</div>
              <div className="hero-stat-label">Gatas resgatadas</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">7</div>
              <div className="hero-stat-label">Anos de atuação</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">34</div>
              <div className="hero-stat-label">Apoiadores</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Adoção ── */}
      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Adoção</p>
            <h2>Está pensando em adotar uma gatinha?</h2>
            <p>
              Nossas resgatadas estão prontas para ganhar um lar com carinho,
              paciência e muito amor.
            </p>
          </div>
          <div className="cats-grid">
            <article className="cat-card">
              <div className="cat-card-overflow">
                <img src="/fotos/gato.jpg" alt="Gata Mimi" />
              </div>
              <div className="cat-card-body">
                <h3>Mimi</h3>
                <span>2 anos · tranquila</span>
              </div>
            </article>
            <article className="cat-card">
              <div className="cat-card-overflow">
                <img src="/fotos/my%20masterpiece.jpg" alt="Gata Pipoca" />
              </div>
              <div className="cat-card-body">
                <h3>Pipoca</h3>
                <span>1 ano · brincalhona</span>
              </div>
            </article>
            <article className="cat-card">
              <div className="cat-card-overflow">
                <img src="/fotos/transferir%20(2).jpg" alt="Gato Gordo" />
              </div>
              <div className="cat-card-body">
                <h3>Gordo</h3>
                <span>3 anos · curioso</span>
              </div>
            </article>
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/gatos" className="btn btn-primary">
              Ver todos os gatinhos →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sobre ── */}
      <section className="section">
        <div className="container split">
          <div className="split-text">
            <p className="eyebrow">Sobre a nossa ONG</p>
            <h2>Resgatamos, cuidamos e conectamos</h2>
            <p>
              A ResGatas nasceu há 7 anos para transformar abandono em
              histórias de afeto. Somos um abrigo particular focado em gatas
              adultas — as que mais precisam de uma chance. Cada resgate vira
              um novo lar, cada doação mantém os cuidados.
            </p>
            <div className="pill-row">
              <span>Resgate responsável</span>
              <span>Castração e vacinas</span>
              <span>Adoção consciente</span>
            </div>
          </div>
          <div className="sobre-collage">
            <img src="/fotos/Yiyi.jpg" alt="Gata sorrindo" />
            <img src="/fotos/https___pin_it_5exuYskLd.jpg" alt="Gatas juntas" />
            <img src="/fotos/meowl%20windows%20oboi.jpg" alt="Gata descansando" />
            <img src="/fotos/TENGO%20NUEVO%20CANAL!!!.jpg" alt="Gata curiosa" />
          </div>
        </div>
      </section>

      {/* ── Como ajudar ── */}
      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Como ajudar</p>
            <h2>Doe carinho, tempo ou qualquer valor</h2>
            <p>
              Toda ajuda se transforma em ração, remédios e mais resgates.
              Escolha a melhor forma de apoiar.
            </p>
          </div>
          <div className="help-grid">
            <article className="help-card">
              <div className="help-icon">❤</div>
              <h3>Doe via Apoia.se</h3>
              <p>
                Contribua mensalmente e acompanhe as novidades dos nossos
                resgatados.
              </p>
              <Link href="/ajudar" className="btn btn-primary">
                Quero apoiar
              </Link>
            </article>
            <article className="help-card">
              <div className="help-icon">💜</div>
              <h3>Doe via PIX</h3>
              <p>
                Doe qualquer valor — cada real faz diferença na vida de uma
                gatinha.
              </p>
              <Link href="/ajudar" className="btn btn-outline">
                Ver chave PIX
              </Link>
            </article>
            <article className="help-card">
              <div className="help-icon">🏠</div>
              <h3>Adote uma gatinha</h3>
              <p>
                Dê um lar definitivo para uma das nossas gatas resgatadas.
              </p>
              <Link href="/gatos" className="btn btn-outline">
                Conhecer gatinhas
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── Meta de arrecadação ── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <div className="section-header">
            <p className="eyebrow">Transparência</p>
            <h2>Nossa meta mensal</h2>
            <p>
              Precisamos de R$&nbsp;6.000 por mês para manter o abrigo.
              Atualmente arrecadamos cerca de R$&nbsp;906.
            </p>
          </div>
          <div
            style={{
              background: "var(--card)",
              borderRadius: "var(--radius)",
              padding: 32,
              boxShadow: "var(--shadow)",
            }}
          >
            <div className="progress-label">
              <span>R$ 906 arrecadados</span>
              <span>Meta: R$ 6.000</span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${(906 / 6000) * 100}%` }}
              />
            </div>
            <p
              style={{
                textAlign: "center",
                marginTop: 16,
                color: "var(--text-muted)",
                fontSize: "0.95rem",
              }}
            >
              Faltam <strong>R$ {(6000 - 906).toLocaleString("pt-BR")}</strong>{" "}
              para atingir a meta. Cada doação conta!
            </p>
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <Link href="/ajudar" className="btn btn-primary">
                ❤ Ajudar agora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contato rápido ── */}
      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container split reverse">
          <div className="split-text">
            <p className="eyebrow">Contato e endereço</p>
            <h2>Venha nos conhecer!</h2>
            <p>
              Estamos em Itajaí&nbsp;–&nbsp;SC. Visite o abrigo, conheça as
              gatinhas e acompanhe as novidades pelo Instagram.
            </p>
            <ul className="contact-list">
              <li>📍 R. Fortunato Tormena, Itajaí - SC, 88318-053</li>
              <li>📞 (47) 99212-9083</li>
              <li>
                📷 Instagram:{" "}
                <a
                  href="https://instagram.com/ResGatas"
                  target="_blank"
                  rel="noreferrer"
                >
                  @ResGatas
                </a>
              </li>
              <li>🕐 Seg–Sex: 09h às 18h · Sáb: 09h às 13h</li>
            </ul>
          </div>
          <div
            style={{
              borderRadius: "var(--radius)",
              overflow: "hidden",
              boxShadow: "var(--shadow)",
            }}
          >
            <img
              src="/fotos/meowl%20windows%20oboi.jpg"
              alt="Nossa ONG"
              style={{ width: "100%", height: 340, objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
