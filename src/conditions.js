export class Conditions {
  searchConditions() {
    return new Promise(function(resolve,reject){
      let key = process.env.API_KEY;
      let request = new XMLHttpRequest();
      // let location="37.773,-122.413"

      // let url = `https://api.betterdoctor.com/2016-03-01/conditions=${condition}&user_key=${key}`;
      let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${key}`;
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
