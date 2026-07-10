function updateClock(){

    const now = new Date();

    const options = {

        weekday:'long',

        year:'numeric',

        month:'long',

        day:'numeric',

        hour:'2-digit',

        minute:'2-digit',

        second:'2-digit'

    };

    document.getElementById('clock').innerHTML =
        now.toLocaleString('en-US', options);

}

setInterval(updateClock,1000);

updateClock();
