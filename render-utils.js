export function renderAthlete(athlete) {

    const athleteEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const imgEl = document.createElement('img');

    athleteEl.href = `./athletes/?id=${athlete.id}`;
    athleteEl.classList.add('BTC-athlete');
    nameEl.textContent = athlete.name;
    imgEl.src = athlete.image; //name of table instead?

    athleteEl.append(nameEl, imgEl);

    return athleteEl;
}

export function renderAthleteDetail(athlete) {
    const athleteEl = document.createElement('div');
    const nameEl = document.createElement('h1');
    const imgEl = document.createElement('img');
    const ageEl = document.createElement('p');
    const yearsWithBTCEl = document.createElement('p');
    const careerHighlightsEl = document.createElement('ul');
    const nationalRecordsEl = document.createElement('ul');
    const personalBestsEl = document.createElement('ul');

    athleteEl.classList.add('BTC-athlete-detail');
    nameEl.textContent = athlete.flavor;
    imgEl.src = athlete.image; //name of table instead?
    ageEl.textContent = athlete.age;
    yearsWithBTCEl.textContent = athlete.yearsWithBTC;
    // careerHighlightsEl.textContent = athlete.careerHighlights;
    // nationalRecordsEl.textContent = athlete.nationalRecords;
    // personalBestsEl.textContent = athlete.personalBests;

    for (let careerHighlight of athlete.careerHighlights) {
        const careerHighlightEl = document.createElement('li');

        careerHighlightEl.textContent = careerHighlight;

        careerHighlightsEl.append(careerHighlightEl);
    }

    for (let nationalRecord of athlete.nationalRecords) {
        const nationalRecordEl = document.createElement('li');

        nationalRecordEl.textContent = nationalRecord;

        nationalRecordsEl.append(nationalRecordEl);
    }

    for (let personalBest of athlete.personalBests) {
        const personalBestEl = document.createElement('li');

        personalBestEl.textContent = personalBest;

        personalBestsEl.append(personalBestEl);
    }

    athleteEl.append(nameEl, nameEl, imgEl, ageEl, yearsWithBTCEl, careerHighlightsEl, nationalRecordsEl, personalBestsEl);
    
    return athleteEl;
}