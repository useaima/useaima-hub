import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

type StoryCard = {
  title: string;
  description: string;
  eyebrow: string;
  visual: ReactNode;
};

const landingStories: StoryCard[] = [
  {
    eyebrow: "Finance workspace",
    title: "A calm financial cockpit instead of a raw ledger",
    description:
      "eva is positioned as a place where transaction signals become decisions, with charts, summaries, and next-step guidance staying legible.",
    visual: <WorkspaceScene />,
  },
  {
    eyebrow: "Receipt capture",
    title: "Everyday evidence can become structured spending data",
    description:
      "A supermarket receipt, forwarded email, or uploaded image can be turned into reviewable finance records rather than manual busywork.",
    visual: <ReceiptScene />,
  },
  {
    eyebrow: "Trust layer",
    title: "Security prompts remain visible and human-readable",
    description:
      "Sensitive actions are framed with verification and approval cues so the product never feels like it is acting behind the user’s back.",
    visual: <SecurityScene />,
  },
];

const documentationStories: StoryCard[] = [
  {
    eyebrow: "Signal engine",
    title: "The intelligence layer turns patterns into timely advice",
    description:
      "Stored records feed into forecasts, recurring-behavior detection, and concrete next actions that can surface in the dashboard or chat.",
    visual: <InsightScene />,
  },
  {
    eyebrow: "Guidance surfaces",
    title: "Support, explainers, and live product routes work together",
    description:
      "The wider platform makes it easier for people to understand the products, troubleshoot friction, and move into the right workflow.",
    visual: <EducationScene />,
  },
  {
    eyebrow: "Approval bridge",
    title: "The future transaction path stays approval-aware from end to end",
    description:
      "As aima grows into agentic commerce, the visual model keeps the human, the assistant, and the execution rail in the same readable frame.",
    visual: <ApprovalBridgeScene />,
  },
];

function StoryGallery({ title, subtitle, stories, cta }: { title: string; subtitle: string; stories: StoryCard[]; cta?: ReactNode }) {
  return (
    <section className="py-24">
      <div className="container">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article key={story.title} className="overflow-hidden rounded-[2rem] border bg-card shadow-sm">
              <div className="border-b bg-[linear-gradient(180deg,rgba(252,247,241,0.95),rgba(255,255,255,0.98))] px-6 py-6 dark:bg-[linear-gradient(180deg,rgba(28,22,18,0.95),rgba(18,15,13,0.98))]">
                <div className="aspect-[16/11] overflow-hidden rounded-[1.4rem] border bg-background/70">
                  {story.visual}
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{story.eyebrow}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{story.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{story.description}</p>
              </div>
            </article>
          ))}
        </div>

        {cta ? <div className="mt-10 flex justify-center">{cta}</div> : null}
      </div>
    </section>
  );
}

export function LandingProjectImages() {
  return (
    <StoryGallery
      title="Product scenes that explain the system fast"
      subtitle="These visuals give the landing page something more useful than generic marketing: a quick picture of how the platform behaves for real people."
      stories={landingStories}
      cta={
        <Button asChild className="rounded-full">
          <a href="/about#system-flows">
            Explore system documentation <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      }
    />
  );
}

export function DocumentationProjectImages() {
  return (
    <StoryGallery
      title="Visual documentation for the project model"
      subtitle="These image panels anchor the written explanation with scenes for intelligence, support, and approval-aware execution."
      stories={documentationStories}
    />
  );
}

function SceneFrame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 640 440" className="h-full w-full" role="img" aria-hidden="true">
      <rect x="0" y="0" width="640" height="440" fill="#fbf4eb" />
      <rect x="18" y="18" width="604" height="404" rx="30" fill="#fffdf9" stroke="#ebd7bd" />
      {children}
    </svg>
  );
}

