import React from "react";
import { useNavigate } from "react-router-dom";
import {
  calculateConstitution,
  getDetailedScore,
} from "../Sprints/Sprint1/utils/constitutionCalculator";
import recommendationsData from "../data/recommendations-display.json";

function SurveyResults({ answers, onReturnHome, onRestartAssessment }) {
  const navigate = useNavigate();
  const constitution = calculateConstitution(answers);
  const detailedScore = getDetailedScore(answers);
  console.log("Score breakdown:", detailedScore);

  const recommendations = recommendationsData[constitution];

  const handleReturnHome = () => {
    onReturnHome();
    navigate("/");
  };

  const handleRestartAssessment = () => {
    onRestartAssessment();
    navigate("/assessment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Your Results
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-3">
            {recommendations.name}
          </h1>
          <p className="text-2xl text-emerald-700 font-medium mb-6">
            {recommendations.chineseName}
          </p>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {recommendations.description}
          </p>
        </div>

        {/* Recommended Teas Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-6">
            <span className="text-3xl mr-3">☕</span>
            <h2 className="text-2xl font-bold text-stone-900">
              Recommended Teas
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {recommendations.teas.map((tea, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-100"
              >
                <h3 className="font-bold text-stone-900 mb-2">{tea.name}</h3>
                <p className="text-sm text-stone-600">{tea.benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Foods to Enjoy Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-6">
            <span className="text-3xl mr-3">🍲</span>
            <h2 className="text-2xl font-bold text-stone-900">
              Foods to Enjoy
            </h2>
          </div>
          <div className="space-y-4">
            {recommendations.foods.proteins && (
              <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                <h3 className="font-semibold text-emerald-900 mb-2 flex items-center">
                  <span className="mr-2">🥩</span> Proteins
                </h3>
                <p className="text-stone-700">
                  {recommendations.foods.proteins}
                </p>
              </div>
            )}
            {recommendations.foods.vegetables && (
              <div className="bg-green-50 p-5 rounded-xl border border-green-100">
                <h3 className="font-semibold text-green-900 mb-2 flex items-center">
                  <span className="mr-2">🥬</span> Vegetables
                </h3>
                <p className="text-stone-700">
                  {recommendations.foods.vegetables}
                </p>
              </div>
            )}
            {recommendations.foods.other && (
              <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-100">
                <h3 className="font-semibold text-yellow-900 mb-2 flex items-center">
                  <span className="mr-2">🌾</span> Other
                </h3>
                <p className="text-stone-700">{recommendations.foods.other}</p>
              </div>
            )}
          </div>
        </div>

        {/* Foods to Limit Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex items-center mb-6">
            <span className="text-3xl mr-3">⚠️</span>
            <h2 className="text-2xl font-bold text-stone-900">
              Foods to Limit
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {recommendations.avoid.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-red-50 p-4 rounded-lg border border-red-100"
              >
                <span className="text-red-500 mr-3 text-xl">✕</span>
                <span className="text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Principle Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">💡</span>
            <h2 className="text-2xl font-bold text-white">Key Principle</h2>
          </div>
          <p className="text-white text-lg leading-relaxed">
            {recommendations.principle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleReturnHome}
            className="flex items-center justify-center bg-white hover:bg-stone-50 text-stone-800 font-semibold px-8 py-4 rounded-lg border-2 border-stone-200 transition-colors duration-200 shadow-sm"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Return to Home
          </button>
          <button
            onClick={handleRestartAssessment}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg"
          >
            Take Assessment Again
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-amber-50 border border-amber-100 rounded-xl p-6">
          <p className="text-sm text-stone-600 text-center leading-relaxed">
            <strong>Note:</strong> This tool provides general wellness guidance
            based on TCM principles. It is not a substitute for professional
            medical advice. For comprehensive health concerns, please consult a
            qualified healthcare provider.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SurveyResults;
