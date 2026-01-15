import { ArrowRight, Linkedin, Mail, Sparkles, Code2, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const floatingIcons = [
    { icon: Code2, left: "10%", top: "20%", delay: 0 },
    { icon: Smartphone, left: "85%", top: "25%", delay: 0.5 },
    { icon: Sparkles, left: "15%", top: "70%", delay: 1 },
    { icon: Code2, left: "80%", top: "65%", delay: 1.5 },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-l from-cyan-500/25 to-primary/25 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 bg-gradient-conic from-primary/20 via-transparent to-primary/20 rounded-full blur-2xl" />
        </motion.div>
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/30"
          style={{ left: item.left, top: item.top }}
          animate={{
            y: [-15, 15, -15],
            rotate: [-5, 5, -5],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <item.icon size={40} />
        </motion.div>
      ))}

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/60 rounded-full"
          style={{
            left: `${5 + i * 8}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary px-5 py-2.5 rounded-full text-sm font-medium mb-8 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/10"
          >
            <motion.span
              className="w-2.5 h-2.5 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            Available for freelance work
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </motion.div>

          {/* Main Heading with Typewriter Effect */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Hi, I'm{" "}
            </motion.span>
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.8, type: "spring", stiffness: 100 }}
            >
              <span className="text-gradient bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Majid Ayub
              </span>
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg blur-lg -z-10"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
            <br />
            <motion.span
              className="text-muted-foreground inline-flex items-center gap-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              >
                <Smartphone className="w-12 h-12 md:w-14 md:h-14 text-primary" />
              </motion.span>
              App Developer
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I craft{" "}
            <span className="text-primary font-semibold">beautiful</span>,{" "}
            <span className="text-purple-500 font-semibold">performant</span> mobile and web applications that users
            love. Specializing in{" "}
            <span className="text-cyan-500 font-semibold">React Native</span>,{" "}
            <span className="text-primary font-semibold">Flutter</span>, and modern web
            technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground px-8 shadow-xl shadow-primary/30 border-0"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  Get in Touch
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 backdrop-blur-sm"
                asChild
              >
                <a href="#portfolio">View My Work</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="flex items-center justify-center gap-8"
          >
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/majid-ayub-4915b9210", label: "LinkedIn" },
              { icon: Mail, href: "mailto:majidayub96@gmail.com", label: "Email" },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.1 }}
              >
                <span className="p-2 rounded-full bg-muted/50 group-hover:bg-primary/20 transition-colors">
                  <social.icon size={20} />
                </span>
                <span className="text-sm font-medium">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <motion.div
          className="w-7 h-12 border-2 border-primary/40 rounded-full flex justify-center pt-2 backdrop-blur-sm"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
