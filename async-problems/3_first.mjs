//Source: https://codepen.io/navegag/pen/LYPweGB
// it is necesary to install fecth at node
import fetch from "node-fetch";
import { getEnabledCategories } from "trace_events";

/*
  Get the same behavior in next code, removing 'then' expressions.

*/
function getCountry(){
    return fetch('https://pkgstore.datahub.io/core/country-codes/country-codes_json/data/471a2e653140ecdd7243cdcacfd66608/country-codes_json.json')
        
}

/** 
getCountry().then(response => response.json())
    .then(response => response.map(country => country['CLDR display name']))
    .then(response => console.log(response))
*/

try {
let response = await getCountry()
response = await response.json()
response = response.map(country => country['CLDR display name']);
console.log(response)
} catch (err) {
  console.log(err)
}