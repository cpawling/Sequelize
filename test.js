async function dininghalls(){
    fetch('/api/dining')
    const food = []
      .then((blob) => blob.json())
      .then((data) => food.push(...data));  
}

