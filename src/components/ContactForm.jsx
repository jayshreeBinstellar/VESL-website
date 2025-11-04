import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    equipment: "",
    duration: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request Submitted! We'll contact you within 24 hours.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      equipment: "",
      duration: "",
      message: "",
    });
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-[#1c1c1c]" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE - Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4  text-gray-300">
                Get in Touch
              </h2>
              <p className=" text-lg  text-gray-300">
                Ready to rent equipment? Fill out the form and we'll get back to
                you with a customized quote.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#f97a1f1a] rounded-lg">
                  <Phone className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1  text-gray-300 ">Phone</h3>
                  <p className=" text-gray-300">+91 9586465642 (India)</p>
                  <p className=" text-gray-300">+232 30094606 (Sierra Leone)</p>
                  <p className=" text-gray-300">+232 75636333 (Sierra Leone)</p>
                  <p className="text-sm mt-1  text-gray-300">Mon-Sat: 10am - 5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#f97a1f1a] rounded-lg">
                  <Mail className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1  text-gray-300">Email</h3>
                  <p className=" text-gray-300">vaibhavienterpriseslltd2022@gmail.com</p>
                  <p className="text-sm  text-gray-300 ">We'll respond within 24hrs</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#f97a1f1a] rounded-lg">
                  <MapPin className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-300 ">Location</h3>
                  <p className=" text-gray-300">Tino's drive, Magburka,</p>
                  <p className=" text-gray-300">Freetown, Sierra Leone, West Africa</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Form */}
          <div
            className="p-8 bg-[#131313] border border-[#333333] rounded-xl shadow-sm animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="font-medium text-gray-300">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full border border-gray-400 bg-[#0d0d0d] rounded-md p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-100"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium text-gray-300">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@company.com"
                    required
                    className="w-full border border-gray-400 bg-[#0d0d0d] rounded-md p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-100"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="font-medium text-gray-300">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full border border-gray-400 bg-[#0d0d0d] rounded-md p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-100"
                  />
                </div>
              </div>

              {/* Equipment Type */}
              <div className="space-y-2">
                <label htmlFor="equipment" className="font-medium text-gray-300">
                  Equipment Type *
                </label>
                <select
                  id="equipment"
                  value={formData.equipment}
                  onChange={(e) => handleChange("equipment", e.target.value)}
                  required
                  className="w-full border border-gray-400 bg-[#0d0d0d] rounded-md p-3 text-gray-400 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                >
                  <option value="">Select equipment</option>
                  <option value="drill">Hydraulic Drill Rigs</option>
                  <option value="excavator">Excavators</option>
                </select>
              </div>

              {/* Rental Duration */}
              <div className="space-y-2">
                <label htmlFor="duration" className="font-medium text-gray-300">
                  Rental Duration *
                </label>
                <select
                  id="duration"
                  value={formData.duration}
                  onChange={(e) => handleChange("duration", e.target.value)}
                  required 
                  className="w-full border border-gray-400 rounded-md p-3 bg-[#0d0d0d] text-gray-400 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                >
                  <option value="">Select duration</option>
                  <option value="1-7">1-7 days</option>
                  <option value="1-4">1-4 weeks</option>
                  <option value="1-3">1-3 months</option>
                  <option value="3-6">3-6 months</option>
                  <option value="6+">6+ months</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="font-medium text-gray-300">
                  Project Details
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full border border-gray-400 bg-[#0d0d0d] rounded-md p-3 focus:ring-2 focus:ring-orange-400 focus:outline-none resize-none text-gray-100"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-md flex items-center justify-center transition-all group"
              >
                Submit Request
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;