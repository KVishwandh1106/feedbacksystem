# Setup Instructions for Feedback Management System

## Prerequisites
- Node.js (v14 or higher) installed on your system
- npm (comes with Node.js)

## Installation Steps

### Step 1: Fix PowerShell Execution Policy (Windows Only)

If you encounter the error "running scripts is disabled on this system", run PowerShell as Administrator and execute:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Or, use Command Prompt instead of PowerShell for npm commands.

### Step 2: Install Dependencies

Open Command Prompt (cmd) or PowerShell in the project directory and run:

```bash
cd d:\vishwa
npm install
```

This will install all required dependencies:
- react
- react-dom
- react-router-dom
- react-scripts

### Step 3: Start the Development Server

After installation completes, start the application:

```bash
npm start
```

The application will automatically open in your default browser at `http://localhost:3000`

## Alternative: Using Command Prompt

If PowerShell continues to have issues, use Command Prompt (cmd):

1. Press `Win + R`
2. Type `cmd` and press Enter
3. Navigate to the project directory:
   ```
   cd d:\vishwa
   ```
4. Run the commands:
   ```
   npm install
   npm start
   ```

## Troubleshooting

### Issue: npm command not found
**Solution**: Make sure Node.js is installed and added to your PATH environment variable.

### Issue: Port 3000 already in use
**Solution**: Either stop the process using port 3000, or the app will prompt you to use a different port.

### Issue: Module not found errors
**Solution**: Delete `node_modules` folder and `package-lock.json`, then run `npm install` again.

## Project Structure Verification

After installation, your project structure should look like this:

```
d:\vishwa\
├── node_modules/          (created after npm install)
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── Analytics.css
│   │   │   ├── Analytics.js
│   │   │   ├── Dashboard.css
│   │   │   ├── Dashboard.js
│   │   │   ├── StatsCard.css
│   │   │   └── StatsCard.js
│   │   ├── feedback/
│   │   │   ├── FeedbackForm.css
│   │   │   ├── FeedbackForm.js
│   │   │   ├── FeedbackItem.css
│   │   │   ├── FeedbackItem.js
│   │   │   ├── FeedbackList.css
│   │   │   └── FeedbackList.js
│   │   └── layout/
│   │       ├── Header.css
│   │       ├── Header.js
│   │       ├── Layout.css
│   │       └── Layout.js
│   ├── context/
│   │   └── FeedbackContext.js
│   ├── services/
│   │   └── feedbackService.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── SETUP_INSTRUCTIONS.md
```

## Using the Application

Once the app is running:

1. **Submit Feedback** (Home Page)
   - Fill out the form with your name, email, category, rating, and feedback
   - Click "Submit Feedback"

2. **View Feedbacks** (Navigation Menu)
   - Search and filter feedbacks
   - Change status (Pending → Reviewed → Resolved)
   - Delete feedbacks

3. **Dashboard** (Navigation Menu)
   - View analytics and statistics
   - See category breakdown
   - Monitor rating distribution

## Next Steps

- The app uses localStorage for data persistence
- Sample data is automatically loaded on first visit
- All features work without a backend
- To integrate with a backend API, modify `src/services/feedbackService.js`

## Support

If you encounter any issues:
1. Check that all files are in the correct locations
2. Verify Node.js and npm are properly installed
3. Clear browser cache and localStorage if needed
4. Check the browser console for any error messages

---

**Happy Coding!** 🚀
