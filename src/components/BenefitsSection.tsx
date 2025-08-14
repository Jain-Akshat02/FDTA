"use client";
import { motion } from "framer-motion";
import { CheckCircle, Star, Award, Target } from "lucide-react";

const benefits = [
  {
    icon: <CheckCircle size={24} />,
    title: "Exclusive Access",
    description: "Get early access to industry reports, market analysis, and exclusive events."
  },
  {
    icon: <Star size={24} />,
    title: "Premium Resources",
    description: "Access to premium tools, databases, and research materials worth thousands."
  },
  {
    icon: <Award size={24} />,
    title: "Recognition",
    description: "Earn industry recognition and certifications that boost your professional credibility."
  },
  {
    icon: <Target size={24} />,
    title: "Strategic Growth",
    description: "Strategic guidance to help you expand your business globally."
  }
];

const stats = [
  { number: "95%", label: "Member Satisfaction" },
  { number: "40%", label: "Average Growth" },
  { number: "200+", label: "Annual Events" },
  { number: "24/7", label: "Support Available" }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="text-white">TradeConnect</span>?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Join thousands of trade professionals who have transformed their careers and businesses through our comprehensive support system.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="text-white flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 