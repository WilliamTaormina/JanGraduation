
const createWeatherHTML = (currentDay) => {
  return `<h2> High: ${currentDay.day.maxtemp_f}</h2>
    <h2> Low: ${currentDay.day.mintemp_f}</h2>
    <img src="https://${currentDay.day.condition.icon}" class="weathericon" />
    <h2>${weekDays[(new Date(currentDay.date)).getDay()]}</h2>`;
}