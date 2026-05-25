import Link from "next/link";

/* 
  Gatos estáticos de fallback — quando o Sanity não tiver dados,
  mostramos esses gatinhos com as fotos locais.
*/
const gatosLocais = [
  { id: "1", nome: "Mimi", idade: 2, desc: "Gata tranquila e carinhosa", img: "/fotos/gato.jpg" },
  { id: "2", nome: "Pipoca", idade: 1, desc: "Brincalhona e cheia de energia", img: "/fotos/my%20masterpiece.jpg" },
  { id: "3", nome: "Gordo", idade: 3, desc: "Curioso e muito amoroso", img: "/fotos/transferir%20(2).jpg" },
  { id: "4", nome: "Yiyi", idade: 4, desc: "Calma e gosta de colos", img: "/fotos/Yiyi.jpg" },
  { id: "5", nome: "Luna", idade: 2, desc: "Independente mas adora carinho", img: "/fotos/https___pin_it_5exuYskLd.jpg" },
  { id: "6", nome: "Mel", idade: 5, desc: "Gatinha companheira e dócil", img: "/fotos/TENGO%20NUEVO%20CANAL!!!.jpg" },
];

export default function Gatos() {
  return (
    <main>
      {/* Hero */}
      <section className="gatos-hero">
        <div className="container">
          <p className="eyebrow">Gatinhos para adoção</p>
          <h1 style={{ fontSize: "2.8rem", marginBottom: 16 }}>
            Conheça nossas gatinhas
          </h1>
          <p className="about-subtitle">
            Todas as nossas gatas são adultas resgatadas, castradas e vacinadas.
            Elas só precisam de um lar com amor!
          </p>
        </div>
      </section>

      {/* Como adotar */}
      <section className="section adocao-form-section">
        <div className="container split">
          <div className="split-text">
            <p className="eyebrow">Adoção</p>
            <h2>Quer adotar uma gatinha?</h2>
            <p>
              Nosso processo é simples e responsável. Queremos garantir que
              cada gatinha vá para um lar onde será amada e bem cuidada.
            </p>
          </div>
          <div className="form-card">
            <h3>Como funciona</h3>
            <ol>
              <li>Entre em contato pelo formulário ou Instagram</li>
              <li>Agende uma visita ao abrigo</li>
              <li>Conheça as gatinhas disponíveis</li>
              <li>Receba orientações e finalize a adoção</li>
            </ol>
            <div style={{ marginTop: 20 }}>
              <Link href="/contato" className="btn btn-primary">
                Quero adotar →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de gatos */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Galeria</p>
            <h2>Nossos gatinhos disponíveis</h2>
            <p>
              Cada uma tem sua personalidade única. Venha conhecer e se
              apaixonar!
            </p>
          </div>

          <div className="cats-grid">
            {gatosLocais.map((gato) => (
              <article key={gato.id} className="cat-card">
                <div className="cat-card-overflow">
                  <img src={gato.img} alt={`Gata ${gato.nome}`} />
                </div>
                <div className="cat-card-body">
                  <h3>{gato.nome}</h3>
                  <span>
                    {gato.idade} {gato.idade === 1 ? "ano" : "anos"} ·{" "}
                    {gato.desc}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: 48,
              padding: 32,
              background: "var(--card)",
              borderRadius: "var(--radius)",
              boxShadow: "var(--shadow)",
            }}
          >
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "1.05rem",
                marginBottom: 16,
              }}
            >
              Interessou por alguma gatinha? Entre em contato!
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contato" className="btn btn-primary">
                📩 Falar sobre adoção
              </Link>
              <a
                href="https://instagram.com/ResGatas"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                📷 Ver no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
