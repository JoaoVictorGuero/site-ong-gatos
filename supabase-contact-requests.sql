-- ============================================
-- TABELA DE SOLICITAÇÕES DE CONTATO
-- ============================================

CREATE TABLE contact_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  assunto TEXT NOT NULL CONSTRAINT check_assunto CHECK (assunto IN ('doação', 'adoção', 'ser voluntário', 'parceria', 'outro')),
  mensagem TEXT,
  status TEXT NOT NULL DEFAULT 'novo' CONSTRAINT check_status CHECK (status IN ('novo', 'respondido')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar o RLS (Row Level Security) na tabela
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Políticas de Acesso (RLS):

-- 1. Qualquer pessoa (pública) pode enviar uma nova solicitação de contato (INSERT)
CREATE POLICY "Publicos podem inserir solicitacoes de contato"
  ON contact_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

-- 2. Apenas usuários autenticados (admins) podem LER (SELECT) as solicitações
CREATE POLICY "Admins podem ler solicitacoes de contato"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- 3. Apenas usuários autenticados (admins) podem ATUALIZAR (UPDATE) as solicitações
CREATE POLICY "Admins podem atualizar solicitacoes de contato"
  ON contact_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- 4. Apenas usuários autenticados (admins) podem EXCLUIR (DELETE) as solicitações
CREATE POLICY "Admins podem excluir solicitacoes de contato"
  ON contact_requests
  FOR DELETE
  TO authenticated
  USING (true);
