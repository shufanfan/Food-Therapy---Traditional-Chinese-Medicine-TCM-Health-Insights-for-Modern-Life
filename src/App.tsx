import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import Survey from "./components/Survey";
import SurveyResults from "./components/SurveyResults";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("landing");

  const [surveyAnswers, setSurveyAnswers] = useState<string[]>([]);

  const handleStartAssessment = () => {
    setCurrentPage("survey");
  };

  const handleSurveyComplete = (answers: string[]) => {
    setSurveyAnswers(answers);
    setCurrentPage("results");
  };

  const handleReturnToLanding = () => {
    setCurrentPage("landing");
    setSurveyAnswers([]);
  };

  const handleRestartAssessment = () => {
    setSurveyAnswers([]);
    setCurrentPage("survey");
  };

  return (
    <div>
      {currentPage === "landing" && (
        <LandingPage onStartAssessment={handleStartAssessment} />
      )}

      {currentPage === "survey" && <Survey onComplete={handleSurveyComplete} />}

      {currentPage === "results" && (
        <SurveyResults
          answers={surveyAnswers}
          onReturnHome={handleReturnToLanding}
          onRestartAssessment={handleRestartAssessment}
        />
      )}
    </div>
  );
}

export default App;
