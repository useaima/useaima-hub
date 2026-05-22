import { defaultPlatformProducts, supportLinks, supportUrl, toolLinks } from "@/content/siteContent";

const BLOG_PUBLIC_API = "https://blog.useaima.com/api/public";

export type SharedSiteSettings = {
  supportEmail: string;
  instagramUrl: string;
  youtubeUrl: string;
  supportUrl: string;
  blogUrl: string;
  siteUrl: string;
  evaUrl: string;
  utgUrl: string;
  utgRepoUrl: string;
  instagramHandle: string;
  youtubeLabel: string;
  supportBlurb: string;
  companyDescription: string;
};

export type SharedProduct = {
  slug: "eva" | "utg";
  name: string;
  status: string;
  summary: string;
  description: string;
  primaryUrl: string;
  primaryLabel: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  supportLabel?: string;
  categoryLabel?: string;
};

export type SharedSupportCollection = {
  slug: string;
  title: string;
  description: string;
  productSlug: "eva" | "utg";
  featured?: boolean;
  articleCount?: number;
};

export type SharedPlatformData = {
  settings: SharedSiteSettings;
  products: SharedProduct[];
  supportCollections: SharedSupportCollection[];
};

export const defaultSharedSiteSettings: SharedSiteSettings = {
  supportEmail: supportLinks.emailAddress,
  instagramUrl: supportLinks.instagram,
  youtubeUrl: supportLinks.youtube,
  supportUrl,
  blogUrl: "https://blog.useaima.com",
  siteUrl: "https://useaima.com",
  evaUrl: toolLinks.financeAI,
  utgUrl: toolLinks.utg,
  utgRepoUrl: toolLinks.utgRepo,
  instagramHandle: supportLinks.instagramHandle,
  youtubeLabel: supportLinks.youtubeLabel,
  supportBlurb:
    "Use the official help center for EVA and Orbis documentation, troubleshooting, and direct support.",
  companyDescription:
    "aima builds live AI products for financial clarity and agentic commerce, including eva and Orbis.",
};

export const defaultSharedPlatformData: SharedPlatformData = {
  settings: defaultSharedSiteSettings,
  products: [...defaultPlatformProducts],
  supportCollections: [
    {
      slug: "eva-getting-started",
      title: "EVA getting started",
      description: "Setup, onboarding, account basics, and first-use workflows for EVA.",
      productSlug: "eva",
      featured: true,
      articleCount: 0,
    },
    {
      slug: "utg-overview",
      title: "Orbis overview",
      description: "Understand Orbis (UTG), onboarding, safety, and transaction control flows.",
      productSlug: "utg",
      featured: true,
      articleCount: 0,
    },
  ],
};

async function fetchJson<T>(path: string) {
  const response = await fetch(`${BLOG_PUBLIC_API}${path}`);
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload?.error || `Failed to load ${path}`);
  }
  return payload as T;
}

export async function fetchSharedSiteSettings() {
  try {
    const payload = await fetchJson<{ settings: Partial<SharedSiteSettings> }>("/settings");
    return {
      ...defaultSharedSiteSettings,
      ...payload.settings,
    } as SharedSiteSettings;
  } catch (error) {
    console.warn("[sharedPlatform] Falling back to static support settings.", error);
    return defaultSharedSiteSettings;
  }
}

export async function fetchSharedPlatformData() {
  try {
    const payload = await fetchJson<{ platform?: Partial<SharedPlatformData> & { settings?: Partial<SharedSiteSettings> } }>("/platform");
    return {
      settings: {
        ...defaultSharedSiteSettings,
        ...(payload.platform?.settings ?? {}),
      },
      products: Array.isArray(payload.platform?.products) && payload.platform.products.length
        ? (payload.platform.products as SharedProduct[])
        : [...defaultPlatformProducts],
      supportCollections: Array.isArray(payload.platform?.supportCollections) && payload.platform.supportCollections.length
        ? (payload.platform.supportCollections as SharedSupportCollection[])
        : [...defaultSharedPlatformData.supportCollections],
    } as SharedPlatformData;
  } catch (error) {
    console.warn("[sharedPlatform] Falling back to static platform data.", error);
    return defaultSharedPlatformData;
  }
}

export function buildSupportChannels(settings: SharedSiteSettings) {
  return [
    {
      title: "Email support",
      description: "Reach the team directly for product questions, startup inquiries, or rollout help for eva and Orbis.",
      href: `mailto:${settings.supportEmail}`,
      label: settings.supportEmail,
    },
    {
      title: "Instagram updates",
      description: "Follow aima for quick updates, product drops, and support prompts.",
      href: settings.instagramUrl,
      label: settings.instagramHandle,
    },
    {
      title: "YouTube explainers",
      description: "Watch explainers, walkthroughs, and product updates from the aima team.",
      href: settings.youtubeUrl,
      label: settings.youtubeLabel,
    },
    {
      title: "Support hub",
      description: settings.supportBlurb,
      href: settings.supportUrl,
      label: settings.supportUrl.replace(/^https?:\/\//, ""),
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
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload?.error || "Failed to send support request");
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
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: input.email,
      firstName: input.firstName,
      source: input.source,
      pageUrl: input.url,
      origin: typeof window !== "undefined" ? window.location.origin : undefined,
      tags: ["hub-subscriber"],
    }),
  });

  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload?.error || "Failed to subscribe");
  }

  return payload;
}
