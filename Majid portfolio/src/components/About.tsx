import { Smartphone, Code2, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Apps Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Building apps that feel native and perform flawlessly",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and smooth user experiences",
  },
  {
    icon: Users,
    title: "User Focused",
    description: "Creating intuitive interfaces that users love",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Passionate About Building{" "}
            <span className="text-gradient">Great Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a full-stack app developer with a passion for creating seamless
            digital experiences. From concept to deployment, I bring ideas to
            life with clean code and thoughtful design.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-none bg-card"
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
