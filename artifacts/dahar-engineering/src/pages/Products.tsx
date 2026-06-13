import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, FileText, Send } from "lucide-react";
import { Link } from "wouter";
import heroCnc2 from "@assets/hero-cnc-2.jpg_1781200035733.jpeg";

import tr1 from "@assets/threaded-rod-1.webp_1781253371493.png";
import tr2 from "@assets/threaded-rod-2.webp_1781253371493.png";
import tr3 from "@assets/threaded-rod-3.webp_1781253371494.png";
import tr4 from "@assets/threaded-rod-4.webp_1781253371494.png";
import tr5 from "@assets/threaded-rod-5.webp_1781253371495.png";
import tr6 from "@assets/threaded-rod-6.webp_1781253371495.png";
import tr7 from "@assets/threaded-rod-7.webp_1781253371496.png";
import ls1 from "@assets/lead-screw1.webp_1781325687771.png";
import ls2 from "@assets/lead-screw2.webp_1781325687770.png";
import ls3 from "@assets/lead-screw3.webp_1781325687770.png";
import ls4 from "@assets/lead-screw4.webp_1781325687770.png";
import js1 from "@assets/jack-screw1.webp_1781325687770.png";
import js2 from "@assets/jack-screw2.webp_1781325687769.png";
import ln1 from "@assets/lock-nut1.webp_1781325687769.png";
import ln2 from "@assets/lock-nut2.webp_1781325687769.png";
import bb1 from "@assets/brass-bearing1.webp_1781325687769.png";
import bb2 from "@assets/brass-bearing2.webp_1781325687768.png";
import bbu1 from "@assets/brass-bush1.webp_1781325687768.png";
import ms1 from "@assets/machined-shaft1.webp_1781325687768.png";
import ssb1 from "@assets/stainless-steel-bolt1.webp_1781325687767.png";

type Spec = { label: string; value: string };

type Product = {
  id: string;
  name: string;
  image: string;
  shortDesc: string;
  description: string;
  specs: Spec[];
};

type Category = {
  id: string;
  name: string;
  tagline: string;
  products: Product[];
};

