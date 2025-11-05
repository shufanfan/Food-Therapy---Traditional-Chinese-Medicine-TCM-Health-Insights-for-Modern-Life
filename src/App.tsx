import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Survey from "./components/Survey";
import SurveyResults from "./components/SurveyResults";

function AppContent() {
  const navigate = useNavigate();
  const [surveyAnswers, setSurveyAnswers] = useState<string[]>([]);

  const handleSurveyComplete = (answers: string[]) => {
    setSurveyAnswers(answers);
  };

  const handleReturnToLanding = () => {
    setSurveyAnswers([]);
  };

  const handleRestartAssessment = () => {
    setSurveyAnswers([]);
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/assessment"
        element={<Survey onComplete={handleSurveyComplete} />}
      />
      <Route
        path="/results"
        element={
          <SurveyResults
            answers={surveyAnswers}
            onReturnHome={handleReturnToLanding}
            onRestartAssessment={handleRestartAssessment}
          />
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
