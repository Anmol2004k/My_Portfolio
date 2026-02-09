import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';


// socialLinks array yaha waisa hi rahega jaisa aapne diya hai...

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formspree.io", { // <-- APNA ID YAHA DALO
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let's <span className="text-blue-500">Connect</span></h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Ready to start your next project or just want to say hi? I'm just a message away.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 rounded-3xl bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email</p>
                    <p className="text-lg font-medium">anmolthakur2820@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Location</p>
                    <p className="text-lg font-medium">Haryana/India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-blue-600 text-white overflow-hidden relative group">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Hire for Freelance</h3>
                    <p className="text-blue-100 mb-6">Currently accepting small to medium projects.</p>
                    <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors">Book a Call</button>
                </div>
                <svg className="absolute top-0 right-0 w-32 h-32 text-blue-500 opacity-50 translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Name</label>
                  <input name="name" type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-800 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your_Name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Email</label>
                  <input name="email" type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-800 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="YourEmail@gmail.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Message</label>
                <textarea name="message" required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-800 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Let's build something cool..." />
              </div>
              <button type="submit" disabled={status !== 'idle'} className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${status === 'success' ? 'bg-green-600' : status === 'error' ? 'bg-red-600' : 'bg-blue-600 hover:bg-blue-700 active:scale-95'}`}>
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />}
                {status === 'success' && 'Success!'}
                {status === 'error' && 'Error!'}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Social Grid (Keep your existing social mapping code here) */}
        {/* ... */}
      </div>
    </section>
  );
};
