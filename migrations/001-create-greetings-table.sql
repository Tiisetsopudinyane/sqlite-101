CREATE TABLE greetings(
 id integer PRIMARY KEY AUTOINCREMENT,
 language text UNIQUE,
greeting text
);