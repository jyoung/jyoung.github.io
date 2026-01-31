import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    period: '2021 - Present',
    description: 'Leading development of cloud-native applications and mentoring junior developers. Architected microservices infrastructure that improved system scalability by 300%.',
    achievements: [
      'Led team of 8 engineers in developing customer-facing platform',
      'Reduced deployment time by 60% through CI/CD optimization',
      'Implemented monitoring solutions that decreased downtime by 45%'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Digital Solutions Corp',
    period: '2018 - 2021',
    description: 'Developed full-stack web applications using React, Node.js, and PostgreSQL. Collaborated with product and design teams to deliver user-centric features.',
    achievements: [
      'Built real-time analytics dashboard serving 50K+ users',
      'Improved application performance by 40% through optimization',
      'Contributed to open-source projects and internal tooling'
    ]
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Ventures',
    period: '2016 - 2018',
    description: 'Started career building responsive web applications and learning modern development practices. Participated in agile development cycles and code reviews.',
    achievements: [
      'Developed features for mobile-first e-commerce platform',
      'Implemented automated testing framework',
      'Collaborated with cross-functional teams on product launches'
    ]
  }
];

export function Experience() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-slate-900" />
          <h2 className="text-4xl text-slate-900">Professional Experience</h2>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-900"></div>
              
              <div className="bg-slate-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl text-slate-900 mb-1">{exp.title}</h3>
                    <p className="text-slate-600">{exp.company}</p>
                  </div>
                  <span className="text-slate-500 mt-2 sm:mt-0">{exp.period}</span>
                </div>
                
                <p className="text-slate-700 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
