// Page Elements
const $input = $("#city");
const $submit = $("#button");
const $destination = $("#destination");
const $container = $(".container");

const $weatherDivs = [
  $("#purse1"),
  $("#purse2"),
  $("#purse3"),
  $("#purse4")
];
const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];


async function getForecast() {
  const urlToFetch =
    "https://api.airtable.com/v0/appPBOnBYNPJL0jed/bags?api_key=key3gP34a7zvEJmmf";
  try {
    let response = await fetch(urlToFetch);

    if (response.ok) {
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let days = jsonResponse.records;
      return days;
      console.log(days)
    }
  } catch (error) {}
}


function renderForecast(days) {
  $weatherDivs.forEach(($day, index) => {
    let weatherContent =
      "<h2>" + days[index].fields.bagName + "</h2>" +
      "<h3>" + days[index].fields.bagDescription + "</h3>" +  
      "<img src=" + days[index].fields.bagImage[0].url + " " + "width=100% height=100%>" +
      "<h2>" + "$" + days[index].fields.bagCost + "</h2>";
        
    $day.append(weatherContent);
  });
}

function executeSearch() {
  $weatherDivs.forEach(day => day.empty());
  $destination.empty();
  $container.css("visibility", "visible");
  getForecast().then(forecast => renderForecast(forecast));
  return false;
}

$submit.click(executeSearch);