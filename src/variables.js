export function List() {
  let body = JSON.parse(response);
  let noresult = body.data;
  
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

    nameHTML.push('<li id="'+ i + '">'+ firstName + " " + lastName + " " + title +'</li>');

    profileHTML.push('<h4>'+ firstName + " " + lastName + " " + title + '</h4>'+ '<br>' + '<p>' + bio + '</p>'+ '<br>');

    imageHTML.push('<img src="' + image + '" >');
    websiteHTML.push('<a href="' + website + '">'+ website +'</a>');

    street =body.data[i].practices[0].visit_address.street;
    city =body.data[i].practices[0].visit_address.city;
    state =body.data[i].practices[0].visit_address.state;
    zip =body.data[i].practices[0].visit_address.zip;

    addressHTML.push('<p>'+ street + '<br>' + city + " " + state + " " + zip + '<br>' + "Phone number: "+phoneNumber +'</p>')


}
}
