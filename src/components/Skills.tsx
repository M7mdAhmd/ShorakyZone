import React from 'react';
import { BrainCog, Code, Globe, Workflow } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      category: "ML & Data Science",
      icon: BrainCog,
      items: [
        { name: "PyTorch", level: 80 },
        { name: "Scikit-Learn", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Pandas", level: 80 },
        { name: "MatPlotLib", level: 90 },
        { name: "Seaborn", level: 85 },
        { name: "SQL", level: 65 }
      ]
    },
    {
      category: "Programming",
      icon: Code,
      items: [
        { name: "Python", level: 90 },
        // { name: "JavaScript", level: 70 },
        // { name: "C++", level: 60 },
        { name: "Assembly", level: 60 },
        { name: "Data Structure & Algorithm", level: 65 },
        { name: "OOP", level: 85 },
      ]
    },
    {
      category: "Web",
      icon: Globe,
      items: [
        { name: "Web Scraping", level: 65 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 }
      ]
    },
    {
      category: "MLOps",
      icon: Workflow,
      items: [
        { name: "MLflow", level: 80 },
        { name: "Git & GitHub", level: 90 },
        { name: "Flask", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <skillGroup.icon className="w-6 h-6 text-gray-800" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-800">{skill.name}</span>
                      {/* <span className="text-gray-800">{skill.level}%</span> */}
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}