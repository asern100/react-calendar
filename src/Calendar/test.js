

// const Calendar = () => {
//     const [date, setdate] = useState(new Date()) ;
//     const months = ["January","February","March","April","May","June","July","August","September","October","November","December",];
//     let [month, changeMonth ] = useState(months[date.getMonth()])
//     let [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    
    
//     const prevMonth = () => {
//         date.setMonth(date.getMonth() - 1)
//         changeMonth(months[date.getMonth()])
//         setSelectedDate(date.toDateString())
//     }
//     const nextMonth = () => {
//         date.setMonth(date.getMonth() + 1);
//         changeMonth(months[date.getMonth()])
//         setSelectedDate(date.toDateString())
//     }
    
//     const [lastDay, setLastDay] = useState(new Date(
//         date.getFullYear(),
//         date.getMonth() + 1,
//         0
//       ).getDate())
    
//     const [prevLastDay, setPrevDay] = useState(new Date(
//         date.getFullYear(),
//         date.getMonth(),
//         0
//       ).getDate())
    
//     const [firstDayIndex, setfirstDayIndex] = useState(date.getDay());
    
//     const [lastDayIndex, setLastDayIndex] = useState(new Date(
//         date.getFullYear(),
//         date.getMonth() + 1,
//         0
//       ).getDay());
    
//     const [nextDays, setNextDays] = useState(7 - lastDayIndex - 1);
    
//     let [days, changeDays] = useState("")
//     for (let x = firstDayIndex; x > 0; x--) {
//         days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
//       }
    
//       for (let i = 1; i <= lastDay; i++) {
//         if (
//           i === new Date().getDate() &&
//           date.getMonth() === new Date().getMonth()
//         ) {
//           days += `<div class="today">${i}</div>`;
//         } else {
//           days += `<div>${i}</div>`;
//         }
//       }
      
     
//     for (let j = 1; j <= nextDays; j++) {
//         days += `<div class="next-date">${j}</div>`
  
//       }
  