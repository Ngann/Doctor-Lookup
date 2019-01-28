import './../src/main.js';
export function results(){
  nameHTML.push('<li id="'+ i + '">'+ firstName + " " + lastName + " " + title +'</li>');

  profileHTML.push('<h4>'+ firstName + " " + lastName + " " + title + '</h4>'+ '<br>' + '<p>' + bio + '</p>'+ '<br>');

  imageHTML.push('<img src="' + image + '" >');
  websiteHTML.push('<a href="' + website + '">'+ website +'</a>');
}
