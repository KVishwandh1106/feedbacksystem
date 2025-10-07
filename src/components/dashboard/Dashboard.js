import React from 'react';
import { useFeedback } from '../../context/FeedbackContext';
import StatsCard from './StatsCard';
import Analytics from './Analytics';
import './Dashboard.css';

const Dashboard = () => {
  const { getStatistics } = useFeedback();
  const stats = getStatistics();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Analytics Dashboard</h2>
        <p>Overview of customer feedback and insights</p>
      </div>

      <div className="stats-grid">
        <StatsCard
          title="Total Feedbacks"
          value={stats.total}
          icon="📊"
          color="#0891b2"
        />
        <StatsCard
          title="Pending"
          value={stats.pending}
          icon="⏳"
          color="#f59e0b"
        />
        <StatsCard
          title="Reviewed"
          value={stats.reviewed}
          icon="👁️"
          color="#3b82f6"
        />
        <StatsCard
          title="Resolved"
          value={stats.resolved}
          icon="✅"
          color="#10b981"
        />
        <StatsCard
          title="Average Rating"
          value={`${stats.avgRating}/5`}
          icon="⭐"
          color="#f59e0b"
        />
      </div>

      <Analytics stats={stats} />
    </div>
  );
};

export default Dashboard;
