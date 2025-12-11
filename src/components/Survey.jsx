import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Survey questions data
const QUESTIONS = [
  {
    id: 0,
    text: 'How do you typically feel in terms of body temperature?',
    options: [
      {
        value: 'A',
        label: (
          <span>
            I'm often <strong>cold</strong>, even when others are comfortable
          </span>
        ),
      },
      {
        value: 'B',
        label: (
          <span>
            I'm usually <strong>comfortable</strong> in most temperatures
          </span>
        ),
      },
      {
        value: 'C',
        label: (
          <span>
            I often feel <strong>warm</strong> or <strong>overheated</strong>
          </span>
        ),
      },
    ],
  },
  {
    id: 1,
    text: 'How would you describe your energy throughout the day?',
    options: [
      {
        value: 'A',
        label: (
          <span>
            I often feel <strong>tired</strong> or have{' '}
            <strong>low energy</strong>
          </span>
        ),
      },
      {
        value: 'B',
        label: (
          <span>
            I have <strong>steady, consistent energy</strong>
          </span>
        ),
      },
      {
        value: 'C',
        label: (
          <span>
            I feel <strong>restless</strong>, <strong>anxious</strong>, or have{' '}
            <strong>fluctuating energy</strong>
          </span>
        ),
      },
    ],
  },
  {
    id: 2,
    text: 'Which best describes your digestion and related symptoms?',
    options: [
      {
        value: 'A',
        label: (
          <span>
            I experience <strong>bloating</strong>,{' '}
            <strong>loose stools</strong>, or feel worse after eating{' '}
            <strong>cold foods</strong>
          </span>
        ),
      },
      {
        value: 'B',
        label: (
          <span>
            My digestion is generally <strong>smooth and comfortable</strong>
          </span>
        ),
      },
      {
        value: 'C',
        label: (
          <span>
            I have <strong>oily skin/acne</strong>,{' '}
            <strong>constipation</strong>, or feel{' '}
            <strong>heavy and sluggish</strong> after meals
          </span>
        ),
      },
    ],
  },
  {
    id: 3,
    text: 'How is your sleep quality at night?',
    options: [
      {
        value: 'A',
        label: (
          <span>
            I sleep okay but <strong>wake up tired</strong>, or I need{' '}
            <strong>many blankets</strong> to feel comfortable
          </span>
        ),
      },
      {
        value: 'B',
        label: (
          <span>
            I <strong>fall asleep easily</strong> and wake up feeling{' '}
            <strong>refreshed</strong>
          </span>
        ),
      },
      {
        value: 'C',
        label: (
          <span>
            I have <strong>trouble falling asleep</strong>, experience{' '}
            <strong>night sweats</strong>, or feel <strong>hot at night</strong>
          </span>
        ),
      },
    ],
  },
  {
    id: 4,
    text: 'What types of foods and drinks do you naturally crave or prefer?',
    options: [
      {
        value: 'A',
        label: (
          <span>
            <strong>Warm foods</strong>, <strong>hot drinks</strong>, soups, and{' '}
            <strong>cooked meals</strong>
          </span>
        ),
      },
      {
        value: 'B',
        label: (
          <span>
            A <strong>balanced variety</strong> - I enjoy both warm and cool
            foods
          </span>
        ),
      },
      {
        value: 'C',
        label: (
          <span>
            <strong>Cold drinks</strong>, <strong>raw foods</strong>, salads,
            and <strong>refreshing snacks</strong>
          </span>
        ),
      },
    ],
  },
  {
    id: 5,
    text: 'Which best describes your experience with moisture or dryness?',
    options: [
      {
        value: 'A',
        label: (
          <span>
            I often have <strong>dry mouth</strong>, <strong>dry skin</strong>,
            or <strong>dry throat</strong>
          </span>
        ),
      },
      {
        value: 'B',
        label: (
          <span>
            I feel comfortable; no particular <strong>dryness</strong> or
            excessive <strong>moisture</strong>
          </span>
        ),
      },
      {
        value: 'C',
        label: (
          <span>
            I have <strong>oily skin</strong>, excessive{' '}
            <strong>mucus/phlegm</strong>, or <strong>sticky sensations</strong>
          </span>
        ),
      },
    ],
  },
  {
    id: 6,
    text: 'How would you describe your body build and weight patterns?',
    options: [
      {
        value: 'A',
        label: (
          <span>
            I tend to be <strong>lean</strong> or have{' '}
            <strong>difficulty gaining weight</strong>
          </span>
        ),
      },
      {
        value: 'B',
        label: (
          <span>
            My weight is <strong>stable</strong> and proportionate to my height
          </span>
        ),
      },
      {
        value: 'C',
        label: (
          <span>
            I <strong>gain weight easily</strong> or feel{' '}
            <strong>heavy/puffy</strong>, especially around abdomen
          </span>
        ),
      },
    ],
  },
  {
    id: 7,
    text: 'How does weather or environment affect you?',
    options: [
      {
        value: 'A',
        label: (
          <span>
            I feel worse in <strong>cold weather</strong> or need{' '}
            <strong>extra layers</strong>
          </span>
        ),
      },
      {
        value: 'B',
        label: (
          <span>
            I'm generally <strong>comfortable</strong> in various weather
            conditions
          </span>
        ),
      },
      {
        value: 'C',
        label: (
          <span>
            I feel worse in <strong>hot</strong> or{' '}
            <strong>humid weather</strong>; I prefer cool, dry environments
          </span>
        ),
      },
    ],
  },
  {
    id: 8,
    text: 'How would you describe your thirst and drinking habits?',
    options: [
      {
        value: 'A',
        label: (
          <span>
            I'm often <strong>thirsty</strong> and prefer drinking{' '}
            <strong>cold water</strong>; my mouth feels <strong>dry</strong>
          </span>
        ),
      },
      {
        value: 'B',
        label: (
          <span>
            I drink when thirsty but don't think about it much;{' '}
            <strong>normal hydration</strong>
          </span>
        ),
      },
      {
        value: 'C',
        label: (
          <span>
            I'm <strong>rarely thirsty</strong> and don't drink much; water may
            feel <strong>heavy in my stomach</strong>
          </span>
        ),
      },
    ],
  },
  {
    id: 9,
    text: 'How is your physical stamina and recovery from exertion or illness?',
    options: [
      {
        value: 'A',
        label: (
          <span>
            I have <strong>good stamina</strong>; I{' '}
            <strong>recover quickly</strong> from exercise or illness
          </span>
        ),
      },
      {
        value: 'B',
        label: (
          <span>
            I <strong>tire easily</strong> with physical activity and take a{' '}
            <strong>long time to recover</strong>
          </span>
        ),
      },
      {
        value: 'C',
        label: (
          <span>
            My stamina <strong>varies</strong>; sometimes good, sometimes I feel{' '}
            <strong>drained</strong> or get sick easily
          </span>
        ),
      },
    ],
  },
];

