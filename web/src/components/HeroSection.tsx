import React from 'react';
import {  BookOpen, Star, TrendingUp, Users, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-10 animate-pulse delay-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-20 animate-bounce delay-300">
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
            <Star className="w-6 h-6 text-yellow-500" />
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-700">
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
            <TrendingUp className="w-6 h-6 text-green-500" />
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <BookOpen className="w-4 h-4 mr-2" />
            <span className="animate-pulse">🔥</span>
            <span className="ml-1">Trusted by 50,000+ Students Worldwide</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            Your One-Stop Destination for{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
              GATE & Career Updates
            </span>{' '}
            🚀
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-3xl text-gray-700 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
            Latest blogs, expert strategies, and job opportunities for students & aspirants.<br/>
            <span className="text-blue-600 font-semibold">Your success journey starts here.</span>
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl flex items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              Explore Blogs
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button className="group bg-white hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 text-orange-600 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 border-3 border-orange-500 hover:border-orange-600 hover:shadow-2xl flex items-center transform hover:scale-110">
              Check Jobs
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div> */}

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/50">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-700 font-semibold flex items-center justify-center">
                <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                Expert Articles
              </div>
            </div>
            <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/50">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-2">1000+</div>
              <div className="text-gray-700 font-semibold flex items-center justify-center">
                <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                Job Updates
              </div>
            </div>
            <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/50">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">50K+</div>
              <div className="text-gray-700 font-semibold flex items-center justify-center">
                <Users className="w-4 h-4 mr-2 text-orange-500" />
                Success Stories
              </div>
            </div>
            <div className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/50">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-gray-700 font-semibold flex items-center justify-center">
                <Award className="w-4 h-4 mr-2 text-purple-500" />
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;