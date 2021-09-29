var today = moment().format("MMMM Do, YYYY - hh:mm:ss a");
console.log(today);

var displayToday = function () {
    $("#currentDay").text(today);
};

displayToday();