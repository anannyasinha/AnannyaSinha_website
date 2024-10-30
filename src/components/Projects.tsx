interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    tags: string[];
}

function ProjectCard({ image, title, description, tags }: ProjectCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold mb-2 text-charcoal">{title}</h4>
            <p className="text-charcoal/80 mb-4">{description}</p>
            <div className="flex gap-2 flex-wrap">
                {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-silver/20 text-charcoal rounded-full text-sm">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export function Projects() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-bold text-charcoal mb-12 text-center">Featured Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ProjectCard
                        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                        title="AI-Powered Market Analysis"
                        description="Developed deep learning models for real-time market trend analysis, achieving 94% accuracy"
                        tags={["Python", "TensorFlow", "NLP"]}
                    />
                    <ProjectCard
                        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                        title="Predictive Analytics Platform"
                        description="Built an end-to-end analytics platform that reduced customer churn by 45%"
                        tags={["PyTorch", "FastAPI", "Redis"]}
                    />
                </div>
            </div>
        </section>
    );
}