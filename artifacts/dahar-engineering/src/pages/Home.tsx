import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Settings, ShieldCheck, Clock, Target, Flag, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { RevealSection } from "@/components/RevealSection";
import heroCnc1 from "@assets/hero-cnc-1.jpg_1781200035734.jpg";
import heroCnc2 from "@assets/hero-cnc-2.jpg_1781200035733.jpeg";
import heroCnc3 from "@assets/hero-cnc-3.jpg_1781200035734.jpeg";
import statsBg from "@assets/stats-background.jpg_1781200058074.jpg";
import aboutUsImg from "@assets/aboutus.webp_1781244483406.png";

const heroImages = [heroCnc1, heroCnc2, heroCnc3];

import brassBush from "@assets/brass-bush.webp_1781200021679.png";
import brassBearing from "@assets/brass-bearing.webp_1781200021679.png";
import jackScrew from "@assets/jack-screw.webp_1781200021680.png";
import leadScrew from "@assets/lead-screw.webp_1781200021680.png";
import threadedRod from "@assets/threaded-rod.webp_1781200021680.png";

const products = [
  { name: "Threaded Rod", image: threadedRod, desc: "High-tensile threaded rods for structural stability." },
  { name: "Lead Screw", image: leadScrew, desc: "Precision lead screws for linear motion systems." },
  { name: "Jack Screw", image: jackScrew, desc: "Robust jack screws for leveling and lifting." },
  { name: "Brass Bearing", image: brassBearing, desc: "Durable brass bearings with high wear resistance." },
  { name: "Brass Bush", image: brassBush, desc: "Custom-machined brass bushes for industrial use." },
];

