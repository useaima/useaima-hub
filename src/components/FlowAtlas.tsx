import type { ReactNode } from "react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CreditCard,
  FileSpreadsheet,
  Mail,
  ReceiptText,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Target,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";

type DiagramNode = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  icon: ReactNode;
  x: number;
  y: number;
  w: number;
  h: number;
  tone?: "amber" | "sage" | "sky" | "rose";
};

type DiagramEdge = {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
};

type Diagram = {
  slug: string;
  title: string;
  description: string;
  mobileOrder: string[];
  nodes: DiagramNode[];
  edges: DiagramEdge[];
};

const toneClasses: Record<NonNullable<DiagramNode["tone"]>, string> = {
  amber: "border-primary/20 bg-primary/5",
  sage: "border-emerald-500/20 bg-emerald-500/5",
  sky: "border-sky-500/20 bg-sky-500/5",
  rose: "border-rose-500/20 bg-rose-500/5",
};

const diagrams: Diagram[] = [
  {
    slug: "discovery",
    title: "Project Discovery to Product Entry",
    description:
      "How a visitor moves from first contact with aima into the live product surfaces with enough trust to act.",
    mobileOrder: ["discover", "understand", "choose", "trust", "enter", "activate"],
    nodes: [
      {
        id: "discover",
        eyebrow: "Entry",
        title: "Discover aima",
        body: "Visitors arrive through the landing page, blog explainers, search, social updates, or product mentions.",
        icon: <Sparkles className="h-4 w-4" />,
        x: 4,
        y: 9,
        w: 27,
        h: 20,
        tone: "amber",
      },
      {
        id: "understand",
        eyebrow: "Clarity",
        title: "See the two-product model",
        body: "The site explains that eva is the consumer finance workspace while UTG is the safer approval layer for agentic transactions.",
        icon: <BrainCircuit className="h-4 w-4" />,
        x: 37,
        y: 9,
        w: 27,
        h: 20,
        tone: "sky",
      },
      {
        id: "choose",
        eyebrow: "Choice",
        title: "Select the right surface",
        body: "People can open eva, explore UTG, read the blog, or move through support content based on their need.",
        icon: <Target className="h-4 w-4" />,
        x: 70,
        y: 9,
        w: 26,
        h: 20,
        tone: "sage",
      },
      {
        id: "trust",
        eyebrow: "Trust",
        title: "Validate the platform",
        body: "Support, help routes, approval language, and human-in-control messaging reduce ambiguity before the user commits.",
        icon: <ShieldCheck className="h-4 w-4" />,
        x: 20,
        y: 54,
        w: 27,
        h: 20,
        tone: "rose",
      },
      {
        id: "enter",
        eyebrow: "Action",
        title: "Enter the live product",
        body: "The visitor opens eva for financial clarity or UTG for transaction controls instead of staying in company copy.",
        icon: <WalletCards className="h-4 w-4" />,
        x: 52,
        y: 54,
        w: 27,
        h: 20,
        tone: "amber",
      },
      {
        id: "activate",
        eyebrow: "Outcome",
        title: "Start the first workflow",
        body: "The product experience begins with onboarding, guided tasks, and a clear next step rather than a dead-end homepage.",
        icon: <ArrowRight className="h-4 w-4" />,
        x: 36,
        y: 78,
        w: 28,
        h: 16,
        tone: "sky",
      },
    ],
    edges: [
      { from: "discover", to: "understand", label: "context" },
      { from: "understand", to: "choose", label: "role split" },
      { from: "choose", to: "trust", label: "needs proof" },
      { from: "choose", to: "enter", label: "opens live tool" },
      { from: "trust", to: "activate", label: "confidence" },
      { from: "enter", to: "activate", label: "first session" },
    ],
  },
  {
    slug: "activation",
    title: "eva Activation and Personalization",
    description:
      "The first-user path from account creation into a personalized workspace that can actually guide money decisions.",
    mobileOrder: ["signup", "verify", "onboard", "signal", "workspace", "next"],
    nodes: [
      {
        id: "signup",
        eyebrow: "Identity",
        title: "Sign up or sign in",
        body: "The user starts with an account so their finance state, preferences, and future guidance remain connected.",
        icon: <Mail className="h-4 w-4" />,
        x: 4,
        y: 16,
        w: 25,
        h: 20,
        tone: "amber",
      },
      {
        id: "verify",
        eyebrow: "Trust",
        title: "Verify the email",
        body: "Email verification confirms the person behind the workspace and gives the platform a dependable contact path.",
        icon: <ShieldCheck className="h-4 w-4" />,
        x: 37,
        y: 16,
        w: 25,
        h: 20,
        tone: "sky",
      },
      {
        id: "onboard",
        eyebrow: "Profile",
        title: "Complete onboarding",
        body: "Income rhythm, goals, budgets, recurring bills, and preferences create a first financial profile instead of a blank app.",
        icon: <FileSpreadsheet className="h-4 w-4" />,
        x: 70,
        y: 16,
        w: 26,
        h: 20,
        tone: "sage",
      },
      {
        id: "signal",
        eyebrow: "Signals",
        title: "Add the first money activity",
        body: "Chat logging, manual entry, receipt capture, or import gives the system real context to interpret.",
        icon: <ReceiptText className="h-4 w-4" />,
        x: 4,
        y: 56,
        w: 28,
        h: 20,
        tone: "rose",
      },
      {
        id: "workspace",
        eyebrow: "Workspace",
        title: "Assemble the dashboard",
        body: "The finance core turns stored records into cards, summaries, subscription signals, and history that feel coherent.",
        icon: <WalletCards className="h-4 w-4" />,
        x: 38,
        y: 56,
        w: 28,
        h: 20,
        tone: "amber",
      },
      {
        id: "next",
        eyebrow: "Guidance",
        title: "Surface the next useful action",
        body: "eva closes the loop with an affordability answer, savings nudge, or recurring-cost prompt tied to real data.",
        icon: <Sparkles className="h-4 w-4" />,
        x: 72,
        y: 56,
        w: 24,
        h: 20,
        tone: "sky",
      },
    ],
    edges: [
      { from: "signup", to: "verify", label: "identity" },
      { from: "verify", to: "onboard", label: "verified session" },
      { from: "onboard", to: "signal", label: "ready for data" },
      { from: "signal", to: "workspace", label: "stored records" },
      { from: "workspace", to: "next", label: "personalized guidance" },
    ],
  },
  {
    slug: "finance-core",
    title: "Canonical Finance Core",
    description:
      "The project backbone: every input path is normalized once so dashboards, insights, and statements stay in sync.",
    mobileOrder: ["chat", "receipt", "csv", "core", "records", "outputs"],
    nodes: [
      {
        id: "chat",
        eyebrow: "Input",
        title: "Chat logging",
        body: "A user tells eva about a purchase, income event, or affordability question.",
        icon: <Bot className="h-4 w-4" />,
        x: 4,
        y: 8,
        w: 24,
        h: 18,
        tone: "amber",
      },
      {
        id: "receipt",
        eyebrow: "Input",
        title: "Receipt photo or email",
        body: "Images and forwarded receipts are extracted into merchant, items, totals, and category suggestions.",
        icon: <ScanLine className="h-4 w-4" />,
        x: 4,
        y: 38,
        w: 24,
        h: 18,
        tone: "sky",
      },
      {
        id: "csv",
        eyebrow: "Input",
        title: "CSV import",
        body: "Bulk historical data enters through draft review rather than bypassing the user's control.",
        icon: <FileSpreadsheet className="h-4 w-4" />,
        x: 4,
        y: 68,
        w: 24,
        h: 18,
        tone: "rose",
      },
      {
        id: "core",
        eyebrow: "Core",
        title: "Finance normalization layer",
        body: "The backend standardizes every event into one action layer so features do not invent their own data contracts.",
        icon: <BrainCircuit className="h-4 w-4" />,
        x: 36,
        y: 30,
        w: 30,
        h: 28,
        tone: "amber",
      },
      {
        id: "records",
        eyebrow: "Canonical state",
        title: "Shared records",
        body: "Spending events, goals, budgets, subscriptions, and financial entries become the same source of truth.",
        icon: <WalletCards className="h-4 w-4" />,
        x: 72,
        y: 30,
        w: 24,
        h: 28,
        tone: "sage",
      },
      {
        id: "outputs",
        eyebrow: "Outputs",
        title: "Workspace views and AI responses",
        body: "Dashboard, history, insights, chat, statement generation, and summaries all read from the same state.",
        icon: <Sparkles className="h-4 w-4" />,
        x: 36,
        y: 74,
        w: 42,
        h: 16,
        tone: "sky",
      },
    ],
    edges: [
      { from: "chat", to: "core" },
      { from: "receipt", to: "core" },
      { from: "csv", to: "core" },
      { from: "core", to: "records", label: "normalize once" },
      { from: "records", to: "outputs", label: "shared truth" },
    ],
  },
  {
    slug: "intelligence",
    title: "Structured Intelligence Layer",
    description:
      "How the project turns raw records into forecasts, affordability reasoning, recurring-behavior signals, and action-ready advice.",
    mobileOrder: ["records", "patterns", "forecast", "subscriptions", "affordability", "guidance"],
    nodes: [
      {
        id: "records",
        eyebrow: "Source",
        title: "Canonical finance records",
        body: "The intelligence layer begins with stored events instead of hallucinated assumptions.",
        icon: <WalletCards className="h-4 w-4" />,
        x: 6,
        y: 16,
        w: 24,
        h: 20,
        tone: "amber",
      },
      {
        id: "patterns",
        eyebrow: "Detection",
        title: "Pattern summaries",
        body: "eva detects habits, spikes, recurring merchants, and category drift across time.",
        icon: <BrainCircuit className="h-4 w-4" />,
        x: 38,
        y: 8,
        w: 24,
        h: 20,
        tone: "sky",
      },
      {
        id: "forecast",
        eyebrow: "Projection",
        title: "Cash-flow forecast",
        body: "The system projects month-end pressure, room, and likely balance movement from real behavior.",
        icon: <Sparkles className="h-4 w-4" />,
        x: 70,
        y: 8,
        w: 24,
        h: 20,
        tone: "sage",
      },
      {
        id: "subscriptions",
        eyebrow: "Review",
        title: "Subscription optimization",
        body: "Recurring payments are reviewed for low-usage, overlap, or avoidable cost.",
        icon: <CreditCard className="h-4 w-4" />,
        x: 38,
        y: 46,
        w: 24,
        h: 20,
        tone: "rose",
      },
      {
        id: "affordability",
        eyebrow: "Reasoning",
        title: "Affordability checks",
        body: "Large purchases are evaluated against cash flow, priorities, and recent behavior instead of generic advice.",
        icon: <Target className="h-4 w-4" />,
        x: 70,
        y: 46,
        w: 24,
        h: 20,
        tone: "amber",
      },
      {
        id: "guidance",
        eyebrow: "Outcome",
        title: "Next-action guidance",
        body: "The dashboard and chat answer with concise steps the user can actually take next.",
        icon: <ArrowRight className="h-4 w-4" />,
        x: 39,
        y: 76,
        w: 26,
        h: 16,
        tone: "sky",
      },
    ],
    edges: [
      { from: "records", to: "patterns", label: "signals" },
      { from: "patterns", to: "forecast", label: "trend pressure" },
      { from: "patterns", to: "subscriptions", label: "recurring behavior" },
      { from: "forecast", to: "affordability", label: "available room" },
      { from: "subscriptions", to: "guidance", label: "trim opportunities" },
      { from: "affordability", to: "guidance", label: "decision answer" },
    ],
  },
  {
    slug: "automation",
    title: "Semi-Automation Review Loop",
    description:
      "The bounded automation path: the system can extract and prepare financial data, but the user still reviews before it becomes truth.",
    mobileOrder: ["capture", "extract", "categorize", "queue", "review", "publish"],
    nodes: [
      {
        id: "capture",
        eyebrow: "Capture",
        title: "Collect source material",
        body: "CSV files, receipt photos, and forwarded emails enter one shared ingestion lane.",
        icon: <ReceiptText className="h-4 w-4" />,
        x: 5,
        y: 18,
        w: 24,
        h: 20,
        tone: "amber",
      },
      {
        id: "extract",
        eyebrow: "Extraction",
        title: "Parse merchant, amount, and items",
        body: "The system reads raw transaction evidence into structured draft data with confidence notes.",
        icon: <ScanLine className="h-4 w-4" />,
        x: 37,
        y: 8,
        w: 26,
        h: 20,
        tone: "sky",
      },
      {
        id: "categorize",
        eyebrow: "Suggestions",
        title: "Suggest categories",
        body: "Line items such as groceries, transport, or household goods are grouped before the user decides.",
        icon: <Sparkles className="h-4 w-4" />,
        x: 69,
        y: 8,
        w: 26,
        h: 20,
        tone: "sage",
      },
      {
        id: "queue",
        eyebrow: "Queue",
        title: "Create draft transactions",
        body: "Nothing touches the main ledger yet. Drafts stay in a review queue with extraction context attached.",
        icon: <FileSpreadsheet className="h-4 w-4" />,
        x: 37,
        y: 44,
        w: 26,
        h: 20,
        tone: "rose",
      },
      {
        id: "review",
        eyebrow: "User control",
        title: "Approve or edit",
        body: "The person checks totals, category choices, and merchants before the record becomes canonical.",
        icon: <ShieldCheck className="h-4 w-4" />,
        x: 69,
        y: 44,
        w: 26,
        h: 20,
        tone: "amber",
      },
      {
        id: "publish",
        eyebrow: "Propagation",
        title: "Publish to the workspace",
        body: "Approved items immediately update transactions, summaries, statements, and downstream insight layers.",
        icon: <ArrowRight className="h-4 w-4" />,
        x: 38,
        y: 76,
        w: 40,
        h: 16,
        tone: "sky",
      },
    ],
    edges: [
      { from: "capture", to: "extract", label: "shared intake" },
      { from: "extract", to: "categorize", label: "draft hints" },
      { from: "extract", to: "queue", label: "normalized draft" },
      { from: "categorize", to: "review", label: "suggested groupings" },
      { from: "queue", to: "review", label: "review surface" },
      { from: "review", to: "publish", label: "approved records" },
    ],
  },
  {
    slug: "approval",
    title: "Human-Approved Agent Architecture",
    description:
      "The future-facing transaction model: EVA prepares intent, UTG enforces approvals, and external accounts execute with audit trails.",
    mobileOrder: ["goal", "proposal", "verify", "approve", "execute", "audit"],
    nodes: [
      {
        id: "goal",
        eyebrow: "Intent",
        title: "User asks for help",
        body: "A person wants to compare a service, pay a bill, or move money safely across an external account.",
        icon: <Target className="h-4 w-4" />,
        x: 4,
        y: 18,
        w: 24,
        h: 20,
        tone: "amber",
      },
      {
        id: "proposal",
        eyebrow: "Planning",
        title: "eva prepares a proposal",
        body: "The assistant turns the request into a bounded action plan with cost, risk, and context attached.",
        icon: <Bot className="h-4 w-4" />,
        x: 36,
        y: 8,
        w: 27,
        h: 20,
        tone: "sky",
      },
      {
        id: "verify",
        eyebrow: "Security",
        title: "Email security verification",
        body: "Sensitive intent requires a short-lived verification code before the user can authorize the action.",
        icon: <Mail className="h-4 w-4" />,
        x: 69,
        y: 8,
        w: 27,
        h: 20,
        tone: "rose",
      },
      {
        id: "approve",
        eyebrow: "Control",
        title: "Explicit human approval",
        body: "The person reviews the proposal in a clear approval step instead of letting the model act invisibly.",
        icon: <ShieldCheck className="h-4 w-4" />,
        x: 36,
        y: 44,
        w: 27,
        h: 20,
        tone: "sage",
      },
      {
        id: "execute",
        eyebrow: "Execution rail",
        title: "UTG or external connector acts",
        body: "The transaction flows through an approval-aware gateway or partner account rather than through custodial AI magic.",
        icon: <CreditCard className="h-4 w-4" />,
        x: 69,
        y: 44,
        w: 27,
        h: 20,
        tone: "amber",
      },
      {
        id: "audit",
        eyebrow: "Trace",
        title: "Receipt and audit record",
        body: "The result returns with execution metadata, outcome logs, and a human-readable trail of what happened.",
        icon: <FileSpreadsheet className="h-4 w-4" />,
        x: 37,
        y: 76,
        w: 40,
        h: 16,
        tone: "sky",
      },
    ],
    edges: [
      { from: "goal", to: "proposal", label: "intent" },
      { from: "proposal", to: "verify", label: "high-stakes action" },
      { from: "proposal", to: "approve", label: "user review" },
      { from: "verify", to: "approve", label: "step-up cleared" },
      { from: "approve", to: "execute", label: "authorized" },
      { from: "execute", to: "audit", label: "result" },
    ],
  },
];

