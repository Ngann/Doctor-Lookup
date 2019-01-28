import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Search } from './../src/doctors.js';
import { Conditions } from './../src/condition.js';
// import { results } from './../src/result.js';
// import { List } from './../src/variables.js';

$(document).ready(function() {
  var lon = 45.54;
  var lat = -122.93;

  $('.findByCondition').submit(function(event){
    event.preventDefault();
    var symptom = $('#condition').val();
    $('#condition').val("");

    let doctorResults = new Conditions();
    let promiseDoctor = doctorResults.searchCondition(lon,lat, symptom);

    promiseDoctor.then(function(response){
     let body = JSON.parse(response);
     let noresult = body.data;

     if (noresult.length == 0){
        $("#no-result").text("No results base on search");
     } else {

  // / RESULT LIST AND DOCTOR'S PROFILE ///
     let firstName = [];
     let lastName = [];
     let title =[];
     let bio =[];
     let image =[];
     var nameHTML = [];
     var profileHTML = [];
     var imageHTML = [];
     let website = [];
     var websiteHTML = [];


     // / ADDRESS ///
     let street = [];
     let city = [];
     let state = [];
     let zip = [];
     let phoneNumber = [];
     var addressHTML = [];

     var i = 0;
     for( i in body.data) {
       firstName = body.data[i].profile.first_name;
       lastName = body.data[i].profile.last_name;
       title = body.data[i].profile.title;
       bio = body.data[i].profile.bio;
       image = body.data[i].profile.image_url;
       phoneNumber =body.data[i].practices[0].phones[0].number;
       website = body.data[i].practices[0].website;


// / RESULT LIST AND DOCTOR'S PROFILE ///
       nameHTML.push('<li id="'+ i + '">'+ firstName + " " + lastName + " " + title +'</li>');

       profileHTML.push('<h4>'+ firstName + " " + lastName + " " + title + '</h4>'+ '<br>' + '<p>' + bio + '</p>'+ '<br>');

       imageHTML.push('<img src="' + image + '" >');
       websiteHTML.push('<a href="' + website + '">'+ website +'</a>');

  // / ADDRESS ///
       street =body.data[i].practices[0].visit_address.street;
       city =body.data[i].practices[0].visit_address.city;
       state =body.data[i].practices[0].visit_address.state;
       zip =body.data[i].practices[0].visit_address.zip;

       addressHTML.push('<p>'+ street + '<br>' + city + " " + state + " " + zip + '<br>' + "Phone number: "+phoneNumber +'</p>')

     }
     $("#show-result").text("Click on name to see info:");
     $("#doctor-list").html(nameHTML);

     var lis = document.getElementById("doctor-list").getElementsByTagName('li');
     for (var a = 0; a < lis.length; a++){
       lis[a].addEventListener('click', createHTML, false);
     }

     function createHTML(){

       var doctorId = this.id;
       var doctorImage = imageHTML[doctorId];
       var doctorAdresss = addressHTML[doctorId];
       var doctorProfile = profileHTML[doctorId];
       var doctorWebsite = websiteHTML[doctorId];

       $("#doctor-profile").html(doctorProfile);
       $("#doctor-address").html(doctorAdresss);
       $("#doctor-image").html(doctorImage);
       $("#doctor-website").html(doctorWebsite);
     }
}
}, function(error){
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

  $('.findDoctors').submit(function(event){
    event.preventDefault();
    var firstName = $('#first-name').val();
    $('#first-name').val("");
    console.log(firstName)
    var lastName = $('#last_name').val();
    $('#last_name').val("");
    // var lon = 45.54;
    // var lat = -122.93;


    let doctorResults = new Search();
    let promiseDoctor = doctorResults.searchDoctors(lon,lat,firstName, lastName);

    promiseDoctor.then(function(response){
     let body = JSON.parse(response);
     let noresult = body.data;

     if (noresult.length == 0){
        $("#no-result").text("No results base on search");
     } else {

  // / RESULT LIST AND DOCTOR'S PROFILE ///
     let firstName = [];
     let lastName = [];
     let title =[];
     let bio =[];
     let image =[];
     var nameHTML = [];
     var profileHTML = [];
     var imageHTML = [];
     let website = [];
     var websiteHTML = [];


     // / ADDRESS ///
     let street = [];
     let city = [];
     let state = [];
     let zip = [];
     let phoneNumber = [];
     var addressHTML = [];

     var i = 0;
     for( i in body.data) {
       firstName = body.data[i].profile.first_name;
       lastName = body.data[i].profile.last_name;
       title = body.data[i].profile.title;
       bio = body.data[i].profile.bio;
       image = body.data[i].profile.image_url;
       phoneNumber =body.data[i].practices[0].phones[0].number;
       website = body.data[i].practices[0].website;


// / RESULT LIST AND DOCTOR'S PROFILE ///
       nameHTML.push('<li id="'+ i + '">'+ firstName + " " + lastName + " " + title +'</li>');

       profileHTML.push('<h4>'+ firstName + " " + lastName + " " + title + '</h4>'+ '<br>' + '<p>' + bio + '</p>'+ '<br>');

       imageHTML.push('<img src="' + image + '" >');
       websiteHTML.push('<a href="' + website + '">'+ website +'</a>');

  // / ADDRESS ///
       street =body.data[i].practices[0].visit_address.street;
       city =body.data[i].practices[0].visit_address.city;
       state =body.data[i].practices[0].visit_address.state;
       zip =body.data[i].practices[0].visit_address.zip;

       addressHTML.push('<p>'+ street + '<br>' + city + " " + state + " " + zip + '<br>' + "Phone number: "+phoneNumber +'</p>')

     }
     $("#show-result").text("Click on name to see info:");
     $("#doctor-list").html(nameHTML);

     var lis = document.getElementById("doctor-list").getElementsByTagName('li');
     for (var a = 0; a < lis.length; a++){
       lis[a].addEventListener('click', createHTML, false);
     }

     function createHTML(){

       var doctorId = this.id;
       var doctorImage = imageHTML[doctorId];
       var doctorAdresss = addressHTML[doctorId];
       var doctorProfile = profileHTML[doctorId];
       var doctorWebsite = websiteHTML[doctorId];

       $("#doctor-profile").html(doctorProfile);
       $("#doctor-address").html(doctorAdresss);
       $("#doctor-image").html(doctorImage);
       $("#doctor-website").html(doctorWebsite);
     }
}
}, function(error){
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
