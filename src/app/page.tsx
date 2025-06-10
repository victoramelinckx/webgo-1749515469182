
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende Más y Mejor en Redes Sociales" subheadline="Descubre nuestro curso de Ventas Express. Te entregamos tu web de ventas en menos de 24 horas y te apoyamos 24/7. Sin anuncios, solo resultados." cta1="Inicia Ahora" />
<How step1Title="Inscríbete al Curso" step1Desc="Regístrate en Curso de Ventas Express." step2Title="Aprende a tu ritmo" step2Desc="Estudia en línea, en tus tiempos libres." step3Title="Vende sin anuncios" step3Desc="Digitaliza tus ventas sin invertir en publicidad." />
<Aboutus headline="WebGo, Transformamos tu negocio local en digital" subheadline="WebGo digitaliza negocios, generando ventas online sin consumir tu tiempo. Diferénciate con nuestra perspectiva innovadora." beneficiotitulo1="Ventas Express Online" beneficio1="Curso online para ventas en redes sociales, sin anuncios pagados." beneficiotitulo2="Digitalización y Diferenciación" beneficio2="Transformamos tu negocio local en uno digital y único." />
<Services heading="Digitaliza Tus Ventas, Maximiza Tus Ganancias" description="Con nuestro Curso de Ventas Express, aprende a vender en redes sociales sin anuncios pagados. No necesitas tiempo ni conocimientos previos para vender online." services={[{"name":"Curso de Ventas Express","icon":"graduation-cap","description":"Técnicas efectivas para vender en redes"},{"name":"Soporte 24/7","icon":"clock","description":"Asistencia constante para tus dudas"},{"name":"Web de ventas en 24h","icon":"rocket","description":"Lanza tu negocio online rápidamente"},{"name":"Estrategia sin anuncios pagados","icon":"dollar-sign","description":"Vende sin invertir en publicidad"},{"name":"Optimización para SEO","icon":"search","description":"Aparece en los primeros resultados de Google"},{"name":"Gestión de contenidos","icon":"pencil-alt","description":"Manejamos tu contenido por ti"}]} />
<BeforeAndAfter subheadline="Transformando ideas digitales en realidades espectaculares" />
<Faq faqs={[{"pregunta":"¿Cómo puede el Curso de Ventas Express ayudarme a digitalizar mis ventas?","respuesta":"Nuestro Curso de Ventas Express de WebGo está diseñado para enseñarte a vender en redes sociales sin necesidad de anuncios pagados. Aprenderás estrategias probadas para atraer y retener a los clientes, lo que te permitirá digitalizar tus ventas y expandir tu negocio en Santiago."},{"pregunta":"¿Puedo manejar la digitalización de mis ventas con mi horario de trabajo ya pesado?","respuesta":"Entendemos que como dueño de un pequeño negocio, puedes estar muy ocupado. Por eso, nuestro curso está diseñado para ser flexible y puedes completarlo a tu propio ritmo. Además, las habilidades que adquieras te ayudarán a optimizar tu tiempo, ya que las ventas digitales pueden ser más eficientes que las tradicionales."},{"pregunta":"¿El precio del Curso de Ventas Express vale la inversión?","respuesta":"Con un costo de $120.000 CLP / USD 150, la inversión en el Curso de Ventas Express puede dar lugar a un retorno significativo. Los conocimientos y habilidades que adquieras pueden ayudarte a aumentar tus ventas y expandir tu negocio, superando con creces la inversión inicial."},{"pregunta":"No tengo experiencia en ventas online, ¿puedo aprender con el Curso de Ventas Express?","respuesta":"Absolutamente. Nuestro curso está diseñado para dueños de negocio con poca o ninguna experiencia en ventas online. Los módulos de aprendizaje son fáciles de seguir y cubren todo lo que necesitas saber para comenzar a vender en redes sociales."},{"pregunta":"¿Puedo generar ventas online sin tener un sitio web?","respuesta":"Sí. Aunque tener un sitio web puede ser útil, no es esencial para generar ventas online. Nuestro Curso de Ventas Express se centra en las redes sociales, que son una plataforma eficaz para llegar a los clientes y hacer ventas sin necesidad de un sitio web."}]} />
<BookAppointment 
                      heading="¡Digitaliza tus ventas con facilidad en Santiago!" 
                      description="Con nuestro Curso de Ventas Express, aprenderás a transformar tu negocio físico en un negocio digital exitoso. ¡Sin anuncios pagos!"
                      formPostUrl="https://webgo-generator.vercel.app//api/sendForm"
                      siteOwnerId="ywCkzQe9VRcmD5JbCVfkutrfdTh1"
                    />
<Footer />
    </main>
  );
}
