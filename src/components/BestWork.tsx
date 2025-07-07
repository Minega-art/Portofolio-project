import React from 'react';
import { Award, Star, Download, ExternalLink, Calendar, TrendingUp } from 'lucide-react';

const BestWork: React.FC = () => {
  const submissions = [
    {
      id: 1,
      title: "Research Paper: Digital Transformation in Education",
      description: "A comprehensive analysis of how digital technologies are reshaping educational practices and student outcomes.",
      reason: "I selected this piece because it demonstrates my ability to conduct thorough research, synthesize complex information, and present findings in a clear, academic format. The paper received excellent feedback for its methodology and insights.",
      category: "Research",
      date: "October 2024",
      grade: "A+",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      highlights: [
        "In-depth literature review of 50+ sources",
        "Original survey data from 200+ participants",
        "Innovative framework for digital adoption",
        "Clear policy recommendations"
      ]
    },
    {
      id: 2,
      title: "Case Study: Sustainable Business Practices",
      description: "An analytical case study examining how modern businesses can integrate sustainability into their core operations while maintaining profitability.",
      reason: "This case study represents my best analytical work, showcasing my ability to examine complex business scenarios, apply theoretical frameworks, and develop practical solutions. It demonstrates critical thinking and real-world application of academic concepts.",
      category: "Case Study",
      date: "November 2024",
      grade: "A",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      highlights: [
        "Multi-stakeholder analysis approach",
        "Financial modeling and projections",
        "Comprehensive risk assessment",
        "Actionable implementation roadmap"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.8), rgba(245, 101, 101, 0.8)), url(https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Award className="w-16 h-16 text-white mr-4" />
            <h1 className="text-5xl font-bold text-white">Best Work</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A showcase of my finest academic achievements and the work I'm most proud of
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">2</div>
            <div className="text-gray-600">Selected Works</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">A+</div>
            <div className="text-gray-600">Average Grade</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Quality Standard</div>
          </div>
        </div>

        <div className="space-y-16">
          {submissions.map((submission, index) => (
            <div key={submission.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={submission.image}
                    alt={submission.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                        {submission.category}
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{submission.grade}</span>
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white leading-tight">{submission.title}</h2>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{submission.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Featured Work #{index + 1}</h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Description</h4>
                      <p className="text-gray-700 leading-relaxed">{submission.description}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Why I Selected This Work</h4>
                      <p className="text-gray-700 leading-relaxed">{submission.reason}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {submission.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                      <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors duration-200">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Online</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Selection Criteria</h3>
          <p className="text-white/90 max-w-4xl mx-auto leading-relaxed text-lg">
            These submissions were selected based on their demonstration of critical thinking, 
            research methodology, writing quality, and practical application. Each piece represents 
            a significant learning milestone and showcases different aspects of my academic capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestWork;