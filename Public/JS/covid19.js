// const request = require("request");

// const covid19 = (callback) => {
//     const url = 'https://api.covid19api.com/summary'

//     request({url:url,json:true},(error,response)=>{
//         if (error){
//             callback('Unable to Connect to the Service',undefined)
//         }else if(response.body.message){
//             callback('Please Check the Address You have specified',undefined)
//         }else{
//             const data = {
//                 totalConfirmed : response.body.Global.TotalConfirmed,
//                 newConfirmed : response.body.Global.NewConfirmed,
//                 totalRecovered : response.body.Global.TotalRecovered,
//                 newRecovered : response.body.Global.NewRecovered,
//                 totalDeaths : response.body.Global.TotalDeaths,
//                 newDeaths : response.body.Global.NewDeaths,
//             }
//             callback(undefined,data)
//         }
//     })
// }

// module.exports = covid19
