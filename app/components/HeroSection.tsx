'use client';

import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-left mb-8">
          {/* Profile Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1">
              <img
                src="/profile.jpg"
                alt="Devdatt Vegad Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          <span className="text-lg md:text-xl text-gray-400 mb-2 block">Hi, I&apos;m</span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-transparent bg-clip-text bg-[size:200%] animate-gradient">
              Devdatt Vegad
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
            App Developer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed px-4">
            Crafting exceptional mobile experiences with
            <span className="text-blue-400"> Dart</span>, <span className="text-purple-400"> Kotlin</span>, and
            <span className="text-blue-400"> Jetpack Compose</span>
          </p>
          <div className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl p-1 max-w-2xl mx-auto mt-4">
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed text-left">
                Creating user-friendly apps. I have six months of internship experience and enjoy building clean, efficient, and modern applications that solve real-world problems.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed text-left mt-4">
                I&apos;m currently learning Flutter and Dart to expand my mobile development expertise. I also have experience in Shopify website development. When I&apos;m not coding, I explore new tech trends or work on personal projects to stay sharp. I&apos;m excited to connect and contribute my skills to innovative projects!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;