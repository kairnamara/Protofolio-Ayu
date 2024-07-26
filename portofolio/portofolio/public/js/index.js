const cards = [
  {
    image: "./public/img/p1.png",
    title: "Project",
    link: "https://example.com/page1",
  },
  {
    image: "./public/img/p2.png",
    title: "Project",
    link: "https://example.com/page2",
  },
  {
    image: "./public/img/p3.png",
    title: "Project",
    link: "https://example.com/page3",
  },
  {
    image: "./public/img/p4.png",
    title: "Project",
    link: "https://example.com/page4",
  },
];

const cardContainer = document.getElementById("card-container");

cards.forEach((card) => {
  const colDiv = document.createElement("div");
  colDiv.className = "col";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card h-100 text-black bg-white";

  const cardImg = document.createElement("img");
  cardImg.src = card.image;
  cardImg.className = "card-img-top p-3 rounded";
  cardImg.alt = card.title;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title text-dark";

  const titleLink = document.createElement("a");
  titleLink.textContent = card.title;
  titleLink.href = card.link;
  titleLink.style.textDecoration = "none";
  titleLink.style.color = "#35485e";

  cardTitle.appendChild(titleLink);
  cardBody.appendChild(cardTitle);
  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardBody);
  colDiv.appendChild(cardDiv);
  cardContainer.appendChild(colDiv);
});


