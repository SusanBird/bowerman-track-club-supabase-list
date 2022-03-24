// import functions and grab DOM elements
import { getAllAthletes } from './fetch-utils.js';
import { renderAthlete } from './render-utils.js';
// let state

const athletesListEL = document.querySelector('.athletes-list');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

window.addEventListener('load', async () => {

    const athletes = await getAllAthletes();
    for (let athlete of athletes) {

        const athleteEl = renderAthlete(athlete);

        athletesListEL.append(athleteEl);
    }
});

