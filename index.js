
// index.js
/*
    Name: Sean Peters
    Date: November 11, 2024
    Assignment: Node Quote
    File: index.js
*/
// Importing the axios library to make HTTP requests
const axios = require('axios');

// Local array of quotes (I like cartoons!)
const localQuotes = [
  { quote: "I'm ready, I'm ready, I'm ready!" , author: "SpongeBob SquarePants" },
  { quote: "Do it or don't do it, there is no try." , author: "Yoda (Star Wars)" },
  { quote: "Just keep swimming!" , author: "Dory (Finding Nemo)" },
  { quote: "If you're going to fail, fail big, and learn from it." , author: "Wile E. Coyote" },
  { quote: "Sucking at something is the first step to being sorta good at something." , author: "Jake the Dog (Adventure Time)" },
  { quote: "The road to success is paved with a lot of bumps. But you gotta keep on driving." , author: "Fred Flintstone" },
  { quote: "A little bit of courage can take you a long way." , author: "Courage the Cowardly Dog" },
  { quote: "If you get knocked down, just get back up and try again." , author: "Tommy Pickles (Rugrats)" },
  { quote: "Do what makes you happy, and success will follow." , author: "Shaggy Rogers (Scooby-Doo)" },
  { quote: "The greatest victories are often the hardest won." , author: "Spider-Man (Spider-Man: The Animated Series)" },
  { quote: "Every mistake is just a lesson in disguise." , author: "Bugs Bunny" },
  { quote: "Life’s challenges aren’t obstacles; they’re opportunities to grow." , author: "Aang (Avatar: The Last Airbender)" }
];

// Asynchronous function to fetch a motivational quote
async function getQuote() {
  try {
    // Send an asynchronous GET request to the Zen Quotes API to fetch a random motivational quote
    const response = await axios.get('https://zenquotes.io/api/random');
    
    // The API returns a response in an array, and we access the first item to get the quote and author
    const quote = response.data[0].q; // Extracting the quote from the response
    const author = response.data[0].a; // Extracting the author from the response
    
    // Log the quote in a formatted way to the console
    console.log('Here\'s a motivational quote for you:');
    console.log(`"${quote}" - ${author}`);
  } catch (error) {
    // If there is an error localQuotes array selects a random quote   
    const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    
    // Message indicating that the API failed & display the fallback quote
    console.log('Could not fetch a quote. Here\'s a fun backup quote instead:');
    console.log(`"${randomQuote.quote}" - ${randomQuote.author}`);
  }
}

// Call the getQuote function to display a quote
getQuote();
