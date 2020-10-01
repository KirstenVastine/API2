const baseURL = "http://api.coinlayer.com/api/live"
// Below I am grabbing the id from the html.
let btcBody = document.querySelector('#btc-body');
let ethBody = document.querySelector('#eth-body');
let xrpBody = document.querySelector('#xrp-body');


async function coins(){
    await fetch('http://api.coinlayer.com/api/live?access_key=da13a52f285512b555a4ae6f43eba046&symbols=BTC,ETH,XRP&expand=1')
    // then(results => console.log(results));
    .then(results => results.json())
    .then(json => {
        displayCrypto(json);
        console.log(json)
    })
    // console.log(results)
    // .then(myJson => displayCrypto(myJson))
    .catch(err => console.log(err));
};
coins ();

// let Object = ()
function displayCrypto(json) {
    console.log(json);
   //Below I am creating an element to put in the html id tag.
    let btcRate = document.createElement('p');
    let ethRate = document.createElement('p');
    let xrpRate = document.createElement('p');
    // Below I am adding specific data from the json object to the p tag element.
    btcRate.innerText = `Rate: $${Math.floor(json.rates.BTC.rate)}`
    // Below I am including a className to add CSS styling.
    btcRate.className = 'rate-Text'
    // Below I am attaching the new 'p' element to the html id tag with appendChild.
    btcBody.appendChild(btcRate);
    
    console.log(json.rates.BTC.rate)

    // Below is for the Bitcoin Volume Data
    let btcVol = document.createElement('p')
    btcVol.innerText = `Volume = ${Math.floor(json.rates.BTC.vol)}`
    btcBody.appendChild(btcVol);
    btcVol.className = 'vol-Text'

    // Below is for the Bitcoin change percent rate Data
    let btcPct = document.createElement('p')
    btcPct.innerText = `Change Percentage = ${Math.floor(json.rates.BTC.change_pct)}`
    btcBody.appendChild(btcPct);
    btcPct.className = 'pct-Text'

    // Below is for the Ethereum USD exchange rate.
    // let ethRate = document.createElement('p')
    ethRate.innerText = `Rate: $${Math.floor(json.rates.ETH.rate)}`
    ethRate.className = 'ethRate-Text'
    ethBody.appendChild(ethRate);

    // Below is for the Ethereum Volume Data
    let ethVol = document.createElement('p')
    ethVol.innerText = `Volume = ${Math.floor(json.rates.ETH.vol)}`
    ethBody.appendChild(ethVol);
    ethVol.className = 'ethVol-Text'

    // Below is for the Ethereum change percent rate Data
    let ethPct = document.createElement('p')
    ethPct.innerText = `Change Percentage = ${Math.floor(json.rates.ETH.change_pct)}`
    ethBody.appendChild(ethPct);
    ethPct.className = 'ethPct-Text'

    // Below is for Ripple Exchange rate to the USD
    xrpRate.innerText = `Rate: $${Math.floor(json.rates.XRP.rate)}`
    xrpBody.appendChild(xrpRate);
    xrpRate.className = 'xrpRate-Text'

    // Below is for Ripple Volume Data
    let xrpVol = document.createElement('p')
    xrpVol.innerText = `Volume = ${Math.floor(json.rates.XRP.vol)}`
    xrpBody.appendChild(xrpVol);
    xrpVol.className = 'xrpVol-Text'

    // Below is for the Ripple change percentage rate
    let xrpPct = document.createElement('p')
    xrpPct.innerText = `Change Percentage = ${Math.floor(json.rates.XRP.change_pct)}`
    xrpBody.appendChild(xrpPct);
    xrpPct.className = 'xrpPct-Text'

}