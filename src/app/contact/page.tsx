
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-primary via-secondary to-primary">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          Contact Us
        </h1>
        <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-16">
          Get in touch with us for any inquiries, support, or collaboration opportunities. 
          We're here to help you succeed.
        </p>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-300 mb-2">Call us directly</p>
            <a 
              href="tel:+918010090563" 
              className="text-white font-semibold text-lg hover:text-accent/80 transition-colors"
            >
              +91 8010090563
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300 mb-2">Send us a message</p>
            <a 
              href="mailto:info@fdta.org" 
              className="text-white font-semibold text-lg hover:text-accent/80 transition-colors"
            >
              info@fdta.org
            </a>
          </div>

          {/* Address Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-300 mb-2">Visit our office</p>
            <p className="text-white font-medium">
              3848, Gali mandir wali,Pahari Dhiraj, Delhi-110006,India
            </p>
          </div>
        </div>

        <hr className="my-16 border-white/20" />

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-white font-medium mb-2">
                     Name
                  </label>
                  <input 
                    type="text" 
                    id="firstName"
                    placeholder="Enter your name" 
                    className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Enter your email address" 
                  className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  placeholder="Enter your phone number" 
                  className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  placeholder="Tell us more about your inquiry..." 
                  rows={5} 
                  className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-accent text-black py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-white font-medium">Monday - Friday</p>
                    <p className="text-gray-300">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-white font-medium">Saturday</p>
                    <p className="text-gray-300">10:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-white font-medium">Sunday</p>
                    <p className="text-gray-300">Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose FDTA?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">•</span>
                  <span>Expert guidance and support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">•</span>
                  <span>Quick response times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">•</span>
                  <span>Professional business solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent text-lg">•</span>
                  <span>Local expertise and connections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
