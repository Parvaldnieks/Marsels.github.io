const response = await fetch("animals.json");
const dzivnieki = await response.json();
console.log(dzivnieki);


const main = document.getElementsById("main");

dzivnieki.forEach((q) => {
    const article = document.createElement("article");
    main.appendChild(article);

    const img = document.createElement("img");
    article.appendChild(img);


}