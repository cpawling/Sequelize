async function dininghalls(){
  const request = await fetch('/api/dining')
  const food = []
      .then((blob) => blob.json())
      .then((data) => food.push(...data));  
}