function WorkspaceScene() {
  return (
    <SceneFrame>
      <rect x="54" y="64" width="532" height="308" rx="26" fill="#1a1613" />
      <rect x="84" y="100" width="134" height="236" rx="18" fill="#241e19" />
      <rect x="250" y="100" width="296" height="82" rx="20" fill="#fff6ea" />
      <rect x="250" y="198" width="138" height="138" rx="20" fill="#f6e2c4" />
      <rect x="408" y="198" width="138" height="138" rx="20" fill="#f9efe2" />
      <rect x="104" y="128" width="92" height="16" rx="8" fill="#e4a354" opacity="0.9" />
      <rect x="104" y="162" width="78" height="10" rx="5" fill="#f0d7b8" opacity="0.85" />
      <rect x="104" y="191" width="84" height="10" rx="5" fill="#f0d7b8" opacity="0.65" />
      <rect x="104" y="220" width="68" height="10" rx="5" fill="#f0d7b8" opacity="0.6" />
      <path d="M280 154 C320 118 356 134 390 116 C418 102 452 109 486 96 C504 90 520 96 534 116" fill="none" stroke="#d98028" strokeWidth="10" strokeLinecap="round" />
      <circle cx="534" cy="116" r="9" fill="#d98028" />
      <rect x="276" y="126" width="116" height="12" rx="6" fill="#2b241e" opacity="0.85" />
      <rect x="276" y="146" width="84" height="10" rx="5" fill="#7b6653" opacity="0.55" />
      <rect x="280" y="224" width="76" height="12" rx="6" fill="#d98028" opacity="0.95" />
      <rect x="280" y="249" width="86" height="10" rx="5" fill="#4d3f33" opacity="0.65" />
      <rect x="280" y="270" width="70" height="10" rx="5" fill="#4d3f33" opacity="0.45" />
      <circle cx="470" cy="254" r="40" fill="#d98028" opacity="0.16" />
      <circle cx="470" cy="254" r="26" fill="#d98028" opacity="0.32" />
      <circle cx="470" cy="254" r="12" fill="#d98028" />
    </SceneFrame>
  );
}

function ReceiptScene() {
  return (
    <SceneFrame>
      <rect x="98" y="78" width="168" height="280" rx="34" fill="#231b16" />
      <rect x="114" y="104" width="136" height="226" rx="24" fill="#fff8ef" />
      <rect x="352" y="92" width="180" height="246" rx="22" fill="#fffdf9" stroke="#e5cfb2" />
      <path d="M396 120 h92 v170 l-12 9 -12 -9 -12 9 -12 -9 -12 9 -12 -9 -12 9 -12 -9 v-170z" fill="#fff4e5" stroke="#d7c2a2" />
      <rect x="132" y="138" width="100" height="66" rx="14" fill="#f0ddbe" />
      <circle cx="163" cy="170" r="17" fill="#d98028" opacity="0.88" />
      <rect x="186" y="154" width="28" height="10" rx="5" fill="#8b735d" />
      <rect x="186" y="174" width="20" height="10" rx="5" fill="#8b735d" opacity="0.7" />
      <rect x="132" y="226" width="98" height="10" rx="5" fill="#c8a57b" />
      <rect x="132" y="247" width="82" height="10" rx="5" fill="#dcc4a5" />
      <rect x="132" y="268" width="74" height="10" rx="5" fill="#dcc4a5" />
      <rect x="372" y="140" width="70" height="12" rx="6" fill="#d98028" opacity="0.92" />
      <rect x="372" y="166" width="116" height="10" rx="5" fill="#7c6856" opacity="0.55" />
      <rect x="372" y="194" width="132" height="22" rx="11" fill="#eef7ef" stroke="#a8c8a9" />
      <rect x="384" y="201" width="34" height="8" rx="4" fill="#5a8c5e" />
      <rect x="372" y="230" width="132" height="22" rx="11" fill="#fcefdc" stroke="#e2b978" />
      <rect x="384" y="237" width="50" height="8" rx="4" fill="#d98028" />
      <rect x="372" y="266" width="132" height="22" rx="11" fill="#e9f2fc" stroke="#9bb8de" />
      <rect x="384" y="273" width="42" height="8" rx="4" fill="#5684c7" />
      <path d="M250 184 C284 176 312 168 352 170" fill="none" stroke="#d98028" strokeWidth="6" strokeLinecap="round" strokeDasharray="8 10" />
      <circle cx="352" cy="170" r="8" fill="#d98028" />
    </SceneFrame>
  );
}

