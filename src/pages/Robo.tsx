import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ArrowRight, ChevronLeft, ChevronRight, Check, Cpu, Briefcase, GraduationCap } from 'lucide-react';

export const Robo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      label: "PIONEERING PRECISION",
      title: "GenQuantis Alpha:\nThe Future of Service Robots",
      desc: "The world's first humanoid robot capable of autonomous battery swapping and complex social interaction. Engineered for intelligence, built for humanity.",
      image: "/robo1.png",
      btnText: "Learn More"
    },
    {
      label: "ADVANCED R&D",
      title: "Next-Gen AI Research Laboratory",
      desc: "Empowering the next generation of humanoid intelligence with precision engineering.",
      image: "/robo3.png",
      btnText: "Explore Lab"
    },
    {
      label: "LIFESTYLE INTEGRATION",
      title: "Human-Centric Service Solutions",
      desc: "Designed for the modern home, fostering empathy and assistance in everyday life.",
      image: "/robo4.png",
      btnText: "Discover Home AI"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const REDIRECT_URL = "https://genesys-quantis-robotics.netlify.app/";

  return (
    <div className="bg-black min-h-screen text-white font-inter selection:bg-primary/30">
      <Navbar />

      {/* Hero Carousel */}
      <section className="relative w-full h-[90vh] overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center pt-32 px-6 lg:px-24 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-3xl mt-12"
              >
                <p className="font-space text-[10px] font-bold text-primary mb-4 tracking-[0.4em] uppercase">
                  {slides[currentSlide].label}
                </p>
                <h1 className="font-space text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] whitespace-pre-line">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl font-light leading-relaxed">
                  {slides[currentSlide].desc}
                </p>
                <a
                  href={REDIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 bg-primary text-black px-10 py-5 rounded-sm font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-all shadow-[0_0_30px_rgba(66,140,252,0.3)]"
                >
                  Explore Platform
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="absolute bottom-12 left-6 lg:left-24 flex items-center gap-6 z-20">
          <button onClick={prevSlide} className="p-3 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1 transition-all duration-500 rounded-full ${currentSlide === idx ? 'w-12 bg-primary' : 'w-4 bg-white/20'}`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="p-3 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Application Scenarios: Bento Grid Style */}
      <section className="py-32 px-6 lg:px-24 max-w-[1600px] mx-auto">
        <div className="text-center mb-20">
          <div className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-6">Commercial Deployment</div>
          <h2 className="font-space text-4xl lg:text-6xl font-bold text-white mb-6">Humanoid Service Robot Scenarios</h2>
          <p className="text-white/40 max-w-2xl mx-auto font-light text-lg">Transforming commercial spaces through autonomous interaction and precise task execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[600px]">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 transition-all hover:border-primary/50 cursor-pointer">
            <img
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCjGfGu54qOfRmStPtE8L6G_lja-4kGBRdGMPLUvri2xUmxJk8_VoBJVlxVErn-gZmZorgLut_2DAXTXfumYpmlHLqsjmTpf_k9Ik_NYM45JCuPlFIGpm6oyFM8z6Ysyqe7GeWDtDRcB5OCFdCS0mSNg_b6klbsRjtkeqYDQLwA7dfqin69FedMgaUd6E4x-1ELb53kr0RccNItq2zNM-R6pXdVaQ2wk9hizKX-O5LB7HvaIy1wmzmXZJZlcRztd5wBPyJ0tW6Czpd"
              alt="Event Hosting"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="font-space text-[10px] font-bold text-primary mb-2 block tracking-widest uppercase">EXHIBITION</span>
              <h3 className="font-space text-2xl font-bold text-white">Event Hosting</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 transition-all hover:border-primary/50 lg:translate-y-12 cursor-pointer">
            <img
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATkcd6RYKybhnR-frcUSiSLIlBT6kj0JXJc7zFZJgjLa47-mIqOxWOxzxlfy6hseGa2nYJ_alTM8klH1Zam6SyrFns1iJ9Rpq1EfhAuN1GTvpbezxLxNTr9T-kbMmL28k_CU1UdBhYcDVbCcpM0USnPX7rhAFVhP4X4KDuNDpUd3N0ttG1V87lBIyPwSYkV1pifXHwelLX094-ysrQUv24BKx8V2ohDw6-6xQ7GtbZOVVdccQFAG7Inm0J5aqwpqrI6Ag_yOoIBcF6"
              alt="Guest Reception"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="font-space text-[10px] font-bold text-primary mb-2 block tracking-widest uppercase">SMART HOTEL</span>
              <h3 className="font-space text-2xl font-bold text-white">Guest Reception</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 transition-all hover:border-primary/50 cursor-pointer">
            <img
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYtsRmtK5gIjWLjOI0XwiuaOAV1m_HEoThN9azfzlDWT_wR2AAzfWqL4W6mpTbWmDe81MnMadzuASfw7JKiUsCPlPBjDzXbRtkMEQoFMFlq1zlqF_Om9rx4eEInX--VjUwHdBNgIiW5vKX08EA9ldpBPm06mjxCnl9219hrdVWPb4nn-9McZLtxG8sFXeyQWBoYT2rHRUEJeNlpCALxTK7KeoMDiAdn_nZnW6fRagZAQbl7lgyHVhmXXOJ3jmqiPo0tX8ERK_LBq3m"
              alt="Corporate Delivery"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="font-space text-[10px] font-bold text-primary mb-2 block tracking-widest uppercase">OFFICE</span>
              <h3 className="font-space text-2xl font-bold text-white">Corporate Delivery</h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 transition-all hover:border-primary/50 lg:translate-y-12 cursor-pointer">
            <img
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz7GTuFn2mhPE52POOgTGPEeCIkpzxcShQWKr7Y79tEGfQr71IRHpUkLKFhXsjpA_d2ZwfAwYPqEdpjV66SrEH188NxP4x4seanatebr1XKHNpJUQV1CTq6udQjzEqaZO6TI2x0STMWgh8vRo5SncH790-wDLST1a_UkgqFkfo0mEW9g9cy2fwID5QjV2fa2Z43f9Ov50QyRknENH_F7UYaJ-gHpCedCg8p5a6ZRJNmxK-DY1t1lKsBobvYgeo8jJZ5-lN2CYQIspL"
              alt="Smart Shopping"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="font-space text-[10px] font-bold text-primary mb-2 block tracking-widest uppercase">RETAIL</span>
              <h3 className="font-space text-2xl font-bold text-white">Smart Shopping</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Robots: Product Showcase */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-left border-l-4 border-primary pl-8">
            <h2 className="font-space text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight">Commercial Service Robots</h2>
            <p className="text-white/40 mt-4 text-lg font-light">Precision hardware meets intuitive AI software.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/[0.02] rounded-3xl p-10 backdrop-blur-3xl border border-white/10 flex flex-col items-center group transition-all hover:border-primary/30"
            >
              <img
                className="w-full aspect-square object-contain mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQoX9pK5RaeulinI1Rx4i_q6uoogZzys0gXPALETV2PP9yGUUlWkshH6HmQh6R0qrsY8a7gYrvvJhcPXxbw4opb3d_SWHKZRAstgeHxhUho-WBzINXuN1X2It4JkZaWBF_R7iEGgzTYSnr2VGUzKbG5qq4-i5SihHFJQueoezCNN6SiXKWOKlAayO49hGhUvum7ZaA0eEhxVim3tR7iXmdLknNl8oCdMHlsoCqWjgVa8lieBZ-SdqYi2f2jx4hvr-4NbMaVf-fCikV"
                alt="Cruiser CP"
              />
              <h3 className="font-space text-2xl font-bold text-white mb-2 uppercase tracking-tight">Mitra</h3>
              <p className="text-white/40 text-center mb-8 text-sm font-light">Interactive guide for high-traffic environments with multi-modal interaction.</p>
              <a href={REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase hover:text-white transition-colors">View Specs</a>
            </motion.div>
            {/* Product Card 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/[0.02] rounded-3xl p-10 backdrop-blur-3xl border border-white/10 flex flex-col items-center group transition-all hover:border-primary/30"
            >
              <img
                className="w-full aspect-square object-contain mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6DONzofO3AXqhIxdKC-5GWiUU2xH6_xorNxE7P5sL4UwdlkBeJKd55-dANECmv6MWIAsjBu-_fzcKfgqMocFDq6UjywALqdsZaJCxZeOJ1STu8-iTTIzUqiAlAVn6Z8KD0wGSzfKhARd83y8UqLRz93iBuVH9j_OzSJJWHlkRkxYxmmphxAhwCLM7l0hnw-Rz4KP_oX8cp-3tu1gXz8ez1e-9dfkVeBhuqwblbwyL7IpBUHE-8NVvnQN7fh1P-oEg2zZiYl39Ve0r"
                alt="ADR-100"
              />
              <h3 className="font-space text-2xl font-bold text-white mb-2 uppercase tracking-tight">Manu</h3>
              <p className="text-white/40 text-center mb-8 text-sm font-light">Autonomous Delivery Robot optimized for contactless indoor logistics.</p>
              <a href={REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase hover:text-white transition-colors">View Specs</a>
            </motion.div>
            {/* Product Card 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/[0.02] rounded-3xl p-10 backdrop-blur-3xl border border-white/10 flex flex-col items-center group transition-all hover:border-primary/30"
            >
              <img
                className="w-full aspect-square object-contain mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWWtLWBRyubgzzN4MKGE4SSBH6RtEH-tuCVkn02VWlfyqjJwUlGziTIhF6OP3X-78VK3myFaDqYD5V0qq9RyFHIWqZcGqDMjzNjIW-EiV8BP74st5CbY2gkMOOFGRlxmRqEwB84msZ1RcyXjicPMv-8u65vZQ3v8TtJ4qaccyxpM1hLKuJlSh-0-nxhKmoXCD0RMHDwXWfIM7hvkdJPS88hz6S7JKa6sIIxMXsbANQ6-wcRnbUeiLIvkKzIv90p4pouZJ8yRR6GChs"
                alt="Walker Lite"
              />
              <h3 className="font-space text-2xl font-bold text-white mb-2 uppercase tracking-tight">Jiva</h3>
              <p className="text-white/40 text-center mb-8 text-sm font-light">Compact bipedal navigation for research and educational purposes.</p>
              <a href={REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase hover:text-white transition-colors">View Specs</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-32 px-6 lg:px-24 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <span className="font-space text-[10px] font-bold text-primary tracking-[0.4em] block mb-6 uppercase">SMART LOGISTICS</span>
            <h2 className="font-space text-4xl lg:text-6xl font-bold mb-8 text-white uppercase leading-tight">Precision <br /><span className="text-white/40 font-light italic uppercase">in Motion</span></h2>
            <p className="font-inter text-lg text-white/40 mb-10 font-light leading-relaxed">
              GenQuantis logistics solutions leverage swarm intelligence and SLAM navigation to optimize warehouse throughput by up to 40%. Our autonomous fleet manages everything from heavy lifting to micro-sorting.
            </p>
            <div className="space-y-4 mb-12">
              {[
                "300kg Payload Capacity",
                "24/7 Autonomous Operation",
                "AI Fleet Management System"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-5 h-5 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="font-inter text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a
              href={REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-primary text-black px-12 py-5 rounded-sm font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-all shadow-[0_0_30px_rgba(66,140,252,0.2)]"
            >
              Explore Solutions
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                className="w-full h-auto grayscale opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARROyN5-xPuAaAEMUF50P6612Nxq7UB250gK-JqyjvoayMemcsXzoOscrlUH3a9cbPC2YASbCR3ushMbSulwWf3N9nLgEnWdwHdolmy3Ards7P7sKVqIGCO46SqmPN5DtejcMQlOiZjon-GdlLx5-xSvoTNL6p79-XL0Ke_03sWfxdvfnRjK_RureY_J-DladE5eRLEpl6YXaZbFJvnlNc1BLd5-z0t8YTvZR34_4xBVG1uO1JCJWYI1NVTvCdaR6vzS0ACERSax09"
                alt="Logistics Fleet"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Healthcare Solutions: Glassmorphism Cards */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="px-6 lg:px-24 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-6">Medical Support</div>
            <h2 className="font-space text-4xl lg:text-6xl font-bold text-white uppercase tracking-tight">Smart Elderly Care</h2>
            <p className="text-white/40 mt-4 text-lg font-light">Empowering care facilities with empathetic robotics.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Home Care",
                desc: "AI-powered monitoring and companionship for independent living.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvHe5bUKezsqgGGXg9skodHE1_YLzyrq2MF34Ws1ttW7WVzIYkNaKEhLdhluaUQ6MvA9VKJG-q_3aNIKX5krwEtvSqNf0zZfGFUw5sJBgdUJqVKTs265E6bGOdnhbKXqJ2PStdFZv1oO4qhjBgzJ5YnKyA03BuedWSxqu6Y8JrR7jXEOx7rskMMm3cJuBhxrHtc-J0JnVypCshmAFotifiM6hDjrcvzD7vJAfw6x3Bo7Y_QNC0R_KMqYX-pEQLt1OVX_7bnqqu3ET8"
              },
              {
                title: "Community Care",
                desc: "Autonomous navigation for large-scale assisted living communities.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvHe5bUKezsqgGGXg9skodHE1_YLzyrq2MF34Ws1ttW7WVzIYkNaKEhLdhluaUQ6MvA9VKJG-q_3aNIKX5krwEtvSqNf0zZfGFUw5sJBgdUJqVKTs265E6bGOdnhbKXqJ2PStdFZv1oO4qhjBgzJ5YnKyA03BuedWSxqu6Y8JrR7jXEOx7rskMMm3cJuBhxrHtc-J0JnVypCshmAFotifiM6hDjrcvzD7vJAfw6x3Bo7Y_QNC0R_KMqYX-pEQLt1OVX_7bnqqu3ET8"
              },
              {
                title: "Residential Care",
                desc: "Integrated systems for specialized residential nursing support.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvHe5bUKezsqgGGXg9skodHE1_YLzyrq2MF34Ws1ttW7WVzIYkNaKEhLdhluaUQ6MvA9VKJG-q_3aNIKX5krwEtvSqNf0zZfGFUw5sJBgdUJqVKTs265E6bGOdnhbKXqJ2PStdFZv1oO4qhjBgzJ5YnKyA03BuedWSxqu6Y8JrR7jXEOx7rskMMm3cJuBhxrHtc-J0JnVypCshmAFotifiM6hDjrcvzD7vJAfw6x3Bo7Y_QNC0R_KMqYX-pEQLt1OVX_7bnqqu3ET8"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/[0.02] p-8 rounded-3xl border border-white/10 flex flex-col backdrop-blur-3xl transition-all hover:border-primary/30"
              >
                <div className="mb-8 h-56 overflow-hidden rounded-2xl border border-white/5">
                  <img className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity" src={card.image} alt={card.title} />
                </div>
                <h3 className="font-space text-2xl font-bold text-white mb-4 uppercase tracking-tight">{card.title}</h3>
                <p className="text-white/40 mb-8 flex-grow text-sm font-light leading-relaxed">{card.desc}</p>
                <a href={REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-white/5 hover:bg-primary hover:text-black text-white text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all border border-white/10 hover:border-primary text-center">View More</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consumer Hardware Showcase */}
      {/* <section className="py-32 bg-black px-6 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-6">Retail Ecosystem</div>
          <h2 className="font-space text-4xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-8">Smart <span className="text-white/40 font-light italic uppercase">Hardware</span></h2>
          <p className="text-white/40 mb-20 max-w-2xl mx-auto font-light text-lg">Bringing GenQuantis precision into the heart of the modern home.</p>
          <div className="flex flex-wrap justify-center gap-16 lg:gap-32 items-end">
            <a href={REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="w-48 text-center group cursor-pointer">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                <img className="w-full relative z-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1hw3UHUR32kOtVIC8BHeJa3YHfdYHck6OP45XV2f-Mz0Ft5X4zEzZKQjGZmnczfnQCAH_PhWALEeRbbsvgihROCjFXumLFQMZLxcLrGz6-2-CXJxKByMSjfw6OBa7jS7f3iCfynDQa8C7y0VDicy36sQCI25QIGy1M5UZEE9oHElXnjn5x9pJOukSHNakJuiYXLJ4CLCb6BX66Yh7OAooGDboeDYe2I0dqunIfX1bJO_eV1uzgTgFPQ0qMR7xLSh5orI0Tdii53ik" alt="Alpha Lite" />
              </div>
              <h4 className="font-space text-xl font-bold text-white uppercase tracking-tight mb-2">Mitra</h4>
              <p className="text-[9px] font-bold text-primary tracking-[0.3em] uppercase">HUMANOID ROBOT</p>
            </a>
            <a href={REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="w-48 text-center group cursor-pointer">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                <img className="w-full relative z-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlK25EqMqSn988HWI2iAciwKpY48ltdGtw5yWl2G80l9mXiJ56-S5n5Xf4imHIOsYxvsMiXeA8g4kMtYhnDpbUGXfb2gwlJPZXjLYreIF6lEG45pfwCCqtElNxsVDPrWW-Qv42p-h7cqzZ-d4ZPwW4BGXSYsNEnuuftbp9UeDAS-cZ6XDmOTw_RVfYV9ClmQRDDylrC9iqP-uOA3tmRG_Af4ncgOi4FNkOROBami0czlYbseqq4tL5b1XALpKA_tUnryHrehlb4QXD" alt="UBPet" />
              </div>
              <h4 className="font-space text-xl font-bold text-white uppercase tracking-tight mb-2">Manu</h4>
              <p className="text-[9px] font-bold text-primary tracking-[0.3em] uppercase">SMART PET</p>
            </a>
            <a href={REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="w-48 text-center group cursor-pointer">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                <img className="w-full relative z-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDQSxC-CxoWpbnieIb9ohDW9x55dBvWTEc8VCIq07tDQ_J3vwMuUtfH34UEtWi4s-FqXJJFJF6l-iHE2Q3qmnLFbtc4b3D80gxXlL9uum7tgHsk7aGmXGWBHh_T-wfCCmdYvqq6_eyDsMU-mOP6rpQjrRb2bN1cVb7vos-oTOVQ8DCHQxypUTsDkkpMqEMkvs5fKQdfCwfYjpocRmlk77IkpqKjWZgrX3W4o8Fj4Dj0TUBozHhW6w84j6LSSE45otVZqhzYdq1tZ3d" alt="AIRROBO" />
              </div>
              <h4 className="font-space text-xl font-bold text-white uppercase tracking-tight mb-2">Jiva</h4>
              <p className="text-[9px] font-bold text-primary tracking-[0.3em] uppercase">SMART CLEANING</p>
            </a>
          </div>
        </div>
      </section> */}

      {/* AI Education Featured Section */}
      <section className="relative py-32 overflow-hidden bg-black text-white mt-20">
        <div className="absolute inset-0 opacity-30">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvNRr7mpIITFfH9LJT0NxA5PBfqJGky3i5EnHLwkysjJcBI6_GEUvBgdkdE3Xc2ek6WH95Z3QIFLCHTxCD1hRiGQ6s-HFP-Bgn8g5zzTWmRWZizMSDhIb2oesvXe-sb9Upnx28LnHXKBPhGBboi8wtc99M0QRJxaLf3D0bgONol_3IRKiSZjP8lYOCSq4aSoE1XNs9Llb2taLqL6pF5jf2_rKm1lNT3srDzLWdZOFTlhYDh-tldCyUo_D1xY7vr54gXpfkbemcpThZ"
            alt="AI Education"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

        <div className="relative z-10 px-6 lg:px-24 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-8">Empowering Future Layers</div>
            <h2 className="font-space text-4xl lg:text-7xl font-bold mb-8">AI Education Solution</h2>
            <p className="font-inter text-xl text-white/60 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Drawing from extensive AI industry experience and a proven track record of successful large-scale education projects, GenQuantis offers three major solutions to enhance AI literacy among youth.
            </p>
            <a
              href={REDIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 border border-white/20 hover:border-primary px-12 py-5 rounded-sm font-bold uppercase text-[10px] tracking-widest transition-all mx-auto bg-white/5 hover:bg-primary hover:text-black"
            >
              Explore Education Solutions
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Competitions: Immersive Experience */}
      <section className="py-32 bg-black text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-6">Global Arena</div>
            <h2 className="font-space text-4xl lg:text-6xl font-bold mb-6 uppercase tracking-tight">Arena of <span className="text-white/40 font-light italic">Innovation.</span></h2>
            <p className="text-white/40 text-lg font-light">From Silicon Valley to Tokyo, join the world's most prestigious robotics challenge.</p>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden aspect-[21/9] border border-white/10 group">
            <img
              alt="Robotics Competition"
              className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwWULwqpCLTp-fHkk7-knnZmdx1ubV_oVVva9oiQi-QXzWEEqlvokoMhQuBv821v5pZZ_QEGcD_X14Kyfj4CM3CYLzQNIutpNV9y4NNvSYw7AxzBR_-H_J_kDBOjyHR5w4XbQfAgsfSrSHARYPhnmPY6Dsh1tcZ7B1y9jSbhZMVdBMCuENRneRJK25Q-ixvIUTyJ8_l8VzaTfmZWU7maPUM0gT3RH7KgLk1Hpq-kjbk3pzPOSsXjxuuMt8IPrPd14BTAuu7EKVvFwN"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 flex flex-wrap justify-between items-end gap-8">
              <div className="bg-white/5 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/10 max-w-md">
                <h4 className="font-space text-2xl font-bold mb-4 uppercase tracking-tight text-white">Global Challenge 2024</h4>
                <p className="text-white/40 text-sm mb-8 font-light">Join 500+ elite teams solving environmental robotics challenges using the GenQuantis Alpha platform.</p>
                <a className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase underline underline-offset-8 decoration-primary/30 hover:text-white transition-colors" href={REDIRECT_URL} target="_blank" rel="noopener noreferrer">Register interest</a>
              </div>
              <div className="flex gap-6">
                <div className="text-center px-10 py-8 rounded-[2rem] bg-white/[0.02] backdrop-blur-sm border border-white/10">
                  <div className="text-4xl font-bold font-space text-white">50+</div>
                  <div className="text-[9px] uppercase tracking-widest text-primary mt-2 font-bold">Countries</div>
                </div>
                <div className="text-center px-10 py-8 rounded-[2rem] bg-white/[0.02] backdrop-blur-sm border border-white/10">
                  <div className="text-4xl font-bold font-space text-white">$2M</div>
                  <div className="text-[9px] uppercase tracking-widest text-primary mt-2 font-bold">Prize Pool</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA: Dark Premium */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            alt="Research Lab"
            className="w-full h-full object-cover opacity-20 grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANVMwb3VNo7cqqK__Ng7z9c7h2u0T8WELC6eHQNZZJKAl9aDeQl4kakjZB9dCOJ2vYy8LgBZt1ggbUyRlrN4QsJOB13pcEJ2CccLegI2OqPdcIQo9vTNqKvVS3XMQm5r4DRmv-iQxyYRwdKvK6HyApVxPRzhbz5sIofNSBDNWjgC0Wp0Eza0Th2314Kl4h4u1uOnTCSMLqSM7uNEMGHkTJ-gd8razrPZWXgsdz4pIxcewXRTSP96vXQR31WI4mjEmcDBfGU3fxLiDq"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-8">Strategic Partnership</div>
            <h2 className="font-space text-5xl lg:text-8xl font-bold text-white mb-8 leading-[0.9] uppercase tracking-tighter">Build the labs <br /><span className="text-primary font-light italic">of the future.</span></h2>
            <p className="text-white/40 text-xl mb-12 leading-relaxed font-light max-w-2xl">
              Partner with us to deploy state-of-the-art AI infrastructure in your institution. From turnkey hardware to certified curriculum, we provide the complete blueprint for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href={REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-primary text-black rounded-sm font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-white transition-all shadow-[0_0_30px_rgba(66,140,252,0.3)] text-center">Partner With Us</a>
              <a href={REDIRECT_URL} target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-white/5 text-white border border-white/20 rounded-sm font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all text-center">Download Brochure</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
