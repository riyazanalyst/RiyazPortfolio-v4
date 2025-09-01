
import Image from 'next/image';
import { GraduationCap, School } from 'lucide-react';

const educationData = [
  {
    icon: GraduationCap,
    institution: "Chandigarh University, Mohali",
    degree: "MCA (Data Analytics)",
    duration: "2025-2027",
    details: "Pursuing. Deeply engaged in AI/ML and Data Science research and application, actively participating in hackathons and competitive programming.",
  },
  {
    icon: School,
    institution: "NGM College, Pollachi",
    degree: "BCA (Computer applications) ",
    duration: "2021-2024",
    details: "CGPA: 8.5. Actively Engaged in Google Developer Students Club( AI/ML Facilitator)",
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative">
       <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
       <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse animation-delay-4000"></div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">About Me</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-2">My journey into the world of technology.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col gap-6 text-base text-foreground/80 text-left">
            <p>
               I’m Mohammed Riyaz, a Data Analyst passionate about turning raw data into meaningful insights. 
               Currently, I’m working as a Data Specialist at PwC, where I design and deliver data-driven solutions for business challenges in the healthcare and finance domain. 
               From building interactive Power BI dashboards that improve KPIs to automating SQL-based data processes for 10,000+ client accounts, 
               I thrive on optimizing workflows and driving impact through analytics
            </p>
            <p>
                My journey started with a BCA in Computer Applications (CGPA: 8.5) at NGM College, where I honed my foundation in programming and databases. 
                Along the way, I actively contributed to the Google Developer Students Club as an AI/ML Facilitator, fueling my curiosity for innovation and
                am now pursuing an MCA in Data Analytics at Chandigarh University (2025–2027), where I’m further deepening my expertise in AI/ML and advanced analytics.
            </p>
            <p>
                I enjoy solving real-world problems, exploring emerging tech, and collaborating on projects that create measurable business value.
                 If you’re looking for someone who bridges the gap between data and decision-making — let’s connect
            </p>
        </div>
        <div className="flex flex-col gap-6 relative">
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-border -z-1"></div>
            {educationData.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center mt-1">
                        <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold font-headline">{item.institution}</h3>
                        <p className="text-md font-semibold text-accent">{item.degree}</p>
                        <p className="text-sm text-muted-foreground mb-2">{item.duration}</p>

                        <p className="text-base text-foreground/80">{item.details}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
