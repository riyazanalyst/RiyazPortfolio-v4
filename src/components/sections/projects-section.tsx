'use client';

import Image from 'next/image';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const projects = [
  {
    title: "YouTube Comment Sentiment Analysis",
    description: "Built an end-to-end application using Python and Streamlit, leveraging NLTK’s VADER algorithm to analyze and classify over 10,000 video comments. Designed a responsive dashboard with Plotly visualizations for video metadata and channel stats.",
    impact: "Improved sentiment classification accuracy by 25% and reduced manual data collection by 40%, enabling real-time analytics.",
    image: "/Youtube.png",
    imageHint: "sentiment dashboard",
    tags: ["Python", "Machine Learning", "Streamlit", "Plotly"],
    github: "https://github.com/riyazanalyst/Youtube-Comment-Sentiment-Analysis"
  },
 {
  title: "Loan Delinquency Analysis",
  description: "Built a comprehensive data analysis solution to evaluate loan delinquency patterns, identify risk factors, and provide actionable insights for financial decision-making.",
  impact: "Improved risk assessment efficiency by streamlining delinquency trend analysis and enabled proactive interventions to reduce default rates.",
  image: "/delinquency.png",
  imageHint: "loan risk dashboard",
  tags: ["Python", "SQL", "Power BI"],
  github: "https://github.com/riyazanalyst/Loan-Delinquency-Analysis"
},

  {
    title: "Blinkit Data Analysis",
    description: "Conducted a comprehensive analysis of Blinkit's sales performance, customer satisfaction, and inventory distribution using KPIs and Power BI visualizations.",
    impact: "Provided insights into sales trends, ratings, and item distribution to support business optimization.",
    image: "/Blinkit.png",
    imageHint: "blinkit dashboard",
    tags: ["Power BI", "SQL", "Python", "Excel"],
    github: "https://github.com/riyazanalyst/Blinkit-Data-Analysis"
  },
  {
    title: "Paris Olympics 2024 Dashboard",
    description: "Designed an interactive Power BI dashboard analyzing athlete performance, country-wise medal counts, and historical Olympic trends.",
    impact: "Enabled real-time medal tracking and performance insights across 40+ sports disciplines.",
    image: "/Paris Olympic.png",
    imageHint: "olympics dashboard",
    tags: ["Power BI", "Data Visualization"],
    github: "https://github.com/riyazanalyst/Paris-2024-Olympic-Data-Analysis-PowerBI"
  },
  /*
{
  title: "HR Distribution Dashboard",
  description: "Built a Power BI dashboard for HR data (22,000+ records) after cleaning and processing in MySQL Workbench.",
  impact: "Delivered insights into workforce distribution, hiring trends, and attrition patterns for strategic HR planning.",
  image: "/Hrdist.png",
  imageHint: "hr dashboard",
  tags: ["Power BI", "SQL", "Data Analysis"],
  github: "https://github.com/riyazanalyst/HR-Distribution-Dashboard"
}
*/

];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative">
      <div className="absolute top-1/2 -left-16 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Featured Projects</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-2">Bringing ideas to life with code & data.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="glassmorphism flex flex-col overflow-hidden group hover:border-accent transition-all duration-300 transform hover:-translate-y-2"
          >
            <CardHeader className="p-0">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={project.imageHint}
                />
              </div>
            </CardHeader>
            <div className="p-6 flex flex-col flex-grow">
              <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardDescription className="flex-grow">{project.description}</CardDescription>
              <p className="text-sm font-semibold text-accent mt-4 font-code">{project.impact}</p>
            </div>
            <CardFooter>
              <Button 
                asChild 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/80"
              >
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  View Project on GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
