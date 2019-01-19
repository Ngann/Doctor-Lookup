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
    let x = body.data[0];
    var i = 0;
    var j =0;
    var k = 0;
    // for(i in body.data) {
    //   x = body.data[i];
    //   console.log(x);
    // }

    for(i in body.data) {
      for (j in body.data[i].profile){
        x = body.data[i].profile[j];
        console.log(x);
      }
    }

    // for(i in body.data) {
    //   for (j in body.data[i].profile){
    //     for (k in body.data[i].profile[j].bio){
    //       x = body.data[i].profile[j].bio[k];
    //       console.log(x);
    //     }
    //   }
    // }


    $('.docs').text(`API call went through, now we need to get the data ${body.data}`);
  }, function(error){
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });


  //delete when done:
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
