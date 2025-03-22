import MonthCalendar from './MonthCalendar';
import './main.scss';
import cs from 'classnames';
import {CalendarProps} from "./types.tsx";
import Header from "./Header.tsx";
import LocaleContext from "./LocaleContext.tsx";
import {useState} from "react";
import dayjs, {Dayjs} from "dayjs";

const Calendar = (props: CalendarProps) => {
    const {
        value,
        style,
        className,
        locale,
        onChange,
    } = props;
    const classNames = cs("calendar", className);
    const [curValue, setCurValue] = useState<Dayjs>(value);
    const [curMonth, setCurMonth] = useState<Dayjs>(value);

    const changeDate = (date: Dayjs) => {
        setCurValue(date);
        setCurMonth(date);
        onChange?.(date);
    }

    const selectHandler = (date: Dayjs) => {
        changeDate(date);
    }

    const prevMonthHandler = () => {
        setCurMonth(curMonth.subtract(1, 'month'))
    }

    const nextMonthHandler = () => {
        setCurMonth(curMonth.add(1, 'month'))
    }

    const todayHandler = () => {
        const date = dayjs(Date.now());

        changeDate(date);
    }

    return <LocaleContext.Provider value={{locale: locale || navigator.language}}>
        <div className={classNames} style={style}>
            <Header
                curMonth={curMonth}
                preMonthHandler={prevMonthHandler}
                nextMonthHandler={nextMonthHandler}
                todayHandler={todayHandler}
            />
            <MonthCalendar {...props} value={curValue} curMonth={curMonth} selectHandler={selectHandler} />
        </div>
    </LocaleContext.Provider>
}

export default Calendar;

