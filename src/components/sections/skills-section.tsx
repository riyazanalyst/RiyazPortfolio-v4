import { BrainCircuit, Code, Wrench, Layers, BarChart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = {
  analysis: {
    icon: BarChart,
    title: 'Data Analysis & Visualization',
    items: ['Power BI', 'Tableau', 'Excel (Advanced)', 'Matplotlib', 'Seaborn'],
  },
  languages: {
    icon: Code,
    title: 'Programming',
    items: ['Python (Pandas, NumPy)', 'SQL'],
  },
  databases: {
    icon: Layers,
    title: 'Databases & Data Warehousing',
    items: ['MySQL', 'PostgreSQL', 'Snowflake'],
  },
  tools: {
    icon: Wrench,
    title: 'Cloud & Tools',
    items: ['AWS (S3, EC2 basics)', 'Power Platform', 'Jupyter Notebook', 'VS Code', 'GitHub', 'Microsoft Office'],
  },
  libraries: {
    icon: BrainCircuit,
    title: 'Libraries',
    items: ['Scikit-learn', 'TensorFlow', 'PyTorch'],
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative">
      <div className="absolute top-1/2 -right-16 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Technical Toolbox</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-2">The skills and technologies I use to analyze and build solutions.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.values(skills).map((category) => (
          <Card
            key={category.title}
            className="glassmorphism flex flex-col group hover:border-accent transition-all duration-300 transform hover:-translate-y-1"
          >
            <CardHeader className="flex-row items-center gap-4 space-y-0 pb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <category.icon className="w-7 h-7 text-accent" />
              </div>
              <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex items-center">
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-default transition-colors"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
