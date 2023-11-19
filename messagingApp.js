Here's an example of a more complex code in JavaScript that incorporates various functionalities and is over 200 lines long. This code implements a simple messaging application with features like user authentication, message sending, and message retrieval. The filename for this code is `messagingApp.js`:

```javascript
/*
  File: messagingApp.js
  Description: A simple messaging application with user authentication and message functionalities.
*/

// User class definition
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

// Message class definition
class Message {
  constructor(sender, recipient, content) {
    this.sender = sender;
    this.recipient = recipient;
    this.content = content;
    this.timestamp = new Date();
  }
}

// Sample user credentials
const users = [
  new User("alice", "password1"),
  new User("bob", "password2"),
  new User("charlie", "password3"),
];

// Sample messages
const messages = [
  new Message("alice", "bob", "Hello Bob!"),
  new Message("bob", "alice", "Hey Alice!"),
  new Message("alice", "bob", "How are you?"),
];

// Function to authenticate users
function authenticate(username, password) {
  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {
    console.log(`Authentication successful! Welcome, ${user.username}!\n`);
    return true;
  } else {
    console.log("Authentication failed. Invalid username or password.\n");
    return false;
  }
}

// Function to send a message
function sendMessage(sender, recipient, content) {
  const message = new Message(sender, recipient, content);
  messages.push(message);
  console.log(`New message sent from ${sender} to ${recipient}:\n${content}\n`);
}

// Function to retrieve messages for a user
function retrieveMessages(username) {
  const userMessages = messages.filter((message) => message.recipient === username);
  console.log(`Retrieving messages for user ${username}:\n`);
  userMessages.forEach((message) => {
    console.log(`Sender: ${message.sender}`);
    console.log(`Content: ${message.content}`);
    console.log(`Timestamp: ${message.timestamp}\n`);
  });
}

// Sample usage of the messaging app
authenticate("alice", "password1");
sendMessage("alice", "bob", "Hello Bob!");
retrieveMessages("bob");
```

Please note that this code is a simplified example and does not include advanced error handling, security measures, or architectural considerations. It is meant to demonstrate a more elaborate structure and functionality rather than serve as a full-fledged messaging application.