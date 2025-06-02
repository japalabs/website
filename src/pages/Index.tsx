import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50/30"></div>

      {/* Orange accent dots */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full opacity-40"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-orange-500 rounded-full opacity-60"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-30"></div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto mb-20">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <img
            src="/logo.png"
            alt="japalabs logo"
            className="h-16 md:h-20 object-contain"
          />
        </div>

        {/* Services Section */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-6 tracking-wide">
          services
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
          we build amazing software solutions for your business needs.
        </p>

        {/* Orange accent line */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto mb-8"></div>

        {/* Fix Vibed Codes Service */}
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 max-w-lg mx-auto">
          <a
            href="https://fixvibecodes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-3 group-hover:text-orange-500 transition-colors duration-300">
              fix vibe codes
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
              professional code review and optimization service to enhance your
              codebase quality and performance.
            </p>
            <div className="inline-flex items-center text-orange-500 group-hover:text-orange-600 transition-colors duration-300">
              <span className="text-sm font-medium">learn more</span>
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
