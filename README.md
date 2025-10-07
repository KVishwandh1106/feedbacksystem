# Feedback Management System

A comprehensive feedback management system built with React that enables businesses to collect, analyze, and act on customer feedback.

## 🌟 Features

- **Customer Feedback Submission**: Easy-to-use form for customers to submit feedback with ratings and categories
- **Feedback Management**: View, filter, and search through all submitted feedbacks
- **Status Tracking**: Track feedback status (Pending, Reviewed, Resolved)
- **Analytics Dashboard**: Visual insights including:
  - Total feedback count
  - Status distribution
  - Average ratings
  - Category breakdown
  - Rating distribution
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Local Storage**: Persistent data storage using browser's localStorage

## 🚀 Technologies Used

- React 18
- React Router DOM v6
- Context API for state management
- CSS3 with modern styling
- LocalStorage for data persistence

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Start the development server**:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Layout.js
│   │   └── Layout.css
│   ├── feedback/
│   │   ├── FeedbackForm.js
│   │   ├── FeedbackForm.css
│   │   ├── FeedbackList.js
│   │   ├── FeedbackList.css
│   │   ├── FeedbackItem.js
│   │   └── FeedbackItem.css
│   └── dashboard/
│       ├── Dashboard.js
│       ├── Dashboard.css
│       ├── Analytics.js
│       ├── Analytics.css
│       ├── StatsCard.js
│       └── StatsCard.css
├── context/
│   └── FeedbackContext.js
├── services/
│   └── feedbackService.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## 🎯 Usage

### Submit Feedback
1. Navigate to the home page
2. Fill in your name, email, select a category
3. Rate your experience (1-5 stars)
4. Write your feedback
5. Click "Submit Feedback"

### View Feedbacks
1. Click on "View Feedbacks" in the navigation
2. Use the search box to find specific feedbacks
3. Filter by status (All, Pending, Reviewed, Resolved)
4. Click "Actions" on any feedback to change its status or delete it

### Analytics Dashboard
1. Click on "Dashboard" in the navigation
2. View key metrics and statistics
3. Analyze feedback by category and rating distribution
4. Monitor status overview

## 🎨 Features in Detail

### Feedback Form
- Name and email validation
- Star rating system (1-5)
- Category selection (Product, Service, Support, Website, Other)
- Text area for detailed feedback
- Success message on submission

### Feedback List
- Real-time search functionality
- Status-based filtering
- Responsive card layout
- Action menu for status updates
- Delete functionality with confirmation

### Dashboard
- Statistics cards showing key metrics
- Category breakdown with visual bars
- Rating distribution chart
- Status overview with color coding

## 🔧 Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

## 🌐 Future Enhancements

- Backend API integration
- User authentication
- Email notifications
- Export feedback to CSV/PDF
- Advanced analytics with charts
- Feedback response system
- Multi-language support
- Real-time updates with WebSockets

## 📝 Notes

- All feedback data is stored in browser's localStorage
- Sample data is automatically loaded on first visit
- The system is fully functional without a backend
- To integrate with a backend, update the `feedbackService.js` file

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

MIT License

## 👨‍💻 Author

Created for customer feedback management

---

**Enjoy using the Feedback Management System!** 🎉
