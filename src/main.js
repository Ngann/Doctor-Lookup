import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Search } from './../src/doctors.js';
// import { Conditions } from './../src/conditions.js';

$(document).ready(function() {

  $('.findDoctors').submit(function(event){
    event.preventDefault();
    let providerInput = $('#provider').val();
    $('#provider').val("");
    // console.log(providerInput)

    var lon = 45.54;
    var lat = -122.93;
    let doctorResults = new Search();
    let promiseDoctor = doctorResults.searchDoctors(lon,lat);

    promiseDoctor.then(function(response){
      let body = JSON.parse(response);
      let x = [];
      let y = [];
      let z = [];
      var i = 0;
      var nameHTML = [];
      for( i in body.data) {
          x = body.data[i].profile.first_name;
          y = body.data[i].profile.last_name;
          z = body.data[i].insurances[0].insurance_plan.name;
          nameHTML.push('<h4>'+ x + " " + y +'</h4>'+ '<br>' + '<p>' + z + '</p>');
        }
      $(".result").html(nameHTML.join(""));

    }, function(error){
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  })

  // var lon = 37.773;
  // var lat = -122.413;
  // console.log(lon);
  // console.log(lat);
  // var condition = "Acne";
  //
  // let conditionResults = new Conditions();
  // let promise = conditionResults.searchConditions();
  //
  // promise.then(function(response){
  //   let condition = JSON.parse(response);
  //   let a = [];
  //   var b = 0;
  //   for(b in condition.data) {
  //       a = condition.data[b].name;
  //       // console.log(a);
  //   }
  //   $('.conditions').text(`API call went through, now we need to get the symptoms: ${a}`);
  // }, function(error){
  //   $('.showErrorsCondition').text(`There was an error processing your request: ${error.message}`);
  // });


// ///Doctors//////
  // let doctorResults = new Search();
  // let promiseDoctor = doctorResults.searchDoctors(lon,lat);
  //
  // promiseDoctor.then(function(response){
  //   let body = JSON.parse(response);
  //   let x = [];
  //   var i = 0;
  //   var j =0;
  //   let y = y;
  //
  //   for(i in body.data) {
  //     for (j in body.data[i].profile){
  //       x = body.data[i].profile.first_name;
  //       y = body.data[i].profile.last_name;
  //       // console.log(x + " " + y);
  //     }
  //   }
  //
  //   $('.docs').text(`API call went through, now we need to get the data ${x + " " + y}`);
  // }, function(error){
  //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  // });

});
