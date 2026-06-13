import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { RevealSection } from "@/components/RevealSection";
import heroImg from "@assets/hero-cnc-1.jpg_1781200035734.jpg";

const formSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Please enter a valid email address").email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().optional(),
});

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    content: "#16B, Annai Indira Nagar, 4th Street,\nMadukkarai Market Road,\nCoimbatore – 641021\nTamil Nadu, India",
    href: null,
    colorClass: "bg-primary/8 text-primary",
  },
  {
    icon: Phone,
    label: "Phone",
    content: "+91 99528 73643",
    href: "tel:+919952873643",
    colorClass: "bg-primary/8 text-primary",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    content: "+91 99528 73643",
    href: "https://wa.me/919952873643",
    colorClass: "bg-green-50 text-green-600",
  },
  {
    icon: Mail,
    label: "Email",
    content: "info@daharengineering.com",
    href: "mailto:info@daharengineering.com",
    colorClass: "bg-primary/8 text-primary",
  },
];

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-primary text-white py-20 md:py-28 relative overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-blue-400 mb-4 flex items-center justify-center gap-2.5">
            <span className="w-7 h-0.5 bg-blue-400 inline-block" />
            Reach Out
            <span className="w-7 h-0.5 bg-blue-400 inline-block" />
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight">Contact Us</h1>
          <p className="text-base md:text-xl text-blue-100/85 max-w-xl mx-auto font-light leading-relaxed">
            Get in touch for quotes, inquiries, or custom engineering solutions.
          </p>
        </div>
      </div>

      <div className="py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">

            {/* Contact Info Card */}
            <RevealSection className="lg:col-span-1">
              <div className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden h-full">
                <div className="h-1 bg-gradient-to-r from-primary to-blue-500" />
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-heading font-bold text-gray-900 mb-6">Head Office &amp; Works</h3>

                  <div className="space-y-5">
                    {contactItems.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className={`mt-0.5 p-2.5 rounded-sm shrink-0 ${item.colorClass} transition-transform duration-200 group-hover:scale-110`}>
                          <item.icon size={15} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm mb-0.5">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-gray-500 hover:text-primary text-sm leading-relaxed transition-colors whitespace-pre-line"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Contact Form */}
            <RevealSection delay={150} className="lg:col-span-2">
              <div className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-400" />
                <div className="p-6 md:p-10">
                  <p className="section-overline">Send Inquiry</p>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-7">Send us a message</h2>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium text-sm">Full Name <span className="text-red-400">*</span></FormLabel>
                              <FormControl>
                                <Input
                                  placeholder=""
                                  className="bg-gray-50 border-gray-200 h-11 text-sm rounded-sm focus-visible:ring-0 focus-visible:border-primary transition-colors"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-xs" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium text-sm">Phone Number <span className="text-red-400">*</span></FormLabel>
                              <FormControl>
                                <Input
                                  placeholder=""
                                  className="bg-gray-50 border-gray-200 h-11 text-sm rounded-sm focus-visible:ring-0 focus-visible:border-primary transition-colors"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-xs" />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium text-sm">Email Address <span className="text-red-400">*</span></FormLabel>
                            <FormControl>
                              <Input
                                placeholder=""
                                type="email"
                                className="bg-gray-50 border-gray-200 h-11 text-sm rounded-sm focus-visible:ring-0 focus-visible:border-primary transition-colors"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium text-sm">Your Requirements <span className="text-gray-400 text-xs font-normal">(optional)</span></FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder=""
                                className="min-h-[130px] md:min-h-[160px] bg-gray-50 border-gray-200 text-sm rounded-sm focus-visible:ring-0 focus-visible:border-primary transition-colors resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />

                      <div className="pt-1">
                        <Button
                          type="submit"
                          disabled={!form.formState.isValid}
                          className="px-8 py-6 text-sm font-bold rounded-sm h-auto disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed bg-primary hover:bg-primary/85 text-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:shadow-none disabled:translate-y-0 group"
                        >
                          <Send className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform duration-200" />
                          Submit Inquiry
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </div>
  );
}