const stats = [
  { number: "7+", label: "Years Experience", sub: "Proven industrial expertise", icon: Clock },
  { number: "8+", label: "Product Categories", sub: "Precision components", icon: Settings },
  { number: "100%", label: "Quality Focus", sub: "Rigorous inspection", icon: ShieldCheck },
  { number: "24/7", label: "Customer Assistance", sub: "Always available", icon: CheckCircle2 },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide((index + heroImages.length) % heroImages.length);
  }, []);

  const goNext = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const goPrev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(goNext, 3000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPaused, goNext]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {heroImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              opacity: index === currentSlide ? 1 : 0,
              zIndex: 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/65 to-primary/90 z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent z-10" />

        {/* Left arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-4 md:left-8 z-30 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right arrow */}
        <button
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-4 md:right-8 z-30 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Hero content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-sm px-4 py-1.5 mb-6 animate-in fade-in duration-700">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-blue-200 text-xs font-semibold tracking-widest uppercase">Precision Engineering &amp; Manufacturing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-[1.08] mb-5 md:mb-7 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Built with Precision.<br />
            <span className="text-blue-300">Driven by Quality.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto font-light mb-8 md:mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Coimbatore's trusted partner for precision-engineered components, jigs, fixtures, and industrial solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Link
              href="/products"
              className="inline-flex justify-center items-center gap-2 px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-bold rounded-sm text-primary bg-white hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center gap-2 px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-bold rounded-sm text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-200 w-full sm:w-auto"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-400 ${
                index === currentSlide
                  ? "bg-white w-8 h-2"
                  : "bg-white/35 hover:bg-white/60 w-2 h-2"
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 md:right-10 z-30 hidden md:flex flex-col items-center gap-1.5 opacity-50">
          <span className="text-white text-[10px] tracking-widest uppercase font-medium writing-mode-vertical rotate-90">Scroll</span>
          <ChevronDown className="w-4 h-4 text-white animate-bounce" />
        </div>
      </section>

      {/* About Brief */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <RevealSection>
              <p className="section-overline">About Dahar Engineering</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Delivering reliable engineering solutions since 2019.
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-5 leading-relaxed">
                Dahar Engineering Company is a Coimbatore-based engineering and manufacturing firm specializing in the design and production of precision industrial components.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                We deliver reliable solutions through quality manufacturing, skilled workmanship, and customer-focused service, providing expertly machined parts that sit inside machinery all over India.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all duration-200 text-sm md:text-base group">
                Read our full story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </RevealSection>

            <RevealSection delay={150} className="reveal-delay-100">
              <div className="img-hover-zoom rounded-sm overflow-hidden shadow-2xl border border-gray-100 relative">
                <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm">
                  Est. 2019
                </div>
                <img
                  src={aboutUsImg}
                  alt="Dahar Engineering — Factory Floor"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${statsBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-950/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-sm p-6 md:p-8 text-center group hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-sm bg-blue-500/15 border border-blue-400/20 mb-4 md:mb-5 group-hover:bg-blue-500/25 transition-colors duration-300">
                  <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-blue-300" />
                </div>
                <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-1.5">{stat.number}</div>
                <div className="text-blue-200 font-semibold tracking-wider uppercase text-[10px] md:text-xs mb-1">{stat.label}</div>
                <div className="text-blue-300/50 text-xs hidden md:block">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-12 md:mb-16">
            <p className="section-overline justify-center">Our Direction</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Vision &amp; Mission</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <RevealSection>
              <div className="bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-xl transition-all duration-400 group h-full overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary to-blue-600" />
                <div className="p-7 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-sm bg-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      <Target className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-primary/50 mb-0.5">Where we aim</p>
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Our Vision</h3>
                    </div>
                  </div>
                  <div className="w-10 h-0.5 bg-blue-200 mb-5" />
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    To be a trusted leader in precision engineering and manufacturing, delivering innovative, high-quality industrial components and engineering solutions that set the benchmark for reliability, performance, and customer satisfaction.
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-xl transition-all duration-400 group h-full overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
                <div className="p-7 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-sm bg-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      <Flag className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-primary/50 mb-0.5">How we operate</p>
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Our Mission</h3>
                    </div>
                  </div>
                  <div className="w-10 h-0.5 bg-blue-200 mb-5" />
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    To deliver precision-engineered products through skilled workmanship, quality manufacturing practices, and a customer-focused approach. We are committed to providing reliable solutions, maintaining high quality standards, ensuring timely delivery, and building long-term relationships with our customers.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="section-overline justify-center">Our Offerings</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Featured Precision Products</h2>
            <p className="text-gray-500 text-base md:text-lg">
              Manufactured to exacting standards for high-performance industrial applications.
            </p>
          </RevealSection>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {products.map((product, idx) => (
              <RevealSection key={idx} delay={idx * 60}>
                <div className="group bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-350 hover:-translate-y-1.5 h-full">
                  <div className="aspect-square bg-gray-50 flex items-center justify-center p-5 md:p-7 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 group-hover:from-primary/3 group-hover:to-primary/8 transition-all duration-400 z-10" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain w-full h-full mix-blend-darken transform group-hover:scale-108 transition-transform duration-500 relative z-0"
                    />
                  </div>
                  <div className="p-3.5 md:p-5 border-t border-gray-100 group-hover:border-blue-50 transition-colors">
                    <h4 className="font-heading font-bold text-gray-900 mb-1.5 text-sm md:text-base group-hover:text-primary transition-colors leading-tight">{product.name}</h4>
                    <p className="text-xs md:text-sm text-gray-400 line-clamp-2 hidden sm:block leading-relaxed">{product.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="mt-10 md:mt-14 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary text-primary font-bold rounded-sm hover:bg-primary hover:text-white transition-all duration-250 text-sm md:text-base shadow-sm hover:shadow-md group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-900/30 blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RevealSection>
            <p className="section-overline justify-center !text-blue-400 before:!bg-blue-400">Get Started</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-5 md:mb-6 leading-tight">
              Ready to discuss your<br className="hidden md:block" /> engineering requirements?
            </h2>
            <p className="text-base md:text-xl text-blue-100/80 mb-8 md:mb-10 font-light max-w-2xl mx-auto">
              Contact us today for a quote or to learn more about our precision manufacturing capabilities.
            </p>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center gap-2.5 px-8 py-4 md:px-10 md:py-4.5 text-base md:text-lg font-bold rounded-sm text-primary bg-white hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
