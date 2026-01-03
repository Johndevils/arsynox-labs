import { Mail, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm text-white/50">
        <span>© {new Date().getFullYear()} ArsyNox Labs</span>

        <div className="flex gap-6">
          <a href="mailto:admin@arsyoxhash.dpdns.org" className="hover:text-white">
            <Mail size={18} />
          </a>
          <a
            href="https://t.me/codexhelps_bot"
            target="_blank"
            className="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          >
            <Send size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
