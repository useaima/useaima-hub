import { BrainCircuit, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { siteBrandSummary } from "@/content/siteContent";

const pillars = [
  {
    title: "A company focused on useful AI",
    description:
      "aima focuses on AI systems that interpret signals, surface actions, and guide decisions instead of stopping at passive reporting.",
    icon: BrainCircuit,
  },
  {
    title: "Two current products with clear roles",
    description:
      "eva helps people understand financial behavior, while UTG gives teams a safer transaction layer for agentic commerce and human approval flows.",
    icon: BrainCircuit,
  },
  {
    title: "Product, support, and education together",
    description:
      "The main site, editorial blog, and support hub are designed to work together so visitors can understand products, explore guides, and get help quickly.",
    icon: ShieldCheck,
  },
];

export function WhatIsaimaSection() {
  return (
    <section id="what-is-aima" className="py-24">
      <div className="container">
        <SectionHeader
          title="What Is aima?"
          subtitle="aima is the company building eva and Universal Transaction Gateway, combining financial intelligence and safe transaction infrastructure in one connected platform."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border bg-card p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Built to assist, guide, and safeguard
            </div>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              {siteBrandSummary} That means consumer financial clarity on one side and a safer control layer for agentic transactions on the other. The blog and help center then turn those products into something people can understand, evaluate, and use with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#products">Explore products</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">About Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/support">Support</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {pillars.map((pillar, index) => (
              <PillarCard key={pillar.title} index={index} {...pillar} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: typeof BrainCircuit;
  index: number;
}) {
  const { ref, isVisible, shouldAnimate } = useScrollReveal();

  return (
    <article
      ref={ref}
      className={cn(
        "rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md",
        shouldAnimate ? "opacity-0" : "opacity-100",
        isVisible && "animate-fade-in",
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
      </div>
    </article>
  );
}
