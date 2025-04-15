# Web Security Logging Challenge

## Challenge Description
As we discussed during my presentation, security logging is crucial for monitoring, debugging, and analysis after an incident. This application consists of a simple login screen and protected page, similar to the ones you saw in the demo, but at least 3 key security events are not being logged properly.

### Your Tasks:

1. **Identify Missing Logs**: Find 3 places in the codebase where security-relevant events are happening but not being logged.

2. **Implement Logging**: Add proper logging using the Winston logger (`logger.js`) that's already set up in the project.

3. **Test Your Implementation**: Trigger the events you've added logging for, and verify that they appear in both the console and the log files.

4. **Submit Evidence**: Send screenshots showing the 3 missing logs working in the console to me via Teams or email (W0487300@nscc.ca).

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the application: `npm start` or `npm run dev` for dev mode
4. Access the application at http://localhost:3000

## Hints

- Common places to add logging include authentication attempts, access control checks, and critical alerts that are being sent
- The Winston logger is already configured to output to both console and files
- Use `logger.info()`, `logger.warn()`, or `logger.error()` depending on the severity

Good luck with the challenge!