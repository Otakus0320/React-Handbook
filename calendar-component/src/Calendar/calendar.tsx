import MonthCalendar from './MonthCalendar';
import './main.scss';
import {CalendarProps} from "./types.tsx";
import Header from "./Header.tsx";

const Calendar = (props: CalendarProps) => {
    return <div className="calendar">
        <Header />
        <MonthCalendar {...props}/>
    </div>
}

export default Calendar;

