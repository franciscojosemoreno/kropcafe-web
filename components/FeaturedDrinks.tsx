'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/config/site'

export default function FeaturedDrinks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 md:py-36 bg-dark-800 overflow-hidden">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Menú Fresh</span>
          <h2 className="section-title text-white mb-5">
            Nuestras Bebidas<br />Signature
          </h2>
          <p className="font-sans text-sm text-white/40 max-w-md mx-auto">
            Creaciones especiales con ingredientes de primera. Frescas, originales, únicas.
          </p>
        </motion.div>

        {/* Drinks */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {siteConfig.featuredDrinks.map((drink, i) => (
            <motion.div
              key={drink.id}
              className="group flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.15, ease: 'easeOut' }}
            >
              {/* Drink image — transparent PNG floats on bg */}
              <div className="relative w-full flex justify-center mb-8">
                {/* Subtle glow behind drink */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-krop-500/10 rounded-full blur-2xl" />
                <motion.img
                  src={drink.image}
                  alt={drink.name}
                  className="relative z-10 h-[280px] md:h-[340px] w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(196,97,42,0.15))' }}
                />
              </div>

              {/* Number */}
              <span className="font-display font-black text-[11rem] md:text-[9rem] leading-none text-white/[0.03] absolute select-none pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Accent line */}
              <div className="w-8 h-0.5 bg-krop-500 mb-4" />

              {/* Name */}
              <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-wide text-white mb-3 leading-tight">
                {drink.name}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs text-white/40 leading-relaxed max-w-[220px]">
                {drink.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a
            href="https://krop-cafe-caitas.menustic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-krop"
          >
            Ver Menú Completo
          </a>
        </motion.div>

      </div>
    </section>
  )
}
