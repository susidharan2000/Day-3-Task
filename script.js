
//Task 1:

var
remoteJSON = {name: "person1", age: 5},
    localJSON = {age: 5, name: "person1"};
    
console.log( _.isEqual(remoteJSON, localJSON) );
if( _.isEqual(remoteJSON, localJSON)){
    console.log("object are same");
}else{
    console.log("object are not same");
    
}
console.log("------------------------------");


API_URL = "https://restcountries.com/v3.1/all"


//TASK 2:

var request = new XMLHttpRequest();
request.open("GET",API_URL,true);
request.send();
var count = 1;
request.onload = function (){
    var data = request.response;
    var result = JSON.parse(data);
    for(let i = 0;i < result.length ;i++){
    console.log(count,result[i].flag,result[i].flags.alt,result[i].flags.svg);
    count++;
    }
}

// task 3:
var request2 = new XMLHttpRequest();
request2.open("GET",API_URL,true);
request2.send();
var count2 = 1;
request2.onload = function(){
    var data2 = request2.response;
    var result2 = JSON.parse(data2);
    for(let i = 0;i < result2.length ;i++){
        console.log(count2+") Country name: "+result2[i].name.common);
        console.log("Official name: "+result2[i].name.official);
        console.log("Region: "+result2[i].region);
        console.log("Sub-Region: "+result2[i].subregion);
        console.log("Population: "+result2[i].population);
        count2++;
        console.log("-----------------------------------------------");
        }
}
