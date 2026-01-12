import React from "react";
import worlingman from "../assets/3d man3.png"

const AboutSection = () => {
  return (
    <section className="bg-slate-900 rounded-2xl text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-10">About</h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Illustration */}
          <div className="w-full lg:w-1/2 flex justify-between">
            <img
              src={worlingman}
              alt="Developer illustration"
              className="max-w-xs sm:max-w-sm md:max-w-md lg:w-[280px]"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            
            {/* Item */}
            <div className="flex gap-4">
              <span className="text-indigo-400 text-xl">→</span>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Frontend developer
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  I create responsive, user-friendly interfaces using modern
                  frameworks and best UI/UX practices to deliver clean,
                  accessible web experiences.
                </p>
              </div>
            </div>

            {/* Item */}
            <div className="flex gap-4">
              <span className="text-indigo-400 text-xl">→</span>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Database developer
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  I design and optimize databases, ensuring data integrity,
                  performance, and scalability for real-world applications.
                </p>
              </div>
            </div>

            {/* Item */}
            <div className="flex gap-4">
              <span className="text-indigo-400 text-xl">→</span>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Backend developer
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  I build robust APIs and server-side logic with secure,
                  efficient architectures to support scalable products.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
