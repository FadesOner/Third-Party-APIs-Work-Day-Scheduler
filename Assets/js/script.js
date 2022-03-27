//ready method will run this funtion as soon as the website is open 
$(document).ready(function () {
    var date = moment().format('dddd MMMM Do');
    $('#currentDay').text(date);
})

//when it opens it should change the colour of the text areas when is past it should be grey
//when its present should be red and future in green

//if time is past it should be grey
//if the time is the curent time it should be red 
// the future time should be green