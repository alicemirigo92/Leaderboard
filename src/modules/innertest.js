const content = document.getElementById('content');

const page = `
<main>
    <section class="score-display">        
        <div class="top-display">
                <h2>Recent Scores</h2>
                <button type="button" id="refresh-btn">Refresh</button>
        </div>
        <div class="scores-display"></div>
    </section>
    <section class="add-score">
    <h2>Add your score</h2>
    <form class="input-field">
    <input type="text" id="name-id" required placeholder="Your name"/>
    <input type="number" id="score-area" required placeholder="Your score"/>
    <button type="submit" class="submit-Btn">Submit</button>
  </section>
</main>
`;
const renderPage = () => {
  content.insertAdjacentHTML('beforeend', page);
};

export default renderPage;