import Link from "next/link";

export default function Ajudar() {
  return (
    <main>
      {/* Hero */}
      <section className="donation-hero">
        <div className="container">
          <p className="eyebrow">Ajude a ResGatas</p>
          <h1 style={{ fontSize: "2.8rem", marginBottom: 16 }}>
            Sua doação faz a diferença
          </h1>
          <p className="donation-subtitle">
            Cada contribuição ajuda a manter o abrigo, comprar ração, remédios e
            garantir novos resgates. Vivemos 100% de doações.
          </p>
        </div>
      </section>

      {/* Meta de arrecadação */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <div
            style={{
              background: "var(--card)",
              borderRadius: "var(--radius)",
              padding: 32,
              boxShadow: "var(--shadow)",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "1.4rem",
                marginBottom: 20,
              }}
            >
              Meta mensal de arrecadação
            </h2>
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
                color: "var(--text-muted)",
                marginTop: 12,
                fontSize: "0.95rem",
              }}
            >
              Faltam <strong>R$ {(6000 - 906).toLocaleString("pt-BR")}</strong>{" "}
              para atingir a meta. Cada real conta!
            </p>
          </div>
        </div>
      </section>

      {/* Formas de doação */}
      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Formas de ajudar</p>
            <h2>Escolha como contribuir</h2>
          </div>
          <div className="donation-grid">
            <article className="donation-card">
              <div
                className="help-icon"
                style={{ margin: "0 auto 18px" }}
              >
                ❤
              </div>
              <h2>Doe via Apoia.se</h2>
              <p>
                Contribuição mensal para sustentar os cuidados do abrigo.
                Receba novidades dos nossos resgatados direto no seu e-mail.
              </p>
              <a
                href="https://apoia.se/resgatas"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Acessar Apoia.se →
              </a>
            </article>

            <article className="donation-card">
              <div
                className="help-icon"
                style={{ margin: "0 auto 18px" }}
              >
                💜
              </div>
              <h2>Doe via PIX</h2>
              <p>
                Doe qualquer valor escaneando o QR Code abaixo. Compartilhe
                com amigos que amam gatinhos!
              </p>
              <div className="pix-placeholder">QR PIX</div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  marginTop: 12,
                }}
              >
                Chave PIX será adicionada em breve
              </p>
            </article>

            <article className="donation-card">
              <div
                className="help-icon"
                style={{ margin: "0 auto 18px" }}
              >
                🏠
              </div>
              <h2>Adote uma gatinha</h2>
              <p>
                A melhor forma de ajudar é dar um lar para uma das nossas
                resgatadas. O processo é simples e responsável.
              </p>
              <Link href="/gatos" className="btn btn-outline">
                Conhecer gatinhas
              </Link>
            </article>

            <article className="donation-card">
              <div
                className="help-icon"
                style={{ margin: "0 auto 18px" }}
              >
                📦
              </div>
              <h2>Doe suprimentos</h2>
              <p>
                Ração, patês, areia, vermífugos e outros itens são sempre
                bem-vindos. Entre em contato para combinar a entrega.
              </p>
              <Link href="/contato" className="btn btn-outline">
                Falar conosco
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Onde vai seu dinheiro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <div className="section-header">
            <p className="eyebrow">Transparência</p>
            <h2>Para onde vai sua doação</h2>
          </div>
          <div
            style={{
              background: "var(--card)",
              borderRadius: "var(--radius)",
              padding: 28,
              boxShadow: "var(--shadow)",
            }}
          >
            <div className="expense-item">
              <span>🥫 Ração (10kg a cada 3 dias)</span>
              <strong>Principal</strong>
            </div>
            <div className="expense-item">
              <span>🩺 Consultas veterinárias</span>
              <strong>Essencial</strong>
            </div>
            <div className="expense-item">
              <span>💉 Vacinas e vermífugos</span>
              <strong>Periódico</strong>
            </div>
            <div className="expense-item">
              <span>🧹 Areia higiênica</span>
              <strong>Contínuo</strong>
            </div>
            <div className="expense-item">
              <span>🍽️ Patês e suplementos</span>
              <strong>Frequente</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
