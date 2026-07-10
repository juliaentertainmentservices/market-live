function updateClock(){

const now=new Date();

document.getElementById("clock").innerHTML=
now.toLocaleString();

}

setInterval(updateClock,1000);

updateClock();



async function loadCrypto(){

const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,ripple,cardano,dogecoin";

const response=await fetch(url);

const data=await response.json();

const list=document.getElementById("crypto-list");

list.innerHTML="";

data.forEach(coin=>{

const color=coin.price_change_percentage_24h>=0 ? "#00ff88":"#ff5555";

const arrow=coin.price_change_percentage_24h>=0 ? "▲":"▼";

list.innerHTML+=`

<div class="market-item">

<div>

<strong>${coin.symbol.toUpperCase()}</strong><br>

$${coin.current_price.toLocaleString()}

</div>

<div style="color:${color};font-weight:bold;">

${arrow}<br>

${coin.price_change_percentage_24h.toFixed(2)}%

</div>

</div>

`;

});

}

loadCrypto();

setInterval(loadCrypto,60000);
