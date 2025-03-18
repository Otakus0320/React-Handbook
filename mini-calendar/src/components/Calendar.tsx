import '../index.css';
import {JSX, useState} from "react";

interface CalendarProps {
    defaultValue?: Date,
    onChange?: (date: Date) => void,
}

const Calendar = (props: CalendarProps) => {
    const {defaultValue = new Date(), onChange} = props;
    const [date, setDate] = useState<Date>(defaultValue);

    const months: string[] = [
        '一 月',
        '二 月',
        '三 月',
        '四 月',
        '五 月',
        '六 月',
        '七 月',
        '八 月',
        '九 月',
        '十 月',
        '十一 月',
        '十二 月'
    ]

    const handlePrevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
    }

    const handleNextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
    }

    // determine how many days in this month
    const daysOfMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    }

    // determine the first weekday of the month
    const firstDayOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay();
    }

    const renderDates = ():JSX.Element[]  => {
        const days: JSX.Element[] = [];
        const daysCount: number = daysOfMonth(date.getFullYear(), date.getMonth());
        const beginDay: number = firstDayOfMonth(date.getFullYear(), date.getMonth());
        const endDay: number = firstDayOfMonth(date.getFullYear(), date.getMonth()+1);
        const prevDaysCount: number = daysOfMonth(date.getFullYear(), date.getMonth()-1);


        for (let i: number = prevDaysCount-beginDay+1; i <= prevDaysCount; i++) {
            const clickHandler = () => {
                const currentDay = new Date(date.getFullYear(), date.getMonth()-1, i);
                setDate(currentDay);
                onChange?.(currentDay);
            }
            days.push(<div key={`prev-${i}`} className="prev-day" onClick={clickHandler}>{i}</div>)
        }

        for (let i: number = 1; i <= daysCount; i++) {
            const clickHandler = () => {
                const currentDay = new Date(date.getFullYear(), date.getMonth(), i);
                setDate(currentDay);
                onChange?.(currentDay);
            }
            if(i === date.getDate()){
                days.push(<div key={i} className="day selected" onClick={clickHandler}>{i}</div>)
            }else {
                days.push(<div key={i} className="day" onClick={clickHandler}>{i}</div>)
            }
        }

        const nextShowDays: number = (days.length/7 < 5 )?15-endDay:(8-endDay);

        for (let i: number = 1; i < nextShowDays; i++) {
            const clickHandler = () => {
                const currentDay = new Date(date.getFullYear(), date.getMonth()-1, i);
                setDate(currentDay);
                onChange?.(currentDay);
            }
            days.push(<div key={`next-${i}`} className="next-day" onClick={clickHandler}>{i}</div>)
        }

        return days;
    }

    return (
        <div className="calendar">
            <div className="header">
                <button onClick={handlePrevMonth}>&lt;</button>
                <div>{date.getFullYear()} 年 {months[date.getMonth()]}</div>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>
            <div className="days">
                <div className="day">日</div>
                <div className="day">一</div>
                <div className="day">二</div>
                <div className="day">三</div>
                <div className="day">四</div>
                <div className="day">五</div>
                <div className="day">六</div>
                {renderDates()}
            </div>
        </div>
    );
}

export default Calendar;