const categories: Category[] = [
  {
    id: "threaded-rod",
    name: "Threaded Rod",
    tagline: "Precision-machined rods for industrial fastening and structural applications.",
    products: [
      {
        id: "tr-1",
        name: "0.5 Inch MS Trapezoidal Thread Rod",
        image: tr1,
        shortDesc: "EN8 mild steel trapezoidal threaded rod for construction and industrial use.",
        description:
          "Precision-engineered mild steel trapezoidal threaded rod designed for construction and industrial applications. Manufactured using EN8 steel for strength, durability, and corrosion resistance.",
        specs: [
          { label: "Size / Diameter", value: "0.5 inch" },
          { label: "Steel Grade", value: "EN 8" },
          { label: "Material", value: "Mild Steel" },
          { label: "Usage / Application", value: "Construction" },
          { label: "Surface Treatment", value: "Hot Rolled" },
          { label: "Corrosion Resistance", value: "Yes" },
          { label: "Length", value: "1 Feet" },
        ],
      },
      {
        id: "tr-2",
        name: "1 Feet Mild Steel Threaded Rod",
        image: tr2,
        shortDesc: "High-quality polished mild steel threaded rod for outdoor and industrial fastening.",
        description:
          "High-quality mild steel threaded rod suitable for outdoor and industrial applications requiring reliable fastening and durability.",
        specs: [
          { label: "Material", value: "Mild Steel" },
          { label: "Usage / Application", value: "Outdoor" },
          { label: "Size", value: "1 Feet (L)" },
          { label: "Screw Thread Length", value: "30 mm" },
          { label: "Shape", value: "Cylindrical" },
          { label: "Screw Head", value: "Round" },
          { label: "Finishing", value: "Polished" },
        ],
      },
      {
        id: "tr-3",
        name: "10 Inch Acme Screw Threaded Rod",
        image: tr3,
        shortDesc: "Precision acme screw threaded rod for outdoor and engineering applications.",
        description:
          "Precision acme screw threaded rod manufactured for outdoor and engineering applications where smooth operation and durability are required.",
        specs: [
          { label: "Diameter", value: "8 mm" },
          { label: "Usage / Application", value: "Outdoor" },
          { label: "Size", value: "10 Inch (L)" },
          { label: "Material", value: "Mild Steel" },
          { label: "Shape", value: "Cylindrical" },
          { label: "Finishing", value: "Polished" },
        ],
      },
      {
        id: "tr-4",
        name: "7 Inch GI Threaded Rod",
        image: tr4,
        shortDesc: "Galvanised iron threaded rod for corrosion-resistant industrial applications.",
        description:
          "Galvanised iron threaded rod designed for corrosion resistance and long service life in industrial applications.",
        specs: [
          { label: "Material", value: "Galvanised Iron" },
          { label: "Diameter", value: "4 mm" },
          { label: "Corrosion Resistance", value: "Yes" },
          { label: "Size", value: "7 Inch (L)" },
          { label: "Shape", value: "Cylindrical" },
          { label: "Finishing", value: "Polished" },
        ],
      },
      {
        id: "tr-5",
        name: "25 Inch Mild Steel Threaded Rod",
        image: tr5,
        shortDesc: "Long-length mild steel threaded rod for fastening and household repair applications.",
        description:
          "Long-length mild steel threaded rod engineered for fastening and repair applications requiring strength and reliability.",
        specs: [
          { label: "Shape", value: "Round" },
          { label: "Usage / Application", value: "Household Repair" },
          { label: "Material", value: "Mild Steel" },
          { label: "Color", value: "Silver" },
          { label: "Length", value: "25 Inch" },
        ],
      },
      {
        id: "tr-6",
        name: "8 Inch GI Threaded Rod",
        image: tr6,
        shortDesc: "High-performance galvanised iron threaded rod with corrosion resistance.",
        description:
          "High-performance galvanised iron threaded rod offering corrosion resistance and dependable industrial performance.",
        specs: [
          { label: "Material", value: "Galvanised Iron" },
          { label: "Diameter", value: "2 mm" },
          { label: "Corrosion Resistance", value: "Yes" },
          { label: "Size", value: "8 Inch (L)" },
          { label: "Shape", value: "Cylindrical" },
          { label: "Finishing", value: "Polished" },
        ],
      },
      {
        id: "tr-7",
        name: "8 mm Trapezoidal Thread Lead Screw Rod",
        image: tr7,
        shortDesc: "Stainless steel lead screw rod converting rotary motion to linear for automation.",
        description:
          "Precision stainless steel lead screw rod designed to convert rotary motion into linear motion for automation and engineering applications.",
        specs: [
          { label: "Diameter", value: "8 mm" },
          { label: "Material", value: "Stainless Steel" },
          { label: "Usage / Application", value: "To Translate Turning Motion Into Linear Motion" },
          { label: "Pattern", value: "Threaded" },
          { label: "Tolerance", value: "0.05 mm" },
          { label: "Screw Pitch", value: "72 mm" },
        ],
      },
    ],
  },
  {
    id: "lead-screw",
    name: "Lead Screw",
    tagline: "High-precision lead screws engineered for smooth, reliable linear motion.",
    products: [
      {
        id: "ls-1",
        name: "13 Inch Stainless Steel Lead Screw",
        image: ls1,
        shortDesc: "Stainless steel lead screw designed for smooth and reliable linear motion applications.",
        description:
          "Stainless steel lead screw designed for smooth and reliable linear motion applications.",
        specs: [
          { label: "Diameter", value: "15 mm" },
          { label: "Material", value: "Stainless Steel" },
          { label: "Size", value: "13 Inch" },
          { label: "Color", value: "Silver" },
          { label: "Shape", value: "Cylindrical" },
        ],
      },
      {
        id: "ls-2",
        name: "1.5 Inch Stainless Steel Lead Screw",
        image: ls2,
        shortDesc: "Compact stainless steel lead screw for machine linkage and precision motion systems.",
        description:
          "Compact stainless steel lead screw suitable for machine linkage and precision motion systems.",
        specs: [
          { label: "Diameter", value: "8 mm" },
          { label: "Material", value: "Stainless Steel" },
          { label: "Size", value: "1.5 Inch" },
          { label: "Color", value: "Silver" },
          { label: "Shape", value: "Cylindrical" },
          { label: "Usage / Application", value: "As A Linkage In A Machine" },
        ],
      },
      {
        id: "ls-3",
        name: "3 Inch Ball Lead Screw",
        image: ls3,
        shortDesc: "Precision ball lead screw designed for efficient force transmission and linear movement.",
        description:
          "Precision ball lead screw designed for efficient force transmission and linear movement.",
        specs: [
          { label: "Size", value: "3 Inch" },
          { label: "Diameter", value: "15 mm" },
          { label: "Material", value: "Stainless Steel" },
          { label: "Color", value: "Silver, Golden Base" },
          { label: "Usage / Application", value: "To Create Large Forces" },
        ],
      },
      {
        id: "ls-4",
        name: "5 Inch Ball Lead Screw",
        image: ls4,
        shortDesc: "High-quality ball lead screw manufactured for accurate motion control applications.",
        description:
          "High-quality ball lead screw manufactured for accurate motion control applications.",
        specs: [
          { label: "Size", value: "5 Inch" },
          { label: "Diameter", value: "8 mm" },
          { label: "Material", value: "Stainless Steel" },
          { label: "Color", value: "Silver, Golden Base" },
          { label: "Usage / Application", value: "To Create Large Forces" },
        ],
      },
    ],
  },
  {
    id: "jack-screw",
    name: "Jack Screw",
    tagline: "Robust jack screws for pushing, pulling, tensioning, and lifting industrial loads.",
    products: [
      {
        id: "js-1",
        name: "1.5 Inch Mild Steel Jack Screw",
        image: js1,
        shortDesc: "Mild steel jack screw for pushing, pulling, tensioning, and locking applications.",
        description:
          "Mild steel jack screw designed for pushing, pulling, tensioning, and locking applications.",
        specs: [
          { label: "Screw Length", value: "1.5 Inch" },
          { label: "Screw Material", value: "Mild Steel" },
          { label: "Diameter", value: "M2 (2 mm)" },
          { label: "Screw Head", value: "Flat" },
          { label: "Usage / Application", value: "Push, Pull, Tension, Lock" },
        ],
      },
      {
        id: "js-2",
        name: "200 mm Mild Steel Jack Screw",
        image: js2,
        shortDesc: "Heavy-duty mild steel jack screw suitable for lifting moderate and heavy loads.",
        description:
          "Heavy-duty mild steel jack screw suitable for lifting moderate and heavy loads.",
        specs: [
          { label: "Material", value: "Mild Steel" },
          { label: "Size", value: "200 x 30 mm (L x W)" },
          { label: "Shape", value: "Round" },
          { label: "Type", value: "Standard Beds" },
          { label: "Finishing", value: "Polished" },
          { label: "Usage", value: "To Lift Moderate And Heavy Weights" },
        ],
      },
    ],
  },
  {
    id: "lock-nut",
    name: "Lock Nut",
    tagline: "Precision-engineered lock nuts for secure fastening in industrial and automotive applications.",
    products: [
      {
        id: "ln-1",
        name: "Mild Steel Jack Lock Nut Set",
        image: ln1,
        shortDesc: "Precision mild steel lock nut set for secure fastening in demanding applications.",
        description:
          "Precision-engineered mild steel lock nut set designed for secure fastening applications.",
        specs: [
          { label: "Material", value: "Mild Steel" },
          { label: "Nut Type", value: "Broaching" },
          { label: "Surface Finishing", value: "Polished" },
          { label: "Colour", value: "Silver" },
          { label: "Usage", value: "Automotive, Aerospace, Agriculture" },
          { label: "Hardness", value: "60 HRC" },
        ],
      },
      {
        id: "ln-2",
        name: "Stainless Steel Lock Nut Set",
        image: ln2,
        shortDesc: "Stainless steel self-locking lock nut set for bearing and shaft assembly applications.",
        description:
          "High-quality stainless steel lock nut set manufactured for secure locking and bearing applications.",
        specs: [
          { label: "Material", value: "Stainless Steel" },
          { label: "Nut Type", value: "Broaching" },
          { label: "Self Locking Mechanism", value: "Yes" },
          { label: "Inner Diameter", value: "4 mm" },
          { label: "Color", value: "Silver And Golden" },
          { label: "Usage / Application", value: "Locate Bearings Onto A Shaft" },
        ],
      },
    ],
  },
  {
    id: "brass-bearing",
    name: "Brass Bearing",
    tagline: "Wear-resistant brass bearings for smooth, low-friction rotating assemblies.",
    products: [
      {
        id: "bb-1",
        name: "20 mm Golden Brass Bearing",
        image: bb1,
        shortDesc: "High-quality brass bearing for smooth operation and reliable industrial performance.",
        description:
          "High-quality brass bearing designed for smooth operation and reliable performance in industrial applications.",
        specs: [
          { label: "Inner Diameter", value: "20 mm" },
          { label: "Material", value: "Brass" },
          { label: "Length", value: "1.500 Inch" },
          { label: "Surface Finish", value: "Polished" },
          { label: "Tensile Strength", value: "350 MPa" },
          { label: "Color", value: "Golden" },
        ],
      },
      {
        id: "bb-2",
        name: "25 mm Polished Brass Bearing",
        image: bb2,
        shortDesc: "Precision-manufactured brass bearing for machinery and engineering applications.",
        description:
          "Precision-manufactured brass bearing suitable for machinery and engineering applications.",
        specs: [
          { label: "Inner Diameter", value: "25 mm" },
          { label: "Length", value: "1.500 Inch" },
          { label: "Surface Finish", value: "Polished" },
          { label: "Color", value: "Golden (Base)" },
          { label: "Material", value: "Brass" },
        ],
      },
    ],
  },
  {
    id: "brass-bush",
    name: "Brass Bush",
    tagline: "Custom-machined brass bushes as precision interfaces between moving parts.",
    products: [
      {
        id: "bbu-1",
        name: "Golden Round Brass Bushes",
        image: bbu1,
        shortDesc: "Premium brass bush designed for pipe fitting and engineering applications.",
        description:
          "Premium-quality brass bush designed for pipe fitting and engineering applications.",
        specs: [
          { label: "Inner Diameter", value: "1.00 Inch" },
          { label: "Length", value: "1.250 Inch" },
          { label: "Color", value: "Golden (Base)" },
          { label: "Material", value: "Brass" },
          { label: "Usage", value: "Pipe Fitting" },
          { label: "Head Shape", value: "Round" },
        ],
      },
    ],
  },
  {
    id: "machined-shaft",
    name: "Machined Shaft",
    tagline: "Precision-turned stainless steel shafts for industrial machinery applications.",
    products: [
      {
        id: "ms-1",
        name: "10 mm Stainless Steel Punching Machine Shaft",
        image: ms1,
        shortDesc: "Precision-machined stainless steel shaft designed for punching machine applications.",
        description:
          "Precision-machined stainless steel shaft designed for punching machine applications.",
        specs: [
          { label: "Material", value: "Stainless Steel" },
          { label: "Usage / Application", value: "Punching Machine" },
          { label: "Shaft Length", value: "100 mm" },
          { label: "Shaft Diameter", value: "10 mm" },
          { label: "Color", value: "Silver" },
          { label: "Finish", value: "Polished" },
        ],
      },
    ],
  },
  {
    id: "stainless-steel-bolt",
    name: "Stainless Steel Bolt",
    tagline: "High-grade stainless steel bolts for secure fastening in hardware and industrial use.",
    products: [
      {
        id: "ssb-1",
        name: "1 Inch Stainless Steel Bolt Screw",
        image: ssb1,
        shortDesc: "High-quality stainless steel bolt screw for secure hardware fitting applications.",
        description:
          "High-quality stainless steel bolt screw designed for secure fastening and hardware fitting applications.",
        specs: [
          { label: "Material Grade", value: "304" },
          { label: "Diameter", value: "M6 (6 mm)" },
          { label: "Size", value: "1 Inch" },
          { label: "Shape", value: "Round" },
          { label: "Usage / Application", value: "Hardware Fitting" },
          { label: "Finish", value: "Hot Dip Galvanized (HDG)" },
          { label: "Material", value: "Stainless Steel" },
        ],
      },
    ],
  },
];

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-sm shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-gray-100 text-gray-700 rounded-full p-1.5 shadow transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="bg-gray-50 flex items-center justify-center p-6 shrink-0" style={{ minHeight: "220px" }}>
          <img
            src={product.image}
            alt={product.name}
            className="max-h-52 w-auto object-contain mix-blend-multiply"
          />
        </div>

        <div className="overflow-y-auto flex-1 p-6">
          <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">{product.name}</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{product.description}</p>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FileText size={16} className="text-primary" />
              <h3 className="text-sm font-heading font-bold text-gray-900 uppercase tracking-wider">Specifications</h3>
            </div>
            <div className="border border-gray-200 rounded-sm overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-2.5 font-medium text-gray-700 w-2/5 border-r border-gray-200">{spec.label}</td>
                      <td className="px-4 py-2.5 text-gray-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white font-bold text-sm rounded-sm hover:bg-primary/90 transition-colors"
            onClick={onClose}
          >
            <Send size={15} />
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onView }: { product: Product; onView: () => void }) {
  return (
    <div
      className="group flex-shrink-0 w-64 md:w-72 bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-2xl hover:border-gray-200 hover:-translate-y-1.5 transition-all duration-350 cursor-pointer flex flex-col"
      onClick={onView}
    >
      <div className="bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden" style={{ height: "200px" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain mix-blend-multiply transform group-hover:scale-108 transition-transform duration-500 relative z-10"
        />
      </div>

      <div className="p-4 flex flex-col flex-1 border-t border-gray-100 group-hover:border-blue-50 transition-colors">
        <h3 className="text-sm font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-tight line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed flex-1 line-clamp-2">{product.shortDesc}</p>
        <button className="mt-3 w-full py-2.5 text-xs font-bold text-primary border border-primary/30 rounded-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 hover:shadow-md">
          View Specifications
        </button>
      </div>
    </div>
  );
}

function CategorySection({ category }: { category: Category }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <section id={category.id} className="scroll-mt-20 py-14 md:py-20 border-b border-gray-100 last:border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between mb-7 md:mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-0.5 h-5 bg-primary rounded-full" />
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.18em]">Product Category</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-1.5">{category.name}</h2>
            <p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed">{category.tagline}</p>
          </div>
          <span className="hidden md:flex items-center px-3.5 py-1.5 bg-primary/5 border border-primary/10 text-primary text-xs font-bold rounded-sm shrink-0 mt-1">
            {category.products.length} {category.products.length === 1 ? "Product" : "Products"}
          </span>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full border shadow-md bg-white text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 ${
              !canScrollLeft ? "opacity-30 cursor-not-allowed" : ""
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollSnapType: "x mandatory",
            }}
          >
            {category.products.map((product) => (
              <div key={product.id} style={{ scrollSnapAlign: "start" }}>
                <ProductCard product={product} onView={() => setSelectedProduct(product)} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full border shadow-md bg-white text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 ${
              !canScrollRight ? "opacity-30 cursor-not-allowed" : ""
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {category.products.length > 1 && (
          <p className="md:hidden text-xs text-gray-400 mt-2 text-center">Swipe to browse products</p>
        )}
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
}

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${heroCnc2})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-blue-950/80" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-blue-400 mb-4 flex items-center gap-2.5">
            <span className="w-7 h-0.5 bg-blue-400 inline-block" />
            Precision Manufacturing
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">Our Products</h1>
          <p className="text-base md:text-xl text-blue-100/85 max-w-xl font-light leading-relaxed">
            Engineered to exact specifications. Manufactured for reliability.
          </p>
        </div>
      </div>

      <div className="sticky top-[72px] z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0" style={{ scrollbarWidth: "none" }}>
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 px-4 py-3 text-xs md:text-sm font-bold text-gray-500 hover:text-primary hover:border-b-2 hover:border-primary transition-all duration-150 whitespace-nowrap"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        {categories.map((cat) => (
          <CategorySection key={cat.id} category={cat} />
        ))}
      </div>

      <div className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-blue-400 mb-3 flex items-center justify-center gap-2.5">
            <span className="w-6 h-px bg-blue-400" />
            Custom Solutions
            <span className="w-6 h-px bg-blue-400" />
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 md:mb-5">
            Need a custom-engineered component?
          </h2>
          <p className="text-blue-100/75 mb-8 md:mb-10 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            We specialize in custom Job Works and Tool Works based on client drawings and specifications. Our engineering team is ready to discuss your exact requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm md:text-base font-bold rounded-sm text-primary bg-white hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
          >
            <Send size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            Request a Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
