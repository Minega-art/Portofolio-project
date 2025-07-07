import React, { useState } from 'react';
import { FileText, Quote, BookOpen, ChevronRight, CheckCircle } from 'lucide-react';

const Citations: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState('paraphrasing');

  const subTabs = [
    { id: 'paraphrasing', label: 'Paraphrasing and Summarizing', icon: Quote },
    { id: 'bibliography', label: 'Annotated Bibliography', icon: BookOpen }
  ];

  const paraphrasingExamples = [
    {
      title: "Original Text vs. Paraphrase",
      original: "The rapid advancement of artificial intelligence has fundamentally transformed the landscape of modern education, creating new opportunities for personalized learning while simultaneously raising concerns about academic integrity and the role of traditional pedagogical methods.",
      paraphrase: "AI's swift progress has significantly changed educational practices, offering chances for customized learning experiences but also creating challenges regarding academic honesty and conventional teaching approaches (Author, 2024).",
      summary: "AI advancement in education brings both opportunities and challenges for learning and teaching methods."
    },
    {
      title: "Complex Concept Simplification",
      original: "Neuroplasticity, the brain's remarkable ability to reorganize itself by forming new neural connections throughout life, enables individuals to adapt their mental processes in response to new situations or changes in their environment.",
      paraphrase: "The brain's capacity to create new neural pathways allows people to adjust their thinking when faced with different circumstances or environmental shifts (Researcher, 2024).",
      summary: "Neuroplasticity helps people adapt mentally to new situations through brain reorganization."
    }
  ];

  const bibliographyEntries = [
    {
      citation: "Smith, J. A. (2024). Digital transformation in higher education: A comprehensive analysis. Journal of Educational Technology, 15(3), 45-67.",
      annotation: "This peer-reviewed article provides a thorough examination of how digital technologies are reshaping university curricula and student learning outcomes. Smith's research, based on a five-year longitudinal study of 20 universities, offers valuable insights into the challenges and opportunities of educational technology integration. The methodology is robust, utilizing both quantitative survey data and qualitative interviews. This source is particularly relevant to my research as it addresses the same institutional context and provides empirical evidence for technology adoption patterns.",
      type: "Journal Article",
      relevance: "High"
    },
    {
      citation: "Johnson, M. B., & Davis, L. K. (2023). Sustainable business practices in the 21st century. Corporate Responsibility Quarterly, 8(2), 112-128.",
      annotation: "Johnson and Davis present a comprehensive framework for implementing sustainable practices in modern corporations. Their mixed-methods approach combines case studies from Fortune 500 companies with quantitative analysis of sustainability metrics. The authors' background in environmental economics and business strategy lends credibility to their recommendations. This source supports my argument about the financial viability of sustainable business models and provides concrete examples of successful implementation strategies.",
      type: "Journal Article",
      relevance: "High"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8)), url(https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <FileText className="w-16 h-16 text-white mr-4" />
            <h1 className="text-5xl font-bold text-white">Citations</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Examples of proper academic writing techniques and citation practices
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Sub-navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex flex-wrap gap-4">
            {subTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 font-medium ${
                    activeSubTab === tab.id
                      ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                  {activeSubTab === tab.id && <CheckCircle className="w-4 h-4" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Paraphrasing and Summarizing Tab */}
        {activeSubTab === 'paraphrasing' && (
          <div className="space-y-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
                  alt="Paraphrasing and summarizing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
                <div className="absolute bottom-6 left-8">
                  <div className="flex items-center space-x-3">
                    <Quote className="w-8 h-8 text-white" />
                    <h2 className="text-3xl font-bold text-white">Paraphrasing and Summarizing</h2>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Principles</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Paraphrasing</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Restate ideas in your own words</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Maintain the original meaning</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Change sentence structure</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Use synonyms appropriately</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Always cite the source</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Summarizing</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span>Capture main ideas only</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span>Significantly shorter than original</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span>Focus on key points</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span>Omit examples and details</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span>Maintain logical flow</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {paraphrasingExamples.map((example, index) => (
                    <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                      <div className="bg-gray-50 p-6 border-b">
                        <h3 className="text-xl font-bold text-gray-900">{example.title}</h3>
                      </div>
                      
                      <div className="p-6 space-y-6">
                        <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-6">
                          <h4 className="font-bold text-red-900 mb-3 flex items-center">
                            <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mr-2">O</span>
                            Original Text
                          </h4>
                          <p className="text-red-800 italic leading-relaxed">{example.original}</p>
                        </div>
                        
                        <div className="bg-green-50 border-l-4 border-green-400 rounded-r-xl p-6">
                          <h4 className="font-bold text-green-900 mb-3 flex items-center">
                            <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-2">P</span>
                            Paraphrase
                          </h4>
                          <p className="text-green-800 leading-relaxed">{example.paraphrase}</p>
                        </div>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-6">
                          <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                            <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-2">S</span>
                            Summary
                          </h4>
                          <p className="text-blue-800 leading-relaxed">{example.summary}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Annotated Bibliography Tab */}
        {activeSubTab === 'bibliography' && (
          <div className="space-y-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
                  alt="Annotated bibliography"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-600/80 to-transparent"></div>
                <div className="absolute bottom-6 left-8">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-8 h-8 text-white" />
                    <h2 className="text-3xl font-bold text-white">Annotated Bibliography</h2>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Components of an Annotation</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md text-center">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-teal-600 font-bold">1</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Summary</h4>
                      <p className="text-gray-700 text-sm">Brief overview of the main argument or findings</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-green-600 font-bold">2</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Assessment</h4>
                      <p className="text-gray-700 text-sm">Evaluation of credibility, methodology, and bias</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Reflection</h4>
                      <p className="text-gray-700 text-sm">How the source relates to your research</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {bibliographyEntries.map((entry, index) => (
                    <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                      <div className="bg-gray-50 p-6 border-b">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold text-gray-900">Bibliography Entry #{index + 1}</h3>
                          <div className="flex items-center space-x-2">
                            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                              {entry.type}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              entry.relevance === 'High' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {entry.relevance} Relevance
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 space-y-6">
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                            <Quote className="w-5 h-5 text-gray-600 mr-2" />
                            Citation
                          </h4>
                          <p className="text-gray-800 font-mono text-sm leading-relaxed bg-white p-4 rounded-lg border">
                            {entry.citation}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                            <FileText className="w-5 h-5 text-gray-600 mr-2" />
                            Annotation
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{entry.annotation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Citations;