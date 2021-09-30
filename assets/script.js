setInterval(function () {
    $(currentDay).text(moment().format('MMMM Do, YYYY h:mm:ss a'));
}, 1000)

$(document).ready(function () {
    const timeDisplayed = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

    const row = $("<div>");
    row.addClass("row time-block");
    row.attr("data-time", timeDisplayed[0]);
    $(".container").append(row);

    const timeColumn = $("<div>");
    timeColumn.addClass("col-1 hour");
    timeColumn.text(timeDisplayed[0]);
    row.append(timeColumn);

    const textArea = $("<textarea>");
    row.append(textArea);

    const button = $("<button>")
    row.append(button);
})