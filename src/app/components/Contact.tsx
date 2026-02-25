import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import emailjs from "@emailjs/browser";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE,
      import.meta.env.VITE_EMAILJS_TEMPLATE,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message.");
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'priyadharshan7119@gmail.com',
      href: 'mailto:priyadharshan7119@gmail.com',
      color: 'blue',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8220117119',
      href: 'tel:+918220117119',
      color: 'green',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/priyadharshan',
      href: 'https://linkedin.com/in/priyadharshan-d',
      color: 'purple',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/priyadharshan',
      href: 'https://github.com/priyadharshan7119',
      color: 'orange',
    },
  ];

  const colorMap: Record<string, { bg: string }> = {
    blue: { bg: 'bg-blue-500' },
    green: { bg: 'bg-green-500' },
    purple: { bg: 'bg-purple-500' },
    orange: { bg: 'bg-orange-500' },
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900 dark:text-white">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Interested in working together or have an opportunity for me? Feel free to reach out.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const colors = colorMap[info.color];

              return (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
                >
                  <div className={`inline-flex p-4 ${colors.bg} rounded-xl mb-3`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{info.label}</p>
                  <p className="text-sm text-gray-900 dark:text-white font-medium break-all">{info.value}</p>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="p-8 md:p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">

              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-900 dark:text-white text-center">
                  Send a Message
                </h3>

                <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                  Let's start a conversation
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid md:grid-cols-2 gap-6">

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                      />
                    </div>

                  </div>

                  <div>

                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white resize-none"
                    />

                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-medium rounded-xl transition-all shadow-lg hover:shadow-2xl"
                  >
                    <Send size={22} />
                    Send Message
                  </button>

                </form>

              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}