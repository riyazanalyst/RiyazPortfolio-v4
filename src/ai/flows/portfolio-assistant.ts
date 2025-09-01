'use server';
/**
 * @fileOverview A portfolio assistant AI agent.
 *
 * - portfolioAssistant - A function that answers questions about the portfolio.
 * - PortfolioAssistantInput - The input type for the portfolioAssistant function.
 * - PortfolioAssistantOutput - The return type for the portfolioAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const portfolioContext = `
Mohammed Riyaz – Data Analyst | Power BI Specialist | Problem Solver

About Me:
I am Mohammed Riyaz, a passionate data analyst with hands-on experience in delivering data-driven solutions. 
I specialize in Power BI, SQL, Python, and Excel to transform raw data into actionable insights. 
Previously worked at PwC as a Data Specialist and also gained exposure through an internship at HRBOTICS. 
I enjoy solving real-world data challenges, optimizing workflows, and enabling better decision-making.

Education:
- MCA in Data Analytics (2025–2027), Chandigarh University
- BCA (CGPA: 8.5), NGM College

Skills:
- Tools & Tech: Power BI, SQL, Excel, Python, MS Office Suite
- Data Analysis: Dashboard development, ETL, Data cleaning & transformation
- Cloud: Basics of Azure & Google Cloud
- Soft Skills: Communication, teamwork, leadership, problem-solving

Work Experience:
- PwC: Data Specialist (2024–2025) — Created Power BI dashboards, cleaned messy sales/inventory data, and delivered insights for business operations.
- HRBOTICS: Intern (1 month) — Worked on quality analysis, data labeling, and annotation tasks.

Featured Projects:
- HR Distribution Dashboard: Built using Power BI + MySQL (22,000+ records), delivering insights on hiring trends, workforce distribution, and attrition.
- Loan Delinquency Analysis: Developed an end-to-end data analysis solution on delinquency datasets to optimize queries and structure business insights.
- Walmart Data Analysis: Cleaned and visualized sales data in Power BI to track KPIs and business performance.
- Smart IV Drip Monitoring System: IoT-based project to monitor IV fluid levels in real time with alert mechanisms.
- Hand Gesture Recognition: Built a recognition system to classify hand symbols using ML models.
- Well Flow Optimization with Liquid Nitrogen: Investigated increasing well flow using coil tubing and liquid nitrogen.

Achievements:
- Founder of 7am Ventures
- Completed Excel and Power BI certifications (Coursera, Microsoft)
- Participated in Aero Show & National Level Science & Tech Expo (secured 5th place for “Temp & Oil Level Indicator with Alarm System”)
- Actively posting educational content on Instagram (100-day challenge: Python, SQL, Power BI, Excel)

Fun Fact:
I love creating dashboards that tell stories, and outside of work, I enjoy fitness, exploring tech trends, and content creation.

---

`;

const PortfolioAssistantInputSchema = z.object({
  query: z.string().describe('The user question about Mohammed Riyaz.'),
});
export type PortfolioAssistantInput = z.infer<typeof PortfolioAssistantInputSchema>;

const PortfolioAssistantOutputSchema = z.object({
  response: z.string().describe('The answer to the user query.'),
});
export type PortfolioAssistantOutput = z.infer<typeof PortfolioAssistantOutputSchema>;

export async function portfolioAssistant(input: PortfolioAssistantInput): Promise<PortfolioAssistantOutput> {
  return portfolioAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioAssistantPrompt',
  input: { schema: PortfolioAssistantInputSchema },
  output: { schema: PortfolioAssistantOutputSchema },
  system: `You are a friendly and professional AI assistant for Mohammed Riyaz's portfolio website. 
Your job is to answer questions based only on the provided portfolio information. 
If the user asks something outside of scope or inappropriate, politely decline. 
Keep responses concise, professional, and helpful.

Portfolio Information:
---
${portfolioContext}
---
`,
  prompt: `User question: {{{query}}}`,
});

const portfolioAssistantFlow = ai.defineFlow(
  {
    name: 'portfolioAssistantFlow',
    inputSchema: PortfolioAssistantInputSchema,
    outputSchema: PortfolioAssistantOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
