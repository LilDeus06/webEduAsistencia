'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Sun, Moon, Download, Mail, MapPin, ChevronDown, ChevronUp, Phone, Star, Settings, Bell } from 'lucide-react'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const controls = useAnimation()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }))
  }, [controls])

  if (!mounted) return null



  const appFeatures = [
    { icon: Star, title: 'Personalización', description: 'Adapta la app a tus preferencias' },
    { icon: Settings, title: 'Configuración avanzada', description: 'Ajusta cada detalle a tu gusto' },
    { icon: Bell, title: 'Notificaciones inteligentes', description: 'Mantente informado sin distracciones' },
    { icon: Bell, title: 'Notificaciones inteligentes', description: 'Mantente informado sin distracciones' },
  ]


  const faqs = [
    { question: '¿Cómo puedo descargar la app?', answer: 'Puedes descargar nuestra app desde Google Play Store buscando "Mi App Android" o haciendo clic en el botón de descarga en esta página.' },
    { question: '¿Es compatible con todos los dispositivos Android?', answer: 'Nuestra app es compatible con dispositivos Android 6.0 y superiores. Recomendamos tener la última versión de Android para una mejor experiencia.' },
    { question: '¿La app es gratuita?', answer: 'Sí, la app es gratuita para descargar y usar. Ofrecemos algunas funciones premium a través de compras dentro de la app.' },
    { question: '¿Cómo puedo reportar un problema?', answer: 'Puedes reportar problemas directamente desde la app en la sección de "Ayuda y soporte" o enviándonos un correo a soporte@miappandroid.com.' },
  ]
  

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100">
      <div className="animated-background"></div>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/75 dark:bg-gray-900/75 transition-colors duration-300">
        <nav className="container mx-auto p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">EduAsistencia</h1>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
          >
            {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 relative z-10 bg-white/80 dark:bg-gray-800/50 shadow-lg">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Simplifica el control de asistencia en tu institución.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl text-gray-800 dark:text-gray-200"
          >
           Una plataforma ágil y moderna para gestionar asistencias, justificaciones y reportes al instante.
          </motion.p>
        </div>

        <Tilt
          className="mx-auto mb-20 "
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.05}
          transitionSpeed={2000}
          gyroscope={true}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-72 h-144 mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-700 rounded-3xl shadow-lg transform -rotate-6"></div>
            <Image
              src="/images/40shots_so.png"
              alt="App Screenshot"
              width={540}
              height={960}
              className="relative z-10 rounded-3xl shadow-lg"
              
            />
          </motion.div>
          
          

        </Tilt>
        

        <div className="text-center mb-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <Download className="w-6 h-6 inline-block mr-2" />
            Solicita una Demo
          </motion.button>
        </div>


        <section className="mb-20 w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-900 to-purple-900 dark:from-gray-900 dark:to-indigo-900 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 text-center">Beneficios</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {appFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-800/40 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-2 bg-gradient-to-br from-indigo-400 to-purple-400 dark:from-indigo-500 dark:to-purple-500 rounded-full">
                    
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-indigo-100 dark:text-gray-300 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-10 text-center">
        Características
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {appFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg p-6 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 dark:from-blue-600/20 dark:to-purple-700/20 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <feature.icon className="w-12 h-12 mb-4 text-blue-500 dark:text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-32">
          <h3 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            PREGUNTAS FRECUENTES
          </h3>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex justify-between items-center w-full text-left p-8 bg-gradient-to-r from-white to-blue-50 dark:from-blue-900/50 dark:to-purple-800/80 backdrop-blur-sm shadow-lg"
              >
                <span className="font-semibold text-blue-800 dark:text-blue-200">{faq.question}</span>
                {openFaq === index ? <ChevronUp className="text-purple-600 dark:text-purple-400" /> : <ChevronDown className="text-purple-600 dark:text-purple-400" />}
              </button>
              {openFaq === index && (
                <div className="p-4 bg-white dark:bg-gray-800/50 rounded-b-lg text-purple-900 dark:text-purple-200">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
       

        
        
 <div className="mb-10">
  <div className="space-y-2 text-center">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
      ¿Está listo para mejorar la experiencia en su I.E?
    </h2>
    <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-x1/relaxed mx-auto">
      Contactenos para poder darle un servicio exclusivo y personalizado para los requerimientos que desea.
    </p>
  </div>
  
  <form className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mt-8 flex justify-center">
    <div className="w-full">
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-lg">Email</label>
        <input type="email" id="email" className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300" />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-lg">Mensaje</label>
        <textarea id="message" rows={4} className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"></textarea>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl"
      >
        Enviar
      </motion.button>
    </div>
  </form>
</div>



      </main>

      
      <footer className="bg-gray-100/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-400 py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-blue-400">EduAsistencia</h4>
              <p>Explora nuestros diferentes planes diseñados para ajustarse al tamaño y necesidades de tu institución educativa. Desde colegios pequeños hasta grandes instituciones, tenemos la solución perfecta para ti.</p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-blue-400">Contacto</h4>
              <ul className="space-y-2">
                <li className="flex items-center"><Mail className="w-5 h-5 mr-2 text-purple-500" /> eduasistencia@gmail.com</li>
                <li className="flex items-center"><Phone className="w-5 h-5 mr-2 text-purple-500" /> +51 938438156</li>
                <li className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-purple-500" /> Ica, Ica</li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-blue-400">Síguenos</h4>
              <div className="flex space-x-4">
                {/* Aquí puedes agregar iconos de redes sociales */}
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p>&copy; 2024 EduAsistencia. Todos los derechos reservados.</p>
          </div>
        </div>
        
      </footer>

      <style jsx global>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-background {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradientAnimation 15s ease infinite;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }
      `}</style>
    </div>
  )
}