function SecurityScene() {
  return (
    <SceneFrame>
      <rect x="104" y="96" width="186" height="226" rx="24" fill="#fffdf9" stroke="#e8d4b6" />
      <rect x="328" y="118" width="208" height="182" rx="26" fill="#1d1916" />
      <rect x="132" y="128" width="98" height="14" rx="7" fill="#d98028" />
      <rect x="132" y="156" width="116" height="10" rx="5" fill="#8a7460" opacity="0.55" />
      <rect x="132" y="194" width="130" height="54" rx="18" fill="#fff4e5" stroke="#e7c28b" />
      <text x="158" y="226" fill="#6e553e" fontSize="28" fontWeight="700" letterSpacing="8">583921</text>
      <rect x="132" y="268" width="110" height="12" rx="6" fill="#d9c3a4" />
      <rect x="352" y="148" width="160" height="20" rx="10" fill="#2b251f" />
      <rect x="352" y="188" width="96" height="72" rx="22" fill="#f6e5cb" />
      <path d="M400 200 c0-18 11-30 30-30 s30 12 30 30 v16 h-12 v-16 c0-10-6-16-18-16s-18 6-18 16 v16 h-12z" fill="#d98028" />
      <rect x="386" y="214" width="88" height="52" rx="18" fill="#d98028" />
      <circle cx="430" cy="238" r="10" fill="#fff7ed" />
      <path d="M430 248 v12" stroke="#fff7ed" strokeWidth="6" strokeLinecap="round" />
      <path d="M292 208 C318 208 328 208 352 208" fill="none" stroke="#d98028" strokeWidth="7" strokeLinecap="round" />
      <path d="M520 208 l22 0" stroke="#d98028" strokeWidth="7" strokeLinecap="round" />
      <path d="M542 208 l-10 -8" stroke="#d98028" strokeWidth="7" strokeLinecap="round" />
      <path d="M542 208 l-10 8" stroke="#d98028" strokeWidth="7" strokeLinecap="round" />
    </SceneFrame>
  );
}

function InsightScene() {
  return (
    <SceneFrame>
      <rect x="84" y="90" width="152" height="250" rx="24" fill="#fffdf9" stroke="#e8d2b2" />
      <rect x="264" y="108" width="144" height="92" rx="22" fill="#f8e8d0" />
      <rect x="430" y="108" width="126" height="92" rx="22" fill="#eff6eb" />
      <rect x="264" y="226" width="292" height="114" rx="24" fill="#191512" />
      <rect x="112" y="126" width="92" height="12" rx="6" fill="#d98028" />
      <rect x="112" y="154" width="78" height="10" rx="5" fill="#d8c0a1" />
      <rect x="112" y="180" width="96" height="10" rx="5" fill="#d8c0a1" />
      <rect x="112" y="206" width="74" height="10" rx="5" fill="#d8c0a1" />
      <path d="M336 236 C358 210 386 214 412 182 C430 160 456 168 486 144" fill="none" stroke="#d98028" strokeWidth="9" strokeLinecap="round" />
      <circle cx="336" cy="236" r="10" fill="#d98028" />
      <circle cx="486" cy="144" r="10" fill="#d98028" />
      <rect x="286" y="252" width="102" height="12" rx="6" fill="#f3dec4" />
      <rect x="286" y="278" width="164" height="10" rx="5" fill="#7f6a57" />
      <rect x="286" y="300" width="190" height="10" rx="5" fill="#7f6a57" opacity="0.7" />
      <rect x="438" y="136" width="52" height="10" rx="5" fill="#5b8c5c" />
      <rect x="438" y="158" width="74" height="10" rx="5" fill="#8fb391" />
    </SceneFrame>
  );
}

