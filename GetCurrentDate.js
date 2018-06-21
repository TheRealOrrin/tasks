const appDiv = document.getElementById('app');

function getCurrentDate() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth();
  const year = date.getFullYear();

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + ++month : month;

  return(`${day}/${month}/${year}`);
}

appDiv.innerHTML = getCurrentDate();

//OD, 21-06-2018

/* Write a JavaScript program to get the current date.
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */