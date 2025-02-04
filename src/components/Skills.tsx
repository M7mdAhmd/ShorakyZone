import React from 'react';
import { BrainCog, Code, Globe, Workflow } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      category: "ML & Data Science",
      icon: BrainCog,
      items: [
        "PyTorch",
        "Scikit-Learn",
        "NumPy",
        "Pandas",
        "MatPlotLib",
        "Seaborn",
        "SQL"
      ]
    },
    {
      category: "Programming",
      icon: Code,
      items: [
        "Python",
        "JavaScript",
        "C++",
        "Assembly",
        "Data Structure & Algorithm",
        "OOP"
      ]
    },
    {
      category: "Web",
      icon: Globe,
      items: [
        "Web Scraping",
        "HTML",
        "CSS"
      ]
    },
    {
      category: "MLOps",
      icon: Workflow,
      items: [
        "MLflow",
        "Git & GitHub",
        "Flask"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-blue-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <skillGroup.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {skillGroup.category}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}