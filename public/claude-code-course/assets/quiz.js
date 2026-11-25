// Quiz-Komponente für alle Lektionen.
// Markup: <div class="quiz" data-answer="2" data-why="Erklärung">
//           <p class="q">Frage</p>
//           <ol><li><button>A</button></li>...</ol>
//         </div>
// data-answer ist 1-basiert. Falsche Antworten werden gestrichen, man darf
// weiter raten; gezählt wird nur der erste Versuch (Abruf, nicht Raten).
// Optional: <p class="score" id="score"></p> zeigt den Stand.
(function () {
  const quizzes = Array.from(document.querySelectorAll('.quiz'));
  let firstTryRight = 0;
  let done = 0;

  function updateScore() {
    const el = document.getElementById('score');
    if (!el) return;
    el.textContent = done < quizzes.length
      ? `${done} von ${quizzes.length} beantwortet`
      : `Fertig: ${firstTryRight} von ${quizzes.length} beim ersten Versuch richtig.`;
  }

  quizzes.forEach((quiz, qi) => {
    const answer = Number(quiz.dataset.answer);
    const buttons = Array.from(quiz.querySelectorAll('button'));
    const q = quiz.querySelector('.q');
    if (q && !q.querySelector('.n')) {
      const n = document.createElement('span');
      n.className = 'n';
      n.textContent = `${qi + 1}.`;
      q.prepend(n);
    }
    const fb = document.createElement('p');
    fb.className = 'fb';
    fb.setAttribute('aria-live', 'polite');
    quiz.appendChild(fb);
    let tries = 0;

    buttons.forEach((btn, i) => {
      btn.type = 'button';
      btn.addEventListener('click', () => {
        tries += 1;
        if (i + 1 === answer) {
          btn.classList.add('right');
          buttons.forEach((b) => { b.disabled = true; });
          fb.className = 'fb right';
          fb.textContent = (tries === 1 ? 'Richtig. ' : 'Jetzt richtig. ') + (quiz.dataset.why || '');
          if (tries === 1) firstTryRight += 1;
          done += 1;
          updateScore();
        } else {
          btn.classList.add('wrong');
          btn.disabled = true;
          fb.className = 'fb wrong';
          fb.textContent = 'Nicht ganz. Denk an die Regel oben und versuch es nochmal.';
        }
      });
    });
  });
  updateScore();
})();
