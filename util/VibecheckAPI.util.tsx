export const getSongQuery = async (queryString) => { 
  const songResults = await fetch(`http://vibecheckdemo.westus.azurecontainer.io:8000/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "query": queryString
    })
  }).then(async (res) => {
    return await res.json()
  })
  return songResults
};

