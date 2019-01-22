export class Search {
  searchDoctors(lon, lat , symptom, firstName, lastName) {
    return new Promise(function(resolve,reject){
      let key = process.env.API_KEY;
      let request = new XMLHttpRequest();
      // let location="37.773,-122.413"

      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&first_name=${firstName}&last_name=${lastName}&location=${lon},${lat},100&skip=2&limit=10&user_key=${key}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  searchResults(){
    this.response
  }
}
