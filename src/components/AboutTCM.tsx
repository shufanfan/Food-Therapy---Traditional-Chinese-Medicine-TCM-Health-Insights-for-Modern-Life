import React from 'react';
import { Link } from 'react-router-dom';

const AboutTCM = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back to Home Link */}
        <Link
          to="/"
          className="text-emerald-600 hover:text-emerald-700 mb-8 inline-flex items-center"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-stone-900 mb-4 mt-4">
          About <span className="font-tcm">TCM</span> Constitution Theory
        </h1>

        <p className="text-stone-600 text-lg mb-8">
          Understanding Traditional Chinese Medicine's approach to body types
          and wellness
        </p>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              What is <span className="font-tcm">TCM</span> Constitution?
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              In Traditional Chinese Medicine, your{' '}
              <strong>constitution (体质, tǐzhì)</strong> refers to your body's
              inherent tendencies, strengths, and vulnerabilities. It's the
              foundation of how your body responds to food, weather, stress, and
              illness.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Unlike Western medicine's focus on treating disease after it
              appears, TCM constitution theory emphasizes{' '}
              <strong>prevention</strong>—understanding your body's natural
              patterns so you can make choices that maintain balance before
              imbalance occurs.
            </p>
          </section>

          {/* The Wang Qi Framework */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              The Wang Qi 9-Constitution Framework
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              The most widely recognized system for TCM body constitution
              classification was developed by Professor <strong>Wang Qi</strong>{' '}
              (王琦) at Beijing University of Chinese Medicine. His research,
              spanning over 30 years, identified{' '}
              <strong>nine distinct constitution types</strong>
              that form the basis of modern TCM preventive medicine.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded my-6">
              <p className="text-emerald-900">
                <strong>Official Recognition:</strong> In 2009, the China
                Association of Chinese Medicine adopted Wang Qi's framework as
                the national standard for TCM constitution assessment (Standard
                ZYYXH/T157-2009).
              </p>
            </div>

            <h3 className="text-xl font-semibold text-stone-900 mt-6 mb-3">
              The Nine Constitution Types
            </h3>

            <div className="space-y-4">
              {/* Balanced */}
              <div className="bg-stone-50 p-5 rounded-lg">
                <h4 className="font-semibold text-stone-900 mb-2">
                  1. Balanced Constitution (平和质, Píng Hé Zhì)
                </h4>
                <p className="text-stone-600 text-sm">
                  <strong>The ideal state.</strong> Good energy, healthy
                  appetite, restful sleep, adaptable to weather changes. Strong
                  immunity and emotional resilience.
                </p>
              </div>

              {/* Qi Deficiency */}
              <div className="bg-stone-50 p-5 rounded-lg">
                <h4 className="font-semibold text-stone-900 mb-2">
                  2. Qi Deficiency (气虚质, Qì Xū Zhì)
                </h4>
                <p className="text-stone-600 text-sm">
                  <strong>Low vital energy.</strong> Chronic fatigue, shortness
                  of breath, weak voice, frequent colds, poor stamina. Needs
                  energy-building foods and rest.
                </p>
              </div>

              {/* Yang Deficiency */}
              <div className="bg-stone-50 p-5 rounded-lg">
                <h4 className="font-semibold text-stone-900 mb-2">
                  3. Yang Deficiency (阳虚质, Yáng Xū Zhì)
                </h4>
                <p className="text-stone-600 text-sm">
                  <strong>Cold intolerance.</strong> Always feeling cold, cold
                  hands and feet, preference for warmth, loose stools, pale
                  complexion. Requires warming foods.
                </p>
              </div>

              {/* Yin Deficiency */}
              <div className="bg-stone-50 p-5 rounded-lg">
                <h4 className="font-semibold text-stone-900 mb-2">
                  4. Yin Deficiency (阴虚质, Yīn Xū Zhì)
                </h4>
                <p className="text-stone-600 text-sm">
                  <strong>Internal heat and dryness.</strong> Night sweats, dry
                  mouth and throat, hot palms and soles, restlessness, insomnia.
                  Needs cooling, moistening foods.
                </p>
              </div>

              {/* Phlegm-Dampness */}
              <div className="bg-stone-50 p-5 rounded-lg">
                <h4 className="font-semibold text-stone-900 mb-2">
                  5. Phlegm-Dampness (痰湿质, Tán Shī Zhì)
                </h4>
                <p className="text-stone-600 text-sm">
                  <strong>Heaviness and stagnation.</strong> Overweight,
                  sluggish feeling, excessive mucus, oily skin, bloating.
                  Benefits from light, draining foods.
                </p>
              </div>

              {/* Damp-Heat */}
              <div className="bg-stone-50 p-5 rounded-lg">
                <h4 className="font-semibold text-stone-900 mb-2">
                  6. Damp-Heat (湿热质, Shī Rè Zhì)
                </h4>
                <p className="text-stone-600 text-sm">
                  <strong>Heat with stagnation.</strong> Oily skin, acne, bitter
                  taste in mouth, feeling worse in humid weather, inflammatory
                  conditions. Needs cooling, clearing foods.
                </p>
              </div>

              {/* Blood Stasis */}
              <div className="bg-stone-50 p-5 rounded-lg">
                <h4 className="font-semibold text-stone-900 mb-2">
                  7. Blood Stasis (血瘀质, Xuè Yū Zhì)
                </h4>
                <p className="text-stone-600 text-sm">
                  <strong>Poor circulation.</strong> Dark complexion, easy
                  bruising, varicose veins, cold extremities, stabbing pains.
                  Requires circulation-promoting foods.
                </p>
              </div>

              {/* Qi Stagnation */}
              <div className="bg-stone-50 p-5 rounded-lg">
                <h4 className="font-semibold text-stone-900 mb-2">
                  8. Qi Stagnation (气郁质, Qì Yù Zhì)
                </h4>
                <p className="text-stone-600 text-sm">
                  <strong>Emotional blockage.</strong> Depression, anxiety, mood
                  swings, feeling of tightness in chest, irregular periods.
                  Benefits from stress-reducing practices and circulation-moving
                  foods.
                </p>
              </div>

              {/* Special Constitution */}
              <div className="bg-stone-50 p-5 rounded-lg">
                <h4 className="font-semibold text-stone-900 mb-2">
                  9. Special Constitution (特禀质, Tè Bǐng Zhì)
                </h4>
                <p className="text-stone-600 text-sm">
                  <strong>Allergy-prone.</strong> Sensitive to certain foods,
                  medications, smells, or environmental factors. Prone to
                  allergies, asthma, eczema.
                </p>
              </div>
            </div>
          </section>

          {/* Why We Simplified */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Why Our Tool Uses 3 Constitution Types
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              While the full Wang Qi framework includes nine types, our
              assessment tool uses a<strong> simplified 3-type system</strong>{' '}
              for the following reasons:
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl font-bold">
                  1
                </span>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">
                    Assessment Feasibility
                  </h4>
                  <p className="text-stone-600 text-sm">
                    Professional TCM practitioners use pulse diagnosis, tongue
                    examination, and 60+ questions to determine detailed
                    constitution types. A 5-question online assessment can
                    reliably differentiate 3 core patterns, but would lack
                    accuracy for 9 types.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl font-bold">
                  2
                </span>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">
                    Core Energetic Spectrum
                  </h4>
                  <p className="text-stone-600 text-sm">
                    TCM fundamentally views health along a{' '}
                    <strong>Cold-Heat spectrum</strong>. Our 3 types (Cold,
                    Heat, Balanced) represent the essential patterns, with the
                    other 6 Wang Qi types being variations or combinations of
                    these core tendencies.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl font-bold">
                  3
                </span>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">
                    Actionable Guidance
                  </h4>
                  <p className="text-stone-600 text-sm">
                    The dietary recommendations for Cold, Heat, and Balanced
                    constitutions are distinct and practical. This simplified
                    framework provides clear, immediately applicable wellness
                    guidance without overwhelming users.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl font-bold">
                  4
                </span>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">
                    Educational Purpose
                  </h4>
                  <p className="text-stone-600 text-sm">
                    This tool serves as an{' '}
                    <strong>introduction to TCM thinking</strong> for Western
                    audiences. Starting with 3 clear types helps users
                    understand the fundamental concept of constitutional
                    patterns before exploring more nuanced classifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded mt-6">
              <p className="text-amber-900 text-sm">
                <strong>Note:</strong> For comprehensive constitutional analysis
                including all 9 types, please consult a qualified TCM
                practitioner who can conduct detailed assessment through
                examination and extended consultation.
              </p>
            </div>
          </section>

          {/* How Our Types Map */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              How Our 3 Types Relate to the 9-Type Framework
            </h2>

            <div className="space-y-4">
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Cold Constitution
                </h4>
                <p className="text-blue-800 text-sm mb-2">
                  <strong>Combines:</strong> Yang Deficiency + Qi Deficiency
                </p>
                <p className="text-blue-700 text-sm">
                  Both patterns manifest as coldness, fatigue, and need for
                  warmth. Dietary guidance focuses on warming, tonifying foods.
                </p>
              </div>

              <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-900 mb-2">
                  Heat Constitution
                </h4>
                <p className="text-red-800 text-sm mb-2">
                  <strong>Combines:</strong> Yin Deficiency + Damp-Heat
                </p>
                <p className="text-red-700 text-sm">
                  Both involve heat symptoms and inflammatory tendencies.
                  Dietary guidance focuses on cooling, clearing foods.
                </p>
              </div>

              <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">
                  Balanced Constitution
                </h4>
                <p className="text-green-800 text-sm mb-2">
                  <strong>Represents:</strong> The ideal Balanced Constitution
                  (平和质)
                </p>
                <p className="text-green-700 text-sm">
                  The reference point for optimal health. Dietary guidance
                  emphasizes variety, moderation, and seasonal adaptation.
                </p>
              </div>
            </div>
          </section>

          {/* Scientific Foundation */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Scientific Research & Validation
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              TCM constitution theory is supported by extensive research:
            </p>
            <ul className="space-y-3 text-stone-600">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3">•</span>
                <span>
                  <strong>Large-scale studies:</strong> Wang Qi's research
                  involved surveys of over 21,000 people across China,
                  establishing population distribution of constitution types.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3">•</span>
                <span>
                  <strong>National standardization:</strong> The framework was
                  adopted as China's national standard for TCM constitution
                  assessment in 2009.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3">•</span>
                <span>
                  <strong>Clinical applications:</strong> Constitution-based
                  approaches are used in preventive care, treatment planning,
                  and lifestyle recommendations across TCM institutions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3">•</span>
                <span>
                  <strong>International recognition:</strong> TCM constitution
                  theory is now studied and applied in medical research
                  globally, bridging traditional and modern approaches to
                  personalized medicine.
                </span>
              </li>
            </ul>
          </section>

          {/* References */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              References & Further Reading
            </h2>
            <div className="bg-stone-50 p-6 rounded-lg space-y-4 text-sm">
              <div>
                <p className="font-semibold text-stone-900">Primary Source:</p>
                <p className="text-stone-600">
                  Wang, Q. (2005).{' '}
                  <em>Traditional Chinese Medicine Constitution Theory</em>{' '}
                  (《中医体质学》). Beijing: People's Medical Publishing House.
                </p>
              </div>

              <div>
                <p className="font-semibold text-stone-900">
                  Official Standard:
                </p>
                <p className="text-stone-600">
                  China Association of Chinese Medicine (2009).{' '}
                  <em>Classification and Determination of TCM Constitution</em>{' '}
                  (中医体质分类与判定标准 ZYYXH/T157-2009).
                </p>
              </div>

              <div>
                <p className="font-semibold text-stone-900">
                  English-Language Resources:
                </p>
                <ul className="text-stone-600 space-y-2 ml-4">
                  <li>
                    • Maciocia, G. (2015).{' '}
                    <em>The Foundations of Chinese Medicine</em> (3rd ed.).
                    Churchill Livingstone. [Comprehensive TCM textbook widely
                    used in Western education]
                  </li>
                  <li>
                    • Kaptchuk, T. (2000).{' '}
                    <em>
                      The Web That Has No Weaver: Understanding Chinese Medicine
                    </em>
                    . McGraw-Hill. [Accessible introduction to TCM principles]
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-stone-900">
                  For Academic Research:
                </p>
                <p className="text-stone-600">
                  Search academic databases (PubMed, Google Scholar, CNKI) for
                  "TCM body constitution," "Wang Qi constitution theory," or
                  "中医体质" for peer-reviewed research articles and clinical
                  studies.
                </p>
              </div>

              <div className="bg-amber-50 p-4 rounded mt-4">
                <p className="text-amber-900 text-xs">
                  <strong>Note on Sources:</strong> The primary sources listed
                  above (Wang Qi's work and the 2009 CACM Standard) are the
                  foundational texts for TCM constitution theory. English
                  translations and secondary sources vary in availability and
                  accuracy.
                </p>
              </div>
            </div>
          </section>

          {/* Take Assessment CTA */}
          <section className="bg-gradient-to-r from-emerald-50 to-amber-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-stone-900 mb-3">
              Ready to Discover Your Constitution?
            </h3>
            <p className="text-stone-600 mb-6">
              Take our 5-question assessment to learn your TCM body constitution
              type and receive personalized food recommendations.
            </p>
            <Link
              to="/assessment"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Start Assessment →
            </Link>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-stone-800 hover:bg-stone-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutTCM;
