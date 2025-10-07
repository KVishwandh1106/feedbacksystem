import React, { createContext, useState, useContext, useEffect } from 'react';

const FeedbackContext = createContext();

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
};

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Load feedbacks from localStorage on mount
  useEffect(() => {
    const storedFeedbacks = localStorage.getItem('feedbacks');
    if (storedFeedbacks) {
      try {
        const parsed = JSON.parse(storedFeedbacks);
        setFeedbacks(Array.isArray(parsed) ? parsed : []);
      } catch (error) {
        console.error('Error loading feedbacks:', error);
        setFeedbacks([]);
      }
    }
  }, []);

  // Save to localStorage whenever feedbacks change
  useEffect(() => {
    if (feedbacks.length > 0) {
      localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    }
  }, [feedbacks]);

  const addFeedback = (feedback) => {
    const newFeedback = {
      ...feedback,
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'pending'
    };
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  const updateFeedbackStatus = (id, status) => {
    setFeedbacks(feedbacks.map(fb => 
      fb.id === id ? { ...fb, status } : fb
    ));
  };

  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter(fb => fb.id !== id));
  };

  const getFilteredFeedbacks = () => {
    let filtered = feedbacks;

    // Apply status filter
    if (filter !== 'all') {
      filtered = filtered.filter(fb => fb.status === filter);
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(fb =>
        fb.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fb.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fb.feedback.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fb.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const getStatistics = () => {
    const total = feedbacks.length;
    const pending = feedbacks.filter(fb => fb.status === 'pending').length;
    const reviewed = feedbacks.filter(fb => fb.status === 'reviewed').length;
    const resolved = feedbacks.filter(fb => fb.status === 'resolved').length;
    
    const avgRating = feedbacks.length > 0
      ? (feedbacks.reduce((sum, fb) => sum + fb.rating, 0) / feedbacks.length).toFixed(1)
      : 0;

    const categoryBreakdown = feedbacks.reduce((acc, fb) => {
      acc[fb.category] = (acc[fb.category] || 0) + 1;
      return acc;
    }, {});

    const ratingDistribution = feedbacks.reduce((acc, fb) => {
      acc[fb.rating] = (acc[fb.rating] || 0) + 1;
      return acc;
    }, {});

    return {
      total,
      pending,
      reviewed,
      resolved,
      avgRating,
      categoryBreakdown,
      ratingDistribution
    };
  };

  const value = {
    feedbacks,
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
    addFeedback,
    updateFeedbackStatus,
    deleteFeedback,
    getFilteredFeedbacks,
    getStatistics
  };

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
};
