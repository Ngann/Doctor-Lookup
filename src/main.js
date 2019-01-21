import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Search } from './../src/doctors.js';
import { Conditions } from './../src/conditions.js';
// import { profile } from './../src/profile.js';

$(document).ready(function() {

  let conditionResults = new Conditions();
  let promiseCondition = conditionResults.searchConditions();

  promiseCondition.then(function(response){
    let bodyCondition = JSON.parse(response);

    var conditionsArr = []
    var j = 0;
    let x = [];
    var conditionHTML = []

    for(j in bodyCondition.data) {
      x = bodyCondition.data[j].name;
      // console.log(x);
      conditionHTML.push('<li id="'+ j + '">'+ x + '</li>');
    }
    $('#conditions-list').html(conditionHTML);
  }, function(error){
    $('.showErrorsCondition').text(`There was an error processing your request: ${error.message}`);
  });

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
    }, function(error){
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
