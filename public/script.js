async function dining() {
  const requestdata = await fetch("/api/dining");
  const diningdata = await requestdata.json();
  console.log(diningdata);
  console.table(diningdata);
}

/*
  diningdata.forEach((item) => {
    const appendItem = document.createElement('div');
    appendItem.classList.add('title', 'has-text-centered', 'is-parent', 'is-3');
    appendItem.innerHTML = `
      <article class="title is-child box has-background-link-dark" >
      <span class ="subtitle has-text-light has-text-weight-bold">
          ${item.hall_name}</span>
        <br />
        <span class "has-text-light">
          ${item.hall_address.split(',')[0]}
        </span>
        <br/>
        <span class ="has-text-light">
          ${item.hall_address.split(',')[1]}
        </span>
        </article>`;
    targetBox.append(appendItem);
    

    TEACHER WAY ABOVE
    const target = document.querySelector('#target');
    const {mealID} = item;
    const {calories} = item;
    const {carbs} = item;
    const {sodium} = item;
    const {protein} = item;
    const {fat} = item;
    const {chloresterol} = item;
    return `
        <tr>
          <th>${MealID}</th>
          <td>${Name}</td>
          <td>${Calories}</td>
          <td>${Carbs}</td>
          <td>${Sodium}</td>
          <td>${Protein}</td>
          <td>${Fat}</td>
          <td>${Chloesterol}</td>
      </tr>
  `;
  
  });
}
*/
async function windowActions() {
  console.log('loaded window');
  const data = await dining();
  console.table(data);
}

window.onload = windowActions;
