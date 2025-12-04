import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStartAssessment = () => {
    navigate('/assessment');
  };

  const handleEmailSubmit = async () => {
    if (!email) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const FORM_ID =
        '1FAIpQLSdZgTzzwpu3TAoCsFIDgMzCCKHDjqEZ9tw435o3aLMVbUciJw';
      const ENTRY_ID = 'entry.535282616';

      const formData = new FormData();
      formData.append(ENTRY_ID, email);

      await fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      alert('Thank you for subscribing! 🎉');
      setEmail('');
    } catch (error) {
      alert('Thank you for subscribing!');
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-stone-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Discover Your Body's Natural Balance
          </h1>
          <p className="text-lg sm:text-xl text-stone-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A personalized wellness tool inspired by{' '}
            <span className="font-tcm font-semibold">
              Traditional Chinese Medicine
            </span>
            . Take a quick 10-question assessment to understand your unique
            constitution and receive food recommendations tailored to your body.
          </p>
          <button
            onClick={handleStartAssessment}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Assessment →
          </button>
          <p className="text-sm text-stone-500 mt-4">
            Takes less than 3 minutes
          </p>
        </div>
      </section>

      {/* What is TCM Constitution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6 text-center">
            What is <span className="font-tcm">TCM Constitution</span>?
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              <span className="font-tcm font-semibold">
                Traditional Chinese Medicine
              </span>{' '}
              views health as a dynamic balance between opposing forces—warmth
              and coolness, energy and rest, activity and stillness. Your
              constitution is your body's natural tendency along this spectrum.
            </p>
            <p>
              Rather than treating symptoms, TCM focuses on prevention: eating
              foods that support your body's unique needs, adjusting to seasonal
              changes, and maintaining harmony before imbalance occurs.
            </p>
            <p>
              This tool translates ancient wisdom into modern, actionable
              guidance—helping you tune into your body's signals and make small,
              sustainable changes.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Answer 5 Questions
              </h3>
              <p className="text-stone-600">
                Quick questions about how you feel: temperature preferences,
                energy levels, digestion, sleep, and food cravings.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Discover Your Constitution
              </h3>
              <p className="text-stone-600">
                Learn whether you tend toward a Cold, Heat, or Balanced
                pattern—and what that means for your wellness.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Get Personalized Recommendations
              </h3>
              <p className="text-stone-600">
                Receive a curated list of herbal teas and foods (all available
                in US markets) that support your body's natural balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust This Tool */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-12 text-center">
            Why Trust This Tool?
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                🌿 Rooted in <span className="font-tcm">TCM</span> Principles
              </h3>
              <p className="text-stone-600">
                Based on the Wang Qi 9-Constitution Framework, the gold standard
                in TCM constitutional theory, adapted for modern accessibility.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                🌏 Culturally Grounded
              </h3>
              <p className="text-stone-600">
                Translates <span className="font-tcm">TCM</span> concepts into
                language that resonates with Western wellness vocabulary—no
                esoteric jargon, just practical insights.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                ✨ Personalized, Not Generic
              </h3>
              <p className="text-stone-600">
                Unlike one-size-fits-all health advice, recommendations are
                tailored to your body's unique needs and patterns.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                🛡️ Prevention-Focused
              </h3>
              <p className="text-stone-600">
                Empowers you to care for yourself through small, daily
                choices—long before symptoms arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-8 text-center">
            What You'll Learn
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <ul className="space-y-3 text-stone-700">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span>
                  Your TCM body constitution (Cold, Heat, or Balanced)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span>Why your body feels the way it does</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span>Which herbal teas support your constitution</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span>Foods that nourish your specific needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span>Foods to limit based on your pattern</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">✓</span>
                <span>The TCM principles behind each recommendation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ready to Begin CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
            Ready to Begin?
          </h2>
          <button
            onClick={handleStartAssessment}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Take the 5-Question Assessment →
          </button>
          <p className="text-sm text-stone-500 mt-4">
            Takes less than 2 minutes
          </p>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-stone-900 mb-4">
            Want to learn more or get updates?
          </h3>
          <p className="text-stone-600 mb-6">
            Join our community for insights on TCM, wellness, and the
            intersection of traditional knowledge and modern technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              disabled={isSubmitting}
            />
            <button
              onClick={handleEmailSubmit}
              disabled={isSubmitting}
              className="bg-stone-800 hover:bg-stone-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-amber-50 border-t border-amber-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-stone-900 mb-3">
            Important Note:
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            This tool provides general wellness guidance based on TCM
            principles. It is not a substitute for professional medical advice,
            diagnosis, or treatment. For comprehensive constitutional analysis
            or health concerns, please consult a qualified Traditional Chinese
            Medicine practitioner or healthcare provider.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-stone-900 mb-4">
            About This Project
          </h3>
          <p className="text-stone-600 leading-relaxed mb-6">
            This platform bridges ancient TCM wisdom with modern AI technology,
            making personalized wellness guidance accessible to everyone.
            Created as an educational tool to explore how AI can support
            everyday health through culturally grounded, preventive care.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about-tcm"
                    className="hover:text-white transition-colors"
                  >
                    About <span className="font-tcm">TCM</span> Constitution
                    Theory
                  </Link>
                </li>
                <li>
                  <Link
                    to="/references"
                    className="hover:text-white transition-colors"
                  >
                    References & Sources
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:helloshufanfan@gmail.com?subject=TCM%20Website%20Inquiry&body=Hello%2C%0D%0A%0D%0AI%20have%20a%20question%20about%20the%20TCM%20Constitution%20tool%3A%0D%0A%0D%0A"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">
                Developed by{' '}
                <a
                  href="https://github.com/huiqinhu5500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-white transition-colors"
                >
                  Huiqin
                </a>{' '}
                &{' '}
                <a
                  href="https://www.linkedin.com/in/shufanfan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Shufan
                </a>
              </p>
              <p className="text-stone-400 text-sm">
                © 2025 Food Therapy TCM Project
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
