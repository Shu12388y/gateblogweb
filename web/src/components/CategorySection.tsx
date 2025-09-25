import React from 'react';
import { BookOpen, Building2, Briefcase, GraduationCap, ArrowRight, TrendingUp } from 'lucide-react';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      title: "GATE Preparation",
      description: "Comprehensive guides, mock tests, and expert strategies for GATE success",
      icon: BookOpen,
      color: "blue",
      count: "200+ Articles",
      growth: "+15% this month",
      popular: true
    },
    {
      id: 2,
      title: "Government Jobs",
      description: "Latest notifications, eligibility criteria, and application deadlines",
      icon: Building2,
      color: "green",
      count: "500+ Opportunities",
      growth: "+25% this week",
      popular: true
    },
    {
      id: 3,
      title: "Private Jobs",
      description: "Corporate openings, startup opportunities, and industry insights",
      icon: Briefcase,
      color: "orange",
      count: "300+ Companies",
      growth: "+10% this month",
      popular: false
    },
    {
      id: 4,
      title: "Student Resources",
      description: "Study materials, career guidance, and skill development resources",
      icon: GraduationCap,
      color: "purple",
      count: "150+ Resources",
      growth: "+8% this month",
      popular: false
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50 hover:bg-blue-100',
          icon: 'text-blue-600',
          border: 'border-blue-200'
        };
      case 'green':
        return {
          bg: 'bg-green-50 hover:bg-green-100',
          icon: 'text-green-600',
          border: 'border-green-200'
        };
      case 'orange':
        return {
          bg: 'bg-orange-50 hover:bg-orange-100',
          icon: 'text-orange-600',
          border: 'border-orange-200'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50 hover:bg-purple-100',
          icon: 'text-purple-600',
          border: 'border-purple-200'
        };
      default:
        return {
          bg: 'bg-gray-50 hover:bg-gray-100',
          icon: 'text-gray-600',
          border: 'border-gray-200'
        };
    }
  };

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-full text-sm font-semibold mb-6">
            📚 Popular Categories
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find exactly what you're looking for with our expertly organized content categories designed for your success
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const colors = getColorClasses(category.color);
            
            return (
              <div
                key={category.id}
                className={`group p-8 rounded-3xl ${colors.bg} border ${colors.border} cursor-pointer transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl relative overflow-hidden`}
              >
                {category.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold">
                    🔥 HOT
                  </div>
                )}
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-current transform translate-x-16 -translate-y-16"></div>
                </div>

                {/* Icon */}
                <div className={`relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <IconComponent className={`w-10 h-10 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Stats */}
                <div className="space-y-2 mb-4">
                  <div className={`text-lg font-bold ${colors.icon}`}>
                  {category.count}
                  </div>
                  <div className="flex items-center text-xs text-green-600 font-semibold">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {category.growth}
                  </div>
                </div>
                
                {/* Explore Button */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className={`flex items-center text-sm font-semibold ${colors.icon} hover:underline`}>
                    Explore Now
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Quick Access Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Access</h3>
              <p className="text-gray-600">Jump directly to what you need most</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl font-semibold hover:bg-blue-200 transition-colors duration-200">
                Latest GATE Updates
              </button>
              <button className="px-4 py-2 bg-green-100 text-green-700 rounded-xl font-semibold hover:bg-green-200 transition-colors duration-200">
                Job Alerts
              </button>
              <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-xl font-semibold hover:bg-orange-200 transition-colors duration-200">
                Study Materials
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;