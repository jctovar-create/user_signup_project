CREATE TABLE users
    (
        email VARCHAR(255) PRIMARY KEY,
        created_at TIMESTAMP DEFAULT NOW()
    );
    
INSERT INTO users (email)
    VALUES 
        ("Katie34@yahoo.com"),
        ("Tunday@gmail.com");
        
CREATE TABLE comments 
    (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        text VARCHAR(255)
    );
    
INSERT INTO comments (text)
    VALUES
        ("This looks great!"),
        ("Amazing!"),
        ("Wow! Where can I do this?");

CREATE TABLE songs 
    (
        name VARCHAR(255)
    );
    
INSERT INTO songs (name)
    VALUES
        ("Chicken Fried"),
        ("Motivation"),
        ("Bye Bye Bye"),
        ("Counting on You"),
        ("Know a Mother's Love");
        
CREATE TABLE names 
    (
        name VARCHAR(255)
    );
    
INSERT INTO names (name)
    VALUES
        ("Aldo"),
        ("Franklin"),
        ("Tate"),
        ("Nilla"),
        ("Nico");


/* EXERCISES

FIND EARLIEST DATE A USER JOINED 

SELECT created_at AS "earliest_date"
FROM users
ORDER BY created_at
LIMIT 1;

FIND EMAIL OF EARLIEST USER

SELECT email, created_at AS "earliest_date"
FROM users
ORDER BY created_at
LIMIT 1;

GROUP USERS ACCORDING TO THE MONTH THEY JOINED

SELECT MONTHNAME(created_at) AS month, COUNT(created_at) AS count
FROM users
GROUP BY month
ORDER BY count DESC;

SHOW HOW MANY USERS ARE Yahoo Users

SELECT COUNT(*) AS yahoo_users
FROM users
WHERE email LIKE '%@yahoo.com%';

CALCULATE TOTAL NUMBER OF USERS FOR EACH EMAIL HOST

SELECT 
   CASE
        WHEN email LIKE '%gmail.com' THEN "gmail"
        WHEN email LIKE '%yahoo.com' THEN "yahoo"
        WHEN email LIKE '%hotmail.com' THEN "hotmail"
        ELSE "other"
   END AS provider,
   COUNT(*) AS Total_Users
FROM users
GROUP BY provider
ORDER BY Total_Users DESC;



*/