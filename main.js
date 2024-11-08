let quote = document.getElementById("quote");
let author = document.getElementById("author");
const categoryBtn = document.getElementById("categoryBtn");
const categoryCard = document.getElementById('category-card');
const categoryOptions = document.getElementById('options')
const closeBtn = document.getElementById('close-button')




fetchQuote();
async function fetchQuote() {
  try {
    const quoteResponse = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: { "X-Api-Key": "RDAO/TilqpVCwxRYFvM0hQ==1C1HtbiAmZwfT1Z1" },
      contentType: "application/json",
    });

    const quoteData = await quoteResponse.json();

    quote.textContent = `“${quoteData[0].quote}”`;
    author.textContent = `- ${quoteData[0].author}`;
  } catch (error) {
    console.log(error);
  }
}

async function fetchQuoteCategory(userCategory) {
  categoryCard.classList.toggle("hidden");
  try {
    const quoteResponse = await fetch(
      `https://api.api-ninjas.com/v1/quotes?category=${userCategory}`,
      {
        headers: { "X-Api-Key": "RDAO/TilqpVCwxRYFvM0hQ==1C1HtbiAmZwfT1Z1" },
        contentType: "application/json",
      }
    );

    const quoteData = await quoteResponse.json();

    quote.textContent = `“${quoteData[0].quote}”`;
    author.textContent = `- ${quoteData[0].author}`;
  } catch (error) {
    console.log(error);
  }
}

categoryBtn.addEventListener("click", () => {
  categoryCard.classList.toggle('hidden')
});


closeBtn.addEventListener('click', () => {
  categoryCard.classList.toggle('hidden')
})



const categoryArr = [
  "age",
  "alone",
  "anger",
  "art",
  "attitude",
  "beauty",
  "business",
  "change",
  "communication",
  "courage",
  "dating",
  "death",
  "dreams",
  "education",
  "equality",
  "experience",
  ,
  "failure",
  "faith",
  "family",
  "fear",
  "fitness",
  "freedom",
  "freindship",
  "god",
  "happiness",
  "health",
  "home",
  "hope",
  "humor",
  "imagination",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "love",
];

let categoryHTML = "";

function renderCategories() {
  categoryArr.forEach((category) => {
    categoryHTML += `<li onclick="fetchQuoteCategory('${category}')">${category}</li>
                      <div class="categoryLine"></div>`;

    categoryOptions.innerHTML = categoryHTML;
    
  });
}

renderCategories();
