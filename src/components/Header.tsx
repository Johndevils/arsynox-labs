import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex items-center gap-4 mb-12">
      <motion.img
        src="/logo.png"
        alt="ArsyNox Labs Logo"
        className="h-12 w-12 rounded-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          ARSYNOX LABS
        </h1>
        <p className="text-sm text-gray-400">
          Experimental Web Infrastructure & Automation
        </p>
      </div>
    </header>
  );
}
