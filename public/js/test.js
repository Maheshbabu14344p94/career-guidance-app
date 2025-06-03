// public/js/test.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("aptitudeForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let score = 0;

      const answers = [
        parseInt(form.elements[0].value),
        parseInt(form.elements[1].value),
      ];

      // Sample answers: Q1: 4, Q2: 8
      if (answers[0] === 4) score++;
      if (answers[1] === 8) score++;

      alert(`You scored ${score}/2`);
      window.location.href = "test-completion.html";
    });
  }
});
