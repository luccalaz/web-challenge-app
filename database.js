const Database = require('better-sqlite3');
const bcrypt = require('bcrypt');

// Set up database
const db = new Database('database.db');

// Initialize database tables
function initializeDatabase() {
  // Create users table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `);

  try {
    // Insert a default user for demo purposes
    const hashedPassword = bcrypt.hashSync('password123', 10);
    const insertUser = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
    insertUser.run('demo_user', hashedPassword);
    console.log('Default user created: demo_user / password123');
  } catch (error) {
    console.error('User already exists, skipping creation:', error.message);
  }
}

// Initialize database
initializeDatabase();

module.exports = { db };