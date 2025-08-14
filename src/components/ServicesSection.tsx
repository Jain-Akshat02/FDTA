"use client";
import { motion } from "framer-motion";
import { Globe, Users, BookOpen, TrendingUp, Shield, Handshake } from "lucide-react";

const services = [
  {
    icon: <Globe size={32} />,
    title: "Global Networking",
    description: "Connect with trade professionals from over 50 countries through our extensive network.",
    color: "from-red-600 to-red-700"
  },
  {
    icon: <BookOpen size={32} />,
    title: "Professional Development",
    description: "Access exclusive training programs, workshops, and industry certifications.",
    color: "from-red-700 to-red-800"
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Market Intelligence",
    description: "Get insights into emerging markets, trends, and business opportunities.",
    color: "from-red-800 to-red-900"
  },
  {
    icon: <Shield size={32} />,
    title: "Regulatory Support",
    description: "Navigate complex trade regulations with expert guidance and resources.",
    color: "from-red-900 to-red-950"
  },
  {
    icon: <Handshake size={32} />,
    title: "Partnership Opportunities",
    description: "Discover strategic partnerships and collaborative business ventures.",
    color: "from-red-600 to-red-700"
  },
  {
    icon: <Users size={32} />,
    title: "Industry Advocacy",
    description: "Represent your interests in policy discussions and industry forums.",
    color: "from-red-700 to-red-800"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for trade professionals at every stage of their journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-accent/30"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 