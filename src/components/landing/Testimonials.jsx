
'use client';

import { useState, useEffect } from 'react';

const Testimonials = ({ heading, description }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    // Animation on component mount
    setIsVisible(true);

    // Listen for system dark mode changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setDarkMode(e.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      content: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp",
      avatar: "JS",
      color: "bg-blue-500"
    },
    {
      id: 2,
      content: "The digital marketing strategies implemented by Positivus have dramatically improved our conversion rates. Their data-driven approach and creativity make them stand out from other agencies we've worked with.",
      author: "Sarah Johnson",
      position: "CEO at TechSolutions Inc",
      avatar: "SJ",
      color: "bg-purple-500"
    },
    {
      id: 3,
      content: "Working with Positivus has been a game-changer for our e-commerce business. Our online sales have increased by 200% since implementing their strategies. Their team is knowledgeable and always available to help.",
      author: "Michael Chen",
      position: "E-commerce Manager at FashionHub",
      avatar: "MC",
      color: "bg-green-500"
    },
    {
      id: 4,
      content: "Positivus transformed our social media presence completely. We've seen engagement rates triple and have gained thousands of genuine followers who are actually interested in our products.",
      author: "Emily Rodriguez",
      position: "Social Media Director at BeautyLife",
      avatar: "ER",
      color: "bg-pink-500"
    },
    {
      id: 5,
      content: "The SEO work done by Positivus has put our website on the first page of Google for all our key terms. The results have been incredible for our lead generation efforts.",
      author: "David Wilson",
      position: "Operations Manager at LegalFirm LLC",
      avatar: "DW",
      color: "bg-orange-500"
    },
    {
      id: 6,
      content: "As a startup, we needed a digital marketing partner that could deliver results on a tight budget. Positivus exceeded our expectations and helped us establish a strong online presence from day one.",
      author: "Jessica Taylor",
      position: "Founder at InnovateStartup",
      avatar: "JT",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className={`min-h-screen py-16 px-4 transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {heading}
          </h2>
          <p className={`text-lg max-w-3xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {description}
          </p>
          
          {/* Dark/Light Mode Toggle */}
          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`flex items-center justify-center w-12 h-6 rounded-full transition-all duration-300 ${darkMode ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <span className={`flex items-center justify-center w-5 h-5 rounded-full transition-all duration-300 transform ${darkMode ? 'translate-x-3 bg-white' : '-translate-x-3 bg-yellow-400'}`}>
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </span>
            </button>
            <span className="ml-2 text-sm">{darkMode ? 'Dark' : 'Light'} Mode</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`rounded-xl p-6 transition-all duration-500 transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg`}
              style={{ transitionDelay: `${index * 1000}ms` }}
            >
              <div className="flex items-start mb-4">
                <div className={`${testimonial.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{testimonial.author}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.position}</p>
                </div>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} italic`}>"{testimonial.content}"</p>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default Testimonials;