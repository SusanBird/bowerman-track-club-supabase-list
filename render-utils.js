export function renderAthlete(athlete) {

    const athleteEl = document.createElement('a');
    const nameEl = document.createElement('h2');
    const imgEl = document.createElement('img');

    athleteEl.href = `./athletes/?id=${athlete.id}`;
    athleteEl.classList.add('BTC-athlete');
    nameEl.textContent = athlete.name;
    imgEl.src = athlete.img; 

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
    nameEl.textContent = athlete.name;
    imgEl.src = athlete.img; 
    ageEl.textContent = `Age: ${athlete.age}`;
    yearsWithBTCEl.textContent = `Years with BTC: ${athlete.yearsWithBTC}`;

    for (let careerHighlight of athlete.careerHighlights) {
        const careerHighlightEl = document.createElement('li');

        careerHighlightEl.textContent = careerHighlight;

        careerHighlightsEl.append(careerHighlightEl);

        // careerHighlightsEl.textContent = `Career Highlights: ${athlete.careerHighlightsEl}`;
    }

    for (let nationalRecord of athlete.nationalRecords) {
        const nationalRecordEl = document.createElement('li');

        nationalRecordEl.textContent = `National Record: ${nationalRecord}`;

        nationalRecordsEl.append(nationalRecordEl);
    }

    for (let personalBest of athlete.personalBests) {
        const personalBestEl = document.createElement('li');

        personalBestEl.textContent = `- ${personalBest}`;

        personalBestsEl.append(personalBestEl);
    }

    athleteEl.append(nameEl, nameEl, imgEl, ageEl, yearsWithBTCEl, careerHighlightsEl, nationalRecordsEl, personalBestsEl);
    
    return athleteEl;
}