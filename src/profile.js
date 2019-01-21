export function profile(el) {
    var container = document.createElement("div");
    container.id = "profileid";
    container.className = "profile";
    var i = 0;
    var k = 0;
    var j = 0;
    for (i=0; i<9; i+=1) {
        var row = document.createElement("h3");
        h3.className = "doc-title";
        h3.id = "doctor" + i;

        for (k=0; k<9; k+=1) {
            var box = document.createElement("div");
            box.className = "box";
            row.appendChild(box);

            for(j=0; j<1; j+=1){
              var input = document.createElement("input");
              input.className = "input";
              input.type = "number";
              input.min = "1"
              input.max = "9"
              box.appendChild(input);
            }
        }
        container.appendChild(row);
    }
    el.appendChild(container);
}
