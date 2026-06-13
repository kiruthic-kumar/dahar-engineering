import { Factory, Target, Shield, Users } from "lucide-react";
import { RevealSection } from "@/components/RevealSection";
import heroImg from "@assets/hero-cnc-2.jpg_1781200035733.jpeg";
import aboutUsImg from "@assets/aboutus.webp_1781245313586.png";

const coreValues = [
  { icon: Target, title: "Precision", desc: "Exacting tolerances and meticulous attention to detail in every component we manufacture." },
  { icon: Shield, title: "Quality", desc: "Rigorous inspection processes ensuring 100% reliable outputs for every client." },
  { icon: Factory, title: "Capability", desc: "Advanced machinery operated by highly skilled and experienced technicians." },
  { icon: Users, title: "Partnership", desc: "Building long-term relationships through consistent delivery and earned trust." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-blue-400 mb-4 flex items-center gap-2.5">
            <span className="w-7 h-0.5 bg-blue-400 inline-block" />
            Company Background
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">About Us</h1>
          <p className="text-base md:text-xl text-blue-100/85 max-w-xl font-light leading-relaxed">
            A legacy of precision, built on trust and engineering excellence since 2019.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <RevealSection className="order-2 lg:order-1">
              <p className="section-overline">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Coimbatore's trusted precision manufacturing partner
              </h2>
              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  Dahar Engineering Company is a Coimbatore-based engineering and manufacturing company specializing in the design and production of precision industrial components. Since 2019, we have been delivering reliable engineering solutions through quality manufacturing, skilled workmanship, and customer-focused service.
                </p>
                <p>
                  Our expertise spans across a wide range of industrial applications, providing crucial components that keep machinery running smoothly across India. We believe that precision is not just a metric, but a philosophy that guides every cut, every turn, and every inspection on our factory floor.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={150} className="order-1 lg:order-2">
              <div className="img-hover-zoom rounded-sm overflow-hidden shadow-2xl border border-gray-100 relative">
                <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm shadow-lg">
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

      {/* Core Values */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-12 md:mb-16">
            <p className="section-overline justify-center">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Our Core Focus</h2>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {coreValues.map((item, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="bg-white border border-gray-100 rounded-sm p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-350 group h-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left" />
                  <div className="w-11 h-11 md:w-13 md:h-13 bg-primary/5 border border-primary/10 text-primary rounded-sm flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-base md:text-lg font-heading font-bold text-gray-900 mb-2.5 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-12 md:mb-16">
            <p className="section-overline justify-center">Strategic Direction</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Vision &amp; Mission</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <RevealSection>
              <div className="relative pl-6 md:pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-blue-400 rounded-full" />
                <p className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-2">Our Goal</p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-5">Vision</h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                  To be a trusted leader in precision engineering and manufacturing, delivering innovative, high-quality industrial components and engineering solutions that set the benchmark for reliability, performance, and customer satisfaction.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="relative pl-6 md:pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-300 rounded-full" />
                <p className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-2">Our Purpose</p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-5">Mission</h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                  Our mission is to deliver precision-engineered products through skilled workmanship, quality manufacturing practices, and a customer-focused approach.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  We are committed to providing reliable solutions, maintaining high quality standards, ensuring timely delivery, and building long-term relationships with our customers.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
}
