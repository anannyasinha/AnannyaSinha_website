import { Database, Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
    return (
        <header className="bg-charcoal shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-pearl flex items-center gap-2">
                    <Database className="h-6 w-6 text-silver" />
                    <span>Alex Parker</span>
                </h1>
                <div className="flex gap-4">
                    <a href="#" className="text-silver hover:text-pearl transition-colors"><Github className="h-5 w-5" /></a>
                    <a href="#" className="text-silver hover:text-pearl transition-colors"><Linkedin className="h-5 w-5" /></a>
                    <a href="#" className="text-silver hover:text-pearl transition-colors"><Mail className="h-5 w-5" /></a>
                </div>
            </nav>
        </header>
    );
}