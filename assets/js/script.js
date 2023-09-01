
function displayDateTime() {
    const currentDayOg = $('#currentDay');
    const currentTimeOg = $('#currentTime');
    currentDayOg.text(dayjs().format('dddd MMMM D, YYYY'));
    currentTimeOg.text(dayjs().format('h[:]mm a'));
}

$(function () {
    $('.saveBtn').on('click', function () {
        const description = $(this).siblings('.description').val();
        const time = $(this).parent().attr('id');

        localStorage.setItem(time, description);
    });
    displayDateTime();
    for (let i = 8; i < 18; i++) {
        $(`#hour-${i + 1} .description`).val(localStorage.getItem(`hour-${i + 1}`));
    };

    $('.time-block').each(function () {
        const currentTime = dayjs().hour();
        const calHour = parseInt($(this).attr('id').split('-')[1]);
        console.log(currentTime, calHour)
        if (currentTime > calHour) {
            $(this).addClass('past');
        } else if (currentTime === calHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future')
        }
        console.log(calHour)
    })
});
