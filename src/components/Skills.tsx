import React, { useState } from 'react';

export default function Skills() {
  const skills = [
    {
      category: "Data Science",
      items: [
        { name: "NumPy", level: "Advanced", iconPath: "media/NumPy.png" },
        { name: "Pandas", level: "Advanced", iconPath: "media/Pandas.png" },
        { name: "MatPlotLib", level: "Advanced", iconPath: "media/Matplotlib.png" },
        { name: "Seaborn", level: "Intermediate", iconPath: "media/seaborn.png" },
        { name: "SQL", level: "Beginner", iconPath: "media/sql.png" },
        { name: "Selenium", level: "Intermediate", iconPath: "media/selenium.png" },
        { name: "BeautifulSoup", level: "Intermediate", iconPath: "media/bs.png" }
      ]
    },
    {
      category: "Machine Learning & DL",
      items: [
        { name: "PyTorch", level: "Intermediate", iconPath: "media/PyTorch.png" },
        { name: "Keras", level: "Intermediate", iconPath: "media/Keras.png" },
        { name: "Scikit-Learn", level: "Intermediate", iconPath: "media/sklearn.png" },
        { name: "Hugging Face", level: "Intermediate", iconPath: "media/huggingface.png" }
      ]
    },
    {
      category: "Computer Vision",
      items: [
        { name: "OpenCV", level: "Intermediate", iconPath: "media/opencv.png" },
        { name: "YOLO", level: "Intermediate", iconPath: "media/yolo.png" },
        { name: "MediaPipe", level: "Intermediate", iconPath: "media/mediapipe.png" },
        { name: "DeepFace", level: "Intermediate", iconPath: "media/deepface.png" }
      ]
    },
    {
      category: "NLP",
      items: [
        { name: "NLTK", level: "Intermediate", iconPath: "media/nltk.png" },
        { name: "Regex", level: "Intermediate", iconPath: "media/regex.png" }
      ]
    },
    {
      category: "Programming",
      items: [
        { name: "Python", level: "Advanced", iconPath: "media/python.png" },
        { name: "JavaScript", level: "Beginner", iconPath: "media/js.png" },
        { name: "Assembly", level: "Beginner", iconPath: "media/assembly.png" },
        { name: "OOP", level: "Advanced", iconPath: "media/OOP.png" },
        { name: "DSA", level: "Beginner", iconPath: "media/dsa.png" }
      ]
    },
    {
      category: "MLOps",
      items: [
        { name: "MLflow", level: "Advanced", iconPath: "media/MLflow.png" },
        { name: "Flask", level: "Intermediate", iconPath: "media/Flask.png" },
        { name: "Azure", level: "Intermediate", iconPath: "media/azure.png" },
        { name: "Git", level: "Advanced", iconPath: "media/git.png" },
        { name: "GitHub", level: "Advanced", iconPath: "media/github.png" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "HTML", level: "Advanced", iconPath: "media/html.png" },
        { name: "CSS", level: "Advanced", iconPath: "media/css.png" }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("Data Science");
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

  const getLevelColor = (level) => {
    if (level === "Beginner") return "bg-slate-200 text-slate-700 border border-slate-300";
    if (level === "Intermediate") return "bg-amber-100 text-amber-800 border border-amber-300";
    return "bg-emerald-100 text-emerald-800 border border-emerald-300";
  };

  const selectedSkillGroup = skills.find(group => group.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
          Technical Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(skillGroup.category)}
              className={`w-fit px-4 py-2 rounded-xl font-medium text-sm text-center transition-all duration-500
                ${
                  selectedCategory === skillGroup.category
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg border border-blue-200/50'
                }`}
            >
              {skillGroup.category}
            </button>
          ))}
        </div>

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
                  {skill.level === "Advanced" && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md z-10">
                      <span className="text-white font-bold text-xs">★</span>
                    </div>
                  )}

                  <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 lg:mb-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-200 overflow-hidden">
                    <img src={skill.iconPath} alt={skill.name} className="w-16 h-16 lg:w-20 lg:h-20 object-contain" />
                  </div>

                  <h4 className="text-center text-sm lg:text-base font-semibold text-gray-800 mb-4 lg:mb-6 leading-tight min-h-[40px] lg:min-h-[48px] flex items-center justify-center px-2">
                    {skill.name}
                  </h4>

                  <div className="flex justify-center">
                    <span className={`px-4 lg:px-6 py-2 lg:py-3 rounded-xl text-xs lg:text-sm font-semibold transition-all duration-300 ${getLevelColor(skill.level)}`}>
                      {skill.level}
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
