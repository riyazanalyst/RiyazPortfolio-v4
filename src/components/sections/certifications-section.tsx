import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const certifications = [
    {
        title: "Microsoft PowerBI Data Analyst",
        issuer: "Microsoft(Coursera)",
        date: "June 2025",
        skills: ["Microsoft PowerBI"],
    },
    {
        title: "Python for Data science",
        issuer: "NPTEL",
        date: "Mar 2024",
        skills: ["Data Science", "Python", "Pandas", "NumPy"],
    },
    {
        title: "Mysql for data analytics and business intelligence",
        issuer: "Udemy",
        date: "March 2024",
        skills: ["MySQL"],
    },
    {
        title: "Accenture North America - Data Analytics and Visualization Job Simulation",
        issuer: "Accenture",
        date: "June 2025",
        skills: ["Artificial Intelligence", "Data Analytics"],
    },
    {
        title: "RDBMS AND POSTGRESQL",
        issuer: "Spoken Tutorial",
        date: "Dec 2024",
        skills: ["Postgresql"],
    },
   
    {
        title: "Python for Data Science & AI",
        issuer: "IBM",
        date: "Dec 2023",
        skills: ["Data Science", "Python", "AI Development"],
    },
    {
        title: "Inclusive mindset",
        issuer: "PwC",
        date: "Dec 2024",
        skills: ["Emotional Intelligence", "Inclusive practices", "Intersectionality"],
    },
   
    {
        title: "SQL (Basic)",
        issuer: "HackerRank",
        date: "Jul 2024",
        skills: ["SQL", "Databases"],
    },
    {
        title: "Python (Basic)",
        issuer: "HackerRank",
        date: "Aug 2024",
        skills: ["Python"],
    },
];


export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative">
       <div className="absolute top-0 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse animation-delay-2000"></div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Certifications</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-2">Recognized achievements and validated skills.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="glassmorphism flex flex-col group hover:border-accent transition-all duration-300 transform hover:-translate-y-2">
             <CardHeader className="flex-row items-start gap-4 pb-4">
               <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                 <Award className="w-6 h-6 text-primary" />
               </div>
               <div>
                <CardTitle className="font-headline text-lg leading-tight">{cert.title}</CardTitle>
                <p className="text-sm font-semibold text-muted-foreground">{cert.issuer} &bull; {cert.date}</p>
               </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                    {cert.skills.map(skill => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">{skill}</Badge>
                    ))}
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
