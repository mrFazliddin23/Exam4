// const myApi = "9ddd1e7928b3458490c6c0c5b618252c";
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9ddd1e7928b3458490c6c0c5b618252c`;

const sectionCard = document.querySelector(".section-card");


async function any3Element() {
    try {
        const responce = await fetch(url);
        const data = await responce.json();
        console.log(data);
        const images = data.articles.slice(6, 9);
        images.map((element) => {
            const card = document.createElement('div');
            card.classList.add('card-body');

            const cardImg = document.createElement('div');
            cardImg.classList.add('cardbox')

            const forSpans = document.createElement('div')
            forSpans.classList.add('forSpans')

            const picture = document.createElement("img");
            picture.classList.add('section-card-img')
            picture.src = element.urlToImage;
            picture.alt = element.author;
            picture.style.marginBottom = '20px'
            cardImg.appendChild(picture);

            const author = document.createElement('span');
            author.textContent = element.author;
            author.style.color = '#592EA9';
            author.style.borderRight = '2px solid #4C4C4C';
            author.style.paddingRight = '10px';
            author.style.marginRight = '10px';
            forSpans.appendChild(author);

            const publishedAt = document.createElement('span')
            publishedAt.textContent = element.publishedAt;
            forSpans.appendChild(publishedAt);

            const title = document.createElement('h3');
            title.textContent = element.title;
            title.style.margin = '20px 0';
            title.classList.add('card-body-title');
            card.appendChild(title);

            const text = document.createElement('p');
            text.textContent = element.content;
            text.classList.add('card-body-text');
            text.style.color = '#232536';
            card.appendChild(text);


            cardImg.appendChild(forSpans)
            sectionCard.appendChild(cardImg);
            cardImg.appendChild(card);



        });

    } catch (error) {
        console.error(error);
    }
}
any3Element()