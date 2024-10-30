import { Presentation, ScrollText } from 'lucide-react';

interface ExperienceCardProps {
    icon: React.ReactNode;
    title: string;
    period: string;
    description: string;
}

function ExperienceCard({ icon, title, period, description }: ExperienceCardProps) {
    return (
        <div className="flex gap-6 bg-pearl p-6 rounded-lg shadow-lg">
            <div className="text-silver flex-shrink-0">{icon}</div>
            <div>
                <h4 className="text-xl font-semibold text-charcoal">{title}</h4>
                <p className="text-charcoal/80 mb-2">{period}</p>
                <p className="text-charcoal/80">{description}</p>
            </div>
        </div>
    );
}

export function Experience() {
    return (
        <section className="bg-charcoal py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-bold text-pearl mb-12 text-center">Professional Experience</h3>
                <div className="space-y-12">
                    <ExperienceCard
                        icon={<Presentation className="h-8 w-8" />}
                        title="Lead Data Scientist - AI Solutions Inc"
                        period="2021 - Present"
                        description="Leading a team of data scientists in developing cutting-edge ML solutions"
                    />
                    <ExperienceCard
                        icon={<ScrollText className="h-8 w-8" />}
                        title="ML Engineer - Tech Innovations"
                        period="2019 - 2021"
                        description="Implemented production-grade ML pipelines for real-time predictions"
                    />
                </div>
            </div>
        </section>
    );
}