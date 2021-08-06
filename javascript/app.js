const container = document.getElementById("container"),
  numberOfCards = 16,
  cards = [];
let previousShownCard = undefined,
  icons = [
    "book",
    "air-freshener",
    "palette",
    "mug-hot",
    "coins",
    "igloo",
    "cog",
    "life-ring",
  ];

// copy the icons again using;
icons.push(...icons);

for(let i = 0; i < 100; i++){
  const index = Math.floor(Math.random() * icons.length);
  const index2 = Math.floor(Math.random() * icons.length);
  
  const temp = icons[index];
  icons[index] = icons[index2];
  icons[index2] = temp;
};

for (let i = 0; i < numberOfCards; i++) {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardEl.innerHTML = `
                <div class="front">
                  <i class="fas fa-${icons[i]}"></i>
                </div>
                <div class="back select-none">
                 <small class="text-lg font-semibold tracking-wide">Click me</small>
                </div>
                `;

  cardEl.addEventListener("click", () => {
    if (!cardEl.classList.contains("show")) {
      cardEl.classList.add("show");
    }

    if(!previousShownCard){
      previousShownCard = cardEl;
    }else {
      const iconOne = previousShownCard.querySelector("i").classList[1];
      
      const iconTwo = cardEl.querySelector("i").classList[1];
      if(iconOne !== iconTwo) {
        const temp = previousShownCard;
        setTimeout(() => {
          temp.classList.remove("show");
          cardEl.classList.remove("show");
        }, 1000);
      }
      previousShownCard= undefined;
    }

  });
  cards.push(cardEl);
  container.appendChild(cardEl);
}
