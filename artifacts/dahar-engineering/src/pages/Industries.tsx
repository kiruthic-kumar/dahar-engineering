import { CarFront, Plane, Tractor, HeartPulse, Building2, Wrench } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      name: "Automotive",
      icon: CarFront,
      desc: "High-volume precision components built to withstand extreme mechanical stress and wear."
    },
    {
      name: "Aerospace",
      icon: Plane,
      desc: "Parts machined to ultra-tight tolerances using specialized alloys for critical flight systems."
    },
    {
      name: "Heavy Machinery",
      icon: Wrench,
      desc: "Robust shafts, screws, and fasteners designed for heavy load-bearing and industrial equipment."
    },
    {
      name: "Construction",
      icon: Building2,
      desc: "Durable structural components, threaded rods, and hardware for infrastructure projects."
    },
    {
      name: "Agriculture",
      icon: Tractor,
      desc: "Wear-resistant bushes and bearings tailored for agricultural implements and tractors."
    },
    {
      name: "Medical Equipment",
      icon: HeartPulse,
      desc: "Clean-environment machined parts requiring exceptional precision and specific material finishes."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Providing mission-critical components across diverse sectors.
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Versatile Engineering Solutions</h2>
            <p className="text-lg text-gray-600">
              Our precision components are the silent workhorses inside machinery across multiple industries. We understand the specific material and tolerance requirements unique to each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <div key={idx} className="group bg-gray-50 rounded-sm p-10 border border-gray-100 hover:bg-primary transition-colors duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 text-primary group-hover:text-white group-hover:bg-white/20 transition-colors">
                  <ind.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">{ind.name}</h3>
                <p className="text-gray-600 group-hover:text-blue-100 transition-colors leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
