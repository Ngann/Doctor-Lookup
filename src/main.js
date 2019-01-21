import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Search } from './../src/doctors.js';

$(document).ready(function() {

  $('.findDoctors').submit(function(event){
    event.preventDefault();
    var symptom = $('#condition').val();
    $('#condition').val("");
    // let providerInput = $('#provider').val();
    // $('#provider').val("");
    console.log(symptom);

    var lon = 45.54;
    var lat = -122.93;
    let doctorResults = new Search();
    let promiseDoctor = doctorResults.searchDoctors(lon,lat, symptom);

    promiseDoctor.then(function(response){
     let body = JSON.parse(response);

  /// RESULT LIST AND DOCTOR'S PROFILE ///
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


     /// ADDRESS ///
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
       // insurances = body.data[i].insurances[0].insurance_plan.name;
       website = body.data[i].practices[0].website;
       console.log(website);


/// RESULT LIST AND DOCTOR'S PROFILE ///
       nameHTML.push('<li id="'+ i + '">'+ firstName + " " + lastName + " " + title +'</li>');

       profileHTML.push('<h4>'+ firstName + " " + lastName + " " + title + '</h4>'+ '<br>' + '<p>' + bio + '</p>'+ '<br>');

       imageHTML.push('<img src="' + image + '" >');
       websiteHTML.push('<a href="' + website + '">'+ website +'</a>');

  /// ADDRESS ///
       street =body.data[i].practices[0].visit_address.street;
       city =body.data[i].practices[0].visit_address.city;
       state =body.data[i].practices[0].visit_address.state;
       zip =body.data[i].practices[0].visit_address.zip;

       addressHTML.push('<p>'+ street + '<br>' + city + " " + state + " " + zip + '<br>' + "Phone number: "+phoneNumber +'</p>')

     }

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
       var e = websiteHTML[a];
       console.log(e);

       $("#doctor-profile").html(d);
       $("#doctor-address").html(c);
       $("#doctor-image").html(b);
       $("#doctor-website").html(e);
     }

    }, function(error){
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
