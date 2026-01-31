import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of California, Berkeley',
    period: '1998 - 2002'
  }
];

const certifications = [
  {
    name: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    date: '2023'
  },
  {
    name: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: '2022'
  },
  {
    name: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    date: '2021'
  }
];

export function EducationCertifications() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-7 h-7 text-slate-900" />
              <h2 className="text-3xl text-slate-900">Education</h2>
            </div>
            
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl text-slate-900 mb-2">{edu.degree}</h3>
                <p className="text-slate-700 mb-1">{edu.school}</p>
                <p className="text-slate-500">{edu.period}</p>
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-7 h-7 text-slate-900" />
              <h2 className="text-3xl text-slate-900">Certifications</h2>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-5 border-l-4 border-slate-900 shadow-sm"
                >
                  <h3 className="text-lg text-slate-900 mb-2">{cert.name}</h3>
                  <p className="text-slate-600 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-slate-500 text-sm">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
