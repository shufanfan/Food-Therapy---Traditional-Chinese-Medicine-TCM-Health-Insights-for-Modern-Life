import React from "react";
import { Link } from "react-router-dom";

const ReferencesPage = () => {
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
          References & Sources
        </h1>

        <p className="text-stone-600 text-lg mb-8">
          Academic and professional sources supporting our{" "}
          <span className="font-tcm">TCM</span> constitution assessment tool
        </p>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Research Foundation
            </h2>
            <p className="text-stone-600 leading-relaxed">
              This tool is grounded in established Traditional Chinese Medicine
              theory and contemporary research. All constitution
              classifications, dietary recommendations, and assessment
              methodologies are based on credible academic sources and
              professional TCM literature.
            </p>
          </section>

          {/* Primary Sources */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Primary Sources
            </h2>
            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-5 rounded">
                <p className="text-stone-900 font-semibold mb-2">
                  Wang Qi (王琦)
                </p>
                <p className="text-stone-700 text-sm mb-2">
                  <em>Traditional Chinese Medicine Constitution Theory</em>{" "}
                  (《中医体质学》)
                </p>
                <p className="text-stone-600 text-sm">
                  Beijing: People's Medical Publishing House, 2005.
                </p>
                <p className="text-stone-600 text-sm mt-2">
                  <strong>Significance:</strong> Foundational text establishing
                  the 9-constitution framework. Wang Qi's 30+ years of research
                  forms the basis of modern TCM constitutional theory.
                </p>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-5 rounded">
                <p className="text-stone-900 font-semibold mb-2">
                  China Association of Chinese Medicine (中华中医药学会)
                </p>
                <p className="text-stone-700 text-sm mb-2">
                  <em>Classification and Determination of TCM Constitution</em>
                  (中医体质分类与判定标准)
                </p>
                <p className="text-stone-600 text-sm">
                  Standard ZYYXH/T157-2009, 2009.
                </p>
                <p className="text-stone-600 text-sm mt-2">
                  <strong>Significance:</strong> Official national standard for
                  TCM constitution assessment in China. Includes the validated
                  60-question assessment tool.
                </p>
              </div>
            </div>
          </section>

          {/* English-Language Textbooks */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              English-Language Textbooks
            </h2>
            <div className="space-y-4">
              <div className="bg-stone-50 p-5 rounded-lg">
                <p className="text-stone-900 font-semibold mb-2">
                  Maciocia, Giovanni
                </p>
                <p className="text-stone-700 text-sm mb-2">
                  <em>
                    The Foundations of Chinese Medicine: A Comprehensive Text
                  </em>{" "}
                  (3rd Edition)
                </p>
                <p className="text-stone-600 text-sm">
                  Edinburgh: Churchill Livingstone, 2015.
                </p>
                <p className="text-stone-600 text-sm mt-2">
                  Comprehensive TCM textbook widely used in Western acupuncture
                  and herbal medicine education. Covers diagnostic principles,
                  constitution theory, and treatment strategies.
                </p>
              </div>

              <div className="bg-stone-50 p-5 rounded-lg">
                <p className="text-stone-900 font-semibold mb-2">
                  Kaptchuk, Ted J.
                </p>
                <p className="text-stone-700 text-sm mb-2">
                  <em>
                    The Web That Has No Weaver: Understanding Chinese Medicine
                  </em>
                </p>
                <p className="text-stone-600 text-sm">
                  New York: McGraw-Hill, 2000.
                </p>
                <p className="text-stone-600 text-sm mt-2">
                  Accessible introduction to TCM principles for Western readers.
                  Explains diagnostic methods, pattern differentiation, and
                  holistic health philosophy.
                </p>
              </div>

              <div className="bg-stone-50 p-5 rounded-lg">
                <p className="text-stone-900 font-semibold mb-2">
                  Wiseman, Nigel & Ellis, Andrew
                </p>
                <p className="text-stone-700 text-sm mb-2">
                  <em>Fundamentals of Chinese Medicine</em>
                </p>
                <p className="text-stone-600 text-sm">
                  Brookline, MA: Paradigm Publications, 1996.
                </p>
                <p className="text-stone-600 text-sm mt-2">
                  Standard reference for TCM-English translation conventions and
                  terminology.
                </p>
              </div>
            </div>
          </section>

          {/* Food Therapy Sources */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Food Therapy & Dietary Guidance
            </h2>
            <div className="space-y-4">
              <div className="bg-stone-50 p-5 rounded-lg">
                <p className="text-stone-900 font-semibold mb-2">
                  Kastner, Joerg
                </p>
                <p className="text-stone-700 text-sm mb-2">
                  <em>
                    Chinese Nutrition Therapy: Dietetics in Traditional Chinese
                    Medicine
                  </em>
                </p>
                <p className="text-stone-600 text-sm">
                  Stuttgart: Thieme, 2009.
                </p>
                <p className="text-stone-600 text-sm mt-2">
                  Comprehensive guide to TCM dietary therapy, food energetics,
                  and constitution-based nutrition recommendations.
                </p>
              </div>

              <div className="bg-stone-50 p-5 rounded-lg">
                <p className="text-stone-900 font-semibold mb-2">
                  Pitchford, Paul
                </p>
                <p className="text-stone-700 text-sm mb-2">
                  <em>
                    Healing with Whole Foods: Asian Traditions and Modern
                    Nutrition
                  </em>{" "}
                  (3rd Edition)
                </p>
                <p className="text-stone-600 text-sm">
                  Berkeley: North Atlantic Books, 2002.
                </p>
                <p className="text-stone-600 text-sm mt-2">
                  Integrates TCM food therapy with modern nutritional science.
                  Includes practical dietary recommendations for various
                  constitutional patterns.
                </p>
              </div>

              <div className="bg-stone-50 p-5 rounded-lg">
                <p className="text-stone-900 font-semibold mb-2">Flaws, Bob</p>
                <p className="text-stone-700 text-sm mb-2">
                  <em>
                    The Tao of Healthy Eating: Dietary Wisdom According to
                    Traditional Chinese Medicine
                  </em>
                </p>
                <p className="text-stone-600 text-sm">
                  Boulder: Blue Poppy Press, 2005.
                </p>
                <p className="text-stone-600 text-sm mt-2">
                  Practical guide to TCM dietary principles and
                  constitution-specific eating patterns.
                </p>
              </div>
            </div>
          </section>

          {/* Herbal Medicine References */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Herbal Medicine & Materia Medica
            </h2>
            <div className="space-y-4">
              <div className="bg-stone-50 p-5 rounded-lg">
                <p className="text-stone-900 font-semibold mb-2">
                  Bensky, Dan, Clavey, Steven, & Stöger, Erich
                </p>
                <p className="text-stone-700 text-sm mb-2">
                  <em>Chinese Herbal Medicine: Materia Medica</em> (3rd Edition)
                </p>
                <p className="text-stone-600 text-sm">
                  Seattle: Eastland Press, 2004.
                </p>
                <p className="text-stone-600 text-sm mt-2">
                  Authoritative reference for Chinese medicinal herbs, including
                  herbal teas and their therapeutic properties.
                </p>
              </div>

              <div className="bg-stone-50 p-5 rounded-lg">
                <p className="text-stone-900 font-semibold mb-2">
                  Tierra, Michael
                </p>
                <p className="text-stone-700 text-sm mb-2">
                  <em>The Way of Chinese Herbs</em>
                </p>
                <p className="text-stone-600 text-sm">
                  New York: Pocket Books, 1998.
                </p>
                <p className="text-stone-600 text-sm mt-2">
                  Accessible guide to Chinese herbs and their applications in
                  wellness and healing.
                </p>
              </div>
            </div>
          </section>

          {/* Research Articles */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Academic Research
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              For peer-reviewed research on TCM constitution theory, we
              recommend searching academic databases using the following
              keywords:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
              <li>
                "TCM body constitution" or "Traditional Chinese Medicine
                constitution"
              </li>
              <li>"Wang Qi constitution theory" or "体质分类"</li>
              <li>"Constitution-based prevention" or "个体化预防"</li>
              <li>"TCM personalized medicine" or "中医个体化诊疗"</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded mt-4">
              <p className="text-blue-900 text-sm">
                <strong>Recommended Databases:</strong> PubMed, Google Scholar,
                CNKI (China National Knowledge Infrastructure), Web of Science
              </p>
            </div>
          </section>

          {/* Translation & Adaptation */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Translation & Cultural Adaptation
            </h2>
            <p className="text-stone-600 leading-relaxed mb-3">
              Our approach to translating TCM concepts for Western audiences is
              informed by:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
              <li>
                Standard TCM-English translation conventions (Wiseman & Ellis,
                1996)
              </li>
              <li>Cultural sensitivity in medical terminology translation</li>
              <li>Accessibility principles for non-expert audiences</li>
              <li>
                Maintaining conceptual accuracy while using relatable language
              </li>
            </ul>
          </section>

          {/* Methodology Note */}
          <section className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
            <h3 className="text-lg font-semibold text-amber-900 mb-3">
              Methodology & Limitations
            </h3>
            <p className="text-amber-800 text-sm leading-relaxed mb-3">
              This tool provides a <strong>simplified introduction</strong> to
              TCM constitution assessment. The 5-question format and 3-type
              classification are educational adaptations designed for
              accessibility and quick insights.
            </p>
            <p className="text-amber-800 text-sm leading-relaxed">
              For comprehensive constitutional analysis using the full 9-type
              framework with 60+ questions, pulse diagnosis, and tongue
              examination, please consult a qualified TCM practitioner.
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Academic Integrity & Disclaimer
            </h2>
            <p className="text-stone-600 leading-relaxed">
              All information presented in this tool has been carefully
              researched and cross-referenced with authoritative TCM sources.
              However, this is an <strong>educational project</strong>
              created by students at Wesleyan University. It should not be
              considered a substitute for professional medical advice or
              diagnosis.
            </p>
            <p className="text-stone-600 leading-relaxed mt-3">
              While we strive for accuracy, we acknowledge the complexity of
              translating ancient medical knowledge systems into modern digital
              tools. Users are encouraged to explore the primary sources listed
              above for deeper understanding.
            </p>
          </section>

          {/* Project Context */}
          <section className="border-t pt-6">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              About This Project
            </h2>
            <p className="text-stone-600 leading-relaxed mb-3">
              This TCM wellness tool was developed as an educational project
              exploring the intersection of traditional knowledge systems and
              modern AI technology.
            </p>
            <div className="bg-stone-50 p-5 rounded">
              <p className="text-stone-700 text-sm mb-2">
                <strong>Developers:</strong> Huiqin Hu & Shufan Fan
              </p>
              <p className="text-stone-700 text-sm mb-2">
                <strong>Institution:</strong> Wesleyan University
              </p>
              <p className="text-stone-700 text-sm mb-2">
                <strong>Purpose:</strong> Demonstrate how AI and web
                technologies can make culturally grounded health knowledge
                accessible to modern audiences
              </p>
              <p className="text-stone-700 text-sm">
                <strong>Open Source:</strong> Project repository available on
                GitHub
              </p>
            </div>
          </section>

          {/* Take Assessment CTA */}
          <section className="bg-gradient-to-r from-emerald-50 to-amber-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-stone-900 mb-3">
              Try the Assessment
            </h3>
            <p className="text-stone-600 mb-6">
              Experience how TCM wisdom translates into personalized wellness
              guidance.
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

export default ReferencesPage;
