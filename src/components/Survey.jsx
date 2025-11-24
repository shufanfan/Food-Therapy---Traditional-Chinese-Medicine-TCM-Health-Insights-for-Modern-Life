import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Survey questions data
const QUESTIONS = [
  {
    id: 0,
    text: 'How do you typically feel in terms of body temperature?',
    options: [
      { value: 'A', label: "I'm often cold, even when others are comfortable" },
      { value: 'B', label: "I'm usually comfortable in most temperatures" },
      { value: 'C', label: 'I often feel warm or overheated' },
    ],
  },
  {
    id: 1,
    text: 'How would you describe your energy throughout the day?',
    options: [
      { value: 'A', label: 'I often feel tired or have low energy' },
      { value: 'B', label: 'I have steady, consistent energy' },
      {
        value: 'C',
        label: 'I feel restless, anxious, or have fluctuating energy',
      },
    ],
  },
  {
    id: 2,
    text: 'Which best describes your digestion and related symptoms?',
    options: [
      {
        value: 'A',
        label:
          'I experience bloating, loose stools, or feel worse after eating cold foods',
      },
      { value: 'B', label: 'My digestion is generally smooth and comfortable' },
      {
        value: 'C',
        label:
          'I have oily skin/acne, constipation, or feel heavy and sluggish after meals',
      },
    ],
  },
  {
    id: 3,
    text: 'How do you sleep at night?',
    options: [
      {
        value: 'A',
        label:
          'I sleep okay but wake up tired, or I need many blankets to feel comfortable',
      },
      {
        value: 'B',
        label: 'I fall asleep easily and wake up feeling refreshed',
      },
      {
        value: 'C',
        label:
          'I have trouble falling asleep, experience night sweats, or feel hot at night',
      },
    ],
  },
  {
    id: 4,
    text: 'What types of foods and drinks do you naturally crave or prefer?',
    options: [
      { value: 'A', label: 'Warm foods, hot drinks, soups, and cooked meals' },
      {
        value: 'B',
        label: 'A balanced variety - I enjoy both warm and cool foods',
      },
      {
        value: 'C',
        label: 'Cold drinks, raw foods, salads, and refreshing snacks',
      },
    ],
  },
];

function Survey({ onComplete }) {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  // Clear selected option when question changes
  useEffect(() => {
    setSelectedOption(null);
  }, [currentQuestion]);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(newAnswers);
      navigate('/results');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const question = QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-stone-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-stone-600">
              Question {currentQuestion + 1} of {QUESTIONS.length}
            </span>
            <span className="text-sm font-medium text-emerald-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-stone-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8 leading-relaxed">
            {question.text}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option) => {
              const isSelected = selectedOption === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full text-left p-6 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-stone-200'
                  }`}
                >
                  <div className="flex items-start">
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold transition-colors duration-200 mr-4 ${
                        isSelected
                          ? 'bg-emerald-500 text-white'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {option.value}
                    </span>
                    <span
                      className={`leading-relaxed ${
                        isSelected ? 'text-stone-900' : 'text-stone-700'
                      }`}
                    >
                      {option.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Back Button */}
        {currentQuestion > 0 && (
          <button
            onClick={handleBack}
            className="flex items-center text-stone-600 hover:text-stone-900 font-medium transition-colors duration-200"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Previous Question
          </button>
        )}
      </div>
    </div>
  );
}

export default Survey;
