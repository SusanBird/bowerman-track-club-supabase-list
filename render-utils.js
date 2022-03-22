export function renderAthlete(athlete) {

    const athleteEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const careerHighlightsEl = document.createElement('p');
    const yearsWithBTCEl = document.createElement('p');
    const nationalRecordsEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const personalBestsEl = document.createElement('p');

    athleteEl.classList.add('BTC-athlete');

    nameEl.textContent = athlete.name;
    careerHighlightsEl.textContent = athlete.careerHighlights;
    yearsWithBTCEl.textContent = athlete.yearsWithBTC;
    nationalRecordsEl.textContent = athlete.nationalRecords;
    ageEl.textContent = athlete.age;
    personalBestsEl.textContent = athlete.personalBests;

    athleteEl.append(nameEl, careerHighlightsEl, yearsWithBTCEl, nationalRecordsEl, ageEl, personalBestsEl);

    return athleteEl;
}