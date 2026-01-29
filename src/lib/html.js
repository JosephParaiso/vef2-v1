export function generateIndexHtml() {

  const html = /* HTML */ `
      <html>
      <head>
        <script src="scripts.js" type="module"></script>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <h1>Spurningaleikur!</h1>
        <p>Velkomin velkomin! Veldu flokk til að svara spurningum í:</p>
        <ul>
  <li><a href="almenntQ3.html">Almennt</a></li>
  <li><a href="visindiQ3.html">Náttúru og vísindi</a></li>
  <li><a href="bokmenntirQ3.html">Bókmenntir og listir</a></li>
  <li><a href="sagaQ3.html">Saga</a></li>
  <li><a href="landafraediQ3.html">Landafræði</a></li>
  <li><a href="skemmtunQ3.html">Skemmtun og afþrying</a></li>
  <li><a href="itrottirQ3.html">Íþróttir og tómstundir</a></li>
</ul>
      </body>
    </html>`;

  return html
}

export function generateQuestionHtml(q) {
  const html = /* HTML */ ` <section class="question" data-answered="false">
    <h3>${q.question}</h3>
    <p class="hidden">${q.answer}</p>
    <button type="button" class="button button-correct hidden">Rétt 🫡</button>
    <button type="button" class="button button-incorrect hidden">Rangt 🥹</button>
  </section>`;

  return html;
}

export function generateQuestionCategoryHtml(title, questionsHtml) {
  const html = /* HTML */ `
    <html>
      <head>
        <script src="scripts.js" type="module"></script>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <h1>Spurningaleikur!</h1>
        <p><a href="index.html">Til baka</a></p>
        <div class="counter">
          <div class="correct">0</div>
          <div class="incorrect">0</div>
        </div>
        <div class="questions">
        <h2>${title}</h2>${questionsHtml}</div>
      </body>
    </html>
  `;

  return html;
}
