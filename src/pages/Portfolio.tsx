import { motion } from "framer-motion";
import { ExternalLink, Mail, Send } from "lucide-react";

/* =======================
   PROJECT DATA
======================= */

const projects = [
  // Image Hosting
  { name: "TgImg", url: "https://tgimg.arsynoxlabs.dpdns.org", tag: "Hosting" },
  { name: "ArsyHost", url: "https://arsyhost.pages.dev", tag: "Hosting" },
  { name: "Snaphost", url: "https://codexart-lab.github.io/Snaphost", tag: "Hosting" },
  { name: "Tg Img Host", url: "https://telegram-image-hosting.pages.dev", tag: "Hosting" },

  // Tools
  { name: "Thread Profile Viewer", url: "https://thread-profile-viewer.onrender.com", tag: "Tools" },
  { name: "Telegram Webhook Manager", url: "https://tgwebhook.pages.dev", tag: "Dev Tool" },

  // Email
  { name: "ArsyNox Mail", url: "https://cinescope.dpdns.org", tag: "Email" },
  { name: "CLOUDARSY MAIL", url: "https://mail.cloudarsy.qzz.io", tag: "Email" },

  // Streaming / Communication
  { name: "ArsyStream", url: "https://arsystream.metaspace.workers.dev", tag: "Streaming" },
  { name: "ArsyChat", url: "https://arsychat.pages.dev", tag: "Communication" },

  // Telegram Bots
  { name: "Image Generator Bot", url: "https://t.me/InsomniumBot", tag: "Telegram Bot" },
  { name: "URL Shortener Bot", url: "https://t.me/arsytxt_bot", tag: "Telegram Bot" },
  { name: "Drive Downloader Bot", url: "https://t.me/drive2downloader_bot", tag: "Telegram Bot" },
];

/* =======================
   SECTION COMPONENT
======================= */

function Section({
  title,
  items,
}: {
  title: string;
  items: typeof projects;
}) {
  if (!items.length) return null;

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 text-white/90">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-lg hover:shadow-cyan-500/20 transition"
          >
            <span className="text-xs uppercase tracking-wide text-cyan-400">
              {p.tag}
            </span>

            <h3 className="text-xl font-semibold mt-2 mb-4">
              {p.name}
            </h3>

            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-cyan-400 transition"
            >
              Visit <ExternalLink size={16} />
            </a>

            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition bg-cyan-500/10 blur-2xl -z-10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* =======================
   MAIN COMPONENT
======================= */

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-inter relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#050b1a] via-[#020617] to-black opacity-80" />

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-20">
          <motion.img
            src="/logo.png"
            alt="ArsyNox Labs Logo"
            className="h-16 w-16 mb-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            ArsyNox Labs
          </motion.h1>

          <p className="text-gray-400 max-w-xl">
            Experimental web infrastructure, automation tools, and modern digital services.
          </p>
        </div>

        {/* Sections */}
        <Section
          title="🖼 Image & Hosting Services"
          items={projects.filter(p => p.tag === "Hosting")}
        />

        <Section
          title="🤖 Telegram Bots"
          items={projects.filter(p => p.tag === "Telegram Bot")}
        />

        <Section
          title="📧 Email Platforms"
          items={projects.filter(p => p.tag === "Email")}
        />

        <Section
          title="🛠 Tools & Utilities"
          items={projects.filter(p =>
            ["Tools", "Dev Tool"].includes(p.tag)
          )}
        />

        <Section
          title="🌐 Communication & Streaming"
          items={projects.filter(p =>
            ["Streaming", "Communication"].includes(p.tag)
          )}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ArsyNox Labs
          </p>

          <div className="flex gap-6">
            <a
              href="mailto:admin@arsyoxhash.dpdns.org"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition"
            >
              <Mail size={18} /> Email
            </a>

            <a
              href="https://t.me/codexhelps_bot"
              target="_blank"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
            >
              <Send size={18} /> Telegram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
