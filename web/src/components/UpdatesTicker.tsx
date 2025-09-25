import React from 'react';
import { TrendingUp, Calendar, ExternalLink, Clock, AlertCircle, Star } from 'lucide-react';

const UpdatesTicker = () => {
  const updates = [
    {
      id: 1,
      title: "BARC Recruitment 2025 | Last Date 30 Sept | Apply Now",
      type: "Government",
      urgent: true,
      date: "2 hours ago",
      deadline: "5 days left",
      applicants: "12.5K applied"
    },
    {
      id: 2,
      title: "Google Summer Internship Applications Open",
      type: "Private",
      urgent: false,
      date: "5 hours ago",
      deadline: "30 days left",
      applicants: "8.2K applied"
    },
    {
      id: 3,
      title: "GATE 2025 Registration Extended Till October 15",
      type: "Exam",
      urgent: true,
      date: "1 day ago",
      deadline: "15 days left",
      applicants: "2.1M registered"
    },
    {
      id: 4,
      title: "Microsoft Campus Hiring - IITs & NITs",
      type: "Private",
      urgent: false,
      date: "1 day ago",
      deadline: "20 days left",
      applicants: "5.7K applied"
    },
    {
      id: 5,
      title: "DRDO Scientist Vacancy - 500+ Posts",
      type: "Government",
      urgent: true,
      date: "2 days ago",
      deadline: "12 days left",
      applicants: "18.3K applied"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Government': return 'bg-green-100 text-green-800';
      case 'Private': return 'bg-blue-100 text-blue-800';
      case 'Exam': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-20 bg-gradient-to-r from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 rounded-full text-sm font-semibold mb-6">
            ⚡ Live Updates
          </div>
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600 mr-4 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Latest Notification
            </h2>
          </div>
          <p className="text-xl text-gray-600 mb-8">Stay ahead with real-time notifications and opportunities</p>
        </div>

        {/* Updates Container */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl mb-8">
          <div className="space-y-6">
            {updates.map((update) => (
              <div
                key={update.id}
                className="group flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-6 flex-1">
                  {/* Urgent Indicator */}
                  {update.urgent && (
                    <div className="relative flex-shrink-0">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute"></div>
                      <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                    </div>
                  )}
                  
                  {/* Update Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(update.type)}`}>
                        {update.type}
                      </span>
                      {update.urgent && (
                        <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-xs font-bold animate-pulse">
                          🚨 URGENT
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                      {update.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {update.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-orange-500" />
                        {update.deadline}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        {update.applicants}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 opacity-0 group-hover:opacity-100 ml-6">
                  Apply Now
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Ticker */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white p-4 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex items-center mb-2">
            <AlertCircle className="w-5 h-5 mr-2 animate-pulse" />
            <span className="font-bold">Breaking News</span>
          </div>
          <div className="overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-lg font-semibold">
                🔥 Breaking: IIT Bombay announces new PhD admissions | ISRO recruitment for 200+ positions | TCS hiring drive starts next week | GATE 2025 syllabus updated | New government job notifications released
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatesTicker;