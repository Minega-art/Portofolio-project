import React from 'react';
import { BookOpen, Brain, Lightbulb, RefreshCw, Calendar, TrendingUp } from 'lucide-react';

const ClassReflections: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.8)), url(https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Class Reflections</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Weekly reflections using Kolb's Learning Cycle and Driscoll's Model of Reflection
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-gray-600">Weekly Reflections</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">2</div>
            <div className="text-gray-600">Reflection Models</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Growth Mindset</div>
          </div>
        </div>

        {/* Reflection Models */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-48">
              <img 
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                alt="Kolb's Learning Cycle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center space-x-3 mb-2">
                  <RefreshCw className="w-8 h-8 text-white" />
                  <h2 className="text-2xl font-bold text-white">Kolb's Learning Cycle</h2>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Concrete Experience</h3>
                    <p className="text-gray-600 text-sm">Direct engagement with activities and experiences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Reflective Observation</h3>
                    <p className="text-gray-600 text-sm">Thinking about and discussing the experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Abstract Conceptualization</h3>
                    <p className="text-gray-600 text-sm">Learning from the experience and forming theories</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Active Experimentation</h3>
                    <p className="text-gray-600 text-sm">Trying out new approaches based on learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-48">
              <img 
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                alt="Driscoll's Model"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Brain className="w-8 h-8 text-white" />
                  <h2 className="text-2xl font-bold text-white">Driscoll's Model</h2>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">?</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">What?</h3>
                    <p className="text-gray-600 text-sm">Description of the situation and what happened</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">?</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">So What?</h3>
                    <p className="text-gray-600 text-sm">Analysis of the situation and its significance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">?</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Now What?</h3>
                    <p className="text-gray-600 text-sm">Action plans and future learning goals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Document Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-64">
            <img 
              src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
              alt="Weekly reflection table"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <div className="flex items-center space-x-3 mb-2">
                <BookOpen className="w-8 h-8 text-white" />
                <h2 className="text-3xl font-bold text-white">Weekly Reflection Table</h2>
              </div>
              <p className="text-white/90">Comprehensive documentation of my learning journey</p>
            </div>
          </div>
          
          <div className="p-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-dashed border-blue-300 rounded-2xl p-12 text-center">
              <Lightbulb className="w-20 h-20 text-blue-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Embedded Google Document
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                This area will contain your embedded Google Doc with the weekly reflection table. 
                The document will showcase your learning progression using both Kolb's and Driscoll's models.
              </p>
              <div className="bg-white rounded-xl p-6 max-w-md mx-auto">
                <h4 className="font-semibold text-gray-800 mb-3">To embed your document:</h4>
                <ol className="text-left text-gray-600 space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <span>Open your Google Doc with the reflection table</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <span>Go to File → Publish to the web</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <span>Choose "Embed" and copy the HTML code</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                    <span>Replace this placeholder with your embedded document</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassReflections;