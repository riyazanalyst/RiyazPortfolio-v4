import { Card } from '@/components/ui/card';
import { Award, Briefcase, Code, Database, ScanLine, Workflow } from 'lucide-react';

const workExperience = {
    company: "PricewaterhouseCoopers (PwC)",
    role: "Data Specialist",
    duration: "May 2024 – Present",
    achievements: [
        {
            icon: Database,
            title: "Data Transformation & Optimization",
            description: "Extracted, cleaned, and transformed healthcare claims data using SQL and Excel, improving data processing efficiency by 50% and reducing claims turnaround time by 20%."
        },
        {
            icon: Workflow,
            title: "Power BI Dashboarding",
            description: "Designed and deployed dashboards to track KPIs for 200+ client accounts, boosting collections by 25% and reducing claim denials by 30%."
        },
        {
            icon: ScanLine,
            title: "Data Automation",
            description: "Created stored procedures and applied advanced cleaning techniques, improving retrieval speed by 25% and enhancing overall data quality."
        },
        {
            icon: Briefcase,
            title: "Client & Stakeholder Collaboration",
            description: "Collaborated with cross-functional teams, resolved billing discrepancies, and supported escalations — leading to a 15% increase in client satisfaction."
        }
    ]
};

const internshipExperience = {
    company: "HRBOTICS",
    role: "Business Analyst Intern",
    duration: "Nov 2023 – Dec 2023",
    achievements: [
        {
            icon: Database,
            title: "Data Variance Analysis",
            description: "Performed variance analysis on datasets exceeding 500,000 records, ensuring 100% extraction accuracy and actionable insights."
        },
        {
            icon: Code,
            title: "SQL Query Optimization",
            description: "Optimized SQL queries, reducing execution time by 30% and improving efficiency for large-scale data operations."
        },
        {
            icon: Workflow,
            title: "Automation & Data Quality",
            description: "Developed stored procedures and advanced cleaning techniques, automating data processing with a 25% improvement in retrieval speed and overall data quality."
        }
    ]
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative">
      <div className="absolute bottom-0 -right-16 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse animation-delay-2000"></div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Experience</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-2">Professional roles and internship experiences.</p>
      </div>

      <div className="space-y-12">
        {/* Work Experience */}
        <div>
          <h3 className="text-3xl font-bold font-headline mb-6 text-center text-primary">Work Experience</h3>
          <Card className="glassmorphism p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 text-center">
                <div className="w-40 h-40 rounded-full bg-secondary/50 flex items-center justify-center mx-auto border-4 border-primary/20">
                  <Briefcase className="w-20 h-20 text-primary"/>
                </div>
                <h3 className="text-2xl font-bold font-headline mt-4">{workExperience.company}</h3>
                <p className="font-semibold text-accent">{workExperience.role}</p>
                <p className="text-sm text-muted-foreground">{workExperience.duration}</p>
              </div>
              <div className="flex-grow flex flex-col gap-6">
                {workExperience.achievements.map(exp => (
                  <div key={exp.title} className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-accent">
                      <exp.icon className="w-8 h-8"/>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg font-headline">{exp.title}</h4>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Internship Experience */}
        <div>
          <h3 className="text-3xl font-bold font-headline mb-6 text-center text-primary">Internship Experience</h3>
          <Card className="glassmorphism p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 text-center">
                <div className="w-40 h-40 rounded-full bg-secondary/50 flex items-center justify-center mx-auto border-4 border-primary/20">
                  <Award className="w-20 h-20 text-primary"/>
                </div>
                <h3 className="text-2xl font-bold font-headline mt-4">{internshipExperience.company}</h3>
                <p className="font-semibold text-accent">{internshipExperience.role}</p>
                <p className="text-sm text-muted-foreground">{internshipExperience.duration}</p>
              </div>
              <div className="flex-grow flex flex-col gap-6">
                {internshipExperience.achievements.map(exp => (
                  <div key={exp.title} className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-accent">
                      <exp.icon className="w-8 h-8"/>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg font-headline">{exp.title}</h4>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
