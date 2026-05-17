import type { Metadata } from 'next'
import { Barlow_Condensed, Plus_Jakarta_Sans, Cormorant } from 'next/font/google'
import './globals.css'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
})

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'KROP | Café · Buenos Aires',
  description: 'KROP Café. Cañitas y Barrio Chino. Specialty coffee, opciones veganas y sin TACC. Pet friendly.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${barlow.variable} ${jakarta.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  )
}
