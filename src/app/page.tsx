"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Sparkles, MousePointer2, Github, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { Button } from "@/components/ui/button";

const ComingSoonPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Debounced mouse move handler for better performance
  const handleMouseMove = useCallback(
    (e: { clientX: number; clientY: number }) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    },
    []
  );

  useEffect(() => {
    const debouncedHandler = (e: MouseEvent) => {
      requestAnimationFrame(() => handleMouseMove(e));
    };

    window.addEventListener("mousemove", debouncedHandler);
    setIsLoaded(true);

    return () => window.removeEventListener("mousemove", debouncedHandler);
  }, [handleMouseMove]);

  const stats = [
    { value: "50+", label: "Resources" },
    { value: "5+", label: "Categories" },
    { value: "2.5k", label: "Visionaries" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Enhanced Dynamic Background */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(0, 14, 46, 0.7) 0%, 
            rgba(0, 0, 0, 0.95) 50%),
            linear-gradient(to bottom, #000 0%, #000E2E 100%)
          `,
        }}
      />

      <FlickeringGrid
        className="fixed top-0 left-0 [mask-image:radial-gradient(1200px_circle_at_center,white,transparent)] h-screen w-screen opacity-60"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.4}
        flickerChance={0.03}
      />

      {/* Premium Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10">
        {/* Enhanced Navigation Bar */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="fixed top-0 w-full p-6 flex justify-between items-center backdrop-blur-sm bg-black/20"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-light tracking-[0.3em] uppercase bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Weblist
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-zinc-400 hover:text-white"
              disabled
            >
              <Github className="w-4 h-4 mr-2" />
              Star
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-zinc-400 hover:text-white"
              disabled
            >
              <Twitter className="w-4 h-4 mr-2" />
              Follow
            </Button>
          </div>
        </motion.div>

        {/* Enhanced Center Content */}
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl relative">
            {/* Animated Gradient Orbs */}
            <div className="absolute -left-20 top-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -right-20 bottom-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700" />

            <div className="relative space-y-8 text-center">
              {/* New Year Message */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-blue-400 font-light tracking-wider"
              >
                🎉 Happy New Year 2025! 🎊
              </motion.div>

              <AnimatePresence>
                {isLoaded && (
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-[12vw] font-bold leading-none"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span className="bg-gradient-to-b from-white via-white/90 to-blue-500/50 bg-clip-text text-transparent font-display">
                      BEYOND
                    </span>
                  </motion.h1>
                )}
              </AnimatePresence>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <p className="text-2xl md:text-3xl font-light text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                  Crafting tomorrow&apos;s web development experience.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="p-4 rounded-lg bg-white/5 backdrop-blur-sm"
                    >
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-zinc-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Email Signup */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex justify-center gap-4"
                >
                  <Button
                    size="lg"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8"
                    disabled
                  >
                    Join Waitlist
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="w-screen flex items-center justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="fixed bottom-12 transform -translate-x-1/2 flex items-center justify-center gap-3 text-sm text-zinc-400 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full mx-auto"
        >
          <MousePointer2 className="w-4 h-4" />
          <span className="tracking-wider">Move cursor to explore</span>
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;