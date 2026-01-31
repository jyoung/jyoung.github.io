import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3Njk4MDEyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl mb-4 text-slate-900">John Smith</h1>
            <p className="text-xl text-slate-600 mb-6">
              Senior Software Engineer & Product Leader
            </p>
            <p className="text-slate-700 max-w-2xl mb-8 leading-relaxed">
              Passionate technologist with 10+ years of experience building scalable solutions 
              and leading cross-functional teams. Dedicated to creating products that make a 
              meaningful impact on users' lives.
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="mailto:john.smith@email.com" 
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 px-5 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 px-5 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
