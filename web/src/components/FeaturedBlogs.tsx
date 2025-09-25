import React from 'react';
import { Clock, User, ArrowRight, Eye, Heart, Share2, Bookmark } from 'lucide-react';

const FeaturedBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "GATE 2025: Complete Preparation Strategy for ECE",
      excerpt: "Master the art of GATE preparation with our comprehensive strategy guide covering all essential topics and time management techniques.",
      author: "Dr. Sharma",
      readTime: "8 min read",
      views: "12.5K",
      likes: "1.2K",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "GATE Prep",
      trending: true,
      publishedDate: "2 days ago"
    },
    {
      id: 2,
      title: "ISRO Recruitment 2025: Applications Open",
      excerpt: "Latest updates on ISRO scientist positions with detailed eligibility criteria, application process, and important dates.",
      author: "Career Team",
      readTime: "5 min read",
      views: "8.3K",
      likes: "890",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Govt Jobs",
      trending: false,
      publishedDate: "1 day ago"
    },
    {
      id: 3,
      title: "Top Tech Companies Hiring Fresh Graduates",
      excerpt: "Explore opportunities at leading tech companies actively recruiting fresh engineering graduates with competitive packages.",
      author: "HR Insights",
      readTime: "6 min read",
      views: "15.2K",
      likes: "2.1K",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Private Jobs",
      trending: true,
      publishedDate: "3 hours ago"
    },
    {
      id: 4,
      title: "Interview Tips: Ace Your Technical Round",
      excerpt: "Essential strategies and common questions to help you succeed in technical interviews at top engineering companies.",
      author: "Interview Expert",
      readTime: "7 min read",
      views: "9.7K",
      likes: "1.5K",
      image: "https://images.pexels.com/photos/5439486/pexels-photo-5439486.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Career Tips",
      trending: false,
      publishedDate: "5 days ago"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'GATE Prep': return 'bg-blue-100 text-blue-800';
      case 'Govt Jobs': return 'bg-green-100 text-green-800';
      case 'Private Jobs': return 'bg-orange-100 text-orange-800';
      case 'Career Tips': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            🔥 Trending Now
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Featured Blog Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest insights, expert strategies, and career opportunities that matter most to your success
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {blogs.map((blog) => (
            <div key={blog.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 hover:border-blue-200 overflow-hidden relative">
              {blog.trending && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  🔥 TRENDING
                </div>
              )}
              
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${getCategoryColor(blog.category)}`}>
                    {blog.category}
                  </span>
                </div>
                
                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                    <Bookmark className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                    <Share2 className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 font-medium">{blog.publishedDate}</span>
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {blog.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-3 h-3 mr-1" />
                      {blog.likes}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* Blog Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                  <User className="w-3 h-3 mr-1" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="group/btn w-full flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-blue-600 hover:text-blue-700 font-semibold text-sm py-3 px-4 rounded-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            View All Blogs
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;