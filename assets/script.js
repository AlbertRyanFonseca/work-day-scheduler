setInterval(function () {
    $(currentDay).text(moment().format('MMMM Do, YYYY h:mm:ss a'));
}, 1000)

$(document).ready(function () {
    const timeDisplayed = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

    for (let i = 0; i < timeDisplayed.length; i++) {
        const row = $("<div>");
        row.addClass("row time-block");
        row.attr("data-time", timeDisplayed[i]);
        $(".container").append(row);

        const timeColumn = $("<div>");
        timeColumn.addClass("col-1 hour");
        timeColumn.text(timeDisplayed[i]);
        row.append(timeColumn);

        const userTextArea = $("<textarea>");
        userTextArea.addClass("col-10 description");
        userTextArea.attr("id", timeDisplayed[i]);
        row.append(userTextArea);

        var timeArrayVal = localStorage.getItem(timeDisplayed[i]);
        if (timeArrayVal != null) {
            userTextArea.val(timeArrayVal);
        }

        const saveButton = $("<button>");
        saveButton.addClass("col-1 saveBtn");
        const saveIcon = $("<i class='far fa-save fa-lg'></i>");
        saveButton.append(saveIcon);
        row.append(saveButton);
    }

    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        var timeStored = $(this).parent().attr("data-time");
        var textStored = $(this).siblings(".description").val();
        localStorage.setItem(timeStored, textStored);
    });

    function classColorUpdate() {
        var currentHour = parseInt(moment().format('HH'));

        $("textarea").each(function () {
            var hour = parseInt($(this).attr("id"));

            if (hour < currentHour) {
                $(this).addClass("past")
            } else if (hour === currentHour) {
                $(this).addClass("present")
            } else {
                $(this).addClass("future")
            }
        })
    }
    classColorUpdate();

});

