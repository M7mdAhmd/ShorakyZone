import React from 'react';
import { Brain, MonitorPlay , BrainCircuit, Database, Bot, Search, Code } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "ML Model",
      description: "Custom machine learning solutions tailored to your specific needs",
      price: "Starting at $30",
      features: [
        "Custom model architecture",
        "Data preprocessing",
        "Model training & optimization",
        "Deployment support"
      ]
    },
    {
      icon: Bot,
      title: "NLP Solutions",
      description: "Natural Language Processing solutions for text analysis and understanding",
      price: "Starting at $50",
      features: [
        "Custom text classification",
        "Sequence modeling (RNN, GRU, LSTM)",
        "Sentiment Analysis",
        "Transfer learning with BERT"
      ]
    },
    {
      icon: BrainCircuit,
      title: "Deep Learning",
      description: "Advanced neural network solutions for complex problems",
      price: "Starting at $40",
      features: [
        "CNN architecture design",
        "Transfer learning",
        "Model optimization",
        "Performance analysis"
      ]
    },
    {
      icon: Database ,
      title: "Data Analysis",
      description: "In-depth data exploration and insights generation",
      price: "Starting at $20",
      features: [
        "Exploratory data analysis (EDA)",
        "Data visualization",
        "Statistical analysis",
        "Insights generation"
      ]
    },
    {
      icon: Search,
      title: "Web Scraping",
      description: "Efficient and reliable data extraction from websites to power your business insights",
      price: "Starting at $30",
      features: [
        "Custom scripts with Beautiful Soup",
        "Dynamic and static website extraction",
        "Data cleaning, structuring",
        "Delivery in CSV or JSON"
      ]
    },
    {
      icon: MonitorPlay  ,
      title: "Model Deployment",
      description: "Deploying your ML models as scalable and user-friendly web applications",
      price: "Starting at $20",
      features: [
        "Flask API for model deployment",
        "Integrate trained ML models",
        "User-friendly web interface",
        "Basic monitoring and maintenance"
      ]
    }
    ,{
      icon: Code,
      title: "Web Developmet",
      description: "Building responsive, interactive websites tailored to your needs",
      price: "Starting at $20",
      features: [
        "Custom website with HTML, CSS, and JS",
        "Fully responsive design",
        "Interactive elements and animations",
        "Contact form integration"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <div className="text-xl font-semibold text-gray-800 mb-6">
                {service.price}
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                    {feature}
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