import { Mail, ScrollText } from 'lucide-react';

export function Contact() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-8">Let's Connect</h3>
                <div className="inline-flex gap-6">
                    <button className="bg-charcoal text-pearl px-6 py-3 rounded-lg hover:bg-charcoal/90 transition-colors flex items-center gap-2 shadow-lg">
                        <Mail className="h-5 w-5" />
                        Contact Me
                    </button>
                    <button className="bg-silver text-charcoal px-6 py-3 rounded-lg hover:bg-silver/90 transition-colors flex items-center gap-2 shadow-lg">
                        <ScrollText className="h-5 w-5" />
                        Download Resume
                    </button>
                </div>
            </div>
        </section>
    );
}