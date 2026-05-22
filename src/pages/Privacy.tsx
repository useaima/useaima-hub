import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { siteName, siteUrl } from "@/content/siteContent";

const privacyStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: `${siteUrl}/privacy-policy`,
    description: `Privacy Policy for ${siteName}.`,
  },
];

const sections = [
  {
    title: "Scope and coverage",
    body: `${siteName} operates useaima.com, blog.useaima.com, support.useaima.com, eva.useaima.com, and utg.useaima.com. This policy explains how we handle information when someone browses our public sites, creates or uses an eva account, requests support, or interacts with Orbis on the UTG domain.`,
  },
  {
    title: "Information we collect",
    body: "Depending on the product or feature, we may collect contact details, account profile data, support messages, device and browser details, event and security logs, cookie identifiers, and product content that users intentionally submit. In eva this can include onboarding details, budgets, spending entries, goals, and other financial workflow data. In Orbis this can include approval metadata, operator identity data, and transaction-control records needed to run the gateway safely.",
  },
  {
    title: "How we use information",
    body: "We use information to provide the products, authenticate users, personalize the eva workspace, deliver support, send requested communications, improve usability, detect abuse, enforce security controls, and maintain reliable operations. Where AI-powered features are offered, submitted data may be processed to generate summaries, insights, or recommended next actions tied to the product experience.",
  },
  {
    title: "Cookies, local storage, and similar technologies",
    body: "We use essential cookies and local storage to keep sessions active, remember preferences, secure forms, and maintain site functionality. We may also use limited analytics or diagnostic tools to understand performance, errors, and usage patterns. Additional details appear in the separate Cookie Policy on this site.",
  },
  {
    title: "Sharing and disclosures",
    body: "aima does not sell personal information. We may share information with service providers that host, secure, analyze, authenticate, or support the products, with authorities when legally required, and with professional advisers or transaction parties when needed to protect the business or users. We may also share data inside the aima product system where that is necessary to deliver a connected support, legal, or product experience.",
  },
  {
    title: "Retention and security",
    body: "We retain information only as long as reasonably necessary for the purposes described in this policy, including account servicing, legal compliance, support history, fraud prevention, and product reliability. We use administrative, technical, and organizational safeguards intended to reduce unauthorized access, loss, or misuse, but no system can promise absolute security.",
  },
  {
    title: "Your choices and rights",
    body: "Depending on where you live, you may have rights to access, correct, delete, or limit the use of certain personal information. You can also ask questions about the data associated with your use of eva, Orbis, the blog, or the support center. To make a request, contact help@useaima.com and include enough detail for us to verify and respond appropriately.",
  },
  {
    title: "Cross-product support and AI processing",
    body: "If you contact aima through the blog, the support center, or product support links, your message may be routed across shared support systems so the right team can respond. If you intentionally use AI-powered features in eva or connected product flows, your submitted inputs may be processed by configured model or infrastructure providers strictly to generate the requested experience, secure the system, or improve product quality.",
  },
];

const Privacy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Read how aima handles privacy, cookies, product data, support data, and AI-assisted processing across eva, Orbis, the blog, and the support center."
        path="/privacy-policy"
        structuredData={privacyStructuredData}
      />
      <Navbar />
      <main>
        <section className="py-24">
          <div className="container max-w-3xl">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Last updated May 22, 2026. This policy is the canonical privacy notice for the aima public site,
              blog, support center, eva, and Orbis public product surfaces.
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
              <h2 className="text-xl font-semibold">Updates</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                This policy may be updated as the platform evolves. Material updates will be reflected on this page so
                visitors and users can review the latest privacy terms in one place. Questions about this policy can be
                sent to help@useaima.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
