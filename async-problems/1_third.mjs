// https://codesandbox.io/s/nice-torvalds-odcg0?fontsize=14&file=/src/third.js:0-469  

import _ from "lodash";

const LIMIT = 100;

const fetchNext = n =>
  Promise.resolve({
    objects: _.range(n, n + 20), // this is an array with 20 elements
    meta: {
      next: n > LIMIT ? null : n + 20
    }
  });

// You should fetch all pages.
// You must use the return meta.next parameter in order to fetch the next page
// All objects returned in the whole pagination must be saved in an array
// For first page, do fetchNext(0)

let new_page = await fetchNext(0);
let pages = new_page.objects

while(new_page.meta.next != null) {
    new_page = await fetchNext( new_page.meta.next)
    pages = pages.concat( new_page.objects)   
}

console.log(pages)