function getNodeMap(nodes: DiagramNode[]) {
  return Object.fromEntries(nodes.map((node) => [node.id, node]));
}

function getEdgePath(source: DiagramNode, target: DiagramNode) {
  const sx = source.x + source.w / 2;
  const sy = source.y + source.h / 2;
  const tx = target.x + target.w / 2;
  const ty = target.y + target.h / 2;
  const dx = tx - sx;
  const dy = ty - sy;

  if (Math.abs(dx) >= Math.abs(dy)) {
    const startX = dx >= 0 ? source.x + source.w : source.x;
    const startY = sy;
    const endX = dx >= 0 ? target.x : target.x + target.w;
    const endY = ty;
    const midX = (startX + endX) / 2;
    return {
      points: `${startX},${startY} ${midX},${startY} ${midX},${endY} ${endX},${endY}`,
      labelX: midX,
      labelY: (startY + endY) / 2,
    };
  }

  const startX = sx;
  const startY = dy >= 0 ? source.y + source.h : source.y;
  const endX = tx;
  const endY = dy >= 0 ? target.y : target.y + target.h;
  const midY = (startY + endY) / 2;
  return {
    points: `${startX},${startY} ${startX},${midY} ${endX},${midY} ${endX},${endY}`,
    labelX: (startX + endX) / 2,
    labelY: midY,
  };
}

