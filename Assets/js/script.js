//ready method will run this funtion as soon as the website is open 
$(document).ready(function () {
    var date = moment().format('dddd MMMM Do hh:mm:ss');
    $('#currentDay').text(date);

    function currentTime() {
        var timeNow = moment().hour();
        
       
   // same a loop this funtion will check each div time and compared it with the current time 
   //it will change the text area container according with the time 
    $('.time-block').each(function(){
        var hours = parseInt($(this).attr('id'))
//      if the curent time is equal to the time in the div hour it will create a class 'present'
//      wich will make the text area red
        if (hours === timeNow) {
            $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description')
   //      if the curent time is less to the time in the div hour it will create a class 'past'
//      wich will make the text area  grey      
          } else if (timeNow > hours) {
            $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description')
        // if not it will create a class wich will make the text area green
          } else {
            $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description')
        
          }
        })
    };

    // when the button is click it would save the hour and the value typed in the textarea 
    // and save it in the localstorage
    $(".saveBtn").on("click", function (event) {
       
        var time = $(this).siblings(".hour").text();
        var text = $(this).siblings(".description").val();
        
        localStorage.setItem(time, text);
    })

    // this will leave the value of the imput typed in textarea printed
    $("#9 .description").val(localStorage.getItem("9AM"));
    $("#10 .description").val(localStorage.getItem("10AM"));
    $("#11 .description").val(localStorage.getItem("11AM"));
    $("#12 .description").val(localStorage.getItem("12PM"));
    $("#13 .description").val(localStorage.getItem("1PM"));
    $("#14 .description").val(localStorage.getItem("2PM"));
    $("#15 .description").val(localStorage.getItem("3PM"));
    $("#16 .description").val(localStorage.getItem("4PM"));
    $("#17 .description").val(localStorage.getItem("5PM"));

    currentTime();
});

