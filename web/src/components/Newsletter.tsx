'use client'
import React, { useState } from 'react';
import { Mail, CheckCircle, Gift, Bell, Star } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Special Offer Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-400 to-red-400 text-white rounded-full text-sm font-bold mb-8 animate-bounce">
          <Gift className="w-4 h-4 mr-2" />
          🎁 FREE Study Materials + Job Alerts
        </div>
        
        {/* Icon */}
        <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 transform hover:scale-110 transition-transform duration-300">
          <Mail className="w-10 h-10 text-white" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Stay Ahead of the Competition 🚀
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
          Get <span className="font-bold text-yellow-300">FREE weekly updates</span> on GATE preparation tips, exclusive job opportunities, 
          and expert career guidance delivered straight to your inbox. Join the success community!
        </p>

        {/* Newsletter Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-sm rounded-2xl">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-6 py-4 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-white/30 outline-none text-lg bg-white/90 backdrop-blur-sm"
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-400 disabled:to-gray-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap shadow-xl flex items-center justify-center min-w-[160px]"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <>
                Subscribe Now
                    <Bell className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-white mb-4">
              <CheckCircle className="w-8 h-8 text-green-400 animate-bounce" />
              <span className="text-2xl font-bold">🎉 Welcome to the Community!</span>
            </div>
            <p className="text-blue-100 text-lg">
              Successfully subscribed! Check your email for your welcome gift and first update.
            </p>
          </div>
        )}

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-blue-100 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="font-bold text-lg">Weekly Job Updates</span>
            </div>
            <p className="text-sm text-blue-200">Latest opportunities from top companies</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="font-bold text-lg">GATE Prep Tips</span>
            </div>
            <p className="text-sm text-blue-200">Expert strategies from GATE toppers</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="font-bold text-lg">Career Guidance</span>
            </div>
            <p className="text-sm text-blue-200">Personalized advice for your success</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-blue-200">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold">Join 50,000+ students already subscribed</span>
          </div>
          <div className="text-sm">
            Unsubscribe anytime • No spam, ever • 100% Free
          </div>
        </div>
        
        {/* Social Proof */}
        <div className="mt-8 text-blue-200 text-sm">
          <p>⭐⭐⭐⭐⭐ &quot;Best resource for GATE preparation!&quot; - Rahul, IIT Delhi</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;