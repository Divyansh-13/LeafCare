import React from 'react';
import { Upload, Search, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowToUse = () => {
  const steps = [
    {
      icon: <Upload size={40} />,
      title: 'Upload',
      description: 'Take a clear photo of the affected leaf and upload it to our platform.',
    },
    {
      icon: <Search size={40} />,
      title: 'Analyze',
      description: 'Our technology will scan and analyze the leaf for signs of disease.',
    },
    {
      icon: <AlertCircle size={40} />,
      title: 'Get Results',
      description: "Receive a detailed report on the leaf's health and potential issues.",
    },
  ];

  return (
    <section
      id="how-to-use"
      className="py-20 bg-gradient-to-b from-[#F6FFF8] to-[#EAF4EA] text-center min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#1A5319] mb-16">
          How to Use
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white shadow-xl rounded-lg p-10 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-[#80AF81] to-[#1A5319] rounded-full text-white mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#1A5319] mb-4">
                {step.title}
              </h3>
              <p className="text-lg text-[#508D4E]">
                {step.description}
              </p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-[#80AF81] to-[#1A5319] rounded-full mt-4"></div>
            </div>
          ))}
        </div>

        <Link to="/result">
          <button className="mt-16 bg-gradient-to-r from-[#1A5319] to-[#508D4E] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300">
            Analyze a Leaf
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HowToUse;
