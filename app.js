let score = 0
let finalScore
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((valuation, index) => {
      const currentValuation = document.getElementById(`valuation${index + 1}`);

      currentValuation.querySelector(".valuation-icon").src = valuation.icon;
      currentValuation.querySelector(".valuation-icon").alt =
        valuation.category;
      currentValuation.querySelector(".category").textContent =
        valuation.category;
      currentValuation.querySelector(".final-score").textContent =
        valuation.score;

      score += valuation.score;
      finalScore = Math.round(score / (index + 1));
      document.querySelector('.circle-big-number').textContent = finalScore;
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });



