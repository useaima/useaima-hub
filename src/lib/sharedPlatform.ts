import { supportLinks, supportUrl, toolLinks } from "@/content/siteContent";

const BLOG_PUBLIC_API = "https://blog.useaima.com/api/public";

export type SharedSiteSettings = {
  supportEmail: string;
  instagramUrl: string;
  youtubeUrl: string;
  supportUrl: string;
  blogUrl: string;
  siteUrl: string;
  evaUrl: string;
  instagramHandle: string;
  youtubeLabel: string;
  supportBlurb: string;
};

export const defaultSharedSiteSettings: SharedSiteSettings = {
  supportEmail: supportLinks.emailAddress,
  instagramUrl: supportLinks.instagram,
  youtubeUrl: supportLinks.youtube,
  supportUrl,
  blogUrl: "https://blog.useaima.com",
  siteUrl: "https://useaima.com",
  evaUrl: toolLinks.financeAI,
  instagramHandle: supportLinks.instagramHandle,
  youtubeLabel: supportLinks.youtubeLabel,
  supportBlurb:
    "Use the official support hub for product help, onboarding questions, troubleshooting, and direct contact with the aima team.",
};

export async function fetchSharedSiteSettings() {
  try {
    const response = await fetch(`${BLOG_PUBLIC_API}/settings`);
    const payload = await response.json();
    if (!response.ok || !payload?.settings) {
      throw new Error(payload?.error || 'Failed to load shared settings');
    }

    return {
      ...defaultSharedSiteSettings,
      ...payload.settings,
    } as SharedSiteSettings;
  } catch (error) {
    console.warn('[sharedPlatform] Falling back to static support settings.', error);
    return defaultSharedSiteSettings;
  }
}

export function buildSupportChannels(settings: SharedSiteSettings) {
  return [
    {
      title: 'Email support',
      description: 'Reach the team directly for product questions, startup inquiries, or help using eva.',
      href: `mailto:${settings.supportEmail}`,
      label: settings.supportEmail,
    },
    {
      title: 'Instagram updates',
      description: 'Follow aima for quick updates, product drops, and support prompts.',
      href: settings.instagramUrl,
      label: settings.instagramHandle,
    },
    {
      title: 'YouTube explainers',
      description: 'Watch explainers, walkthroughs, and product updates from the aima team.',
      href: settings.youtubeUrl,
      label: settings.youtubeLabel,
    },
    {
      title: 'Support hub',
      description: settings.supportBlurb,
      href: settings.supportUrl,
      label: settings.supportUrl.replace(/^https?:\/\//, ''),
    },
  ] as const;
}

export async function submitSharedSupportRequest(input: {
  name: string;
  email: string;
  topic: string;
  message: string;
  source: string;
  pageUrl?: string;
  origin?: string;
}) {
  const response = await fetch(`${BLOG_PUBLIC_API}/support-request`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });

  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload?.error || 'Failed to send support request');
  }

  return payload;
}

export async function subscribeSharedNewsletter(input: {
  email: string;
  firstName?: string;
  source: string;
  url?: string;
}) {
  const response = await fetch(`${BLOG_PUBLIC_API}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: input.email,
      firstName: input.firstName,
      source: input.source,
      pageUrl: input.url,
      origin: typeof window !== 'undefined' ? window.location.origin : undefined,
      tags: ['hub-subscriber'],
    }),
  });

  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload?.error || 'Failed to subscribe');
  }

  return payload;
}
