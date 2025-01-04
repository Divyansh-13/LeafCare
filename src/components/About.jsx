import React from 'react';

const About = () => {
  return (
    <div id="about">
      <section className="w-full bg-green-50 py-16 px-6">
      
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="relative lg:w-1/4">
            <div className="absolute inset-0 bg-green-800 rounded-lg shadow-xl transform translate-x-6 translate-y-6"></div>
            <img
              src="/Leaf4.jpg"
              alt="About Leaf Care"
              className="relative w-80 h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-700 text-justify mb-6 leading-relaxed">
              Leaf Care is dedicated to empowering gardeners, farmers, and plant enthusiasts by providing cutting-edge
              technology for monitoring plant health. Our platform helps you identify plant diseases and deficiencies
              with ease, ensuring proactive care for your greenery.
            </p>
            <p className="text-lg text-gray-700 text-justify mb-6 leading-relaxed">
              Whether you're a hobbyist or a professional, Leaf Care's user-friendly interface and reliable analysis make
              plant care accessible to everyone. Join us in revolutionizing plant health management!
            </p>
          </div>
        </div>

        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mt-16">
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-700 text-justify mb-6 leading-relaxed">
              With Leaf Care, you can upload a photo of your plant's leaves and receive immediate feedback on their
              health. Our advanced algorithms analyze the image for signs of disease, nutrient deficiencies, or other
              conditions, giving you actionable insights to keep your plants thriving.
            </p>
            <p className="text-lg text-gray-700 text-justify mb-6 leading-relaxed">
              Stay ahead of plant health issues with our accurate and fast diagnostic tools. Designed for simplicity and
              precision, our platform is the ultimate companion for plant enthusiasts everywhere.
            </p>
          </div>

          <div className="relative lg:w-1/4">
            <div className="absolute inset-0 bg-green-800 rounded-lg shadow-xl transform translate-x-6 translate-y-6"></div>
            <img
              src="/Leaf2.jpg"
              alt="Advanced Plant Insights"
              className="relative w-80 h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;