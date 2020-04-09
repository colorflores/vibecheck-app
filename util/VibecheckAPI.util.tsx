export const getSongQuery = async (queryString) => { 
  const songResults = await fetch(`http://vibecheckdemo.eastus.azurecontainer.io:8000/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "query": `${queryString}`,
      "n": 8,
    })
  }).then(async (res) => {
    const body = await res.text();
    const resObject = JSON.parse(body.replace('NaN', 'null'))

    return resObject;
  }).catch(err => {
    console.log(err);
    return null;
  })

  return songResults
};

