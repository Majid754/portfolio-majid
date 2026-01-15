import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native", level: 95 },
      { name: "Flutter", level: 88 },
      { name: "Swift/iOS", level: 80 },
      { name: "Kotlin/Android", level: 75 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Firebase", level: 90 },
      { name: "PostgreSQL", level: 82 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Figma", level: 85 },
      { name: "CI/CD", level: 80 },
      { name: "AWS", level: 75 },
    ],
  },
];

const techBadges = [
  "React Native",
  "Flutter",
  "React",
  "TypeScript",
  "Node.js",
  "Firebase",
  "Supabase",
  "GraphQL",
  "REST APIs",
  "Redux",
  "MobX",
  "Jest",
  "Expo",
  "Xcode",
  "Android Studio",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Skills & Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies I <span className="text-gradient">Master</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I continuously learn and adapt to new technologies to deliver the
            best solutions for my clients.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {techBadges.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
