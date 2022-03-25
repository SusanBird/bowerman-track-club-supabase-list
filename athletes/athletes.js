import { getAthleteById } from '../fetch-utils.js';
import { renderAthleteDetail } from '../render-utils.js';

const athleteDetailEl = document.querySelector('.athlete-detail');

window.addEventListener('load', async () => {

    const data = new URLSearchParams(window.location.search);
    const athleteId = data.get('id');
    
    const athlete = await getAthleteById(athleteId);

    const athleteEl = renderAthleteDetail(athlete);

    athleteDetailEl.append(athleteEl);
});