function Survey({ onComplete }) {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0); // 这一行必须有！
  const [allAnswers, setAllAnswers] = useState([]);
  const [currentSelections, setCurrentSelections] = useState([]);

  // Clear selections when question changes
  useEffect(() => {
    setCurrentSelections([]);
  }, [currentQuestion]);

  const handleOptionToggle = (value) => {
    if (currentSelections.includes(value)) {
      // Deselect
      setCurrentSelections(currentSelections.filter((v) => v !== value));
    } else {
      // Select
      setCurrentSelections([...currentSelections, value]);
    }
  };

  const handleNext = () => {
    // Validation: at least 1 selected
    if (currentSelections.length === 0) {
      alert('Please select at least one option');
      return;
    }

    const newAnswers = [...allAnswers, currentSelections];
    setAllAnswers(newAnswers);

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
      setAllAnswers(allAnswers.slice(0, -1));
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
            {currentQuestion + 1}. {question.text}
          </h2>

          {/* Instruction */}
          <p className="text-stone-600 mb-4 text-sm italic">
            Select all that apply
          </p>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option) => {
              const isSelected = currentSelections.includes(option.value);
              return (
                <button
                  key={option.value}
                  onClick={() => handleOptionToggle(option.value)}
                  className={`w-full text-left p-6 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-start">
                    {/* Checkbox indicator */}
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-md border-2 flex items-center justify-center font-bold transition-colors duration-200 mr-4 ${
                        isSelected
                          ? 'bg-emerald-500 border-emerald-500 text-white'
                          : 'bg-white border-stone-300'
                      }`}
                    >
                      {isSelected && '✓'}
                    </span>
                    <div>
                      <span
                        className={`leading-relaxed ${
                          isSelected
                            ? 'text-stone-900 font-medium'
                            : 'text-stone-700'
                        }`}
                      >
                        {option.label}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentSelections.length === 0}
            className={`w-full mt-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
              currentSelections.length > 0
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer'
                : 'bg-stone-200 text-stone-400 cursor-not-allowed'
            }`}
          >
            {currentQuestion < QUESTIONS.length - 1
              ? 'Next Question →'
              : 'See Results →'}
          </button>
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
