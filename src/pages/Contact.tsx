import { SOCIAL_LINKS } from "@/utils/constants";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
    return (
        <section className="w-full min-h-screen flex items-center justify-center px-4 pb-20">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
                <div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                        What's Next?
                        <br />
                        <span className="text-white/90">Get In Touch</span>
                    </h2>

                    <p className="mt-6 text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                        I'm currently looking for new opportunities. Whether you have a
                        question or just want to say hi, I'll try my best to get back to
                        you!
                    </p>

                    <a
                        href="mailto:devasinha1703@gmail.com?subject=Let's%20Connect&body=Hi%20Devanshu,%0A%0A"
                        className="relative inline-flex items-center justify-center gap-2 mt-8 px-7 py-3 rounded-2xl font-semibold text-white
             bg-gradient-to-r from-cyan-500/90 to-violet-500/90
             shadow-[0_0_25px_rgba(34,211,238,0.35)]
             hover:shadow-[0_0_40px_rgba(139,92,246,0.45)]
             hover:scale-[1.03] active:scale-[0.98]
             transition-all duration-300"
                    >
                        <span className="absolute inset-0 rounded-2xl blur-xl opacity-50 bg-gradient-to-r from-cyan-500/60 to-violet-500/60" />
                        <span className="relative">Say Hello</span>
                        <ArrowRight className="relative w-4 h-4" />
                    </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 space-y-5">
                    <div className="flex items-center gap-3 text-white/80">
                        <MapPin className="w-5 h-5 text-white/60" />
                        <span className="text-sm sm:text-base">
                            Pune, Maharashtra, India
                        </span>
                    </div>

                    <div className="flex items-center gap-3 text-white/80">
                        <Phone className="w-5 h-5 text-white/60" />
                        <a
                            href="tel:+917898741349"
                            className="text-sm sm:text-base hover:text-white transition"
                        >
                            +91 7898741349
                        </a>
                    </div>

                    <div className="flex items-center gap-3 text-white/80">
                        <Mail className="w-5 h-5 text-white/60" />
                        <a
                            href={`mailto:${SOCIAL_LINKS.email}`}
                            className="text-sm sm:text-base hover:text-white transition"
                        >
                            {SOCIAL_LINKS.email}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
