import React from 'react';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-gray-800">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Keeping the photo section completely unchanged */}
            <div className="relative">
              <img
                src="media/profile-image.jpg"
                alt="Mohamed Elshoraky"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Passionate About AI & Machine Learning
              </h3>
              <p className="text-slate-600 mb-6">
                I'm Mohamed, a machine learning engineer and Computer Engineering student focused on delivering solutions to real-world problems while improving my skills for top-quality outcomes
              </p>
              <p className="text-slate-600 mb-8">
                My goal is to stand out through my work, bringing creativity and innovation to the forefront, and build my business to create solutions that enhance lives and make a lasting impact.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-800 font-medium min-w-[120px]">Experience:</span>
                  <span className="text-slate-600">1+ Years</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-800 font-medium min-w-[120px]">Education:</span>
                  <span className="text-slate-600">B.Sc. in Computer Engineering</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-800 font-medium min-w-[120px]">Location:</span>
                  <span className="text-slate-600">Kafr El Sheikh, Egypt</span>
                </div>
              </div>
              
              <button
                className="mt-8 px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
                onClick={() => window.open('media/Mohamed-Elshoraky-CV.pdf', '_blank')}
              >
                <Download size={20} />
                View My CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}