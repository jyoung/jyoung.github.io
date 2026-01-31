import { Heart, Camera, Book, Dumbbell } from 'lucide-react';

const hobbies = [
  {
    name: 'Photography',
    icon: Camera,
    description: 'Landscape and street photography enthusiast. Love capturing moments during travels.'
  },
  {
    name: 'Reading',
    icon: Book,
    description: 'Avid reader of science fiction, technology books, and biographies.'
  },
  {
    name: 'Fitness',
    icon: Dumbbell,
    description: 'Regular runner and gym-goer. Completed 3 marathons and counting.'
  }
];

export function Hobbies() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Heart className="w-8 h-8 text-slate-900" />
          <h2 className="text-4xl text-slate-900">Hobbies & Interests</h2>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <div 
                key={index} 
                className="bg-slate-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl text-slate-900 mb-3">{hobby.name}</h3>
                <p className="text-slate-700 leading-relaxed">{hobby.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