function EducationScene() {
  return (
    <SceneFrame>
      <rect x="84" y="98" width="152" height="220" rx="24" fill="#1d1916" />
      <rect x="252" y="82" width="132" height="252" rx="24" fill="#fffdf9" stroke="#e8d2b2" />
      <rect x="404" y="118" width="152" height="182" rx="24" fill="#fff7ed" stroke="#ecd3b2" />
      <rect x="108" y="128" width="100" height="12" rx="6" fill="#d98028" />
      <rect x="108" y="156" width="82" height="10" rx="5" fill="#f2ddc1" opacity="0.72" />
      <rect x="108" y="184" width="90" height="10" rx="5" fill="#f2ddc1" opacity="0.58" />
      <rect x="276" y="110" width="84" height="10" rx="5" fill="#d98028" />
      <rect x="276" y="136" width="88" height="68" rx="16" fill="#f5e3c9" />
      <rect x="276" y="222" width="82" height="10" rx="5" fill="#9a8268" opacity="0.65" />
      <rect x="276" y="244" width="76" height="10" rx="5" fill="#9a8268" opacity="0.45" />
      <rect x="428" y="146" width="60" height="12" rx="6" fill="#d98028" />
      <rect x="428" y="172" width="92" height="10" rx="5" fill="#8c745e" opacity="0.6" />
      <rect x="428" y="198" width="104" height="10" rx="5" fill="#8c745e" opacity="0.45" />
      <path d="M236 206 C244 206 248 206 252 206" fill="none" stroke="#d98028" strokeWidth="6" strokeLinecap="round" />
      <path d="M384 206 C392 206 398 206 404 206" fill="none" stroke="#d98028" strokeWidth="6" strokeLinecap="round" />
      <path d="M402 206 l-10 -8" stroke="#d98028" strokeWidth="6" strokeLinecap="round" />
      <path d="M402 206 l-10 8" stroke="#d98028" strokeWidth="6" strokeLinecap="round" />
    </SceneFrame>
  );
}

function ApprovalBridgeScene() {
  return (
    <SceneFrame>
      <rect x="70" y="128" width="142" height="148" rx="26" fill="#fffdf9" stroke="#e6d0b1" />
      <rect x="250" y="94" width="146" height="216" rx="28" fill="#1b1714" />
      <rect x="432" y="128" width="136" height="148" rx="26" fill="#fff7ed" stroke="#ebd1ae" />
      <circle cx="141" cy="170" r="26" fill="#d98028" opacity="0.18" />
      <circle cx="141" cy="170" r="14" fill="#d98028" />
      <rect x="110" y="214" width="62" height="10" rx="5" fill="#806957" />
      <rect x="110" y="236" width="82" height="10" rx="5" fill="#cdb18d" />
      <rect x="278" y="126" width="92" height="12" rx="6" fill="#f4dfc2" />
      <rect x="278" y="152" width="90" height="62" rx="18" fill="#f8e8d0" />
      <rect x="278" y="232" width="92" height="10" rx="5" fill="#9d876e" opacity="0.6" />
      <rect x="458" y="174" width="82" height="54" rx="18" fill="#d98028" />
      <path d="M212 202 H250" stroke="#d98028" strokeWidth="8" strokeLinecap="round" />
      <path d="M396 202 H432" stroke="#d98028" strokeWidth="8" strokeLinecap="round" />
      <path d="M430 202 l-10 -8" stroke="#d98028" strokeWidth="8" strokeLinecap="round" />
      <path d="M430 202 l-10 8" stroke="#d98028" strokeWidth="8" strokeLinecap="round" />
      <path d="M324 230 c0-18 12-30 30-30 s30 12 30 30 v8 h-14 v-8 c0-9-6-15-16-15 s-16 6-16 15 v8 h-14z" fill="#d98028" />
      <rect x="306" y="238" width="48" height="40" rx="14" fill="#d98028" />
      <rect x="476" y="152" width="44" height="10" rx="5" fill="#fff3e2" opacity="0.7" />
      <rect x="472" y="240" width="52" height="10" rx="5" fill="#9a5a17" opacity="0.35" />
    </SceneFrame>
  );
}
