const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const id = 'NfHoW5IBEHjPtrOLd3Xo';
const scorepage = `${url}games/${id}/scores/`;

export const saveScore = async (player, score) => {
  if (player.value && score.value) {
    await fetch(scorepage, {
      method: 'POST',
      body: JSON.stringify({
        user: player.value,
        score: score.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }
};

export const retrieveScore = async () => {
  const response = await fetch(scorepage);
  const retrieved = await response.json();
  return retrieved;
};