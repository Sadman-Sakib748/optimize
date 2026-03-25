'use client';

import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/contactus.jpg')",
        }}
      >
        {/* Dark overlay - halka dark (60% opacity) */}
        <div className="absolute inset-0 bg-black/90" />
      </div>

      {/* Background Decorative Elements - halka visible */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-start min-h-screen px-9 md:px-12 py-12 max-w-7xl mx-auto">
        {/* Left Section - items-start দিয়ে উপরে থেকে শুরু */}
        <div className="flex flex-col justify-start space-y-8 pt-16 lg:pt-24">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-600/50 rounded-full px-4 py-2 w-fit backdrop-blur-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              <span className="text-yellow-500 text-sm font-medium tracking-wider">GET IN TOUCH</span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-left">
              <span className="text-white">Let's Start A</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Conversation
              </span>
            </h1>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-md text-left">
            Whether You're Eager To Boost Your Sales Strategy, Explore New Marketing Avenues, Or Simply Have Questions About Our Services, We're Here To Help.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="flex items-start mt-9 justify-center lg:justify-end">
          <div className="w-full w-[900px] bg-[#191919] backdrop-blur-xl border border-yellow-600/30 rounded-2xl p-10 space-y-8 shadow-2xl relative overflow-hidden group">

            {/* Border glow effects - only around the edges */}
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-yellow-400/0 via-yellow-400/30 to-yellow-400/0 animate-pulse">
              <div className="absolute inset-0 rounded-2xl bg-[#191919]" />
            </div>

            {/* Top border glow */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse" />

            {/* Bottom border glow */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse delay-500" />

            {/* Left border glow */}
            <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-pulse delay-1000" />

            {/* Right border glow */}
            <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-pulse delay-1500" />

            {/* Corner glows */}
            <div className="absolute top-0 left-0 w-12 h-12 bg-yellow-400/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-400/20 rounded-full blur-xl animate-pulse delay-700" />
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-yellow-400/20 rounded-full blur-xl animate-pulse delay-1000" />
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-yellow-400/20 rounded-full blur-xl animate-pulse delay-300" />

            <div className="relative z-10">
  <div className="flex flex-col items-center space-y-4 text-center">
    <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-600/50 rounded-full px-5 py-2">
      <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full animate-ping" />
      <span className="text-yellow-500 text-base font-medium">SEND MESSAGE</span>
    </div>

    <h2 className="text-4xl md:text-3xl font-bold text-white">
      Get In <span className="text-yellow-400">Touch</span>
    </h2>
  </div>

  <p className="text-gray-300 text-lg leading-relaxed mt-6">
    Use The Form Below To Share Your Goals With Us, And Our Team Will Get Back To You Promptly.
  </p>

  <form onSubmit={handleSubmit} className="space-y-8 mt-8">
    {/* First Name and Last Name */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <label htmlFor="firstName" className="text-white text-lg font-medium block">
          First Name <span className="text-yellow-500">*</span>
        </label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Enter your first name"
          required
          className="w-full px-8 py-3 bg-[#4C4F52] shadow-lg shadow-black/30 rounded-xl text-white placeholder:text-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/30 transition-all"
        />
      </div>
      <div className="space-y-3">
        <label htmlFor="lastName" className="text-white text-lg font-medium block">
          Last Name <span className="text-yellow-500">*</span>
        </label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Enter your last name"
          required
          className="w-full px-8 py-3 bg-[#4C4F52] shadow-lg shadow-black/30 rounded-xl text-white placeholder:text-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/30 transition-all"
        />
      </div>
    </div>

    {/* Email and Phone */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <label htmlFor="email" className="text-white text-lg font-medium block">
          Email Address <span className="text-yellow-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="your.email@example.com"
          required
          className="w-full px-8 py-3 bg-[#4C4F52] shadow-lg shadow-black/30 rounded-xl text-white placeholder:text-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/30 transition-all"
        />
      </div>
      <div className="space-y-3">
        <label htmlFor="phone" className="text-white text-lg font-medium block">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+1 (555) 123-4567"
          className="w-full px-8 py-3 bg-[#0A0A0A] shadow-lg shadow-black/30 rounded-xl text-white placeholder:text-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/30 transition-all"
        />
      </div>
    </div>

    {/* Subject */}
    <div className="space-y-3">
      <label htmlFor="subject" className="text-white text-lg font-medium block">
        Subject <span className="text-yellow-500">*</span>
      </label>
      <input
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleInputChange}
        placeholder="What's this regarding?"
        required
        className="w-full px-8 py-2 bg-[#4C4F52] shadow-lg shadow-black/30 rounded-xl text-white placeholder:text-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/30 transition-all"
      />
    </div>

    {/* Message */}
    <div className="space-y-3">
      <label htmlFor="message" className="text-white text-lg font-medium block">
        Message <span className="text-yellow-500">*</span>
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Tell us about your project or questions"
        required
        rows={6}
        className="w-full px-8 py-5 bg-[#0A0A0A] shadow-lg shadow-black/30 rounded-xl text-white placeholder:text-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/30 transition-all resize-none"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold py-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-yellow-500/30 text-xl relative overflow-hidden group/btn"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
      <span className="relative z-10">
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-3">
            <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : 'Send Message'}
      </span>
    </button>
  </form>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}