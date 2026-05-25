"use client";

import { useState } from "react";

export default function Contato() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main>
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <p className="eyebrow">Contato</p>
          <h1 style={{ fontSize: "2.8rem", marginBottom: 16 }}>
            Fale conosco
          </h1>
          <p className="about-subtitle">
            Dúvidas sobre adoção, doações, parcerias ou visitas? Estamos aqui
            para ajudar!
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="section contact-section">
        <div className="container contact-grid">
          {/* Informações de contato */}
          <div>
            <div className="contact-info-card">
              <h3>📍 Informações</h3>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <strong>Endereço</strong>
                  <br />
                  <span style={{ color: "var(--text-muted)" }}>
                    R. Fortunato Tormena, Itajaí - SC, 88318-053
                  </span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <strong>Telefone</strong>
                  <br />
                  <a href="tel:+5547992129083">(47) 99212-9083</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📷</div>
                <div>
                  <strong>Instagram</strong>
                  <br />
                  <a
                    href="https://instagram.com/ResGatas"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @ResGatas
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📘</div>
                <div>
                  <strong>Facebook</strong>
                  <br />
                  <a
                    href="https://facebook.com/ResGatas"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ResGatas
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info-card" style={{ marginTop: 24 }}>
              <h3>🕐 Horário de Funcionamento</h3>
              <div className="contact-item">
                <div className="contact-icon">📅</div>
                <div>
                  <strong>Segunda a Sexta:</strong> 09h às 18h
                  <br />
                  <strong>Sábado:</strong> 09h às 13h
                  <br />
                  <strong>Domingo:</strong> Fechado
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="contact-form">
            <h3>✉️ Envie uma mensagem</h3>
            {sent ? (
              <div
                style={{
                  textAlign: "center",
                  padding: 40,
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>✅</div>
                <h3 style={{ color: "var(--primary)", marginBottom: 8 }}>
                  Mensagem enviada!
                </h3>
                <p style={{ color: "var(--text-muted)" }}>
                  Obrigado pelo contato. Retornaremos o mais breve possível.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => setSent(false)}
                  style={{ marginTop: 16 }}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nome">Nome completo</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="assunto">Assunto</label>
                  <select id="assunto" name="assunto" required>
                    <option value="">Selecione...</option>
                    <option value="adocao">Quero adotar</option>
                    <option value="doacao">Doação</option>
                    <option value="voluntario">Ser voluntário</option>
                    <option value="parceria">Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Escreva sua mensagem aqui..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
