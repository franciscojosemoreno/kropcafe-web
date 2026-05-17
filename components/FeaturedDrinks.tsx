'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/config/site'

export default function FeaturedDrinks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 md:py-36 bg-dark-800">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Menú Fresh</span>
          <h2 className="section-title text-white mb-4">
            Nuestras Bebidas<br />Signature
          </h2>
          <p className="font-sans text-sm text-white/50 max-w-md mx-auto mt-4">
            Creaciones especiales con ingredientes de primera. Frescas, originales, únicas.
          </p>
        </motion.div>

        {/* Drinks grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {siteConfig.featuredDrinks.map((drink, i) => (
            <motion.div
              key={drink.id}
              className="group text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
            >
              {/* Circular image */}
              <div className="relative mx-auto mb-8 w-52 h-52 md:w-60 md:h-60">
                {/* Terracotta ring */}
                <div className="absolute inset-0 rounded-full border-2 border-krop-500/40 group-hover:border-krop-500 transition-colors duration-500" />
                <div className="absolute inset-3 rounded-full overflow-hidden">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Number badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-krop-500 flex items-center justify-center">
                  <span className="font-display font-black text-xs text-white">{String(i + 1).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Text */}
              <h3 className="font-display font-black text-xl md:text-2xl uppercase tracking-wide text-white mb-3 leading-tight">
                {drink.name}
              </h3>
              <div className="w-8 h-0.5 bg-krop-500 mx-auto mb-3" />
              <p className="font-sans text-xs text-white/50 leading-relaxed max-w-xs mx-auto">
                {drink.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
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
