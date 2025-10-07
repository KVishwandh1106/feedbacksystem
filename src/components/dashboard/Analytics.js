import React from 'react';
import './Analytics.css';

const Analytics = ({ stats }) => {
  const { categoryBreakdown, ratingDistribution } = stats;

  const getCategoryPercentage = (count) => {
    return stats.total > 0 ? ((count / stats.total) * 100).toFixed(1) : 0;
  };

  return (
    <div className="analytics-container">
      <div className="analytics-section">
        <h3>Feedback by Category</h3>
        <div className="chart-container">
          {Object.entries(categoryBreakdown || {}).map(([category, count]) => (
            <div key={category} className="chart-bar">
              <div className="bar-label">
                <span className="category-name">{category}</span>
                <span className="category-count">{count}</span>
              </div>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  style={{ width: `${getCategoryPercentage(count)}%` }}
                >
                  <span className="bar-percentage">
                    {getCategoryPercentage(count)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
          {Object.keys(categoryBreakdown || {}).length === 0 && (
            <p className="no-data">No category data available</p>
          )}
        </div>
      </div>

      <div className="analytics-section">
        <h3>Rating Distribution</h3>
        <div className="rating-chart">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = ratingDistribution?.[rating] || 0;
            const percentage = getCategoryPercentage(count);
            return (
              <div key={rating} className="rating-row">
                <div className="rating-label">
                  {[...Array(rating)].map((_, i) => (
                    <span key={i} className="star-icon">⭐</span>
                  ))}
                </div>
                <div className="rating-bar-track">
                  <div
                    className="rating-bar-fill"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="rating-count">{count}</span>
              </div>
            );
          })}
          {Object.keys(ratingDistribution || {}).length === 0 && (
            <p className="no-data">No rating data available</p>
          )}
        </div>
      </div>

      <div className="analytics-section">
        <h3>Status Overview</h3>
        <div className="status-overview">
          <div className="status-item">
            <div className="status-circle pending"></div>
            <div>
              <p className="status-label">Pending</p>
              <p className="status-value">{stats.pending}</p>
            </div>
          </div>
          <div className="status-item">
            <div className="status-circle reviewed"></div>
            <div>
              <p className="status-label">Reviewed</p>
              <p className="status-value">{stats.reviewed}</p>
            </div>
          </div>
          <div className="status-item">
            <div className="status-circle resolved"></div>
            <div>
              <p className="status-label">Resolved</p>
              <p className="status-value">{stats.resolved}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
