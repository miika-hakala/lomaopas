# Vercel deployment

## Environments

- Preview: for pull requests
- Production: main branch

## Required env vars

- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY` (optional)
- `STRIPE_WEBHOOK_SECRET` (optional)

## Preview vs production

- Keep Preview and Production env vars in sync where applicable.
- Do not rely on local `.env` for cloud deploys.

## Do not do manually

- Do not change database schema in the Supabase dashboard.
- Do not edit build/output settings in the Vercel UI unless instructed.
- Do not commit `.env` files or secrets.

## Source of truth

- Roadmap: `docs/roadmap.md`
- Deployment changes should be documented in PR notes.
