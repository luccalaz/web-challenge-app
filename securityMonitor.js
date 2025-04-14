const logger = require('./logger');
const { sendAlertEmail } = require('./emailAlert');

// Store suspicious activity data
const failedLogins = {}; // Track failed login attempts by IP

// Monitor failed login attempts
function monitorFailedLogin(username, ipAddress) {
    logger.warn('Failed login attempt', { username, ipAddress });

    // Initialize tracking for new IP addresses
    if (!failedLogins[ipAddress]) {
        failedLogins[ipAddress] = { count: 0, timestamps: [] };
    }

    // Update failed login data
    failedLogins[ipAddress].count++;
    failedLogins[ipAddress].timestamps.push(new Date());

    // Send alert if threshold reached
    if (failedLogins[ipAddress].count === 3) {
        const message = `Multiple failed logins for ${username} from ${ipAddress}`;
        logger.error(message);
        sendAlertEmail('Multiple failed login attempts', message);
    }
}

// Export monitoring functions
module.exports = { monitorFailedLogin };