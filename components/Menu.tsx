'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/config/site'

const categories = [
  { label: 'Specialty Coffee', items: ['Espresso', 'Cortado', 'Flat White', 'Cappuccino', 'Latte', 'Cold Brew'] },
  { label: 'Bebidas Fresh', items: ['Iced Matcha Mango', 'Hibiscus Tonic', 'Iced Latte Dubai', 'Kombucha', 'Limonada Jengibre'] },
  { label: 'Para Comer', items: ['Tostadas & Bagels', 'Bowls Veganos', 'Huevos Benedictinos', 'Granola Bowl', 'Pastelería del día'] },
  { label: 'Sin TACC & Vegano', items: ['Opciones certificadas sin gluten', 'Leches vegetales (avena · coco · almendra)', 'Bowls 100% plant-based', 'Postres veganos'] },
]

export default function Menu() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="menu" ref={ref} className="py-24 md:py-36 bg-dark-900">
      <div className="container-custom">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Menú</span>
          <h2 className="section-title text-white mb-4">
            Lo que hacemos
          </h2>
          <p className="font-sans text-sm text-white/40 mt-4">
            Ingredientes de primera · Opciones veganas · Sin TACC
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="border border-white/10 p-6 hover:border-krop-500/50 transition-colors"
            >
              <h3 className="font-display font-black text-lg uppercase tracking-wide text-krop-400 mb-5">
                {cat.label}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-krop-500 flex-none" />
                    <span className="font-sans text-xs text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.menuOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-krop"
            >
              Menú Cañitas →
            </a>
            <a
              href={siteConfig.menuOnlineBarrioChino}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-krop"
            >
              Menú Barrio Chino →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
