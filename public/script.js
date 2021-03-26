async function dining() {
  const requestdata = await fetch('/api/macros');
  const diningdata = await requestdata.json();
  const arraydata = diningdata.data;
  console.log(arraydata);
  console.table(diningdata);
  const targettable = document.querySelector('.tbody');

  arraydata.forEach((element) => {
    console.log(element.macro_id);
    console.log(element.hall.name_id);
    const appendelement = document.createElement('tr');
    const target = document.querySelector('#target');
    const {mealID} = element.macro_id;
    const {calories} = element.calories;
    const {carbs} = element.carbs;
    const {sodium} = element.sodium;
    const {protein} = element.protein;
    const {fat} = element.fat;
    const {chloresterol} = element.cholesterol;
    const {name} = element.meal_id;
    appendelement.innerHTML = `
          <td>${mealID}</td>
          <td>${name}</td>
          <td>${calories}</td>
          <td>${carbs}</td>
          <td>${sodium}</td>
          <td>${protein}</td>
          <td>${fat}</td>
          <td>${chloresterol}</td>
      </tr>
  `;
    targettable.append(appendelement);
  });
}

async function windowActions() {
  console.log('loaded window');
  const data = await dining();
  console.table(data);
}

window.onload = windowActions;

/*
"macro_id":1,"calories":218,"serving_size":20,"cholesterol":544,"sodium":206,"carbs":1,"protein":17,"meal_id":1,"fat":16},
*/