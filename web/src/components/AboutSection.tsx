import React from 'react';
import { Target, Users, Award, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Expert Guidance",
      description: "Curated content from industry experts and successful GATE toppers"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of students in their journey to success"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of helping students achieve their career goals"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Coverage",
      description: "From exam prep to job placement - we cover it all"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our goal is to provide students with reliable exam strategies, preparation tips, 
              and job updates — all in one place. We believe in empowering the next generation 
              of engineers and professionals with the knowledge and opportunities they need to succeed.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              ExamVerse serves as a neutral platform, bringing together the best resources, 
              latest updates, and expert insights to help students navigate their academic 
              and professional journey with confidence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">50,000+</div>
                <div className="text-sm text-gray-600">Students Helped</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-500">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;