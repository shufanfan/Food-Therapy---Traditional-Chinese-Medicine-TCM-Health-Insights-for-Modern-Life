import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>
        <p className="text-stone-500 mb-8">Last updated: November 8, 2025</p>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Key Commitment */}
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded">
            <h2 className="text-2xl font-bold text-emerald-900 mb-3">
              Our Core Commitment to Your Privacy
            </h2>
            <p className="text-emerald-800 text-lg leading-relaxed">
              <strong>
                We do not collect, store, or have access to any of your health
                information.
              </strong>{' '}
              All assessment processing happens entirely in your browser.
              Nothing is ever sent to our servers.
            </p>
          </div>

          {/* Why This Matters */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Why Privacy Matters for Health Assessments
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              We understand that our TCM body constitution assessment asks
              sensitive questions about your personal health, including:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
              <li>Bowel movements and digestive patterns</li>
              <li>Sleep quality and night-time symptoms</li>
              <li>Energy levels and fatigue</li>
              <li>Body temperature sensitivities</li>
              <li>Food preferences and cravings</li>
            </ul>
            <p className="text-stone-600 leading-relaxed mt-4">
              <strong>
                These are intimate details about your body and health.
              </strong>{' '}
              We take your privacy seriously, which is why we designed this tool
              to protect your information by default—by never collecting it in
              the first place.
            </p>
          </section>

          {/* How It Works */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              How Your Data Stays Private
            </h2>
            <div className="space-y-4">
              <div className="bg-stone-50 p-5 rounded-lg">
                <h3 className="font-semibold text-stone-900 mb-2">
                  ✓ All Processing is Local
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  When you answer the assessment questions and click submit, all
                  calculations happen{' '}
                  <strong>directly in your web browser</strong> using
                  JavaScript. Your responses never leave your device.
                </p>
              </div>

              <div className="bg-stone-50 p-5 rounded-lg">
                <h3 className="font-semibold text-stone-900 mb-2">
                  ✓ Nothing is Saved
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  We don't use databases, cookies, or any form of storage to
                  save your responses. Once you close the browser tab or
                  navigate away from the results page, your answers are
                  permanently deleted.
                </p>
              </div>

              <div className="bg-stone-50 p-5 rounded-lg">
                <h3 className="font-semibold text-stone-900 mb-2">
                  ✓ No Server Communication
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  The assessment algorithm runs entirely on your device. We
                  don't send your health data to any server—not ours, not third
                  parties, not anyone.
                </p>
              </div>

              <div className="bg-stone-50 p-5 rounded-lg">
                <h3 className="font-semibold text-stone-900 mb-2">
                  ✓ Anonymous by Design
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  We never ask for your name, email, phone number, or any
                  personally identifying information as part of the assessment.
                  You remain completely anonymous.
                </p>
              </div>
            </div>
          </section>

          {/* What We Don't Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              What We Do NOT Collect
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                <span className="text-stone-600">
                  Your assessment responses
                </span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                <span className="text-stone-600">
                  Your constitution results
                </span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                <span className="text-stone-600">Any health information</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                <span className="text-stone-600">
                  Personal identification data
                </span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                <span className="text-stone-600">Cookies or tracking data</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                <span className="text-stone-600">
                  IP addresses or location data
                </span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                <span className="text-stone-600">
                  Usage analytics or behavior tracking
                </span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 text-xl font-bold">✗</span>
                <span className="text-stone-600">
                  Browser fingerprints or device IDs
                </span>
              </div>
            </div>
          </section>

          {/* Email Subscription */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Email Subscription (Optional)
            </h2>
            <p className="text-stone-600 leading-relaxed mb-3">
              If you choose to subscribe to project updates using the email
              signup form on our homepage, we will collect{' '}
              <strong>only your email address</strong>.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <p className="text-amber-900 text-sm">
                <strong>Important:</strong> Your email subscription is
                completely separate from the health assessment. We never connect
                your email to any assessment data because we don't store
                assessment data at all.
              </p>
            </div>
            <p className="text-stone-600 leading-relaxed mt-3">
              Email addresses are stored securely and used only for sending
              updates about this project. You can unsubscribe at any time. We
              will never share your email with third parties or use it for
              marketing purposes.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-stone-600 leading-relaxed mb-3">
              This website uses the following external services:
            </p>
            <ul className="space-y-3">
              <li className="text-stone-600">
                <strong>Google Fonts:</strong> We use Google Fonts to display
                culturally appropriate typography. Google may collect basic
                technical information about font requests. See{' '}
                <a
                  href="https://developers.google.com/fonts/faq/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline"
                >
                  Google Fonts Privacy Policy
                </a>
                .
              </li>
              <li className="text-stone-600">
                <strong>Hosting Platform:</strong> This website is hosted on a
                third-party platform that may collect standard web server logs
                (IP addresses, browser types, timestamps) for security and
                performance purposes. These logs are not connected to your
                assessment responses.
              </li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-stone-600 leading-relaxed">
              This service is not intended for individuals under the age of 18.
              We do not knowingly collect information from children. If you are
              a parent or guardian and believe your child has used this tool,
              please note that no data was collected or stored from their
              session.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-stone-600 leading-relaxed mb-3">
              Because we don't collect your health assessment data, there is no
              data for us to:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
              <li>Access, view, or retrieve</li>
              <li>Correct or modify</li>
              <li>Delete or erase</li>
              <li>Export or transfer</li>
              <li>Share with others or sell</li>
            </ul>
            <p className="text-stone-600 leading-relaxed mt-4">
              <strong>Your privacy is protected by design.</strong> You maintain
              complete control because the data never leaves your device.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Data Security
            </h2>
            <p className="text-stone-600 leading-relaxed">
              The most secure data is data that doesn't exist. Since we don't
              collect or store your assessment responses, there is no
              centralized database that could be hacked, breached, or
              compromised. Your health information stays on your device and is
              automatically deleted when you close the page.
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Medical Disclaimer
            </h2>
            <p className="text-stone-600 leading-relaxed">
              This tool provides educational wellness guidance based on
              Traditional Chinese Medicine principles.{' '}
              <strong>It is not a medical diagnostic tool</strong> and should
              not be used as a substitute for professional medical advice,
              diagnosis, or treatment. For health concerns or comprehensive TCM
              constitutional analysis, please consult a qualified healthcare
              provider or licensed TCM practitioner.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-stone-600 leading-relaxed">
              We may update this privacy policy from time to time to reflect
              changes in our practices or legal requirements. Any changes will
              be posted on this page with an updated "Last updated" date at the
              top. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              Questions or Concerns?
            </h2>
            <p className="text-stone-600 leading-relaxed mb-3">
              If you have questions about this privacy policy or concerns about
              how we protect your privacy, please feel free to reach out:
            </p>
            <div className="bg-stone-50 p-4 rounded">
              <p className="text-stone-600">
                <strong>Project Contact:</strong> Huiqin Hu(hhu01@wesleyan.edu)
                & Shufan Chai(helloshufanfan@gmail.com)
                <br />
                <strong>Institution:</strong> Wesleyan University & Northeastern
                University
                <br />
                <strong>Purpose:</strong> Educational project demonstrating
                AI-assisted wellness guidance
              </p>
            </div>
          </section>

          {/* Verification */}
          <section className="border-t pt-6">
            <h2 className="text-2xl font-semibold text-stone-900 mb-4">
              How to Verify Our Privacy Claims
            </h2>
            <p className="text-stone-600 leading-relaxed mb-3">
              You can verify that we don't collect your data:
            </p>
            <ol className="list-decimal list-inside text-stone-600 space-y-2 ml-4">
              <li>
                Open your browser's Developer Tools (press F12 or Cmd+Option+I)
              </li>
              <li>Go to the "Network" tab before taking the assessment</li>
              <li>Complete the assessment and view your results</li>
              <li>
                Check the Network tab—you'll see no requests sending your
                answers to any server
              </li>
            </ol>
            <p className="text-stone-600 leading-relaxed mt-3 text-sm italic">
              For technically-minded users: Our source code is available for
              review. All assessment logic runs client-side in JavaScript with
              no backend API calls for health data processing.
            </p>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
