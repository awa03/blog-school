function removeAdblock() {
  const div = document.getElementById("cantStopModal");
  div.classList.remove("hidden");
}

function exitModal(){
  const div = document.getElementById("cantStopModal");
  div.classList.add("hidden");
}

const ads = [
  {
    title: "Meet singles in your area!",
    body: "They're only 2 miles away and love programming.",
    link: "https://example.com"
  },
  {
    title: "You won't believe what this AI did...",
    body: "It wrote code, cooked dinner, and took over the world.",
    link: "https://example.com"
  },
  {
    title: "Tired of real ads?",
    body: "Try fake ads instead. 100% stress-free.",
    link: "https://example.com"
  },
  {
    title: "Lose 50lbs of JavaScript instantly",
    body: "Switch to Rust. Doctors hate this one simple trick.",
    link: "https://rust-lang.org"
  },
  {
    title: "Download more RAM",
    body: "Why buy it when you can just download it? Click now.",
    link: "https://downloadmoreram.com"
  },
  {
    title: "You've been selected!",
    body: "To close this ad. Please do so responsibly.",
    link: "https://example.com"
  },
  {
    title: "Make your terminal sexy",
    body: "One font, one config file, and zero productivity.",
    link: "https://www.nerdfonts.com/"
  },
  {
    title: "This startup raised $1B to reinvent the wheel",
    body: "But this time... it's in the cloud.",
    link: "https://example.com"
  },
  {
    title: "Become a blockchain millionaire overnight",
    body: "Step 1: Create a coin. Step 2: Rug pull. Step 3: ??",
    link: "https://example.com"
  },
  {
    title: "AI thinks you're hot",
    body: "Click to find out which neural net fell for you.",
    link: "https://example.com"
  }
];

const adBox = document.getElementById("ad-box");
let currentAd = 0;

function displayAd() {
  const ad = ads[currentAd];
  adBox.innerHTML = `
<p class="text-xs text-gray-500">Ad · Sponsored</p>
<h3 class="font-bold text-lg">${ad.title}</h3>
<p>${ad.body}</p>
<a href="${ad.link}" target="_blank" class="text-blue-600 underline">Learn more</a>
`;
  currentAd = (currentAd + 1) % ads.length;
}

displayAd();
