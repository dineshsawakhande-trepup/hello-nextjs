// 📌 Each page can export its own metadata — overrides layout.tsx metadata
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello Next.js | Home",
  description: "Learning Next.js fundamentals: fonts, metadata, layouts, and more",
};

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-geist-sans)" }}>
        👋 Hello, Next.js!
      </h1>
      <p className="text-gray-500 mb-10 text-lg">A walkthrough of the fundamentals we covered.</p>

      <Section title="🔤 Fonts via next/font">
        <p>
          Geist Sans is loaded with <code>Geist({`{ variable: "--font-geist-sans" }`})</code>.
          Next.js injects a CSS custom property so you can use{" "}
          <code>var(--font-geist-sans)</code> anywhere in CSS or inline styles.
        </p>
        <div className="mt-3 grid grid-cols-2 gap-4">
          <div style={{ fontFamily: "var(--font-geist-sans)" }} className="p-3 bg-gray-100 rounded">
            <span className="text-xs text-gray-400 block mb-1">--font-geist-sans</span>
            The quick brown fox
          </div>
          <div style={{ fontFamily: "var(--font-geist-mono)" }} className="p-3 bg-gray-100 rounded">
            <span className="text-xs text-gray-400 block mb-1">--font-geist-mono</span>
            The quick brown fox
          </div>
        </div>
      </Section>

      <Section title="🏷️ Metadata">
        <p>
          This page exports its own <code>metadata</code> object, overriding the one in{" "}
          <code>layout.tsx</code>. Open your browser tab — it reads:{" "}
          <strong>Hello Next.js | Home</strong>.
        </p>
        <pre className="mt-3 p-4 bg-gray-900 text-green-300 text-xs rounded-lg overflow-x-auto" style={{ fontFamily: "var(--font-geist-mono)" }}>{`// page.tsx
export const metadata: Metadata = {
  title: "Hello Next.js | Home",
  description: "Learning fundamentals...",
};`}</pre>
      </Section>

      <Section title="📐 Layout & Nested Layouts">
        <p>
          <code>app/layout.tsx</code> wraps every page. It sets up fonts, global CSS, and
          fallback metadata. Nest a <code>layout.tsx</code> inside any folder to scope it to that route.
        </p>
        <pre className="mt-3 p-4 bg-gray-900 text-green-300 text-xs rounded-lg overflow-x-auto" style={{ fontFamily: "var(--font-geist-mono)" }}>{`export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={\`\${geistSans.variable} antialiased\`}>
        {children}  {/* your page renders here */}
      </body>
    </html>
  );
}`}</pre>
      </Section>

      <Section title="🎨 CSS Custom Properties">
        <p>
          Variables cascade from parent to child. Dark mode just redefines the variable on{" "}
          <code>:root</code> — all consumers update automatically.
        </p>
        <pre className="mt-3 p-4 bg-gray-900 text-green-300 text-xs rounded-lg overflow-x-auto" style={{ fontFamily: "var(--font-geist-mono)" }}>{`:root { --foreground: #171717; }
@media (prefers-color-scheme: dark) {
  :root { --foreground: #ededed; }
}
/* usage */
color: var(--foreground);`}</pre>
      </Section>

      <Section title="🚀 Deployment">
        <p>
          Push to GitHub → GitHub Actions builds → Vercel deploys. Free{" "}
          <code>your-project.vercel.app</code> subdomain with HTTPS, no credit card needed.
        </p>
        <ol className="mt-3 space-y-1 list-decimal list-inside text-sm text-gray-700">
          <li>Run <code>git init && git remote add origin &lt;your-repo&gt;</code></li>
          <li>Push to <code>main</code></li>
          <li>Import repo at <strong>vercel.com</strong> — auto-detects Next.js</li>
          <li>Add secrets to GitHub: VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID</li>
        </ol>
      </Section>

      <footer className="mt-12 pt-6 border-t text-sm text-gray-400">
        Built with Next.js · App Router · TypeScript · Tailwind
      </footer>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="text-gray-700 text-sm leading-relaxed space-y-2">{children}</div>
    </section>
  );
}
