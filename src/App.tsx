import { motion, useScroll, useTransform } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Utensils, 
  Users, 
  Music, 
  ChevronRight,
  Instagram,
  Facebook,
  Award
} from "lucide-react";
import { useRef } from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-ruby rounded-full flex items-center justify-center shadow-lg">
            <span className="text-cream font-serif text-xl font-bold">R</span>
          </div>
          <span className="font-serif text-2xl font-semibold tracking-tight text-ruby-dark">Rubina</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-neutral-600 font-medium text-sm uppercase tracking-widest">
          <a href="#about" className="hover:text-ruby transition-colors">O nas</a>
          <a href="#services" className="hover:text-ruby transition-colors">Oferta</a>
          <a href="#gallery" className="hover:text-ruby transition-colors">Galeria</a>
          <a href="#contact" className="hover:text-ruby transition-colors">Kontakt</a>
        </div>

        <a 
          href="tel:609492661" 
          className="bg-ruby hover:bg-ruby-dark text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-ruby/30"
        >
          Zadzwoń
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden flex items-center justify-center pt-20">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/476631147_891681679846573_1641246383797432786_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=2tlsvhrO3_YQ7kNvwFayjhI&_nc_oc=AdoqfxkRkJGcIhXQOZWoqk6G80iHtzsB195cN14BjNEOng4n-2V71LI_FsScSnfzC5I&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Lb8kTbnBVbOah_XpZlTZGg&_nc_ss=7a3a8&oh=00_Af0yQh8TcapzF5fV4Y-FX-cXYwzjDebZXl02inQAYBBo9Q&oe=69E9183F" 
          alt="Elegant Banquet Hall" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-gold uppercase tracking-[0.3em] font-semibold text-sm mb-4">Wyjątkowe Miejsce na Twoje Wydarzenie</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">
            Sala Bankietowa <br /> 
            <span className="text-white italic">Rubina</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-neutral-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tworzymy niezapomniane wspomnienia w sercu Krośniewic. Elegancja, smak i profesjonalizm, na które zasługujesz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-ruby text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-ruby-dark transition-all transform hover:scale-105 shadow-xl inline-block"
            >
              Sprawdź Terminy
            </a>
            <a 
              href="#services" 
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all inline-block"
            >
              Nasza Oferta
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/60">Przewiń</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

