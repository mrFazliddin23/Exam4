"use strict";
const myApi = "c25a8f5601cd49e18e6f7cd1de59e16c";


async function businessFun() {
    const search = document.querySelector(".form-control").value;
    let url;
    if (search) {
        url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${myApi}`;

        console.log(url);
    } else {
        url = `https://newsapi.org/v2/everything?q=business&apiKey=${myApi}`;
    }

    try {
        const response = await fetch(url);
        const business = document.querySelector(".wrapperCard");
        const data = await response.json();
        business.innerHTML = '';

        data.articles.map((element) => {
            const businessAll = document.createElement("div");
            businessAll.classList.add("sectionPosts_card");

            const businessText = document.createElement("div");

            const picture = document.createElement("img");
            picture.src = element.urlToImage;
            picture.alt = "Businnes picture";
            picture.classList.add("sectionPosts_card-img");
            businessAll.appendChild(picture);

            const author = document.createElement("p");
            author.textContent = element.author;
            author.classList.add("businessText_author");
            businessText.appendChild(author);

            const title = document.createElement("h4");
            title.textContent = element.title;
            title.classList.add("businessText_title");
            businessText.appendChild(title);

            const content = document.createElement("p");
            content.textContent = element.content;
            content.classList.add("businessText_content");
            businessText.appendChild(content);

            businessAll.appendChild(businessText);
            business.appendChild(businessAll);
        });
    } catch (error) {

    }
    const input = document.querySelector('.form-control');
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            businessFun();
        }
    });
}
businessFun()