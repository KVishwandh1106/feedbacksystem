import React, { useState } from 'react';
import { useFeedback } from '../../context/FeedbackContext';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const { addFeedback } = useFeedback();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    category: 'product',
    feedback: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFeedback(formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      rating: 5,
      category: 'product',
      feedback: ''
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="feedback-form-container">
      <div className="form-header">
        <h2>Submit Your Feedback</h2>
        <p>We value your opinion! Please share your thoughts with us.</p>
      </div>

      {submitted && (
        <div className="success-message">
          ✅ Thank you! Your feedback has been submitted successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="product">Product</option>
              <option value="service">Service</option>
              <option value="support">Support</option>
              <option value="website">Website</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating *</label>
            <div className="rating-container">
              <input
                type="range"
                id="rating"
                name="rating"
                min="1"
                max="5"
                value={formData.rating}
                onChange={handleChange}
                required
              />
              <div className="rating-display">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={index < formData.rating ? 'star filled' : 'star'}
                  >
                    ⭐
                  </span>
                ))}
                <span className="rating-value">({formData.rating}/5)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Your Feedback *</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            rows="6"
            placeholder="Share your thoughts, suggestions, or concerns..."
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
