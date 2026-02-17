import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";


export const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
    setIsSubmitting(true);
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(() => {
        toast.success("Message sent successfully!");
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("Failed to send message.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleWhatsAppSubmit = () => {
    const { name, email, phone, equipment, duration, message } = formData;

    // Validation
    if (!name || !phone || !equipment) {
      toast.error("Please fill in Name, Phone, and Equipment type.");
      return;
    }

    const whatsappMessage =
      `NEW RENTAL QUOTE REQUEST - VESL-WEBSITE\n\n` +

      `Customer Information\n` +
      `Name: ${name}\n` +
      `Email: ${email || 'N/A'}\n` +
      `Phone: ${phone}\n\n` +

      `Rental Details\n` +
      `Equipment Type: ${equipment}\n` +
      `Estimated Duration: ${duration}\n\n` +

      `Additional Requirements\n` +
      `${message || 'No additional requirements provided.'}\n\n` +

      `—\n` +
      `Submitted from Vaibhavi Enterprises Ltd Website`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/23275636333?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <section className="py-20 bg-[#1c1c1c]" id="contact">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto p-12 bg-[#131313] border border-[#f4783f]/30 rounded-2xl shadow-2xl"
          >
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="h-10 w-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Request Sent!</h2>
            <p className="text-gray-400 text-lg mb-8">
              Thank you, <span className="text-[#f4783f]">{formData.name}</span>. We have received your request for
              <span className="text-white"> {formData.equipment}</span> and our team will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-[#f4783f] text-white font-bold rounded-lg hover:bg-[#d65f2a] transition-all"
            >
              Send Another Request
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#1c1c1c]" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Get a <span className="text-[#f4783f]">Custom Quote</span>
              </h2>
              <p className="text-lg text-gray-400">
                Ready to power your project? Fill out our form or contact us directly
                through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#f4783f]/10 rounded-lg">
                  <Phone className="h-5 w-5 text-[#f4783f]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">Direct Calls</h3>
                  <div className="space-y-1">
                    <p className="text-gray-400">+91 9586465642 <span className="text-xs text-gray-600">(India)</span></p>
                    <p className="text-gray-400">+232 30094606 <span className="text-xs text-gray-600">(Sierra Leone)</span></p>
                    <p className="text-gray-400">+232 75636333 <span className="text-xs text-gray-600">(Sierra Leone)</span></p>
                  </div>
                  <p className="text-xs mt-2 text-gray-500 italic">Mon-Sat: 10am - 5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#f4783f]/10 rounded-lg">
                  <Mail className="h-5 w-5 text-[#f4783f]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">Email Address</h3>
                  <p className="text-gray-400">vaibhavienterpriseslltd2022@gmail.com</p>
                  <p className="text-xs text-gray-500">We usually respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#f4783f]/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-[#f4783f]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">Office Location</h3>
                  <p className="text-gray-400">Tino's Drive, Magburka,</p>
                  <p className="text-gray-400">Freetown, Sierra Leone, West Africa</p>
                </div>
              </div>
            </div>

            {/* Premium Touch: Direct WhatsApp Card */}
            <div className="p-6 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl mt-8">
              <div className="flex items-center gap-4 mb-3">
                <MessageSquare className="h-6 w-6 text-[#25D366]" />
                <h4 className="font-bold text-white">Quick Chat?</h4>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Skip the form and chat with our team directly on WhatsApp for immediate availability checks.
              </p>
              <button
                onClick={() => window.open('https://wa.me/23275636333', '_blank')}
                className="text-[#25D366] font-bold text-sm hover:underline flex items-center gap-2"
              >
                OPEN WHATSAPP CHAT <Send className="h-3 w-3" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-[#131313] border border-gray-800 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f4783f]/5 rounded-bl-full -mr-10 -mt-10" />

            <form ref={form} onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-400 flex justify-between">
                  Full Name <span>*</span>
                </label>
                <input
                  id="name"
                  name="user_name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full border border-gray-800 bg-[#0d0d0d] rounded-xl p-4 focus:ring-2 focus:ring-[#f4783f] focus:outline-none text-white transition-all placeholder:text-gray-700"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-400">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@company.com"
                    className="w-full border border-gray-800 bg-[#0d0d0d] rounded-xl p-4 focus:ring-2 focus:ring-[#f4783f] focus:outline-none text-white transition-all placeholder:text-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-400 flex justify-between">
                    Phone Number <span>*</span>
                  </label>
                  <input
                    id="phone"
                    name="user_phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+232 ..."
                    required
                    className="w-full border border-gray-800 bg-[#0d0d0d] rounded-xl p-4 focus:ring-2 focus:ring-[#f4783f] focus:outline-none text-white transition-all placeholder:text-gray-700"
                  />
                </div>
              </div>

              {/* Equipment Type */}
              <div className="space-y-2">
                <label htmlFor="equipment" className="text-sm font-semibold text-gray-400 flex justify-between">
                  Equipment Type <span>*</span>
                </label>
                <select
                  id="equipment"
                  name="equipment_type"
                  value={formData.equipment}
                  onChange={(e) => handleChange("equipment", e.target.value)}
                  required
                  className="w-full border border-gray-800 bg-[#0d0d0d] rounded-xl p-4 text-white focus:ring-2 focus:ring-[#f4783f] focus:outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0d0d0d]">Select equipment</option>
                  <option value="Excavators" className="bg-[#0d0d0d]">Excavators (21.5 Ton)</option>
                  <option value="Diesel Generators" className="bg-[#0d0d0d]">Diesel Generators (15-125 kVA)</option>
                  <option value="Air Compressors" className="bg-[#0d0d0d]">Air Compressors</option>
                  <option value="Tipping Trucks" className="bg-[#0d0d0d]">Tipping Trucks</option>
                  <option value="Workshop & Welding Tools" className="bg-[#0d0d0d]">Workshop & Welding Tools</option>
                  <option value="Multi-Equipment" className="bg-[#0d0d0d]">Other / Multi-Equipment</option>
                </select>
              </div>

              {/* Rental Duration & Message */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="duration" className="text-sm font-semibold text-gray-400">
                    Estimated Rental Duration
                  </label>
                  <select
                    id="duration"
                    name="rental_duration"
                    value={formData.duration}
                    onChange={(e) => handleChange("duration", e.target.value)}
                    className="w-full border border-gray-800 bg-[#0d0d0d] rounded-xl p-4 text-white focus:ring-2 focus:ring-[#f4783f] focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0d0d0d]">Select duration</option>
                    <option value="1-7 days" className="bg-[#0d0d0d]">1-7 days</option>
                    <option value="1-4 weeks" className="bg-[#0d0d0d]">1-4 weeks</option>
                    <option value="1-3 months" className="bg-[#0d0d0d]">1-3 months</option>
                    <option value="3-6 months" className="bg-[#0d0d0d]">3-6 months</option>
                    <option value="6+ months" className="bg-[#0d0d0d]">6+ months</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-400">
                    Additional Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your project or specific needs..."
                    rows={3}
                    className="w-full border border-gray-800 bg-[#0d0d0d] rounded-xl p-4 focus:ring-2 focus:ring-[#f4783f] focus:outline-none resize-none text-white transition-all placeholder:text-gray-700"
                  ></textarea>
                </div>
              </div>

              {/* Buttons Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#f4783f] hover:bg-[#d65f2a] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "PROCESSING..." : "GET QUOTE"}
                  {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-bold py-4 px-6 rounded-xl flex items-center justify-center transition-all"
                >
                  WHATSAPP US
                  <MessageSquare className="ml-2 h-4 w-4" />
                </button>
              </div>

              <p className="text-[10px] text-center text-gray-600 uppercase tracking-widest">
                Safe & Secure Communication • Response in Less Than 24h
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;