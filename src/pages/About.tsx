import { ArrowRight, Bot, BrainCircuit, BriefcaseBusiness, Lightbulb, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { DocumentationFlowAtlas } from "@/components/FlowAtlas";
import { DocumentationProjectImages } from "@/components/ProjectImageGallery";
import { siteName, siteUrl, supportUrl, toolLinks } from "@/content/siteContent";

const focusAreas = [
  {
    title: "Financial clarity",
    description: "Helping users understand spending patterns, anomalies, subscriptions, and better next steps with EVA.",
  },
  {
    title: "Safer agentic execution",
    description: "Giving AI-native systems a human-approved, auditable path for transaction coordination through Orbis.",
  },
  {
    title: "Trustworthy product focus",
    description: "Shipping clear products, support surfaces, and educational content instead of vague AI branding alone.",
  },
];

const principles = [
  {
    title: "Intelligence Over Data",
    description: "We do not stop at showing information. We interpret it and turn it into guidance people can use.",
    icon: BrainCircuit,
  },
  {
    title: "Simplicity Over Complexity",
    description: "Powerful systems should still feel understandable, approachable, and easy to use.",
    icon: Lightbulb,
  },
  {
    title: "Integration Over Isolation",
    description: "We connect products, support, and education so eva and Orbis make sense as part of one AIMA platform.",
    icon: BrainCircuit,
  },
];

const aboutStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About aima",
    url: `${siteUrl}/about`,
    description:
      "Learn about aima, the company behind eva and Orbis.",
    isPartOf: siteUrl,
    about: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/aima-mark.png`,
    },
  },
];

const About = () => {
  return (
    <>
      <SEOHead
        title="About aima"
        description="Learn what aima is, what EVA and Orbis do today, and the vision behind the platform."
        path="/about"
        keywords={["about aima", "AI startup", "eva", "Orbis", "agentic commerce"]}
        structuredData={aboutStructuredData}
      />
      <Navbar />
      <main id="main-content">
        <section className="py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-3xl border bg-card p-8 shadow-sm sm:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                  <Bot className="h-3.5 w-3.5" />
                  About aima
                </div>
                <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                  Building products that make money decisions clearer and agentic transactions safer
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                  aima is a product company focused on turning AI into something operationally useful. Today that work shows up in eva, an AI finance assistant that makes financial behavior easier to understand, and Orbis (UTG), an infrastructure layer in beta that helps agentic transaction systems stay human-approved and auditable.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <a href={toolLinks.financeAI} target="_blank" rel="noopener noreferrer">
                      Open eva
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={toolLinks.utg} target="_blank" rel="noopener noreferrer">
                      Open Orbis
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={supportUrl} target="_blank" rel="noopener noreferrer">Support & Help</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container">
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="rounded-3xl border bg-card p-8 shadow-sm">
                <h2 className="text-2xl font-semibold tracking-tight">What We Do</h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  We design and develop AI-powered products that feel more like working systems than passive dashboards. EVA focuses on consumer financial clarity. Orbis focuses on the safety and control layer needed when agents begin coordinating transaction intent in the real world.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {focusAreas.map((area) => (
                    <div key={area.title} className="rounded-2xl border bg-background p-5">
                      <h3 className="font-semibold">{area.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{area.description}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-3xl border bg-card p-8 shadow-sm">
                <h2 className="text-2xl font-semibold tracking-tight">Our Vision</h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  To build a future where AI products are not only intelligent, but also usable, trustworthy, and operationally clear enough for real decisions and real transaction flows.
                </p>
                <div className="mt-8 rounded-2xl border bg-background p-6">
                  <h3 className="font-semibold">Why product focus matters</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    aima is being built with a strong product discipline: ship live systems that can be explained clearly, supported responsibly, and evaluated honestly. That is why EVA and Orbis matter more than generic AI positioning alone.
                  </p>
                </div>
                <div className="mt-6 rounded-2xl border bg-background p-6">
                  <h3 className="font-semibold">Why aima exists</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Many tools either overwhelm people with data or give automation too much ambiguity. aima exists to reduce that ambiguity by making intelligence legible and execution safer.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-24">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-3xl font-bold tracking-tight">Our Approach</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {principles.map((principle) => {
                  const Icon = principle.icon;
                  return (
                    <article key={principle.title} className="rounded-2xl border bg-card p-6 shadow-sm">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold">{principle.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{principle.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <DocumentationProjectImages />
        <DocumentationFlowAtlas />

        <section className="py-24">
          <div className="container">
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
              <article className="rounded-3xl border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight">Built By</h2>
                </div>
                <p className="mt-4 leading-7 text-muted-foreground">
                  aima is built by a team focused on AI systems, automation, product clarity, and cloud infrastructure. The goal is to create practical systems that move beyond demos and into real, supportable use.
                </p>
              </article>

              <article className="rounded-3xl border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight">Why This Matters</h2>
                </div>
                <p className="mt-4 leading-7 text-muted-foreground">
                  Clear product pages, blog explainers, and support content help users, partners, accelerators, and technical reviewers understand what is actually live today. aima is stronger when EVA and Orbis are easy to evaluate, not buried in vague company language.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
