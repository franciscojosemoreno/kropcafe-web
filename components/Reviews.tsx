'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const reviewsByLocation: Record<string, { name: string; text: string; time: string; rating: number }[]> = {
  canitas: [
    {
      name: 'Clau Managua',
      time: 'hace 11 meses',
      rating: 5,
      text: 'Uno de mis lugares favoritos para el cafecito de cualquier momento del día. Siempre me atienden con buena onda, los chicos entienden perfecto lo que quiero y hasta me sugieren opciones para mejorar mi elección. El café es realmente excelente, se nota que hay conocimiento y dedicación detrás. Además son Pet Lovers, amo.',
    },
    {
      name: 'Yamile Gallo',
      time: 'hace un año',
      rating: 5,
      text: 'Las sillas incómodas, las mesas minúsculas, el servicio meh y había la mitad de lo que pedíamos pero aún así le pongo 5 estrellas porque lo poco que había era delicioso. Probamos el moccalima y seguro es lo que desayuna dios en el paraíso. El café de especialidad de verdad y el chipa vegetariano sin palabras.',
    },
    {
      name: 'Maite Arza',
      time: 'hace 7 meses',
      rating: 4,
      text: 'Muy rico café y el pan de chocolate delicioso. Muy amable la atención del "equipo de la tarde". Vine a trabajar con mis ventas mientras tomaba un café y me quedé porque me sentí muy cómoda con el ambiente.',
    },
    {
      name: 'Solci',
      time: 'hace 9 meses',
      rating: 5,
      text: 'Un lindo cafe en la zona de cañitas. Adentro no hay mesas, solo afuera. Muy ricos los budines!',
    },
    {
      name: 'Bruno Miranda',
      time: 'hace 6 meses',
      rating: 5,
      text: 'Excelente ambiente. El personal muy amable y atento. El café de especialidad muy rico. Me quedé con ganas de probar más cosas. Lugar súper recomendado.',
    },
    {
      name: 'Juan Manuel Morales',
      time: 'hace 4 años',
      rating: 4,
      text: 'Excelente. El café del lugar tiene la temperatura exacta para cualquier paladar. La comida que venden es rica y se nota que es orgánica. La ubicación es ideal y tienen bancos junto con mesas de madera que hacen de la experiencia un poco más excéntrica. Súper recomendable!',
    },
  ],
  barriochino: [
    {
      name: 'Crispenaranda',
      time: 'hace 7 meses',
      rating: 5,
      text: 'Muy bueno todo! Pedimos el tostado de chipá con jamón y queso, croissant con j&q, carrot cake y pan de chocolate + latte dubai y estuvo todo delicioso, 100% recomendable. Mi única crítica es que podrían tener un toldito para los días de lluvia, el resto todo perfecto.',
    },
    {
      name: 'Yull Boiler',
      time: 'hace 7 meses',
      rating: 5,
      text: 'El único café de especialidad real en todo Barrio Chino, me encantó el sandwich de bondiola. El café es increíble. 10/10.',
    },
    {
      name: 'Brenda Gil Gorrías',
      time: 'hace 7 meses',
      rating: 5,
      text: 'Me encantó! Es la primera vez que voy y la verdad 10/10. Si van prueben el croissant de j&q… el más rico que comí en mucho tiempo.',
    },
    {
      name: 'F B',
      time: 'hace 10 meses',
      rating: 5,
      text: 'Linda cafetería en la vía viva del barrio chino, con muy buena atención. Los alfajores de chocotorta son riquísimos!',
    },
    {
      name: 'Sergio Mauro Brikman',
      time: 'hace 10 meses',
      rating: 5,
      text: 'Excelente cafe, con mucha onda y buenos detalles decorativos (el dragón sacaba humo con aroma a café). Acompañé con un dátil bañado en chocolate y relleno de pasta de maní, muy rico.',
    },
    {
      name: 'Mar Fryda Saez',
      time: 'hace 7 meses',
      rating: 5,
      text: 'Riquísimo todo. Recomiendo el choco lima para tomar y el sándwich de chipa (ambos!).',
    },
  ],
}

const locations = [
  { id: 'canitas', label: 'Cañitas' },
  { id: 'barriochino', label: 'Barrio Chino' },
]

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-3 h-3 ${i < n ? 'fill-krop-500' : 'fill-white/20'}`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const [active, setActive] = useState('canitas')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reviews = reviewsByLocation[active]

  return (
    <section ref={ref} className="py-24 md:py-36 bg-dark-800">
      <div className="container-custom">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Reseñas</span>
          <h2 className="section-title text-white mb-4">
            Lo que dicen
          </h2>
        </motion.div>

        {/* Location tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActive(loc.id)}
              className={`font-display font-bold text-xs tracking-[0.2em] uppercase px-6 py-3 border-2 transition-all ${
                active === loc.id
                  ? 'bg-krop-500 border-krop-500 text-white'
                  : 'border-white/20 text-white/50 hover:border-white/40 hover:text-white/70'
              }`}
            >
              {loc.label}
            </button>
          ))}
        </div>

        {/* Reviews grid or placeholder */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {reviews.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif italic text-white/30 text-lg">Próximamente reseñas de {locations.find(l => l.id === active)?.label}.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {reviews.map((r, i) => (
                  <motion.div
                    key={i}
                    className="bg-dark-900 border border-white/10 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-full bg-krop-500/20 border border-krop-500/30 flex items-center justify-center flex-none">
                        <span className="font-display font-black text-sm text-krop-400">{r.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-display font-bold text-sm uppercase tracking-wide text-white">{r.name}</p>
                        <p className="font-sans text-xs text-white/30">{r.time}</p>
                      </div>
                    </div>
                    <Stars n={r.rating} />
                    <p className="font-sans text-xs text-white/60 leading-relaxed mt-3">"{r.text}"</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
