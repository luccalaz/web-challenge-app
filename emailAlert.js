const nodemailer = require('nodemailer');
const logger = require('./logger');

// Function to send email alerts
async function sendAlertEmail(subject, message) {
    try {
        // Create test account (in a real app, you'd use your actual SMTP credentials)
        const testAccount = await nodemailer.createTestAccount();

        // Create reusable transporter using ethereal (fake SMTP for local testing)
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // no SSL for demo purposes
            auth: {
                user: testAccount.user,
                pass: testAccount.pass
            }
        });

        // Set up email options
        const mailOptions = {
            from: '"Security Monitor" <security@demo.com>',
            to: 'admin@example.com', // In production, use actual admin email
            subject: `ALERT: ${subject}`,
            text: message,
            html: `<p>${message}</p>`
        };

        // Send mail
        const info = await transporter.sendMail(mailOptions);

        // No logging of alert email here

        return true;
    } catch (error) {
        logger.error('Failed to send alert email', { error });
        return false;
    }
}

module.exports = { sendAlertEmail };