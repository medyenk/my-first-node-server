$(document).ready(()=> {
  let splash = new Promise((resolve, reject) => {
    $("form").submit(function (event) {
      event.preventDefault();
      let result =$('#search').val();
      resolve(result);
      console.log(result)
    });
  });
  splash.then(function (result) {
    console.log(result);
    let url = "https://api.unsplash.com/search/photos?";
    let query = '&query=' + result;
    let id = 'client_id=tpB9pEdcjD1RQP2B0UPmJDKTY5iU0_qN4ycx1oruQw8';
    url += id + query;
    console.log(url);
    fetch(url)
.then((response) => {
  return response.json();
})
.then((data) => {
    let returnedObject = data.results[0].urls.regular
    console.log(returnedObject)
    let returnedObject2 = data.results[1].urls.regular
  $('#theDiv').prepend('<img id="theImg" src='+returnedObject+' />')
  $('#theDiv2').prepend('<img id="theImg" src='+returnedObject2+' />')
  
    
});
  });
});

