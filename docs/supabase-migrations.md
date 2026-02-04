# Supabase migrations

## Prerequisites

- Supabase CLI installed
- Project linked (`supabase link`)
- `SUPABASE_ACCESS_TOKEN` available in `.env`

## Create a migration

```bash
supabase migration new <name>
```

Edit the generated SQL file under `supabase/migrations/`.

## Apply migrations to remote

```bash
SUPABASE_ACCESS_TOKEN=$(grep SUPABASE_ACCESS_TOKEN .env | cut -d '=' -f2) \
  supabase db push
```

## Verify schema (remote)

```bash
SUPABASE_ACCESS_TOKEN=$(grep SUPABASE_ACCESS_TOKEN .env | cut -d '=' -f2) \
  supabase db execute --remote --sql "SELECT now();"
```

## Order of operations

1. Create migration
2. Edit SQL
3. Push to remote
4. Verify

## Rules

- Do not edit applied migrations.
- Do not change schema manually in the Supabase dashboard.
- All schema changes must go through migrations.
