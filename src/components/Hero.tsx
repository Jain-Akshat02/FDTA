"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users, Globe, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Globe size={16} />
              National Trade Association
            </motion.div>
            
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Connecting <span className="text-white">Trade</span> Across Borders
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-200 mb-8 leading-relaxed max-w-lg"
            >
              Empowering global trade professionals with insights, networking, and resources for a better business future.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                Join Us Today
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                Learn More
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-8 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10 lakh+</div>
                <div className="text-gray-200 text-sm">Active Members</div>
              </div>
              <div className="text-center">
                
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">60+</div>
                <div className="text-gray-200 text-sm">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Association Head Photo */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <div className="relative z-20">
                <Image
                  src="/pres.png"
                  alt="FDTA Association President"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover"
                  priority
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full opacity-20 z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/30 rounded-full opacity-20 z-10"></div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white text-primary p-4 rounded-xl shadow-xl z-30 max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Leadership Team</div>
                    <div className="text-sm text-gray-600">Expert guidance for your success</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
