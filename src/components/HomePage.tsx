import React from 'react';
import { User, Target, Eye, BookOpen, Award, FileText, Mail, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Welcome to My
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Academic Journey
              </span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90 max-w-2xl mx-auto">
              Discover my passion for learning, growth, and academic excellence through 
              this comprehensive portfolio showcasing my educational journey and achievements.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto">
              <span>Explore My Work</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About My Portfolio
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This portfolio represents my commitment to academic excellence and continuous learning. 
                Through careful reflection and documentation, I've created a comprehensive showcase 
                of my educational journey, highlighting key insights, achievements, and growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-orange-500 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Weekly Reflections</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-blue-500 mb-1">2</div>
                  <div className="text-sm text-gray-600">Best Work Pieces</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Student studying"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Sections */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Portfolio Sections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore different aspects of my academic journey through these carefully curated sections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Class reflections"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <BookOpen className="w-8 h-8 mb-2 text-blue-400" />
                  <h3 className="text-lg font-bold">Class Reflections</h3>
                  <p className="text-sm opacity-90">Weekly learning insights</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Best work"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Award className="w-8 h-8 mb-2 text-yellow-400" />
                  <h3 className="text-lg font-bold">Best Work</h3>
                  <p className="text-sm opacity-90">Top achievements</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Citations"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <FileText className="w-8 h-8 mb-2 text-green-400" />
                  <h3 className="text-lg font-bold">Citations</h3>
                  <p className="text-sm opacity-90">Academic writing</p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Contact"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Mail className="w-8 h-8 mb-2 text-purple-400" />
                  <h3 className="text-lg font-bold">Contact Me</h3>
                  <p className="text-sm opacity-90">Get in touch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-8">My Academic Mission</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Purpose</h3>
                    <p className="text-white/90 leading-relaxed">
                      To document my learning journey and demonstrate continuous growth 
                      through reflective practice and academic excellence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Vision</h3>
                    <p className="text-white/90 leading-relaxed">
                      To become a thoughtful practitioner who applies theoretical knowledge 
                      to create meaningful impact in my field of study.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Academic success"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore My Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Navigate through my portfolio to discover my academic growth, 
            reflections, and achievements throughout this educational journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              View Reflections
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              See Best Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;