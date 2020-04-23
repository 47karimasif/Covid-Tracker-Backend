var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

// fetch("http://localhost:3000/cases-json").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//     // document.getElementById("globalcases").innerHTML = data.totalconfirmed
//     document.getElementById("newcases").innerHTML = data.newconfirmed;
//     document.getElementById("globalrecovered").innerHTML = data.totalrecovered;
//     document.getElementById("newrecovered").innerHTML = data.newrecovered;
//     document.getElementById("globaldeath").innerHTML = data.totaldeaths;
//     document.getElementById("newdeath").innerHTML = data.newdeaths;
//   });
// });
