const quotes = [
{
    quote: "When you have faults, do not fear to abandon them.",
    author: "Confucius",
},
{
    quote:"They must often change who would be constant in happiness or wisdom.",
    author: "Confucius",
},
{
    quote:"Age is no guarantee of maturity.",
    author:"Lawana Blackwell",
},
{
    quote:"Youth isn’t always all it’s touted to be",
    author:"Lawana Blackwell"
},
{
    quote:"You will face many defeats in life, but never let yourself be defeated. ",
    author:"Maya Angelou",
},
{
    quote:"Life is either a daring adventure or nothing at all.",
    author:"Helen Keller"
},
{
    quote:"This too shall pass.",
    author:"Et hoc transibit",
},
{
    quote:"The die is cast.",
    author:"Julius caesar",
},
{
    quote:"Only I can change me life, no one can do it for me. ",
    author:"Carol Burnett",
},
{
    quote:"Life is unfair, get used to it.",
    author:" Bill Gates",
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()* quotes.length)];
quote.innerText = `"${todayQuote.quote}" `;
author.innerText = todayQuote.author;

