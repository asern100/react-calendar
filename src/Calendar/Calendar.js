import './Calendar.css';
import React , {useState} from 'react'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

const Calendar = () => {
    const [date, setdate] = useState(new Date()) ;
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December",];
    let [month, changeMonth ] = useState(months[date.getMonth()])
    let [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    let [days, fillDays] = useState("")
    
    const prevMonth = () => {
        date.setMonth(date.getMonth() - 1)
        changeMonth(months[date.getMonth()])
        setSelectedDate(date.toDateString())
        
    }
    const nextMonth = () => {
        date.setMonth(date.getMonth() + 1);
        changeMonth(months[date.getMonth()])
        setSelectedDate(date.toDateString())
        
    }
    
    const renderCalendar = (date) => {

        const lastDay = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
          ).getDate()
        
        const prevLastDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
          ).getDate()
        
        const firstDayIndex = date.getDay();
        
        const lastDayIndex = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
          ).getDay()
        
        const nextDays= 7 - lastDayIndex - 1;
        
        
        for (let x = firstDayIndex; x > 0; x--) {
            days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
          }
        
          for (let i = 1; i <= lastDay; i++) {
            if (
              i === new Date().getDate() &&
              date.getMonth() === new Date().getMonth()
            ) {
              days += `<div class="today">${i}</div>`;
            } else {
              days += `<div>${i}</div>`;
            }
          }
          
         
        for (let j = 1; j <= nextDays; j++) {
            days += `<div class="next-date">${j}</div>`
          }        
    }
    
    return (
        <div className="container">
            <div className="calendar">
                <div className="month">
                    <FaAngleLeft  size="3rem" className="icon" onClick = {prevMonth}/>
                    <div className="date">
                        <h1>{month}</h1>
                        <p>{selectedDate}</p>
                    </div>
                    <FaAngleRight size="3rem" className="icon" onClick = {nextMonth}/>
                </div>
                <div className="weekdays">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
                </div>
                <div className="days" dangerouslySetInnerHTML={{__html: days}} >
                    
                </div>
            </div>
        </div>
    )
}

export default Calendar