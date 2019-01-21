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
      conditionHTML.push('<option id="'+ j + '">'+ x + '</option>');
    }
    $('#condition').html(conditionHTML);
  }, function(error){
    $('.showErrorsCondition').text(`There was an error processing your request: ${error.message}`);
  });

  $('.findDoctors').submit(function(event){
    event.preventDefault();
    let conditionInput = $('#condition').val();
    $('#condition').val("");
    // let providerInput = $('#provider').val();
    // $('#provider').val("");
    console.log(conditionInput)

    var lon = 45.54;
    var lat = -122.93;
    let doctorResults = new Search();
    let promiseDoctor = doctorResults.searchDoctors(lon,lat);

    promiseDoctor.then(function(response){
     let body = JSON.parse(response);
     let firstName = [];
     let lastName = [];
     let bio =[];
     let image =[];
     let title =[];
     let phoneNumber = [];
     let street = [];
     let city = [];
     let state = [];
     let zip = [];
     let z = [];
     var i = 0;
     // var j = 0;
     var nameHTML = [];
     var addressHTML = [];
     var profileHTML = [];
     var imageHTML = [];
     for( i in body.data) {
       firstName = body.data[i].profile.first_name;
       lastName = body.data[i].profile.last_name;
       title = body.data[i].profile.title;
       bio = body.data[i].profile.bio;
       image = body.data[i].profile.image_url;
       street =body.data[i].practices[0].visit_address.street;
       city =body.data[i].practices[0].visit_address.city;
       state =body.data[i].practices[0].visit_address.state;
       zip =body.data[i].practices[0].visit_address.zip;
       // phoneNumber =body.data[i].phones[0].number;
       // website = body.data[i].practices[0].website;
       // newPatient =

       z = body.data[i].insurances[0].insurance_plan.name;
       nameHTML.push('<li id="'+ i + '">'+ firstName + " " + lastName + " " + title +'</li>');
       profileHTML.push('<h4>'+ firstName + " " + lastName + " " + title + '</h4>'+ '<br>' + '<p>' + bio + '</p>'+ '<br>' + '<p>' + z + '</p>');
       addressHTML.push('<p>'+ street + '<br>' + city + " " + state + " " + zip+'</p>')
       imageHTML.push('<img src="' + image + '" >');

     }

     // var j = 0;
     // var k = 0;
     //
     // for(j in body.data) {
     //    for (k in body.data[j].visit_address){
     //      x = body.data[j].;
     //      console.log(x);
     //    }
     //  }

     $("#doctor-list").html(nameHTML);

     var lis = document.getElementById("doctor-list").getElementsByTagName('li');
     for (var a = 0; a < lis.length; a++){
       lis[a].addEventListener('click', doStuff, false);
     }

     function doStuff(){
       var a = this.id;
       var b = imageHTML[a];
       var c = addressHTML[a];
       var d = profileHTML[a];

       $("#doctor-profile").html(d);
        $("#doctor-address").html(c);
       $("#doctor-image").html(b);
     }

    }, function(error){
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
