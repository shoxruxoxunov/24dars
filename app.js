const html = document.documentElement;
const modeToggle = document.getElementById("dark-mode");
const checkMode = localStorage.getItem("mode");
const userForm = document.getElementById("user-form");
let API = "https://api.github.com/users/shoxruxoxunov";
const namesEl = document.getElementById("names");
const imgEl = document.getElementById("img");
const followersEl = document.getElementById("followers");
const followingEl = document.getElementById("following");
const gitHubEl = document.getElementById("github");
const locationEl = document.getElementById("location");
const loginEl = document.getElementById("login");
const reposEl = document.getElementById("repos");
const twitterEL = document.getElementById("twitter");
const creatAtEl = document.getElementById("registration");
const bioEl = document.getElementById("bio");

// userForm=================================================
userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputVal = userForm.search.value;

  const getData = async (api) => {
    const req = await fetch(api);
    const data = await req.json();
    return data;
  };

  getData(API);

  API = "https://api.github.com/users/" + inputVal;
  getData(API)
    .then((data) => {
      upDataUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
  getData(API);
});

// userForm-===================================================

// upDataUI------------------------------------------------------------------
function upDataUI(data) {
  console.log(data);
  const {
    bio,
    avatar_url,
    name,
    created_at,
    followers,
    following,
    html_url,
    location,
    login,
    public_repos,
    twitter_username,
  } = data;
  namesEl.textContent = name;
  imgEl.src = avatar_url;
  followersEl.textContent = followers;
  followingEl.textContent = following;
  gitHubEl.href = html_url;
  locationEl.textContent = location;
  loginEl.textContent = login;
  reposEl.textContent = public_repos;
  twitterEL.href = twitter_username;
  creatAtEl.textContent = created_at;
  bioEl.textContent = bio;
}
// updataUI-------------------------------------------------------------------

// dark mode-----------------------------------------------------------------------------
if (checkMode) {
  html.classList.add(checkMode);
  if (html.classList.contains("dark")) {
    modeToggle.textContent = "light";
  } else {
    modeToggle.textContent = "dark";
  }
}

modeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    modeToggle.textContent = "light";

    localStorage.setItem("mode", "dark");
  } else if (html.classList.contains("dark")) {
    modeToggle.innerHTML = `<span class="fa-solid fa-sun"></span>`;
  } else {
    modeToggle.textContent = "dark";
    modeToggle.innerHTML = `<span class="fa-solid fa-moon"></span>`;
    localStorage.setItem("mode", "light");
  }
});
// darkmode---------------------------------------------------------------
