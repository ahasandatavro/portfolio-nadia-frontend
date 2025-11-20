import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion'
import { Project } from '@/types/project'
import { IconArrowUpRight } from '@tabler/icons-react'
import Chip from '../UI/Chip'

function ProjectCard({ p, onOpen }: { p: Project; onOpen?: (p: Project) => void }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rXraw = useMotionValue(0)
  const rYraw = useMotionValue(0)
  const rotateX = useSpring(rXraw, { stiffness: 200, damping: 20 })
  const rotateY = useSpring(rYraw, { stiffness: 200, damping: 20 })
  const sheen = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, rgba(255,255,255,0.12), transparent 40%)`

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const max = 12
    rYraw.set((px - 0.5) * (max * 2))
    rXraw.set(-(py - 0.5) * (max * 2))
    mx.set(px * 100)
    my.set(py * 100)
  }

  const handleMouseLeave = () => {
    rXraw.set(0)
    rYraw.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative z-20 mx-auto max-w-7xl "
    >
      <motion.div aria-hidden style={{ backgroundImage: sheen }} className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      <motion.div className=" pb-0  shadow-md shadow-gray-500 border  rounded-xl overflow-hidden">
        <motion.img
          src={p.img}
          alt={p.title}
          loading="lazy"
          className="w-full h-64 object-cover "
          style={{ transform: 'translateZ(40px)' }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{ transform: 'translateZ(30px)' }}
        className="p-6 md:h-[350px] flex flex-col justify-between  mt-2 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md shadow-lg will-change-transform [transform-style:preserve-3d]"
      >
        <div>
          <h3 className="text-xl font-semibold text-white">{p.title}</h3>
          <p className="mt-2 text-sm text-white/70">{p.desc}</p>
        </div>

        <div className="flex flex-col">
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t, i) => <Chip key={i} label={t} />)}
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="mt-6 flex items-center justify-between">
            <a
              href={p.href}
              className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full underline-offset-8 underline text-lg backdrop-blur-lg text-lime-400 transition-colors"
            >
              <IconArrowUpRight size={20} /> <span className="font-medium">Visit Live</span>
            </a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onOpen?.(p)}
              className="inline-flex cursor-pointer items-center justify-center gap-2 px-3 py-3 rounded-full text-lg bg-lime-400 text-black hover:bg-lime-300 transition-colors"
            >
              <IconArrowUpRight size={20} />
            </motion.button>
          </motion.div>
        </div>
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-lime-300/40 transition" />
      </motion.div>

    
    </motion.div>
  )
}

export default ProjectCard
