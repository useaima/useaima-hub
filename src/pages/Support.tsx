import { useEffect, useState } from "react";
import { HelpCircle, Instagram, Mail, Youtube } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AtomicUtilityBlock } from "@/components/AtomicUtilityBlock";
import { BrandLogo } from "@/components/BrandLogo";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { createBreadcrumbStructuredData, organizationSchemaId } from "@/content/entitySchema";
import {
  siteName,
  siteUrl,
  supportChannels as defaultSupportChannels,
  supportFaqItems,
  supportUrl,
  toolLinks,
} from "@/content/siteContent";
import { buildSupportChannels, defaultSharedPlatformData, fetchSharedPlatformData } from "@/lib/sharedPlatform";

const iconMap = {
  "Email support": Mail,
  "Instagram updates": Instagram,
  "YouTube explainers": Youtube,
  "Support hub": HelpCircle,
} as const;

const supportStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "HelpPage",
    "@id": `${supportUrl}#help-page`,
    name: "aima Support",
    url: supportUrl,
    description:
      "Official support center for aima, EVA, and Orbis (UTG), including product help, direct support contact, Q&A, and learning resources.",
    inLanguage: "en-US",
    about: {
      "@id": organizationSchemaId,
    },
    isPartOf: {
      "@id": `${siteUrl}#website`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: supportFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
  createBreadcrumbStructuredData([
    { label: "Home", href: siteUrl },
    { label: "Support", href: supportUrl },
  ]),
];

export default function Support() {
  const [platform, setPlatform] = useState(defaultSharedPlatformData);
  const [channels, setChannels] = useState<typeof defaultSupportChannels[number][]>([...defaultSupportChannels]);

  useEffect(() => {
    let active = true;
    fetchSharedPlatformData().then((shared) => {
      if (!active) return;
      setPlatform(shared);
      setChannels(buildSupportChannels(shared.settings));
    });
    return () => {
      active = false;
    };
  }, []);

  const settings = platform.settings;
  const products = platform.products;
  const supportCollections = platform.supportCollections;

  return (
    <>
      <SEOHead
        title="aima Support | Help, Q&A, and Product Guidance"
        description="Official aima support center for help with EVA, Orbis (UTG), product questions, direct contact, and practical Q&A."
        path="/"
        siteOrigin={supportUrl}
        keywords={[
          "aima support",
          "eva support",
          "Orbis support",
          "UTG support",
          "support.useaima.com",
          "help@useaima.com",
          "agentic commerce support",
        ]}
        structuredData={supportStructuredData}
      />

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="container flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <a href={siteUrl} className="inline-flex items-center" aria-label={`${siteName} home`}>
            <BrandLogo size="md" />
          </a>
          <div className="flex flex-wrap gap-2">
            <Button asChild variant="outline" className="rounded-full">
              <a href={settings.siteUrl}>Main site</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href={settings.blogUrl}>Blog</a>
            </Button>
            <Button asChild className="rounded-full">
              <a href={settings.evaUrl || toolLinks.financeAI} target="_blank" rel="noopener noreferrer">
                Open eva
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href={settings.utgUrl || toolLinks.utg} target="_blank" rel="noopener noreferrer">
                Open Orbis
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="border-b bg-muted/20 py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-primary">
                Official support for aima, eva, and Orbis
              </div>
              <h1 className="mt-8 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Help, support, and Q&amp;A across the AIMA product system
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                support.useaima.com is the shared help layer for the AIMA platform. It gives people a clear way to get product help, rollout guidance, troubleshooting answers, and direct contact for both eva and Orbis (UTG).
              </p>

              <div className="mt-8">
                <AtomicUtilityBlock
                  title="Quick Support Summary"
                  tldr={`Need help with aima, eva, or Orbis? Use ${settings.supportUrl.replace(/^https?:\/\//, "")} for official help, Q&A, direct contact, and the fastest route to product guidance.`}
                  action={{
                    label: "Open support center",
                    href: settings.supportUrl,
                    external: true,
                  }}
                  highlights={[
                    "Official support channels",
                    "Product-specific collections",
                    "Direct route to EVA and Orbis help",
                  ]}
                  note="Best for users who want a fast support path without hunting across different sites."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[2rem] border bg-card p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">How support works</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">Start with product collections, then move to direct support if needed</h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  The support flow is built to feel straightforward. Start with the relevant product collection, use the help center for step-by-step guidance, and move into direct email or social channels when the issue needs a person.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {products.map((product) => (
                    <div key={product.slug} className="rounded-[1.5rem] border bg-muted/20 p-5">
                      <h3 className="text-base font-semibold">{product.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.summary}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {channels.map((channel) => {
                  const Icon = iconMap[channel.title as keyof typeof iconMap] ?? HelpCircle;

                  return (
                    <a
                      key={channel.title}
                      href={channel.href}
                      target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={channel.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="rounded-[1.5rem] border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold">{channel.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">{channel.description}</p>
                          <span className="mt-4 inline-flex text-sm font-medium text-primary">{channel.label}</span>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/25 py-20">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Product collections</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">Support topics organized by product</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {supportCollections.map((collection) => (
                  <article key={collection.slug} className="rounded-[1.5rem] border bg-card p-6 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{collection.productSlug}</p>
                    <h3 className="mt-3 text-xl font-semibold text-foreground">{collection.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{collection.description}</p>
                    <p className="mt-4 text-sm text-muted-foreground">{collection.articleCount || 0} article{collection.articleCount === 1 ? "" : "s"}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="q-and-a" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl rounded-[2rem] border bg-card p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Support Q&amp;A</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
              <Accordion type="single" collapsible className="mt-8 w-full">
                {supportFaqItems.map((item, index) => (
                  <AccordionItem key={item.question} value={`support-faq-${index}`}>
                    <AccordionTrigger className="text-left text-base">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-7 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} aima Support. Official help and guidance for eva and Orbis.</p>
          <div className="flex flex-wrap gap-4">
            <a href={settings.siteUrl} className="transition-colors hover:text-foreground">Main site</a>
            <a href={`${settings.siteUrl}/about`} className="transition-colors hover:text-foreground">About</a>
            <a href={`${settings.siteUrl}/privacy-policy`} className="transition-colors hover:text-foreground">Privacy</a>
            <a href={`${settings.siteUrl}/cookie-policy`} className="transition-colors hover:text-foreground">Cookies</a>
            <a href={`${settings.siteUrl}/terms-of-service`} className="transition-colors hover:text-foreground">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
