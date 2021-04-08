async function dining() {
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
