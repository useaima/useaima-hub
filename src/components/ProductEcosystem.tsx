import { ArrowRight, ShieldCheck, WalletCards } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/utils";
import { defaultPlatformProducts } from "@/content/siteContent";
import { fetchSharedPlatformData, type SharedProduct } from "@/lib/sharedPlatform";

const iconMap = {
  eva: WalletCards,
  utg: ShieldCheck,
} as const;

export function ProductEcosystem() {
  const [products, setProducts] = useState<SharedProduct[]>([...defaultPlatformProducts]);

  useEffect(() => {
    let active = true;
    fetchSharedPlatformData().then((platform) => {
      if (!active) return;
      setProducts(platform.products);
    });
    return () => {
      active = false;
    };
  }, []);

  const orderedProducts = useMemo(
    () => [...products].sort((left, right) => Number(right.slug === "eva") - Number(left.slug === "eva")),
    [products],
  );

  return (
    <section id="products" className="py-24">
      <div className="container">
        <SectionHeader
          title="Current Products"
          subtitle="aima now operates across eva for financial clarity and Orbis for safer agentic transactions in beta."
        />
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          {orderedProducts.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: SharedProduct; index: number }) {
  const { ref, isVisible, shouldAnimate } = useScrollReveal();
  const Icon = iconMap[product.slug];

  return (
    <article
      ref={ref}
      className={cn(
        "group relative flex h-full flex-col rounded-[1.75rem] border bg-card p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg",
        shouldAnimate ? "opacity-0" : "opacity-100",
        isVisible && "animate-fade-in",
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {product.status}
        </span>
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
        {product.categoryLabel || "Product"}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{product.name}</h3>
      <p className="mt-4 text-base leading-8 text-muted-foreground">{product.description}</p>

      <div className="mt-6 rounded-[1.5rem] border bg-muted/20 p-5">
        <p className="text-sm font-semibold text-foreground">Why it matters</p>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">{product.summary}</p>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={product.primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {product.primaryLabel} <ArrowRight className="h-4 w-4" />
        </a>
        {product.secondaryUrl ? (
          <a
            href={product.secondaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {product.secondaryLabel || "Learn more"}
          </a>
        ) : null}
      </div>
    </article>
  );
}
