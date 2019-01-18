import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  var api_key = process.env.API_KEY;

  var resource_url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=${api_key}`;



  $.get(resource_url, function (data) {
      // data: { meta: {<metadata>}, data: {<array[Practice]>} }
      var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
      document.getElementById('content-placeholder').innerHTML = template(data);
  });


});
