import type { Session, SupabaseClient } from '@supabase/supabase-js';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient;
			getSession(): Promise<Session | null>;
			isAdmin(): Promise<boolean>;
		}
		interface PageData {
			session: Session | null;
			isAdmin?: boolean;
		}
	}
}

export {};
