-- ============================================
-- SQL DE CONFIGURAÇÃO — ResGatas ONG
-- ============================================

-- 1. Criar a tabela de gatos
CREATE TABLE cats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome TEXT NOT NULL,
  idade INTEGER,
  descricao TEXT,
  foto_url TEXT,
  status TEXT NOT NULL DEFAULT 'disponivel', -- 'disponivel' ou 'adotado'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Habilitar o RLS (Row Level Security) na tabela
ALTER TABLE cats ENABLE ROW LEVEL SECURITY;

-- 3. Política: qualquer pessoa pode LER (SELECT) os gatos
CREATE POLICY "Leitura pública de gatos"
  ON cats
  FOR SELECT
  TO public
  USING (true);

-- 4. Política: apenas usuários autenticados podem INSERIR
CREATE POLICY "Admin pode inserir gatos"
  ON cats
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- 5. Política: apenas usuários autenticados podem ATUALIZAR
CREATE POLICY "Admin pode atualizar gatos"
  ON cats
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- 6. Política: apenas usuários autenticados podem EXCLUIR
CREATE POLICY "Admin pode excluir gatos"
  ON cats
  FOR DELETE
  TO authenticated
  USING (true);

-- ============================================
-- TABELA DE ADMINS (Segurança)
-- ============================================

-- Cria a tabela de administradores autorizados
CREATE TABLE admins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Proteção RLS para a tabela de admins (Opcional, mas boa prática)
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Qualquer pessoa logada (ou pública) não precisa ler, 
-- mas o banco vai acessar via role "service_role" ou "authenticated".
-- Liberando leitura para usuários autenticados:
CREATE POLICY "Autenticados podem ler tabela admins"
  ON admins
  FOR SELECT
  TO authenticated
  USING (true);

-- INSERIR SEU EMAIL AQUI (Para você e a dona da ONG terem acesso inicial)
INSERT INTO admins (email) VALUES 
  ('seuemail@gmail.com'),
  ('resgatasong@gmail.com');

-- ============================================
-- Storage: criar bucket para fotos dos gatos
-- (Faça isso pelo Dashboard: Storage > New Bucket)
--
-- Nome: cat-photos
-- Public: SIM (para o site público exibir as fotos)
--
-- Políticas do bucket (via Dashboard):
-- - SELECT (download): permitir para todos (public)
-- - INSERT (upload): permitir apenas para authenticated
-- - DELETE: permitir apenas para authenticated
-- ============================================

-- 7. Inserir alguns gatos de exemplo (opcional)
INSERT INTO cats (nome, idade, descricao, foto_url, status) VALUES
  ('Mimi', 2, 'Gata tranquila e carinhosa', NULL, 'disponivel'),
  ('Pipoca', 1, 'Brincalhona e cheia de energia', NULL, 'disponivel'),
  ('Gordo', 3, 'Curioso e muito amoroso', NULL, 'disponivel'),
  ('Yiyi', 4, 'Calma e gosta de colos', NULL, 'disponivel'),
  ('Luna', 2, 'Independente mas adora carinho', NULL, 'disponivel'),
  ('Mel', 5, 'Gatinha companheira e dócil', NULL, 'disponivel');

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

