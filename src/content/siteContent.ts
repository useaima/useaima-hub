export const siteName = "aima";
export const siteUrl = "https://useaima.com";
export const blogUrl = "https://blog.useaima.com";
export const supportUrl = "https://support.useaima.com";
export const siteEmail = "help@useaima.com";
export const siteDescription =
  "aima builds eva and Universal Transaction Gateway, spanning financial clarity for people and safer infrastructure for agentic commerce.";
export const siteTagline =
  "aima builds eva for financial clarity and Universal Transaction Gateway for safe, human-approved agentic commerce.";
export const siteBrandSummary =
  "aima is the official home of eva and Universal Transaction Gateway, combining consumer financial intelligence with safer infrastructure for agentic transactions.";
export const brandKeywords = [
  "aima",
  "useaima",
  "aima official website",
  "aima AI platform",
  "aima blog",
  "eva by aima",
  "eva.useaima.com",
  "Universal Transaction Gateway",
  "UTG",
  "utg.useaima.com",
  "agentic commerce",
  "AI finance assistant",
  "aima support",
] as const;

export const toolLinks = {
  eva: "https://eva.useaima.com",
  financeAI: "https://eva.useaima.com",
  utg: "https://utg.useaima.com",
  utgRepo: "https://github.com/useaima/universal-gateway",
} as const;

export const defaultPlatformProducts = [
  {
    slug: "eva",
    name: "eva",
    status: "Live",
    summary: "AI finance assistant for spending clarity, anomaly detection, subscriptions, and better next-step decisions.",
    description:
      "eva helps people understand financial behavior, review recurring costs, spot unusual activity earlier, and turn raw transaction data into calmer action.",
    primaryUrl: toolLinks.eva,
    primaryLabel: "Open eva",
    secondaryUrl: blogUrl,
    secondaryLabel: "Read eva guides",
    supportLabel: "Finance intelligence",
    categoryLabel: "Product",
  },
  {
    slug: "utg",
    name: "Universal Transaction Gateway",
    status: "Beta",
    summary: "Experimental human-approved transaction infrastructure for agentic commerce, safer payment orchestration, and auditable execution.",
    description:
      "UTG is AIMA's experimental gateway for letting AI agents coordinate transaction intent safely through approvals, idempotency, and non-custodial control boundaries.",
    primaryUrl: toolLinks.utg,
    primaryLabel: "Open UTG",
    secondaryUrl: toolLinks.utgRepo,
    secondaryLabel: "View GitHub",
    supportLabel: "Agentic commerce infrastructure",
    categoryLabel: "Infrastructure",
  },
] as const;

export const supportLinks = {
  home: supportUrl,
  email: `mailto:${siteEmail}`,
  emailAddress: siteEmail,
  instagram: "https://www.instagram.com/aima.ai123/",
  instagramHandle: "@aima.ai123",
  youtube: "https://www.youtube.com/channel/UCdUDx6XhvYMKTpEfjUPGgEQ",
  youtubeLabel: "aima",
} as const;

export const supportChannels = [
  {
    title: "Email support",
    description: "Reach the team directly for questions about eva, UTG, partnerships, or rollout support.",
    href: supportLinks.email,
    label: supportLinks.emailAddress,
  },
  {
    title: "Instagram updates",
    description: "Follow aima for product drops, explainers, and support prompts across EVA and UTG.",
    href: supportLinks.instagram,
    label: supportLinks.instagramHandle,
  },
  {
    title: "YouTube explainers",
    description: "Watch walkthroughs, launch explainers, and product thinking from the aima team.",
    href: supportLinks.youtube,
    label: supportLinks.youtubeLabel,
  },
  {
    title: "Support hub",
    description: "Use the help center for official EVA and UTG guidance, Q&A, troubleshooting, and direct contact paths.",
    href: supportLinks.home,
    label: "support.useaima.com",
  },
] as const;

export const faqItems = [
  {
    question: "What is aima?",
    answer:
      "aima is the company behind eva and Universal Transaction Gateway. It builds AI products for financial clarity and safer agentic commerce.",
  },
  {
    question: "What products are live today?",
    answer:
      "aima currently operates eva, the AI finance assistant, and Universal Transaction Gateway, the human-approved transaction layer for agentic commerce that is currently in beta.",
  },
  {
    question: "How do eva and UTG differ?",
    answer:
      "eva is built for people who want clearer spending visibility and financial next-step guidance. UTG is built as infrastructure for safely coordinating agent-driven transaction flows with human approval and auditability.",
  },
  {
    question: "Can I use multiple AIMA products together?",
    answer:
      "Yes. aima is designed as a connected platform. Readers can learn through the blog, get help through the support center, use eva for finance workflows, and use UTG for agentic transaction infrastructure.",
  },
  {
    question: "Who is aima for?",
    answer:
      "aima serves individuals who want better financial clarity, plus builders, operators, and teams working on AI-assisted transaction systems and agentic commerce.",
  },
  {
    question: "Does aima replace human decision-making?",
    answer:
      "No. aima builds systems that improve visibility, support better judgment, and keep humans in control where decisions and transactions matter.",
  },
  {
    question: "How do I get help and support?",
    answer:
      "You can get help through support.useaima.com, by emailing help@useaima.com, or by following aima on Instagram and YouTube for updates and explainers.",
  },
] as const;

export const supportFaqItems = [
  {
    question: "What is aima?",
    answer:
      "aima is the company behind eva and Universal Transaction Gateway. The support system covers both products through one official help layer.",
  },
  {
    question: "What is eva?",
    answer:
      "eva is AIMA's live AI finance assistant. It helps people understand spending, review subscriptions, spot risks earlier, and make smarter next decisions.",
  },
  {
    question: "What is Universal Transaction Gateway?",
    answer:
      "Universal Transaction Gateway is AIMA's live infrastructure product for agentic commerce. It adds approvals, safety boundaries, and transaction control for AI-driven payment workflows.",
  },
  {
    question: "Where do I get support for EVA and UTG?",
    answer:
      "The official support hub is support.useaima.com. You can also email help@useaima.com for direct product and account support.",
  },
  {
    question: "Where can I learn more about the products?",
    answer:
      "You can explore eva at eva.useaima.com, UTG at utg.useaima.com, read practical explainers on blog.useaima.com, and visit useaima.com/about for the company story and product direction.",
  },
] as const;
