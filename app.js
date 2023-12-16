fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((valuation, index) => {
      const currentValuation = document.getElementById(`valuation${index + 1}`);

      currentValuation.querySelector(".valuation-icon").src = valuation.icon;
      currentValuation.querySelector(".valuation-icon").alt = valuation.category;
      currentValuation.querySelector(".category").textContent =
        valuation.category;
      currentValuation.querySelector(".final-score").textContent =
        valuation.score;
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
