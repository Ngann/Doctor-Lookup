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
    var firstName = $('#first-name').val();
    $('#first-name').val("");
    var lastName = $('#last_name').val();
    $('#last_name').val("");
    console.log(symptom);

    var lon = 45.54;
    var lat = -122.93;
    let doctorResults = new Search();
    let promiseDoctor = doctorResults.searchDoctors(lon,lat, symptom, firstName, lastName);

    promiseDoctor.then(function(response){
     let body = JSON.parse(response);
     let noresult = body.data;

     if (noresult.length == 0){
        $("#no-result").text("No results base on search");
     } else {



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
       website = body.data[i].practices[0].website;
       // console.log(website);


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
       lis[a].addEventListener('click', createHTML, false);
     }

     function createHTML(){
       var a = this.id;
       var b = imageHTML[a];
       var c = addressHTML[a];
       var d = profileHTML[a];
       var e = websiteHTML[a];

       $("#doctor-profile").html(d);
       $("#doctor-address").html(c);
       $("#doctor-image").html(b);
       $("#doctor-website").html(e);
     }
}
    }, function(error){
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
    promiseDoctor.clear();
  });
});
