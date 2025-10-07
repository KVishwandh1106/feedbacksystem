import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext';
import Layout from './components/layout/Layout';
import FeedbackForm from './components/feedback/FeedbackForm';
import FeedbackList from './components/feedback/FeedbackList';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<FeedbackForm />} />
            <Route path="/feedbacks" element={<FeedbackList />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
