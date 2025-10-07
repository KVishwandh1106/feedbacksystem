import React from 'react';
import { useFeedback } from '../../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import './FeedbackList.css';

const FeedbackList = () => {
  const { getFilteredFeedbacks, filter, setFilter, searchTerm, setSearchTerm } = useFeedback();
  const feedbacks = getFilteredFeedbacks();

  return (
    <div className="feedback-list-container">
      <div className="list-header">
        <h2>Customer Feedbacks</h2>
        <p>Manage and review all customer feedback submissions</p>
      </div>

      <div className="filters-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search feedbacks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="filter-buttons">
          <button
            className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('all')}
          >
            All ({feedbacks.length})
          </button>
          <button
            className={filter === 'pending' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('pending')}
          >
            Pending
          </button>
          <button
            className={filter === 'reviewed' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('reviewed')}
          >
            Reviewed
          </button>
          <button
            className={filter === 'resolved' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('resolved')}
          >
            Resolved
          </button>
        </div>
      </div>

      <div className="feedbacks-grid">
        {feedbacks.length === 0 ? (
          <div className="no-feedbacks">
            <div className="empty-icon">📭</div>
            <h3>No Feedbacks Yet</h3>
            <p>
              {searchTerm || filter !== 'all' 
                ? 'No feedbacks match your search criteria. Try adjusting your filters.' 
                : 'Start collecting valuable customer feedback by sharing your feedback form!'}
            </p>
          </div>
        ) : (
          feedbacks.map(feedback => (
            <FeedbackItem key={feedback.id} feedback={feedback} />
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackList;
