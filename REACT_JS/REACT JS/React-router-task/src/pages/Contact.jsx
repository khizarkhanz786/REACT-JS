import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[85vh] bg-slate-50 text-slate-900 flex items-center justify-center p-6 md:p-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Side Info */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
            Get In Touch
          </span>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Contact <span className="text-indigo-600">Us</span>
          </h1>

          <p className="text-slate-600 text-base leading-relaxed max-w-md mx-auto md:mx-0">
            Have questions about our academy or dashboard? Fill out the form or reach out directly to our team.
          </p>

          <div className="space-y-3 pt-2 text-sm font-semibold text-slate-700">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">📍</span>
              Karachi, Pakistan
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">✉️</span>
              support@learningacademy.com
            </p>
          </div>
        </div>

        {/* Right Side Form with Formsubmit.co */}
        <div className="flex-1 w-full max-w-lg bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl">

          {/* ⚠️ Apna exact Email address replace karein below action attribute me */}
          <form
            action="https://formsubmit.co/khizarkhanzada66@gmail.com"
            method="POST"
            className="space-y-5"
          >

            {/* FormSubmit Configurations */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Khizar Khan"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@example.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Write your message here..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-3.5 rounded-xl shadow-md transition-all duration-200 cursor-pointer"
            >
              SEND MESSAGE
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;