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


async function windowActions() {
  console.log('loaded window');
  const data = await dining();
  console.table(data);
}

window.onload = windowActions;
