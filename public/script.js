async function dining() {
  const requestdata = await fetch('/api/dining');
  const diningdata = await requestdata.json();
  const arraydata = diningdata.data;
  console.log(arraydata);
  console.table(diningdata);
  const targettable = document.querySelector('.tbody');

  arraydata.forEach((element) => {
    console.log(element.dining);
    console.log(element.hall_address);
    const appendelement = document.createElement('tr');
    appendelement.innerHTML = `
          <td>${element.hall_id}</td>
          <td>${element.hall_name}</td>
          <td>${element.hall_address}</td>
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
