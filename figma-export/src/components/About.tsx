import { ImageWithFallback } from './figma/ImageWithFallback';
import { User } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <User className="w-8 h-8 text-slate-900" />
          <h2 className="text-4xl text-slate-900">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1644337540803-2b2fb3cebf12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3Njk4OTIzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              With over two decades of experience in the technology industry, I've had the privilege 
              of working on projects that span from early-stage startups to enterprise-level systems. 
              My journey has been driven by a genuine curiosity about how technology can solve real 
              problems and improve people's lives.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed">
              Throughout my career, I've worn many hats—developer, architect, team lead, and mentor. 
              I've learned that the best solutions come from understanding not just the technical 
              challenges, but the people and processes behind them. This holistic approach has 
              helped me build systems that are not only robust and scalable, but also intuitive 
              and user-friendly.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed">
              What excites me most about technology is its constant evolution. I'm passionate about 
              staying current with emerging trends, from cloud architecture and microservices to 
              AI and machine learning. But I also believe in the fundamentals—clean code, solid 
              architecture, and effective communication remain as important as ever.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed">
              Beyond the technical realm, I'm committed to giving back to the community. I enjoy 
              mentoring aspiring developers, speaking at local tech meetups, and contributing to 
              open-source projects. I believe that knowledge grows when shared, and I'm always 
              eager to learn from others as much as I am to teach.
            </p>
            
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-xl text-slate-900 mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {['Full-Stack Development', 'Cloud Architecture', 'Team Leadership', 'System Design', 'Agile Methodologies', 'DevOps', 'Microservices', 'API Design'].map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
