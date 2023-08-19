document.addEventListener('DOMContentLoaded', function() {
 

  var calendarEl = document.getElementById('calendar');


  // initialize the calendar
  // -----------------------------------------------------------------

  var calendar =  new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true,
    dayMaxEvents: true,
    dateClick: function(info) {
        var titleAdd = document.getElementById('titleAdd');
        titleAdd.value = date(info.dateStr);
        document.getElementById('myModal').style.display = "block";
    },
    events: [
      {
        title: 'Event 1',
        start: '2023-08-17T02:00:00',
        end :  '2023-08-18T02:00:00',
        extendedProps: {
            importance: '1',
        }
      },
       {
        title: 'Event 3',
        start: '2023-08-19T02:00:00',
        extendedProps: {
            importance: 'https://example.com',
        }
      },
      {
        title: 'event2',
        start: '2023-08-17T03:00:00',
        extendedProps: {
            importance: '',
        }

      }
    ],
    // eventContent: function(arg) {
    //  if (arg.event.extendedProps.importance == "1") {
    //     return {
    //         html:`<div class="fc-daygrid-event-dot color-white-dot"></div><div class="fc-event-time">${convertTo12HourFormatWithAMPM(arg.event.start)}</div><div class="fc-event-title color-white">${arg.event.title}</div>` 
    //     };
    //   } else  {
    //     return {
    //        html:`<div class="fc-daygrid-event-dot"></div><div class="fc-event-time">${convertTo12HourFormatWithAMPM(arg.event.start)}</div><div class="fc-event-title color-black"><a href="${arg.event.extendedProps.importance}" >${arg.event.title}</a></div>` 
    //     };
    //   }
    // }
   
  });

  calendar.render();
  // time  
 function convertTo12HourFormatWithAMPM(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  const convertedHours = hours % 12 === 0 ? 12 : hours % 12;
  const convertedTime = `${convertedHours}:${minutes < 10 ? "0" : ""}${minutes} ${period}`;
  return convertedTime;
}


  function date (time){
    // Tạo một đối tượng Date để biểu diễn thời gian hiện tại
    const currentDate = new Date();

    // Lấy giờ, phút và giây từ đối tượng Date
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();

    // Định dạng để đảm bảo rằng các giá trị có hai chữ số (01, 02, ..., 10, 11, ...)
    const formattedHour = currentHour < 10 ? `0${currentHour}` : currentHour;
    const formattedMinute = currentMinute < 10 ? `0${currentMinute}` : currentMinute;
    const formattedSecond = currentSecond < 10 ? `0${currentSecond}` : currentSecond;

    // Kết quả
    const currentTime = `${time}T${formattedHour}:${formattedMinute}:${formattedSecond}`;
    return currentTime;


  }
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
  var saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', function() {
    var title = document.getElementById('titleInput').value;
    var selectedDate = document.getElementById('titleAdd').value;
    if (title && selectedDate) {
        // Create an event with the entered title at the selected date
            calendar.addEvent({
            title: title,
            start: selectedDate
        });
        var titleAdd = document.getElementById('titleAdd');
        titleAdd.value = "";
        title.value="";
        document.getElementById('myModal').style.display = "none";
    }
    });
});

