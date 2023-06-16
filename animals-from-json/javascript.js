const response = await fetch("animals.json");
const dzivnieki = await response.json();
console.log(dzivnieki);


const main = document.getElementById("main");

dzivnieki.forEach((dzivnieks) => {
    const article = document.createElement("article");
    main.appendChild(article);

    const img = document.createElement("img");
    img.src = dzivnieks["image"];
    article.appendChild(img);

    const div = document.createElement("div");
    div.className = "info";
    article.appendChild(div);

    const h2 = document.createElement("h2");
    div.appendChild(h2);
    h2.textContent = dzivnieks["animal"];

    const p = document.createElement("p");
    div.appendChild(p);
    p.textContent = dzivnieks["description"];

    const ul = document.createElement("ul");
    div.appendChild(ul);



    dzivnieks["answers"].forEach((answer) => {
        const li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = answer;
    });
});