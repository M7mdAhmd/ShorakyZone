import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Customer Feedback Sentiment Analysis",
      description: "Real-time sentiment analysis system for text classification and market insights",
      image: "media/customer-feedback-sentiment-analysis.png",
      tags: ["BERT", "Python", "NLP", "NLTK"],
      achievements: [
        "97% classification accuracy",
        "Trained on about 200,000 data records",
        "Implemented transfer learning"
      ],
      links: {
        // demo: "",
        github: "https://github.com/M7mdAhmd/customer-sentiment-analysis"
      }
    },
    {
      title: "Telecom Customer Churn Analysis",
      description: "Deep learning system for predicting customer retention and churn risk",
      image: "media/telecom-customer-churn-nalysis.png",
      tags: ["ML", "Python", "PyTorch", "TensorFlow"],
      achievements: [
        "83% accuracy with PyTorch model",
        "Provided insights for customer retention",
        "Enhanced model with feature engineering"
      ],
      links: {
        // demo: "",
        github: "https://github.com/M7mdAhmd/Telco-Customer-Churn-Analysis"
      }
    },
    {
      title: "Yallakora Web Scraper",
      description: "Web scraper for extracting football match data from Yallakora",
      image: "media/yallakora-web-scraper.png",
      tags: ["Web Scraping", "Python", "BeautifulSoup", "LXML"],
      achievements: [
        "Date-based scraping to extract match details",
        "Exported data to CSV for easy analysis",
        "Supports Arabic text encoding"
      ],
      links: {
        // demo: "",
        github: "https://github.com/M7mdAhmd/Yallakora-web-Scraper"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Projects
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2 mb-6">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
                
                {/* Button Container */}
                <div className="mt-auto flex gap-4 justify-center">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="flex items-center justify-center gap-2 bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a
                    href={project.links.github}
                    className="flex items-center justify-center gap-2 bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}