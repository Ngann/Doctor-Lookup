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
    let conditionResults = new Conditions();
    let promiseCondition = conditionResults.searchConditions();

    promiseCondition.then(function(response){
      let bodyCondition = JSON.parse(response);

      var conditionsArr = []
      var j = 0;
      let x = [];
      var conditionHTML = []

      for(j in bodyCondition.data) {
        x = bodyCondition.data[j].name;
        // console.log(x);
        conditionHTML.push('<li id="'+ j + '">'+ x + '</li>');
      }
      $('#conditions-list').html(conditionHTML);
    }, function(error){
      $('.showErrorsCondition').text(`There was an error processing your request: ${error.message}`);
    });
  }
}
