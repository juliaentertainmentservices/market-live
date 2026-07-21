
function updateClock() {
  const now = new Date();
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };

  const time = now.toLocaleTimeString('en-US', options);
  const date = now.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  document.getElementById('clock').textContent = `${date} | ${time} EST`;
}

setInterval(updateClock, 1000);
updateClock();
