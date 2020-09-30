const baseURL = "http://api.coinlayer.com/api/live"

async function coins(){
    await fetch('http://api.coinlayer.com/api/live?access_key=da13a52f285512b555a4ae6f43eba046&symbols=BTC,ETH,XRP')
    // then(results => console.log(results));
    .then(results => results.json())
    .then(json => console.log(json))
    // console.log(results)
    .catch(err => console.log(err));
};
coins ();




// const button = document.querySelector("button");
// button.addEventListener('click', results);
// let container = document.getElementById('pics')
