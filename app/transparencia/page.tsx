import Link from "next/link";

export default function Transparencia() {
  return (
    <main>
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <p className="eyebrow">Transparência</p>
          <h1 style={{ fontSize: "2.8rem", marginBottom: 16 }}>
            Prestação de contas
          </h1>
          <p className="about-subtitle">
            A ResGatas acredita na transparência total. Veja como seus recursos
            são utilizados para cuidar das nossas gatinhas.
          </p>
        </div>
      </section>

      {/* Números */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Números atuais</p>
            <h2>Como estamos hoje</h2>
          </div>

          <div className="about-highlight" style={{ maxWidth: 800, marginBottom: 48 }}>
            <div>
              <p className="about-label">Meta mensal</p>
              <p className="about-value">R$ 10.000</p>
            </div>
            <div>
              <p className="about-label">Arrecadação atual</p>
              <p className="about-value">~R$ 906</p>
            </div>
            <div>
              <p className="about-label">Apoiadores</p>
              <p className="about-value">34</p>
            </div>
            <div>
              <p className="about-label">Gatas no santuário</p>
              <p className="about-value">~100</p>
            </div>
          </div>

          {/* Barra de progresso */}
          <div
            style={{
              maxWidth: 600,
              margin: "0 auto",
              background: "var(--card)",
              borderRadius: "var(--radius)",
              padding: 28,
              boxShadow: "var(--shadow)",
            }}
          >
            <div className="progress-label">
              <span>R$ 906</span>
              <span>R$ 10.000</span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${(906 / 10000) * 100}%` }}
              />
            </div>
            <p
              style={{
                textAlign: "center",
                marginTop: 12,
                color: "var(--text-muted)",
                fontSize: "0.9rem",
              }}
            >
              Estamos em ~9% da meta. Sua ajuda faz a diferença!
            </p>
          </div>
        </div>
      </section>

      {/* Gastos detalhados */}
      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Gastos mensais</p>
            <h2>Para onde vão os recursos</h2>
            <p>
              100% das doações são investidas no cuidado das gatas. Não temos
              auxílio público. Nossa despesa fixa com alimentação e areia é de R$ 8.000, 
              por isso nossa meta é R$ 10.000 para cobrir também as despesas veterinárias.
            </p>
          </div>

          <div className="transparency-grid">
            <div className="transparency-card">
              <h3>🥫 Alimentação</h3>
              <div className="expense-item">
                <span>Ração seca (10kg a cada 3 dias)</span>
                <strong>~100kg/mês</strong>
              </div>
              <div className="expense-item">
                <span>Patês e sachês</span>
                <strong>Diário</strong>
              </div>
              <div className="expense-item">
                <span>Suplementos</span>
                <strong>Conforme necessidade</strong>
              </div>
            </div>

            <div className="transparency-card">
              <h3>🩺 Saúde</h3>
              <div className="expense-item">
                <span>Consultas veterinárias</span>
                <strong>Mensal</strong>
              </div>
              <div className="expense-item">
                <span>Vacinas</span>
                <strong>Periódico</strong>
              </div>
              <div className="expense-item">
                <span>Vermífugos</span>
                <strong>Periódico</strong>
              </div>
              <div className="expense-item">
                <span>Castrações</span>
                <strong>Conforme resgates</strong>
              </div>
            </div>

            <div className="transparency-card">
              <h3>🧹 Higiene e manutenção</h3>
              <div className="expense-item">
                <span>Areia higiênica</span>
                <strong>Contínuo</strong>
              </div>
              <div className="expense-item">
                <span>Produtos de limpeza</span>
                <strong>Mensal</strong>
              </div>
              <div className="expense-item">
                <span>Manutenção do espaço</span>
                <strong>Conforme necessidade</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div
          className="container"
          style={{ maxWidth: 600, textAlign: "center" }}
        >
          <h2 style={{ marginBottom: 16 }}>Quer ajudar?</h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: 28,
              fontSize: "1.05rem",
            }}
          >
            Com apenas R$ 10 por mês você ajuda a alimentar uma gatinha. Toda
            contribuição importa.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/ajudar" className="btn btn-primary">
              ❤ Doar agora
            </Link>
            <a
              href="https://apoia.se/resgatas"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Apoiar mensalmente
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