const Feature = (props: any) => {
  const { icon: Icon, title, description } = props;
  return (
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-3xl border border-gold/10 shadow-sm hover:shadow-xl transition-all group"
    >
      <div className="w-14 h-14 bg-ruby/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ruby transition-colors">
        <Icon className="text-ruby group-hover:text-white transition-colors" size={28} />
      </div>
      <h3 className="text-xl font-serif font-bold mb-3 text-neutral-800">{title}</h3>
      <p className="text-neutral-500 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Wesela",
      description: "Twoje wymarzone przyjęcie weselne w luksusowej oprawie. Zadbamy o każdy detal.",
      icon: Users
    },
    {
      title: "Komunie i Chrzciny",
      description: "Rodzinna atmosfera i menu dostosowane do najmłodszych gości.",
      icon: Utensils
    },
    {
      title: "Imprezy Firmowe",
      description: "Profesjonalne zaplecze na bankiety, szkolenia i integracje.",
      icon: Award
    },
    {
      title: "Jubileusze",
      description: "Uroczyste obchody ważnych chwil w gronie najbliższych.",
      icon: Calendar
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">Nasze Usługi</h2>
        <div className="h-1 w-20 bg-ruby mx-auto rounded-full mb-8" />
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Zajmujemy się kompleksową organizacją wszelkiego rodzaju przyjęć okolicznościowych. 
          Nasze wieloletnie doświadczenie gwarantuje najwyższą jakość usług.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Feature 
            key={index} 
            title={service.title} 
            description={service.description} 
            icon={service.icon} 
          />
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.9, opacity: 0 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden shadow-2xl z-10 relative"
          >
            <img 
              src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/476370712_890407776640630_7335800425536062313_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=BYRNmUH5Yn0Q7kNvwHwOPrQ&_nc_oc=AdrJjNMEbV-QqfLSAk1vDp5VIcTy-0LW6G3Pr8bJcQXpDVD71mHYleX4UwNwP4oFObI&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=DnCPTslEDH9rn9RRcis9hg&_nc_ss=7a3a8&oh=00_Af2_c932IrJbtytcb18ESORjOhfgH_LtIJE1OXoyUHYEvQ&oe=69E92CBF" 
              alt="Sala Rubina Interior" 
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-ruby/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-8 -left-8 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10" />
        </div>
        
        <div className="space-y-8">
          <span className="text-ruby font-bold uppercase tracking-widest text-sm">O nas</span>
          <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 leading-tight">
            Gdzie Pasja Spotyka się z <br />
            <span className="italic">Elegancją</span>
          </h2>
          <p className="text-neutral-600 leading-relaxed text-lg">
            Sala Bankietowa Rubina to wyjątkowe miejsce na mapie Krośniewic. Nasza sala została 
            zaprojektowana z myślą o najbardziej wymagających gościach, łącząc nowoczesne 
            udogodnienia z klasycznym szykiem. 
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl font-serif font-bold text-ruby mb-1">200+</h4>
              <p className="text-neutral-500 text-sm italic">Miejsc Siedzących</p>
            </div>
            <div>
              <h4 className="text-3xl font-serif font-bold text-ruby mb-1">10+</h4>
              <p className="text-neutral-500 text-sm italic">Lat Doświadczenia</p>
            </div>
          </div>
          <a 
            href="#services" 
            className="flex items-center gap-2 text-ruby font-semibold group hover:gap-4 transition-all inline-flex"
          >
            Dowiedz się więcej o sali <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const GalleryGrid = () => {
  const images = [
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/476274619_889185930096148_565106413422511359_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=CIbuDh-W6GkQ7kNvwFsCW_6&_nc_oc=Adps5-Mozw577hbngfXoWdLRH0pWbJ8Kmy3PV13KFRWgcYWxknjko8JXfYVh158Eb2s&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=f099ZRN9JbO4Xb9uoU_etQ&_nc_ss=7a3a8&oh=00_Af22Q_w5GJNfQpYysHzoaWyx36bhnRHdyBy4_JZnnbi_9g&oe=69E930EC",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/474137664_876930674655007_2983929383624611547_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=wl5-nR76t58Q7kNvwGIu_ha&_nc_oc=AdqJD7swZJllxPn9GRa0J9UoCNvLYblIu0evBR-7wNYEz_DOd1l-PEph8qnPqBZs0EM&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=OV3Y1tGenzirt5Cd7u2Miw&_nc_ss=7a3a8&oh=00_Af14ecXRawb2dCVDj8O5DbX9_uru_uhSqHQeVQUnjGotGQ&oe=69E92125",
    "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/472869055_870314018650006_43601720000152839_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Ym3C-MHb_agQ7kNvwHd0we8&_nc_oc=Adp29_-mSbXJf_8it00TNrb86k0vPi9Mwc9fqIB_TLcP76oqae_fMsJvTjWI2ktxEM0&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=y3VldCwCouKirgZ58LUzWQ&_nc_ss=7a3a8&oh=00_Af1RSY-1nDM8Nc6H42IEgQdHxHOnNeACsF110A8RNSbvrw&oe=69E921F1",
    "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/476256981_1552449008880418_1572362235621406448_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=1VPfJsZJ-n4Q7kNvwFcOt5T&_nc_oc=AdqjzNWv849TXVyXHprCFSwoAXJhLIafl-_uISgnbf06pD-cNHt3E7qjbrUN-C_marE&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=PoFuJ7uLrW26F1HQ2MeKLg&_nc_ss=7a3a8&oh=00_Af3zuzUVoXM7AwQz835301nhho0RPfvoc_lzPv6bvUWcWg&oe=69E91DE4",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/476283303_1552445855547400_8139535641135489348_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ETBmtuJWBqkQ7kNvwEbTMfn&_nc_oc=AdpEMQMLJlV-MB4ZvlUk12EQjhlJJV4hgC6NFoD1UjS4fdvmpvc4WBU99u_SsFSZx1Q&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=eeMG_AiPIXo7GDMcVTkLSg&_nc_ss=7a3a8&oh=00_Af3USaBRlm_6xx6Rcnwn8HUihtB_8QFZPw6WKTLd-r1sZg&oe=69E930D5",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/556484997_1063891352625604_8400413099198458728_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=9QSOgfOjshgQ7kNvwFJLZlz&_nc_oc=AdpyhF26exaqXoTaDCjKuZknOHfGC_nUypZgMPybfW26vhKRumg3Iu-OKS5fvTBjBJI&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=1gw1cLeVh0NkFFI_CqQNjg&_nc_ss=7a3a8&oh=00_Af3jqCW05JTtNpmt4iWOVbmlPS0gGttdcsmGSY69qPWbuA&oe=69E932AC"
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Galeria</h2>
          <p className="text-neutral-400">Podgląd naszych najpiękniejszych aranżacji.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-2xl aspect-square"
          >
            <img 
              src={src} 
              alt={`Gallery ${index}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-ruby/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-ruby font-bold uppercase tracking-widest text-sm block mb-4">Zapraszamy do kontaktu</span>
        <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8">Zaplanujmy Razem Twoje Wydarzenie</h2>
        
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-12 mt-12">
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 bg-ruby/10 rounded-2xl flex items-center justify-center text-ruby shrink-0">
              <MapPin size={28} />
            </div>
            <div>
              <h4 className="font-bold text-neutral-800 uppercase text-xs tracking-widest mb-1">Adres</h4>
              <p className="text-neutral-600">ul. Kolejowa 1, 99-340 Krośniewice, Polska</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 bg-ruby/10 rounded-2xl flex items-center justify-center text-ruby shrink-0">
              <Phone size={28} />
            </div>
            <div>
              <h4 className="font-bold text-neutral-800 uppercase text-xs tracking-widest mb-1">Telefon</h4>
              <a href="tel:609492661" className="text-neutral-600 hover:text-ruby transition-colors text-lg">609 492 661</a>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 bg-ruby/10 rounded-2xl flex items-center justify-center text-ruby shrink-0">
              <Mail size={28} />
            </div>
            <div>
              <h4 className="font-bold text-neutral-800 uppercase text-xs tracking-widest mb-1">Email</h4>
              <a href="mailto:salabankietowarubina@gmail.com" className="text-neutral-600 hover:text-ruby transition-colors">salabankietowarubina@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-6">
          <a 
            href="https://www.facebook.com/SalaBankietowaRUBINA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center text-ruby-dark hover:bg-ruby hover:text-white transition-all shadow-sm"
          >
            <Facebook size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-neutral-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 bg-ruby rounded-full flex items-center justify-center">
            <span className="text-cream font-serif text-sm font-bold">R</span>
          </div>
          <span className="font-serif text-xl font-semibold tracking-tight">Rubina</span>
        </div>
        <p className="text-neutral-500 text-sm mb-8">
          &copy; {new Date().getFullYear()} Sala Bankietowa Rubina. Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Anna Nowak",
      date: "2 tygodnie temu",
      text: "Wspaniałe miejsce! Organizowaliśmy tutaj wesele i jesteśmy zachwyceni. Jedzenie pyszne, obsługa na najwyższym poziomie, a sala prezentuje się przepięknie. Goście byli pod ogromnym wrażeniem.",
      rating: 5
    },
    {
      name: "Marek Kowalski",
      date: "Miesiąc temu",
      text: "Bardzo polecam Salę Rubina. Profesjonalne podejście do klienta, wszystko dopięte na ostatni guzik. Idealne miejsce na każdą uroczystość rodzinną.",
      rating: 5
    },
    {
      name: "Katarzyna Wiśniewska",
      date: "3 miesiące temu",
      text: "Najlepsza sala w okolicy! Pyszne jedzenie, bardzo miła atmosfera i pomocna obsługa. Na pewno wrócimy przy kolejnej okazji.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-ruby font-bold uppercase tracking-widest text-sm block mb-4">Opinie naszych Gości</span>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">Co mówią o nas na Facebooku</h2>
          <div className="h-1 w-20 bg-ruby mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-cream p-8 rounded-[32px] border border-gold/10 shadow-sm relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <motion.span 
                    key={i} 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="text-gold"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <p className="text-neutral-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="border-t border-gold/10 pt-4 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-neutral-900">{review.name}</h4>
                  <p className="text-neutral-400 text-xs">{review.date}</p>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <Facebook size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.facebook.com/SalaBankietowaRUBINA/reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ruby font-semibold hover:gap-4 transition-all"
          >
            Zobacz wszystkie opinie na Facebooku <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <main className="selection:bg-ruby selection:text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <GalleryGrid />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
