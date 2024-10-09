const accessKey = "61dGKJslFd_3vQ6WizTD2Pm5eGKeAqdXT4c7FupfOiU";
const searchForm = document.getElementById("searchForm");
const searchBox = document.getElementById("searchBox");
const searchResult = document.getElementById("searchResult");
const showMore = document.getElementById("more");

let keyword = "";
let page = 1;
async function searchImg() {
    keyword = searchBox.value;
    console.log(keyword);

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (page === 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;
    results.map((res) => {
        const image = document.createElement("img");
        image.src = res.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = res.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);

    })
    showMore.style.display = "block";
}
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImg();
})
showMore.addEventListener("click", () => {
    page++;
    searchImg();
})