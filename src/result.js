export function createHTML(id){
  var profileHTML = [];
  var imageHTML = [];
  var websiteHTML = [];
  var addressHTML = [];

    // var a = this.id;
    console.log(id);
    var b = imageHTML[id];
    var c = addressHTML[id];
    var d = profileHTML[id];
    var e = websiteHTML[id];

    $("#doctor-profile").html(d);
    $("#doctor-address").html(c);
    $("#doctor-image").html(b);
    $("#doctor-website").html(e);
}
