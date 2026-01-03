import { motion } from "framer-motion";

interface Props {
  name: string;
  url: string;
  tag: string;
}

export default function ProjectCard({ name, url, tag }: Props) {
  return (
    <motion.a
      href={url}
      target="_blank"
      whileHover={{ y: -6 }}
      className="
        relative flex flex-col items-center justify-center
        h-40 rounded-2xl bg-white/5 backdrop-blur-xl
        border border-white/10
        transition-all duration-300
        hover:shadow-[0_0_35px_rgba(99,102,241,0.35)]
      "
    >
      <div className="text-3xl font-bold mb-2">
        {name.slice(0, 2)}
      </div>

      <p className="text-sm text-white/80">{name}</p>

      <span className="absolute top-3 right-3 text-[10px] text-cyan-400 uppercase">
        {tag}
      </span>
    </motion.a>
  );
}
