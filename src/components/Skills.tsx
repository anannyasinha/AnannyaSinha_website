import { BarChart3, Brain, PieChart } from 'lucide-react';

interface SkillCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function SkillCard({ icon, title, description }: SkillCardProps) {
    return (
        <div className="bg-pearl p-6 rounded-lg transform hover:scale-105 transition-transform shadow-lg">
            <div className="flex items-center gap-4 mb-4">
                <div className="text-silver">{icon}</div>
                <h4 className="text-xl font-semibold text-charcoal">{title}</h4>
            </div>
            <p className="text-charcoal/80">{description}</p>
        </div>
    );
}

export function Skills() {
    return (
        <section className="bg-charcoal py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-bold text-pearl mb-12 text-center">Core Competencies</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SkillCard
                        icon={<BarChart3 className="h-8 w-8" />}
                        title="Data Analysis"
                        description="Advanced statistical analysis, hypothesis testing, and predictive modeling"
                    />
                    <SkillCard
                        icon={<Brain className="h-8 w-8" />}
                        title="Machine Learning"
                        description="Deep learning, NLP, and computer vision solutions for complex problems"
                    />
                    <SkillCard
                        icon={<PieChart className="h-8 w-8" />}
                        title="Visualization"
                        description="Creating compelling data narratives using modern visualization tools"
                    />
                </div>
            </div>
        </section>
    );
}