function DiagramCard({ diagram }: { diagram: Diagram }) {
  const nodeMap = getNodeMap(diagram.nodes);

  return (
    <article className="rounded-[2rem] border bg-card p-5 shadow-sm">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Flowchart</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">{diagram.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{diagram.description}</p>
      </div>

      <div className="mt-6 md:hidden">
        <div className="space-y-4">
          {diagram.mobileOrder.map((nodeId, index) => {
            const node = nodeMap[nodeId];
            return (
              <div key={node.id} className="relative pl-6">
                {index < diagram.mobileOrder.length - 1 ? (
                  <div className="absolute left-[11px] top-12 h-[calc(100%+1rem)] w-px bg-border" />
                ) : null}
                <div className="absolute left-0 top-5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <FlowNodeCard node={node} compact />
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative mt-6 hidden overflow-hidden rounded-[1.5rem] border bg-[linear-gradient(180deg,rgba(252,248,243,0.92),rgba(255,255,255,0.98))] p-4 dark:bg-[linear-gradient(180deg,rgba(30,24,20,0.92),rgba(18,15,13,0.98))] md:block">
        <div className="relative aspect-[16/10]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            <defs>
              <marker
                id={`arrow-${diagram.slug}`}
                markerWidth="8"
                markerHeight="8"
                refX="7"
                refY="4"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L8,4 L0,8 z" fill="currentColor" className="text-primary/70" />
              </marker>
            </defs>
            {diagram.edges.map((edge) => {
              const source = nodeMap[edge.from];
              const target = nodeMap[edge.to];
              const path = getEdgePath(source, target);

              return (
                <g key={`${edge.from}-${edge.to}`}>
                  <polyline
                    points={path.points}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary/70"
                    strokeDasharray={edge.dashed ? "2.2 2.2" : undefined}
                    markerEnd={`url(#arrow-${diagram.slug})`}
                  />
                  {edge.label ? (
                    <text
                      x={path.labelX}
                      y={path.labelY - 1}
                      textAnchor="middle"
                      className="fill-muted-foreground"
                      style={{ fontSize: "2.2px", letterSpacing: "0.02em" }}
                    >
                      {edge.label}
                    </text>
                  ) : null}
                </g>
              );
            })}
          </svg>

          {diagram.nodes.map((node) => (
            <div
              key={node.id}
              className="absolute"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: `${node.w}%`,
                height: `${node.h}%`,
              }}
            >
              <FlowNodeCard node={node} />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function FlowNodeCard({ node, compact = false }: { node: DiagramNode; compact?: boolean }) {
  return (
    <div
      className={[
        "h-full rounded-[1.35rem] border p-3 shadow-[0_18px_45px_-32px_rgba(92,57,11,0.4)] backdrop-blur-sm",
        toneClasses[node.tone || "amber"],
        compact ? "bg-card" : "",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-background/90 text-primary">
          {node.icon}
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{node.eyebrow}</p>
          <h4 className="mt-1 text-sm font-semibold leading-5 text-foreground">{node.title}</h4>
          <p className="mt-2 text-[12px] leading-5 text-muted-foreground">{node.body}</p>
        </div>
      </div>
    </div>
  );
}

export function LandingFlowPreview() {
  const preview = diagrams.slice(0, 2);

  return (
    <section className="bg-muted/25 py-24">
      <div className="container">
        <SectionHeader
          title="How the platform behaves in the real world"
          subtitle="These connected maps explain the product logic behind aima, eva, and the approval-aware architecture growing around them."
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {preview.map((diagram) => (
            <DiagramCard key={diagram.slug} diagram={diagram} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild className="rounded-full">
            <a href="/about#system-flows">Open the full project flow atlas</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function DocumentationFlowAtlas() {
  return (
    <section id="system-flows" className="py-24">
      <div className="container">
        <SectionHeader
          title="Project Flow Atlas"
          subtitle="Six connected flowcharts explain how the aima platform is entered, how eva stores financial truth, and how trust stays visible as the system becomes more capable."
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {diagrams.map((diagram) => (
            <DiagramCard key={diagram.slug} diagram={diagram} />
          ))}
        </div>
      </div>
    </section>
  );
}
