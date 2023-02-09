import './style.css';
import renderPage from './modules/innertest.js';
import displayScores from './modules/display.js';
import { saveScore } from './modules/score.js';

window.onload = () => {
  renderPage();
  displayScores();
  const refreshBtn = document.querySelector('#refresh-btn');
  const inputArea = document.querySelector('.input-field');

  refreshBtn.onclick = () => {
    displayScores();
  };

  inputArea.onsubmit = (e) => {
    e.preventDefault();
    const player = document.querySelector('#name-id');
    const score = document.querySelector('#score-area');
    saveScore(player, score);
    inputArea.reset();
    displayScores();
  };
};