async function macromeals() {
  const requestdata = await fetch('/api/macros');
  const macrodata = await requestdata.json();
  const arraydata = macrodata.data;
  console.log(arraydata);
  console.table(macrodata);
  const targettable = document.querySelector('.table');

  arraydata.forEach((element) => {
    console.log(element.macro_id);
    console.log(element.meal_id);
    const appendelement = document.createElement('tr');
    appendelement.innerHTML = `
          <td>${element.macro_id}</td>
          <td>${element.meal_id}</td>
          <td>${element.calories}</td>
          <td>${element.carbs}</td>
          <td>${element.sodium}</td>
          <td>${element.protein}</td>
          <td>${element.fat}</td>
          <td>${element.cholesterol}</td>
      </tr>
  `;
    targettable.append(appendelement);
  });
}

function getRandomnumb(max) {
  return Math.floor(Math.random() * max);
}

function getrandommeals(data) {
  // eslint-disable-next-line camelcase
  const random_meal = [];
  for (i = 0; i < 10; i++) {
    const current_random_meal = getRandomnumb(data.length - 1);
    random_meal.push(data[current_random_meal]);
    data.splice(current_random_meal, 1);
  }
  return random_meal;
}

async function windowActions() {
  console.log('loaded window');
  const data = await macromeals();
  console.table(data);
}

window.onload = windowActions;


/*
async function dataHandlerMacros(){ 
    const request = await fetch('/api/macros'); 
    const api_macro = await request.json(); 
    const data = api_macro.data;
        let macro__and_meal_data =[
      {
        type: "stackedBar",
        name: "Calories",
        showInLegend: "true",
        dataPoints: []
      },

      {
        type: "stackedBar",
        name: "Serving Size",
        showInLegend: "true",
        dataPoints: []
      },
      {
        type: "stackedBar",
        name: "Cholesterol",
        showInLegend: "true",
        dataPoints: []
      },
      {
        type: "stackedBar",
        name: "Sodium",
        showInLegend: "true",
        dataPoints: []
      },
      {
        type: "stackedBar",
        name: "Carbs",
        showInLegend: "true",
        dataPoints: []
      },
      {
        type: "stackedBar",
        name: "Protein",
        showInLegend: "true",
        dataPoints: []
      },
      {
        type: "stackedBar",
        name: "Fat",
        showInLegend: "true",
        dataPoints: []
      },
    ]


      let random_meals = getrandommeals(api_macro);
      for(i =0; i < random_meal_list.length; i++){
      element = random_meals[i]
