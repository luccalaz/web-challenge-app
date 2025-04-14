// Authentication middleware (very basic with no proper logging)
function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        next();
    } else {
        // No logging of unauthorized access attempts
        res.redirect('/login');
    }
}

module.exports = { isAuthenticated };