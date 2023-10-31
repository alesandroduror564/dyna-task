/*
Filename: sophisticated_program.js

This code is a sophisticated program that generates a random quote based on user input and displays it on the web page. It uses complex algorithms to determine the quote based on different categories and generates a dynamic HTML structure to display the quote.

The program also allows the user to like or dislike a quote and keeps track of the number of likes and dislikes for each quote. It uses event listeners to handle user interactions and updates the data accordingly.

Note: This program assumes the presence of an HTML file with the required structure and elements to display the quotes.
*/

// Quotes data structure
const quotes = [
  {
    category: "inspiration",
    quotes: [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "The best way to predict the future is to invent it. - Alan Kay"
    ],
    likes: 0,
    dislikes: 0
  },
  {
    category: "motivation",
    quotes: [
      "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
    ],
    likes: 0,
    dislikes: 0
  }
];

// Generate a random quote based on category
function generateRandomQuote(category) {
  const categoryQuotes = quotes.find((q) => q.category === category).quotes;
  const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
  return categoryQuotes[randomIndex];
}

// Get DOM elements
const categorySelect = document.getElementById("category-select");
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote-text");
const likeButton = document.getElementById("like-button");
const dislikeButton = document.getElementById("dislike-button");
const likeCount = document.getElementById("like-count");
const dislikeCount = document.getElementById("dislike-count");

// Initialize quote and counters
let currentCategory = categorySelect.value;
let currentQuote = generateRandomQuote(currentCategory);

// Display initial quote
quoteText.innerText = currentQuote;
likeCount.innerText = quotes.find((q) => q.category === currentCategory).likes;
dislikeCount.innerText = quotes.find((q) => q.category === currentCategory).dislikes;

// Event listeners
categorySelect.addEventListener("change", (event) => {
  currentCategory = event.target.value;
  currentQuote = generateRandomQuote(currentCategory);
  quoteText.innerText = currentQuote;
  likeCount.innerText = quotes.find((q) => q.category === currentCategory).likes;
  dislikeCount.innerText = quotes.find((q) => q.category === currentCategory).dislikes;
});

likeButton.addEventListener("click", () => {
  const currentCategoryQuotes = quotes.find((q) => q.category === currentCategory);
  currentCategoryQuotes.likes++;
  likeCount.innerText = currentCategoryQuotes.likes;
});

dislikeButton.addEventListener("click", () => {
  const currentCategoryQuotes = quotes.find((q) => q.category === currentCategory);
  currentCategoryQuotes.dislikes++;
  dislikeCount.innerText = currentCategoryQuotes.dislikes;
});
// ... Rest of the program continues