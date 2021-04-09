/* eslint-disable camelcase */
/* import Macros from '../models/Macros'; */

async function macromeals() {
  const requestdata = await fetch('/api/wholeMeal');
  const macrodata = await requestdata.json();
  const arraydata = macrodata.data;
  const targettable = document.querySelector('.w10');

  arraydata.forEach((element) => {
    console.log(element.macro_id);
    console.log(element.meal_id);
    const appendelement = document.createElement('tr');
    appendelement.innerHTML = `
          <td>${element.macro_id}</td>
          <td>${element.meal_name}</td>
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
  const random_meal = [];
  // eslint-disable-next-line no-plusplus
  for (i = 0; i < 10; i++) {
    const current_random_meal = getRandomnumb(data.length - 1);
    random_meal.push(data[current_random_meal]);
    data.splice(current_random_meal, 1);
  }
  return random_meal;
}

async function dataMacros() {
  const request = await fetch('/api/wholeMeals');
  const api_whole = await request.json();
  const {data} = api_whole;
  const macro_meal_data = [
    {
      type: 'stackedBar',
      name: 'Calories',
      showInLegend: 'true',
      dataPoints: []
    },

    {
      type: 'stackedBar',
      name: 'Serving Size',
      showInLegend: 'true',
      dataPoints: []
    },
    {
      type: 'stackedBar',
      name: 'Cholesterol',
      showInLegend: 'true',
      dataPoints: []
    },
    {
      type: 'stackedBar',
      name: 'Sodium',
      showInLegend: 'true',
      dataPoints: []
    },
    {
      type: 'stackedBar',
      name: 'Carbs',
      showInLegend: 'true',
      dataPoints: []
    },
    {
      type: 'stackedBar',
      name: 'Protein',
      showInLegend: 'true',
      dataPoints: []
    },
    {
      type: 'stackedBar',
      name: 'Fat',
      showInLegend: 'true',
      dataPoints: []
    }
  ];
  console.log(macro_data);
  const random_meals = getrandommeals(api_macro);
  for (i = 0; i < random_meals.length; i++) {
    element = random_meals[i];

    console.log(meal_data);

    macro_meal_data[0].dataPoints.push({ label: element.meal_name, y: element.calories });
    macro_meal_data[1].dataPoints.push({ label: element.meal_name, y: element.serving_size });
    macro_meal_data[2].dataPoints.push({ label: element.meal_name, y: element.cholesterol });
    macro_meal_data[3].dataPoints.push({ label: element.meal_name, y: element.sodium });
    macro_meal_data[4].dataPoints.push({ label: element.meal_name, y: element.carbs });
    macro_meal_data[5].dataPoints.push({ label: element.meal_name, y: element.protein });
    macro_meal_data[6].dataPoints.push({ label: element.meal_name, y: element.fat });
  }

  const chart = new CanvasJS.Chart('chartContainer',
    {
      title: {
        text: 'Meal Macro Information'
      },

      data: macro_meal_data

    });

  chart.render();
}

async function windowActions() {
  console.log('loaded window');
  const data = await macromeals();
  console.table(data);
}

window.onload = windowActions;