const generateBtn = document.querySelector("#generate-btn");
const status = document.querySelector("#status");
const userCard = document.querySelector("#user-card");
const userPhoto = document.querySelector("#user-photo");
const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const userLocation = document.querySelector("#user-location");
const favBtn = document.querySelector("#fav-btn");
const favoritesList = document.querySelector("#favorites-list");

let currentUser = null;
let favorites = [];

async function generateUser() {
  status.textContent = "Loading...";
  status.className = "loading";
  userCard.style.display = "none";

  try {
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json();
    let user = data.results[0];

    currentUser = user;
    displayUser(user);
    status.textContent = "";
  } catch (error) {
    status.textContent = "Failed to load user. Try again.";
    status.className = "error";
  }
}

function displayUser(user) {
  userPhoto.src = user.picture.large;
  userName.textContent = `${user.name.first} ${user.name.last}`;
  userEmail.textContent = `📧 ${user.email}`;
  userLocation.textContent = `📍 ${user.location.city}, ${user.location.country}`;

  userCard.style.display = "block";
  updateFavButton();
}

function updateFavButton() {
  let alreadySaved = favorites.some(fav => fav.email === currentUser.email);
  favBtn.classList.toggle("saved", alreadySaved);
  favBtn.textContent = alreadySaved ? "⭐ Saved!" : "⭐ Save to Favorites";
}

favBtn.addEventListener("click", () => {
  let alreadySaved = favorites.some(fav => fav.email === currentUser.email);

  if (alreadySaved) {
    favorites = favorites.filter(fav => fav.email !== currentUser.email);
  } else {
    favorites.push(currentUser);
  }

  updateFavButton();
  renderFavorites();
});

function renderFavorites() {
  favoritesList.innerHTML = "";

  favorites.forEach((fav) => {
    let li = document.createElement("li");
    li.textContent = `${fav.name.first} ${fav.name.last} - ${fav.email}`;
    favoritesList.appendChild(li);
  });
}

generateBtn.addEventListener("click", generateUser);