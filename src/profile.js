export function profile() {

  promiseDoctor.then(function(response){
  let body = JSON.parse(response);
  // let city = []
  // var addressHTML = [];
  var m = 0;
  let array = body.data[i].practices[0].visit_address;

  for (m in array){
    document.getElementById("id_of_div").innerHTML += (m+1) + ": " + array[m];
  }, function(error){
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  };
});
