import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Survey from "./components/Survey";
import SurveyResults from "./components/SurveyResults";
import PrivacyPolicy from "./components/PrivacyPolicy";
import AboutTCM from "./components/AboutTCM";
import ReferencesPage from "./components/ReferencesPage";

function AppContent() {
  const [surveyAnswers, setSurveyAnswers] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //const navigate = useNavigate();
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
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/about-tcm" element={<AboutTCM />} />
      <Route path="/references" element={<ReferencesPage />} />
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
