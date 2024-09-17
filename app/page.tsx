'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Sun, Moon, Download, Mail, MapPin, ChevronDown, ChevronUp, Phone, Star, Settings, Bell } from 'lucide-react'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import { init, send } from 'emailjs-com';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const controls = useAnimation()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  {/*const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }; */}

  const images = [
    "/images/40shots_so.png",
    "/images/img2.png",
    "/images/img3.png"
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState<number | null>(null);

  // Auto advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setNextImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    }, 6000); // Cambia la imagen cada 6 segundos

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  useEffect(() => {
    if (nextImage !== null) {
      setCurrentImage(nextImage);
    }
  }, [nextImage]);

  useEffect(() => {
    init("TU_USER_ID_DE_EMAILJS");
  }, []);

  const [email, setEmail, ] = useState('');
  const [message, setMessage, ] = useState('');
  const [nombre, setNombre, ] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    send(
      'service_m9mlcyc',
      'template_15j4awt',
      { email, message, nombre },
      'wHkkVbkJw_UaBuhL7'
    )
      .then((response) => {
        console.log('EVIADO CON EXITO', response.text);
        //console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado con éxito!');
         // Limpiar los campos del formulario
        setNombre('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');
      });
  };

  useEffect(() => {

    const pageTittle = "EduAsistencia";
    const mensajeTittle = "Deme una oportunidad 😁";

    const handleVisibilityChange = () => {
      if (document.hidden){
        document.title = mensajeTittle;
      } else {
        document.title = pageTittle;
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };

  },[]),

  

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
    { icon: Star, title: 'Control de Asistencias en Tiempo Real', description: 'Registra la presencia de los estudiantes de manera inmediata, desde cualquier dispositivo móvil.' },
    { icon: Settings, title: 'Justificación de Inasistencias', description: 'Los Auxiliares y profesores pueden gestionar y enviar justificaciones por inasistencia de manera fácil y rápida, directamente desde la app.' },
    { icon: Bell, title: 'Generación Automática de Reportes', description: 'Crea reportes detallados sobre las asistencias, justificaciones y faltas acumuladas por cada estudiante o grupo.' },
    { icon: Bell, title: 'Consulta Histórica de Asistencias', description: 'Accede a un registro completo de la asistencia de todos los estudiantes para revisar su evolución a lo largo del tiempo.' },
    { icon: Bell, title: 'Acceso a Perfiles de Alumnos', description: 'Consulta información completa sobre cada estudiante, desde sus datos personales hasta su historial de asistencia.' },
    { icon: Bell, title: 'Busqueda amplia de alumnos', description: 'Realiza consultas de Alumnas especificas por nombres apellidos o grado y seccion.' },
    { icon: Bell, title: 'Vista de datos por graficos', description: 'Revisarás las datos registrados por los Auxiliares y Profesores de manera grafica, fácil de interpretar y entender.' },
    { icon: Bell, title: 'Control de asistencias por mes', description: 'Podrás tener las asistencias que tomes agrupadas por mes, para una muestra más limpia de asistencias' },
    { icon: Bell, title: 'Acceso a Justificaciones', description: 'Mantente informado de las Justificaciones que se hagan en tiempo real, automaticamente desde la app' },
  ]

  const beneficios = [
    { icon: Star, title: 'Ahorro de Tiempo y Recursos', description: 'Reduce el tiempo invertido automatizando procesos clave.' },
    { icon: Settings, title: 'Facilidad de Uso', description: 'EduAsistencia está diseñada para ser intuitiva, permitiendo que cualquier usuario pueda dominar la app en poco tiempo.' },
    { icon: Bell, title: 'Reducción de Errores Administrativo', description: 'Al eliminar el registro manual, se minimizan los errores humanos y se asegura que los datos sean siempre precisos y confiables.' },
    { icon: Bell, title: 'Acceso desde Cualquier Lugar', description: 'Los profesores, auxiliares y administradores pueden acceder a la plataforma desde cualquier lugar, permitiendo un control total en todo momento.' },
    { icon: Bell, title: 'Fácil Integración con Otros Sistemas', description: 'Compatible con las plataformas más utilizadas en el ámbito educativo, facilitando los datos con sistemas preexistentes.'},
    { icon: Bell, title: 'Mejora Continua', description: 'Recibe actualizaciones periódicas con nuevas funcionalidades basadas en las necesidades de nuestras instituciones colaboradoras.'},
  
  ] 


  const faqs = [
    { question: '¿Qué es EduAsistencia?', answer: 'EduAsistencia es una aplicación móvil diseñada para facilitar el control de asistencia escolar. Permite a auxiliares y profesores registrar asistencias, gestionar justificaciones, generar reportes y comunicarte con los padres de manera eficiente.' },
    { question: '¿EduAsistencia se puede personalizar según las necesidades de nuestra institución?', answer: 'Sí, EduAsistencia ofrece opciones de personalización para adaptarse a las necesidades específicas de tu institución, incluyendo la configuración de horarios, materias y roles de usuarios.' },
    { question: '¿Es posible acceder a EduAsistencia desde una computadora?', answer: 'Actualmente, EduAsistencia está optimizada para dispositivos móviles. Sin embargo, estamos trabajando en una versión web para facilitar el acceso desde computadoras en el futuro.' },
    { question: '¿Qué tipo de reportes se pueden generar con EduAsistencia?', answer: 'EduAsistencia permite generar una variedad de reportes, incluyendo asistencias diarias, faltas acumuladas, justificaciones de inasistencias y reportes personalizados según las necesidades de tu institución.' },
    { question: '¿Cómo funciona la toma de asistencias con EduAsistencia?', answer:'Con EduAsistencia, los docentes y auxiliares pueden registrar la asistencia de los alumnos de manera rápida y sencilla desde su dispositivo móvil. Solo necesitan seleccionar el nombre del estudiante y marcar su presencia o ausencia.'}
  ]
  
  
  

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100">
      <div className="animated-background"></div>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/75 dark:bg-gray-900/75 transition-colors duration-300">
        <nav className="container mx-auto p-6 flex flex-col sm:flex-row items-center justify-between">
          <a href="#">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">EduAsistencia</h1>
          </a>
          
          <div className="flex items-center mt-4 sm:mt-0">
            {/*<nav className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {[{ name: "Beneficios", href: "beneficios" }, { name: "Características", href: "caracteristicas" }, { name: "Preguntas", href: "preguntas" }, { name: "Contacto", href: "contacto" }].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </nav>*/}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
            >
              {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>
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
        

        <div className="flex items-center justify-center sm:flex-row sm:gap-2">
  {/* Botón de la izquierda */}
  {/*<button
    onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
    className="p-2 text-white transition"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>*/}

  {/* Imagen principal */}
  <Tilt
    className="mx-auto mb-20"
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    perspective={1000}
    scale={1.05}
    transitionSpeed={2000}
    gyroscope={true}
  >
    <motion.div
      key={currentImage}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 1 }}
      className="relative w-72 h-144"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-700 rounded-3xl shadow-lg transform -rotate-6"></div>
      <Image
        src={images[currentImage]}
        alt="App Screenshot"
        width={540}
        height={960}
        className="relative z-10 rounded-3xl shadow-lg"
      />
    </motion.div>
  </Tilt>

  {/* Botón de la derecha */}
  {/*<button
    onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
    className="p-2 text-whitetransition"
  >
    <ChevronRight className="w-6 h-6" />
  </button>*/}
