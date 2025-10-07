import React, { useState } from 'react';
import { useFeedback } from '../../context/FeedbackContext';
import './FeedbackItem.css';

const FeedbackItem = ({ feedback }) => {
  const { updateFeedbackStatus, deleteFeedback } = useFeedback();
  const [showActions, setShowActions] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return '#f59e0b';
      case 'reviewed':
        return '#3b82f6';
      case 'resolved':
        return '#10b981';
      default:
        return '#718096';
    }
  };

  const handleStatusChange = (newStatus) => {
    updateFeedbackStatus(feedback.id, newStatus);
    setShowActions(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      deleteFeedback(feedback.id);
    }
  };

  return (
    <div className="feedback-item">
      <div className="feedback-header">
        <div className="user-info">
          <div className="avatar">
            {feedback.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3>{feedback.name}</h3>
            <p className="email">{feedback.email}</p>
          </div>
        </div>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < feedback.rating ? 'star filled' : 'star'}
            >
              ⭐
            </span>
          ))}
        </div>
      </div>

      <div className="feedback-body">
        <div className="category-badge">
          {feedback.category}
        </div>
        <p className="feedback-text">{feedback.feedback}</p>
      </div>

      <div className="feedback-footer">
        <div className="meta-info">
          <span className="date">📅 {formatDate(feedback.date)}</span>
          <span
            className="status-badge"
            style={{ backgroundColor: getStatusColor(feedback.status) }}
          >
            {feedback.status}
          </span>
        </div>

        <div className="actions">
          <button
            className="action-btn"
            onClick={() => setShowActions(!showActions)}
          >
            ⚙️ Actions
          </button>
          {showActions && (
            <div className="actions-dropdown">
              {feedback.status !== 'pending' && (
                <button onClick={() => handleStatusChange('pending')}>
                  Mark as Pending
                </button>
              )}
              {feedback.status !== 'reviewed' && (
                <button onClick={() => handleStatusChange('reviewed')}>
                  Mark as Reviewed
                </button>
              )}
              {feedback.status !== 'resolved' && (
                <button onClick={() => handleStatusChange('resolved')}>
                  Mark as Resolved
                </button>
              )}
              <button onClick={handleDelete} className="delete-btn">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackItem;
