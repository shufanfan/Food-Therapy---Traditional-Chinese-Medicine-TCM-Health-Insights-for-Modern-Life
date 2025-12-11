import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDetailedScore } from '../Sprints/Sprint1/utils/constitutionCalculator';
import recommendationsData from '../data/recommendations-display.json';

function SurveyResults({ answers, onReturnHome, onRestartAssessment }) {
  const navigate = useNavigate();

  // ALL useState hooks at the top
  const [actualAnswers, setActualAnswers] = useState(answers);
  const [isLoading, setIsLoading] = useState(false);
  const [tracking, setTracking] = useState({
    drinkingTeas: false,
    eatingRecommended: false,
    avoidingFoods: false,
    startDate: null,
    lastUpdated: null,
  });

  // ALL useEffect hooks after useState
  // Load answers from URL if needed
  useEffect(() => {
    if (!answers || answers.length === 0) {
      setIsLoading(true);
      const urlParams = new URLSearchParams(window.location.search);
      const dataParam = urlParams.get('data');

      if (dataParam) {
        try {
          const decodedAnswers = JSON.parse(decodeURIComponent(dataParam));
          setActualAnswers(decodedAnswers);
        } catch (error) {
          alert('Invalid results link. Redirecting to home...');
          navigate('/');
        }
      } else {
        alert('No results data found. Please take the assessment first.');
        navigate('/');
      }
      setIsLoading(false);
    }
  }, [answers, navigate]);

  // Load tracking from localStorage
  useEffect(() => {
    if (actualAnswers && actualAnswers.length > 0) {
      try {
        const detailedScores = getDetailedScore(actualAnswers);
        const constitution = detailedScores.result;

        const saved = localStorage.getItem(`tcm-tracking-${constitution}`);
        if (saved) {
          setTracking(JSON.parse(saved));
        }
      } catch (error) {
        // Silent fail - tracking data may be corrupted
      }
    }
  }, [actualAnswers]);

  // Save tracking to localStorage
  useEffect(() => {
    if (actualAnswers && actualAnswers.length > 0) {
      try {
        const detailedScores = getDetailedScore(actualAnswers);
        const constitution = detailedScores.result;
        localStorage.setItem(
          `tcm-tracking-${constitution}`,
          JSON.stringify(tracking)
        );
      } catch (error) {
        // Silent fail - could not save tracking data
      }
    }
  }, [tracking, actualAnswers]);

  // Early return AFTER all hooks
  if (isLoading || !actualAnswers || actualAnswers.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-stone-50 py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-stone-600">Loading your results...</p>
        </div>
      </div>
    );
  }

  // Get detailed scores using actualAnswers
  const detailedScores = getDetailedScore(actualAnswers);
  const { scores, result } = detailedScores;
  const constitution = result;

  // Calculate percentages
  const total =
    scores.cold +
    scores.heat +
    scores.balanced +
    scores.qiDeficiency +
    scores.yinDeficiency +
    scores.phlegmDampness;

  const exactPercentages = {
    balanced: (scores.balanced / total) * 100,
    cold: (scores.cold / total) * 100,
    heat: (scores.heat / total) * 100,
    qiDeficiency: (scores.qiDeficiency / total) * 100,
    yinDeficiency: (scores.yinDeficiency / total) * 100,
    phlegmDampness: (scores.phlegmDampness / total) * 100,
  };

  // Use largest remainder method to ensure sum = 100%
  const roundedPercentages = {};
  const keys = Object.keys(exactPercentages);
  const floors = {};
  const remainders = {};

  keys.forEach((key) => {
    floors[key] = Math.floor(exactPercentages[key]);
    remainders[key] = exactPercentages[key] - floors[key];
  });

  let sum = Object.values(floors).reduce((a, b) => a + b, 0);
  let toDistribute = 100 - sum;

  // Sort by remainder (largest first) and distribute remaining 1%s
  const sortedKeys = keys.sort((a, b) => remainders[b] - remainders[a]);
  sortedKeys.forEach((key) => {
    if (toDistribute > 0) {
      roundedPercentages[key] = floors[key] + 1;
      toDistribute--;
    } else {
      roundedPercentages[key] = floors[key];
    }
  });

  const percentages = roundedPercentages;

  const sortedConstitutions = [
    {
      key: 'balanced',
      name: 'Balanced Constitution',
      percentage: percentages.balanced,
      color: 'green',
    },
    {
      key: 'cold',
      name: 'Cold Constitution',
      percentage: percentages.cold,
      color: 'blue',
    },
    {
      key: 'heat',
      name: 'Heat Constitution',
      percentage: percentages.heat,
      color: 'red',
    },
    {
      key: 'qiDeficiency',
      name: 'Qi Deficiency Constitution',
      percentage: percentages.qiDeficiency,
      color: 'yellow',
    },
    {
      key: 'yinDeficiency',
      name: 'Yin Deficiency Constitution',
      percentage: percentages.yinDeficiency,
      color: 'orange',
    },
    {
      key: 'phlegmDampness',
      name: 'Phlegm-Dampness Constitution',
      percentage: percentages.phlegmDampness,
      color: 'purple',
    },
  ].sort((a, b) => b.percentage - a.percentage);

  const recommendations = recommendationsData[constitution];

  const handleReturnHome = () => {
    onReturnHome();
    navigate('/');
  };

  const handleRestartAssessment = () => {
    onRestartAssessment();
    navigate('/assessment');
  };

  const handleCopyLink = () => {
    try {
      const encodedAnswers = encodeURIComponent(JSON.stringify(actualAnswers));
      const shareUrl = `${window.location.origin}/results?data=${encodedAnswers}`;

      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          alert('Results link copied to clipboard! Share it with friends.');
        })
        .catch(() => {
          alert('Link ready to copy:\n\n' + shareUrl);
        });
    } catch (error) {
      alert('Failed to generate share link. Please try again.');
    }
  };

  const handleDownloadImage = () => {
    window.print();
  };

  const handleTrackingChange = (field) => {
    setTracking((prev) => {
      const newValue = !prev[field];
      const now = new Date().toISOString();

      const isFirstCheck =
        !prev.drinkingTeas && !prev.eatingRecommended && !prev.avoidingFoods;

      return {
        ...prev,
        [field]: newValue,
        startDate: isFirstCheck && newValue ? now : prev.startDate,
        lastUpdated: now,
      };
    });
  };

  const handleResetTracking = () => {
    if (
      window.confirm(
        'Are you sure you want to reset your tracking progress? This cannot be undone.'
      )
    ) {
      setTracking({
        drinkingTeas: false,
        eatingRecommended: false,
        avoidingFoods: false,
        startDate: null,
        lastUpdated: null,
      });
    }
  };

  const getDaysTracking = () => {
    if (!tracking.startDate) return 0;
    const start = new Date(tracking.startDate);
    const now = new Date();
    const diffTime = Math.abs(now - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
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

        {/* Breakdown + Share Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Left: Score Breakdown */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">📊</span>
              <h2 className="text-2xl font-bold text-stone-900">
                Your Constitution Breakdown
              </h2>
            </div>

            <p className="text-stone-600 mb-6 text-sm">
              Your responses show characteristics of multiple constitution
              types. Here's your complete profile:
            </p>

            <div className="space-y-4">
              {sortedConstitutions.map((item) => {
                const isPrimary = item.key === constitution;

                const getBarColor = (colorName, isPrimary) => {
                  const colorMap = {
                    green: isPrimary ? 'bg-green-500' : 'bg-green-300',
                    blue: isPrimary ? 'bg-blue-500' : 'bg-blue-300',
                    red: isPrimary ? 'bg-red-500' : 'bg-red-300',
                    yellow: isPrimary ? 'bg-yellow-500' : 'bg-yellow-300',
                    orange: isPrimary ? 'bg-orange-500' : 'bg-orange-300',
                    purple: isPrimary ? 'bg-purple-500' : 'bg-purple-300',
                  };
                  return colorMap[colorName];
                };

                const getTextColor = (colorName, isPrimary) => {
                  if (!isPrimary) return 'text-stone-700';
                  const colorMap = {
                    green: 'text-green-700',
                    blue: 'text-blue-700',
                    red: 'text-red-700',
                    yellow: 'text-yellow-700',
                    orange: 'text-orange-700',
                    purple: 'text-purple-700',
                  };
                  return colorMap[colorName];
                };

                return (
                  <div key={item.key}>
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`font-semibold ${getTextColor(item.color, isPrimary)}`}
                      >
                        {item.name} {isPrimary && '(Primary)'}
                      </span>
                      <span
                        className={`font-bold ${isPrimary ? getTextColor(item.color, true) : 'text-stone-600'}`}
                      >
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-stone-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${getBarColor(item.color, isPrimary)}`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Explanatory Text */}
            <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <p className="text-amber-900 text-sm leading-relaxed">
                {percentages[constitution] < 60 ? (
                  <>
                    <strong>Mixed Constitution:</strong> You show
                    characteristics of multiple types. Your primary tendency is{' '}
                    <strong>{recommendations.name}</strong>, but you also have
                    traits from other constitutions. This is common and reflects
                    the complexity of individual body patterns in TCM.
                  </>
                ) : (
                  <>
                    <strong>Clear Pattern:</strong> You strongly align with{' '}
                    <strong>{recommendations.name}</strong>. Focus on the
                    recommendations below to support your constitution.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Right: Share Section */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-lg p-6 flex flex-col justify-center md:col-span-1">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Share Your Results
              </h3>
              <p className="text-emerald-50 mb-6">
                Help others discover their TCM constitution! Share your results
                or save them for reference.
              </p>
              <div className="flex flex-col gap-4">
                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center bg-white hover:bg-emerald-50 text-emerald-700 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm"
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
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy Link
                </button>
                <button
                  onClick={handleDownloadImage}
                  className="flex items-center justify-center bg-white hover:bg-emerald-50 text-emerald-700 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm"
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
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Save as Image
                </button>
              </div>
            </div>
          </div>
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

        {/* Track My Progress Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <span className="text-3xl mr-3">📈</span>
              <h2 className="text-2xl font-bold text-stone-900">
                Track My Progress
              </h2>
            </div>
            {tracking.startDate && (
              <div className="text-right">
                <p className="text-sm text-stone-600">Days tracking</p>
                <p className="text-2xl font-bold text-emerald-600">
                  {getDaysTracking()}
                </p>
              </div>
            )}
          </div>

          <p className="text-stone-600 mb-6">
            Use this tracker to monitor your progress with TCM recommendations.
            Your data stays private on your device.
          </p>

          {/* Checklist */}
          <div className="space-y-4 mb-6">
            <label className="flex items-start p-4 border-2 border-stone-200 rounded-xl cursor-pointer hover:border-emerald-300 transition-colors">
              <input
                type="checkbox"
                checked={tracking.drinkingTeas}
                onChange={() => handleTrackingChange('drinkingTeas')}
                className="w-5 h-5 mt-0.5 mr-4 text-emerald-600 rounded focus:ring-emerald-500 cursor-pointer"
              />
              <div>
                <span className="font-semibold text-stone-900">
                  I'm drinking recommended teas
                </span>
                <p className="text-sm text-stone-600 mt-1">
                  Following the tea recommendations for my constitution type
                </p>
              </div>
            </label>

            <label className="flex items-start p-4 border-2 border-stone-200 rounded-xl cursor-pointer hover:border-emerald-300 transition-colors">
              <input
                type="checkbox"
                checked={tracking.eatingRecommended}
                onChange={() => handleTrackingChange('eatingRecommended')}
                className="w-5 h-5 mt-0.5 mr-4 text-emerald-600 rounded focus:ring-emerald-500 cursor-pointer"
              />
              <div>
                <span className="font-semibold text-stone-900">
                  I'm eating more recommended foods
                </span>
                <p className="text-sm text-stone-600 mt-1">
                  Incorporating foods that support my constitution
                </p>
              </div>
            </label>

            <label className="flex items-start p-4 border-2 border-stone-200 rounded-xl cursor-pointer hover:border-emerald-300 transition-colors">
              <input
                type="checkbox"
                checked={tracking.avoidingFoods}
                onChange={() => handleTrackingChange('avoidingFoods')}
                className="w-5 h-5 mt-0.5 mr-4 text-emerald-600 rounded focus:ring-emerald-500 cursor-pointer"
              />
              <div>
                <span className="font-semibold text-stone-900">
                  I'm avoiding foods to limit
                </span>
                <p className="text-sm text-stone-600 mt-1">
                  Reducing or eliminating foods that don't suit my constitution
                </p>
              </div>
            </label>
          </div>

          {/* Progress indicator */}
          {(tracking.drinkingTeas ||
            tracking.eatingRecommended ||
            tracking.avoidingFoods) && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-emerald-900">
                  Progress
                </span>
                <span className="text-sm font-bold text-emerald-700">
                  {
                    [
                      tracking.drinkingTeas,
                      tracking.eatingRecommended,
                      tracking.avoidingFoods,
                    ].filter(Boolean).length
                  }{' '}
                  / 3 habits
                </span>
              </div>
              <div className="w-full bg-emerald-200 rounded-full h-2">
                <div
                  className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${([tracking.drinkingTeas, tracking.eatingRecommended, tracking.avoidingFoods].filter(Boolean).length / 3) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Reset button */}
          {tracking.startDate && (
            <button
              onClick={handleResetTracking}
              className="text-stone-600 hover:text-red-600 text-sm font-medium transition-colors flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Reset tracking
            </button>
          )}

          {/* Privacy note */}
          <div className="mt-6 pt-6 border-t border-stone-200">
            <p className="text-xs text-stone-500 flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Your tracking data is stored locally on your device and never
              leaves your browser.
            </p>
          </div>
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
