import { SvelteKitAuth, type SvelteKitAuthConfig } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import type { Handle } from "@sveltejs/kit";

export const handle = SvelteKitAuth(async (event) => {
  const authOptions = {
    providers: [GitHub({ clientId: event.platform.env?.GITHUB_ID!, clientSecret: event.platform.env?.GITHUB_SECRET! })] as any,
    secret: event.platform.env?.AUTH_SECRET,
    trustHost: true
  }
  return authOptions satisfies SvelteKitAuthConfig
}) satisfies Handle;