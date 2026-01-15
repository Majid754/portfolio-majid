import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FitTrack Pro",
    description:
      "A comprehensive fitness tracking app with AI-powered workout recommendations, nutrition logging, and social features.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    tags: ["React Native", "Firebase", "AI/ML", "Redux"],
    category: "mobile",
  },
  {
    title: "EcoMarket",
    description:
      "Sustainable e-commerce platform connecting eco-conscious consumers with environmentally friendly products.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["Flutter", "Node.js", "Stripe", "PostgreSQL"],
    category: "mobile",
  },
  {
    title: "TaskFlow",
    description:
      "Modern project management dashboard with real-time collaboration, Kanban boards, and team analytics.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    tags: ["React", "TypeScript", "GraphQL", "Supabase"],
    category: "web",
  },
  {
    title: "MediConnect",
    description:
      "Healthcare app enabling patients to book appointments, consult doctors virtually, and manage prescriptions.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React Native", "WebRTC", "HIPAA", "AWS"],
    category: "mobile",
  },
  {
    title: "CryptoWatch",
    description:
      "Real-time cryptocurrency portfolio tracker with price alerts, market analysis, and trading integration.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    tags: ["React", "Web3", "Chart.js", "WebSocket"],
    category: "web",
  },
  {
    title: "FoodieSpot",
    description:
      "Restaurant discovery app with AR menu viewing, table reservations, and personalized recommendations.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    tags: ["Flutter", "ARCore", "Maps API", "Firebase"],
    category: "mobile",
  },
];

const filters = ["All", "Mobile", "Web"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A selection of my recent work across mobile and web platforms.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "bg-primary"
                    : "gradient-border"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                  <Button size="sm" variant="secondary" className="gap-2">
                    <ExternalLink size={16} />
                    View live
                  </Button>
                  <Button size="sm" variant="secondary" className="gap-2">
                    <Github size={16} />
                    Code
                  </Button>
                </div>
              </div>
              <CardContent className="pt-4">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
