// Mock API service for feedback operations
// In a real application, these would be API calls to a backend

export const feedbackService = {
  // Simulate API delay
  delay: (ms = 500) => new Promise(resolve => setTimeout(resolve, ms)),

  // Get all feedbacks
  getAllFeedbacks: async () => {
    await feedbackService.delay();
    const feedbacks = localStorage.getItem('feedbacks');
    return feedbacks ? JSON.parse(feedbacks) : [];
  },

  // Add new feedback
  addFeedback: async (feedback) => {
    await feedbackService.delay();
    const feedbacks = await feedbackService.getAllFeedbacks();
    const newFeedback = {
      ...feedback,
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'pending'
    };
    const updated = [newFeedback, ...feedbacks];
    localStorage.setItem('feedbacks', JSON.stringify(updated));
    return newFeedback;
  },

  // Update feedback status
  updateFeedbackStatus: async (id, status) => {
    await feedbackService.delay();
    const feedbacks = await feedbackService.getAllFeedbacks();
    const updated = feedbacks.map(fb =>
      fb.id === id ? { ...fb, status } : fb
    );
    localStorage.setItem('feedbacks', JSON.stringify(updated));
    return updated.find(fb => fb.id === id);
  },

  // Delete feedback
  deleteFeedback: async (id) => {
    await feedbackService.delay();
    const feedbacks = await feedbackService.getAllFeedbacks();
    const updated = feedbacks.filter(fb => fb.id !== id);
    localStorage.setItem('feedbacks', JSON.stringify(updated));
    return true;
  },

  // Get statistics
  getStatistics: async () => {
    await feedbackService.delay();
    const feedbacks = await feedbackService.getAllFeedbacks();
    
    const total = feedbacks.length;
    const pending = feedbacks.filter(fb => fb.status === 'pending').length;
    const reviewed = feedbacks.filter(fb => fb.status === 'reviewed').length;
    const resolved = feedbacks.filter(fb => fb.status === 'resolved').length;
    
    const avgRating = feedbacks.length > 0
      ? (feedbacks.reduce((sum, fb) => sum + fb.rating, 0) / feedbacks.length).toFixed(1)
      : 0;

    return {
      total,
      pending,
      reviewed,
      resolved,
      avgRating
    };
  }
};