</div>






        <div className="text-center mb-20" >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <Download className="w-6 h-6 inline-block mr-2"  href='#contacto' />
            Solicita una Demo
          </motion.button>
        </div>
        <div id="beneficios" className="mb-10">
        </div>

        <section  className="mb-20 w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-900 to-purple-900 dark:from-gray-900 dark:to-indigo-900 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 text-center">
              Beneficios</h2>
            <div className="text-center grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {beneficios.map((feature, index) => (
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
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-indigo-100 dark:text-gray-300 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        <h2 id="caracteristicas" className="text-3xl font-bold tracking-tighter sm:text-5xl mb-10 text-center">
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

        <div id="preguntas" className="mb-32">
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
       

        
        
    <div id="contacto"  className="my-40">
      <div  className="space-y-2 text-center">
        <h2  className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
        ¿Estás listo para transformar la manera en que gestionas la asistencia en tu institución?
        </h2>
        <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-x1/relaxed mx-auto">
        Solicita una demostración gratuita y descubre cómo EduAsistencia puede ayudarte a ahorrar tiempo, mejorar la comunicación y automatizar procesos clave.
        </p>
      </div>
      
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mt-8 flex justify-center">
        <div className="w-full">
        <div className="mb-6">
            <label htmlFor="nombre" className="block mb-2 text-lg">Nombre</label>
            <input
              type="name"
              id="nombre"
              placeholder="Tu Nobmre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-lg">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Tu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-lg">Mensaje</label>
            <textarea
              id="message"
              placeholder="Escribeme tu mensaje con la consulta..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
              required
            ></textarea>
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
