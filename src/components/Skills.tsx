import React, { useState } from 'react';
import { BrainCog, Code, Globe, Workflow, Eye } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      category: "AI & Data Science",
      icon: BrainCog,
      items: [
        { name: "PyTorch", level: 80, iconPath: "media/PyTorch.png" },
        { name: "Scikit-Learn", level: 85, iconPath: "media/sklearn.png" },
        { name: "NumPy", level: 85, iconPath: "media/NumPy.png" },
        { name: "Pandas", level: 80, iconPath: "media/Pandas.png" },
        { name: "MatPlotLib", level: 90, iconPath: "media/Matplotlib.png" },
        { name: "Seaborn", level: 85, iconPath: "media/seaborn.png" },
        { name: "SQL", level: 65, iconPath: "media/sql.png" }
      ]
    },
    {
      category: "Computer Vision",
      icon: Eye,
      items: [
        { name: "YOLO", level: 80, iconPath: "media/yolo.png" },
        { name: "OpenCV", level: 75, iconPath: "media/opencv.png" },
        { name: "MediaPipe", level: 70, iconPath: "media/mediapipe.png" },
        { name: "DeepFace", level: 80, iconPath: "media/deepface.png" }
      ]
    },
    {
      category: "Programming",
      icon: Code,
      items: [
        { name: "Python", level: 90, iconPath: "media/python.png" },
        { name: "Assembly", level: 60, iconPath: "media/assembly.png" },
        { name: "Data Structure & Algorithm", level: 65, iconPath: "media/dsa.png" },
        { name: "OOP", level: 85, iconPath: "media/oop.png" }
      ]
    },
    {
      category: "Web",
      icon: Globe,
      items: [
        { name: "Web Scraping", level: 65, iconPath: "media/scraping.png" },
        { name: "HTML", level: 95, iconPath: "media/html.png" },
        { name: "CSS", level: 90, iconPath: "media/css.png" }
      ]
    },
    {
      category: "MLOps",
      icon: Workflow,
      items: [
        { name: "Azure", level: 70, iconPath: "media/azure.png" },
        { name: "MLflow", level: 80, iconPath: "media/MLflow.png" },
        { name: "Git", level: 90, iconPath: "media/git.png" },
        { name: "GitHub", level: 90, iconPath: "media/github.png" },
        { name: "Flask", level: 75, iconPath: "media/Flask.png" }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("AI & Data Science");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCategoryChange = (category) => {
    if (category === selectedCategory) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 200);
  };

  const getSkillLevel = (level) => {
    if (level <= 50) return "Beginner";
    if (level <= 75) return "Intermediate";
    return "Advanced";
  };

  const getLevelColor = (level) => {
    if (level <= 50) return "bg-slate-200 text-slate-700 border border-slate-300";
    if (level <= 75) return "bg-amber-100 text-amber-800 border border-amber-300";
    return "bg-emerald-100 text-emerald-800 border border-emerald-300";
  };

  const selectedSkillGroup = skills.find(group => group.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
          Technical Skills
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {skills.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon;
            return (
              <button
                key={index}
                onClick={() => handleCategoryChange(skillGroup.category)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-500 ${
                  selectedCategory === skillGroup.category
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg border border-blue-200/50'
                }`}
              >
                <IconComponent className={`w-5 h-5 ${
                  selectedCategory === skillGroup.category ? 'text-white' : 'text-blue-600'
                }`} />
                <span className="hidden sm:inline whitespace-nowrap">{skillGroup.category}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skills */}
        {selectedSkillGroup && (
          <div className="max-w-7xl mx-auto">
            
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 transition-all duration-500 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              {selectedSkillGroup.items.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group relative bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200 hover:-translate-y-2"
                  style={{ 
                    animationDelay: `${skillIndex * 50}ms`,
                    minHeight: '200px'
                  }}
                >
                  {skill.level >= 76 && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md z-10">
                      <span className="text-white font-bold text-xs">★</span>
                    </div>
                  )}

                  <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 lg:mb-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-200 overflow-hidden">
                    {/* <img src={skill.iconPath} alt={skill.name} className="w-16 h-16 lg:w-20 lg:h-20 object-contain" /> */}
                    
                    {/* Placeholder - Remove when adding real images */}
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-200 rounded-xl flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xl lg:text-2xl">
                        {skill.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Skill Name */}
                  <h4 className="text-center text-sm lg:text-base font-semibold text-gray-800 mb-4 lg:mb-6 leading-tight min-h-[40px] lg:min-h-[48px] flex items-center justify-center px-2">
                    {skill.name}
                  </h4>
                  
                  {/* Skill Level Badge */}
                  <div className="flex justify-center">
                    <span className={`px-4 lg:px-6 py-2 lg:py-3 rounded-xl text-xs lg:text-sm font-semibold transition-all duration-300 ${getLevelColor(skill.level)}`}>
                      {getSkillLevel(skill.level)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}