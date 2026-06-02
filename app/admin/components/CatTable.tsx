"use client";

import Link from "next/link";
import type { Gato } from "../../../types/gato";

type CatTableProps = {
  gatos: Gato[];
};

export default function CatTable({ gatos }: CatTableProps) {
  if (gatos.length === 0) {
    return (
      <div className="admin-table-card">
        <div className="admin-empty">
          <span>🐱</span>
          <p>Nenhum gatinho cadastrado ainda.</p>
          <Link href="/admin/gatos/novo" className="btn btn-primary">
            + Adicionar o primeiro
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-table-card">
      <div className="admin-table-header">
        <h2>Todos os Gatinhos</h2>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Gato</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {gatos.map((gato) => (
              <tr key={gato.id}>
                <td>
                  <div className="admin-cat-info">
                    <img
                      src={gato.foto_url || "/fotos/gato.jpg"}
                      alt={gato.nome}
                      className="admin-cat-thumb"
                    />
                    <div>
                      <div className="admin-cat-name">{gato.nome}</div>
                      <div className="admin-cat-desc">
                        {gato.idade} {gato.idade === 1 ? "ano" : "anos"}{" "}
                        {gato.descricao ? `· ${gato.descricao}` : ""}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {gato.status === "disponivel" ? (
                    <span className="admin-badge admin-badge-disponivel">
                      💚 Disponível
                    </span>
                  ) : (
                    <span className="admin-badge admin-badge-adotado">
                      🏡 Adotado
                    </span>
                  )}
                </td>
                <td>
                  <div className="admin-actions">
                    <Link
                      href={`/admin/gatos/${gato.id}/editar`}
                      className="admin-btn-edit"
                    >
                      ✏️ Editar
                    </Link>
                    {/* Botão de excluir implementado na Etapa 4d */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
