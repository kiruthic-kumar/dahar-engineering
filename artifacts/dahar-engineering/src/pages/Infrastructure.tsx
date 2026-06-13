import heroImg3 from "@assets/hero-cnc-3.jpg_1781200035734.jpeg";
import heroCnc1 from "@assets/hero-cnc-1.jpg_1781200035734.jpg";
import { CheckCircle2 } from "lucide-react";
import { RevealSection } from "@/components/RevealSection";

const capabilities = [
  {
    title: "Jigs & Fixtures",
    desc: "Custom-designed and manufactured jigs and fixtures to improve your production efficiency, accuracy, and repeatability. Built to exact specifications.",
  },
  {
    title: "Tool Works",
    desc: "Precision tool making services supporting various manufacturing processes. High durability tooling solutions for demanding industrial environments.",
  },
  {
    title: "Job Works",
    desc: "Specialized machining job works for custom components. Whether batch production or specialized single-piece prototyping, we deliver with accuracy.",
  },
];

const equipment = [
  "Advanced CNC Machining Centers",
  "Precision Conventional Lathes & Milling Machines",
  "Dedicated Quality Control Laboratory",
  "Efficient Material Handling Systems",
];

export default function Infrastructure() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImg3})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-950/80" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-blue-400 mb-4 flex items-center justify-center gap-2.5">
            <span className="w-7 h-0.5 bg-blue-400 inline-block" />
            Our Facilities
            <span className="w-7 h-0.5 bg-blue-400 inline-block" />
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">
            Infrastructure &amp; Capabilities
          </h1>
          <p className="text-base md:text-xl text-blue-100/85 max-w-xl mx-auto font-light leading-relaxed">
            State-of-the-art facilities equipped to handle complex engineering challenges.
          </p>
        </div>
      </div>

      {/* Manufacturing Excellence */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <RevealSection>
              <p className="section-overline">Manufacturing Excellence</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Precision-first manufacturing facility
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                Our manufacturing facility in Coimbatore is designed for optimal workflow and precision output. We maintain a clean, organized, and safety-first environment that allows our skilled machinists to focus entirely on the quality of their work.
              </p>
              <ul className="space-y-4">
                {equipment.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-sm bg-primary/5 border border-primary/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:border-primary transition-all duration-250">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors duration-250" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </RevealSection>

            <RevealSection delay={150}>
              <div className="img-hover-zoom relative h-[280px] sm:h-[420px] md:h-[520px] rounded-sm overflow-hidden shadow-2xl">
                <img
                  src={heroImg3}
                  alt="CNC Machining at Dahar Engineering"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <RevealSection>
              <div className="img-hover-zoom rounded-sm overflow-hidden h-48 md:h-64 shadow-md">
                <img
                  src={heroCnc1}
                  alt="CNC Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealSection>
            <RevealSection delay={120}>
              <div className="img-hover-zoom rounded-sm overflow-hidden h-48 md:h-64 shadow-md">
                <img
                  src={heroImg3}
                  alt="Precision Machining"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Services & Capabilities */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-12 md:mb-16">
            <p className="section-overline justify-center">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Services &amp; Capabilities</h2>
            <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
              Comprehensive manufacturing services tailored to your engineering needs.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {capabilities.map((cap, i) => (
              <RevealSection key={i} delay={i * 90}>
                <div className="bg-white border border-gray-100 rounded-sm p-7 md:p-9 hover:shadow-xl hover:-translate-y-1 transition-all duration-350 group h-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left" />
                  <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <span className="text-white font-heading font-bold text-lg">{i + 1}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{cap.title}</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">{cap.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
