import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SEOHead } from "@/components/SEOHead";
import { siteName, siteUrl } from "@/content/siteContent";

const cookieStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cookie Policy",
    url: `${siteUrl}/cookie-policy`,
    description: `Cookie Policy for ${siteName}.`,
  },
];

const sections = [
  {
    title: "What this policy covers",
    body: "This Cookie Policy explains how aima uses cookies, local storage, pixels, and similar technologies across useaima.com, blog.useaima.com, support.useaima.com, eva.useaima.com, and utg.useaima.com.",
  },
  {
    title: "Essential technologies",
    body: "Some cookies and storage items are required to keep the sites working. These may support security, authentication, session continuity, routing, consent state, and product preferences.",
  },
  {
    title: "Performance and analytics",
    body: "We may use limited analytics and diagnostic technologies to understand site usage, performance bottlenecks, feature adoption, and product errors. These technologies help us improve the reliability of the blog, support center, eva, and Orbis.",
  },
  {
    title: "Product experience and personalization",
    body: "eva may use local storage or similar browser technologies to remember settings, workspace preferences, onboarding progress, and recently used product state. Support and blog surfaces may also store lightweight preferences such as search state or UI choices.",
  },
  {
    title: "Third-party services",
    body: "Some technologies may be set or supported by hosting, authentication, support, analytics, or infrastructure providers acting on our behalf. Those providers may process the minimum data needed to provide their part of the service.",
  },
  {
    title: "Your controls",
    body: "You can control cookies through your browser settings, device controls, or any product-specific settings we make available. Blocking all cookies may limit parts of the site or prevent sign-in and support flows from working properly.",
  },
];

export default function CookiePolicy() {
  return (
    <>
      <SEOHead
        title="Cookie Policy"
        description="Read how aima uses cookies, local storage, and similar technologies across the main site, blog, support center, eva, and Orbis."
        path="/cookie-policy"
        structuredData={cookieStructuredData}
      />
      <Navbar />
      <main>
        <section className="py-24">
          <div className="container max-w-3xl">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Cookie Policy</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Last updated May 22, 2026. This page explains how aima uses cookie-based and local browser
              technologies across the company website, blog, support center, eva, and Orbis.
            </p>

            <div className="mt-10 space-y-6">
              {sections.map((section) => (
                <article key={section.title} className="rounded-2xl border bg-card p-6 shadow-sm">
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{section.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border bg-muted/30 p-6">
              <h2 className="text-xl font-semibold">Questions</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                If you have questions about cookies or local storage used by aima, contact help@useaima.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
