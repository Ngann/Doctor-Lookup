import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Search } from './../src/doctors.js';

$(document).ready(function() {

  var lon = 37.773;
  var lat = -122.413;
  console.log(lon);
  console.log(lat);

  let doctorResults = new Search();
  let promise = doctorResults.searchDoctors(lon,lat);

  promise.then(function(response){
    let body = JSON.parse(response);
    $('.docs').text(`API call went through, now we need to get the data ${body}`);
  }, function(error){
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
  // var api_key = process.env.API_KEY;
  // var resource_url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${lon},${lat},100&skip=2&limit=10&user_key=${api_key}`;
  //
  // $.get(resource_url, function (data) {
  //     // data: { meta: {<metadata>}, data: {<array[Practice]>} }
  //     var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
  //     document.getElementById('content-placeholder').innerHTML = template(data);
  // });
  //

});
