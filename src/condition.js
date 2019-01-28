export class Conditions {
  searchCondition(lon, lat , symptom) {
    return new Promise(function(resolve,reject){
      let apiKey = process.env.API_KEY;
      let request = new XMLHttpRequest();

      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=${lon},${lat},100&skip=2&limit=10&user_key=${key}`;
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
