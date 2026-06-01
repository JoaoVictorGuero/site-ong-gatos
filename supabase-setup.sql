-- ============================================
-- Setup do banco de dados Supabase para ResGatas
-- Execute isso no SQL Editor do Supabase Dashboard
-- ============================================

-- 1. Criar tabela de gatos
CREATE TABLE IF NOT EXISTS cats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  idade INTEGER,
  descricao TEXT,
  foto_url TEXT,
  status TEXT DEFAULT 'disponivel' CHECK (status IN ('disponivel', 'adotado')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Habilitar RLS (Row Level Security)
ALTER TABLE cats ENABLE ROW LEVEL SECURITY;

-- 3. Política: qualquer pessoa pode LER gatos (site público)
CREATE POLICY "Leitura pública dos gatos"
  ON cats
  FOR SELECT
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
