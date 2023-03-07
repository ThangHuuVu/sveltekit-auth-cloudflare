/// <reference types="@auth/sveltekit" />
declare global {
  namespace App {
    interface Platform {
			env?: {
				GITHUB_ID: string;
				GITHUB_SECRET: string;
				AUTH_SECRET: string;
			};
    }
  }
}

export {}