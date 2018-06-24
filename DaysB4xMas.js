const appDiv = document.getElementById("app");

function daysB4xMas() {
  const toDay     = new Date();
  const xMas      = new Date(toDay.getFullYear(), 11, 25);

  const diffMSecs = xMas.getTime() - toDay.getTime();
  const diffDays  = Math.floor(diffMSecs / (24 * 60 * 60 * 1000));

  return `${diffDays} days left to Christmas.`;
}

appDiv.innerHTML = daysB4xMas();

//OD, 24-06-2018

/* Write a JavaScript program to calculate days left until next Christmas. */