# Rota USA — MVP visual mobile-first

Projeto Next.js pronto para implantação na Vercel. O nome e a identidade visual são provisórios.

## Rodar localmente

1. Instale Node.js 20 ou superior.
2. Execute `npm install`.
3. Execute `npm run dev`.
4. Acesse http://localhost:3000.

## Publicar na Vercel

1. Extraia o ZIP e envie o projeto para um repositório GitHub.
2. Na Vercel, escolha **Add New > Project**, importe o repositório e clique em Deploy.
3. O framework Next.js é detectado automaticamente.

## O que já existe

- Layout responsivo com navegação mobile fixa.
- Landing page, busca de demonstração, filtros básicos e detalhes de exemplo.
- Jornada de perfil interativa, sem armazenamento ou envio de dados.
- Página Premium com pagamento intencionalmente desativado.
- Avisos explícitos de dados fictícios e fontes oficiais.

## O que NÃO está conectado

- Feed real do SeasonalJobs, sincronização e atualização de vagas.
- Login, autenticação, persistência de perfis, banco de dados e consentimentos.
- Análise real de compatibilidade e informações climáticas.
- Checkout, webhook, concessão de acesso Premium e cobrança.
- Analytics, pixels, e-mails, LGPD e remarketing.

## Próximas integrações recomendadas

- **Supabase**: autenticação, banco Postgres, perfis, consentimento e permissões Premium.
- **SeasonalJobs.gov**: verificar formato/licença/limites dos feeds oficiais e implementar importação periódica no backend, com fonte, data de sincronização e tratamento de expiração.
- **Gateway**: Mercado Pago, Asaas ou Stripe (escolher depois); checkout no servidor, webhook assinado e liberação de acesso apenas após confirmação.
- **Dados externos**: clima e custo de vida com origem e data da fonte.
- **Marketing**: Google Ads/Meta e e-mail com consentimento adequado, política de privacidade e exclusão de dados.

**Aviso**: este é um protótipo funcional de interface, não um sistema pronto para captar dados pessoais ou receber pagamentos. Não publicar como plataforma operacional antes de integrar dados oficiais, autenticação e políticas adequadas.
