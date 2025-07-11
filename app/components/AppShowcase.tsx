"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface App {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  platforms: string[];
}

const apps: App[] = [
  {
    id: 1,
    name: "Quick Cart",
    description:
      "a Fast-commerce Grocery Delivery Application\nStreamline your grocery shopping with order tracking.\nEnjoy a seamless delivery experience.",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase"],
    platforms: ["Android"],
  },
  {
    id: 2,
    name: "EventPro",
    description:
      "a Marketplace Application to provide a platform for Event Organizer Vendors to list their services outside the platform, and User will select best vendor for them.",
    technologies: ["Dart", "Flutter Framework", "Supabase"],
    platforms: ["Multi-platform"],
  },
];

const AppShowcase = () => {
  const [selectedApp, setSelectedApp] = useState<App | null>(null);

  // Updated appDetails with Know More field for Quick Cart (id: 1)
 const appDetails: {
  [key: string]: {
    userFlow: string;
    additionalInfo: string;
    knowMore?: string;
  };
} = {
    1: {
      userFlow:
        "1. Easy and secure Google authentication using Firebase\n2. Add proper delivery address\n3. Navigate to product catalog by Best Selling and Category\n4. In Profile section, view My Orders for all current and previous orders, Addresses Screen for viewing all user addresses by different types like home, work, or flat\n5. Cart Icon to view all items in cart flawlessly with unique design\n6. Display cart values, delivery charges, and other platform fees to avoid user confusion\n7. On any product page, view Product nutrition including Protein, Calories, Fiber, and Fat",
      additionalInfo:
        "Integrated with Firebase for real-time updates and push notifications.",
      knowMore: "https://github.com/VegadDev/Quick-Cart",
    },
    2: {
      userFlow:
        "1. User views vendor listings\n2. Selects a vendor based on services\n3. Confirms booking through the app\n4. Receives confirmation email",
      additionalInfo: "Utilizes Supabase for backend and authentication.",
    },
  };

  return (
    <section className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Featured Apps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {apps.map((app) => (
            <div
              key={app.id}
              className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl p-1 cursor-pointer"
              onClick={() => setSelectedApp(app)}
            >
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 relative">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  {/* App Icon */}
                  <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-1 flex-shrink-0">
                    <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden relative">
                      {app.id === 1 ? (
                        <svg
                          className="w-10 h-10 text-blue-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-10 h-10 text-purple-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                      {/* Animated Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 animate-shimmer"></div>
                    </div>
                    {/* Corner Decorations */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full blur-[2px]"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full blur-[2px]"></div>
                  </div>

                  {/* App Info */}
                  <div className="flex-grow w-full sm:w-auto">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2">
                      <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors text-center sm:text-left break-words">
                        {app.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
                        {app.id === 1 ? "Featured" : "New"}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4 text-center sm:text-left">
                      {app.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                      {app.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 border border-gray-700/50 group-hover:border-gray-600/50 group-hover:text-gray-300 transition-colors whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <svg
                          className="w-4 h-4 text-purple-400"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H8V11H16V13M16,9H8V7H16V9M7,24H9V22H7V24M11,24H13V22H11V24M15,24H17V22H15V24" />
                        </svg>
                        <span>{app.platforms.join(" & ")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedApp && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedApp(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-xl p-6 max-w-lg w-full mx-auto relative shadow-2xl border border-gradient-to-br from-blue-500/20 to-purple-500/20"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                onClick={() => setSelectedApp(null)}
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-2">
                  {selectedApp.name}
                </h3>
                <p className="text-gray-300 text-sm italic">
                  {selectedApp.description}
                </p>
              </div>
              <div className="space-y-6">
                <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-blue-500/50">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">
                    User Flow
                  </h4>
                  <ul className="text-gray-400 list-decimal list-inside space-y-2">
                    {appDetails[selectedApp.id].userFlow
                      .split("\n")
                      .map((step, index) => (
                        <li key={index} className="ml-4">
                          {step.replace(/^\d+\.\s*/, "")}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-purple-500/50">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">
                    Additional Information
                  </h4>
                  <p className="text-gray-400">
                    {appDetails[selectedApp.id].additionalInfo}
                  </p>
                </div>
                {appDetails[selectedApp.id].knowMore && (
                  <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-green-500/50">
                    <h4 className="text-lg font-semibold text-green-400 mb-2">
                      Know More
                    </h4>
                    <a
                      href={appDetails[selectedApp.id].knowMore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline transition-colors inline-flex items-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub Repository
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AppShowcase;
