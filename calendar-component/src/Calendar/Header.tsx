import {Dayjs} from "dayjs";
import {useContext} from "react";
import LocaleContext from "./LocaleContext.tsx";
import allLocales from "./locale";

interface HeaderProps {
    curMonth: Dayjs;
    preMonthHandler: () => void;
    nextMonthHandler: () => void;
    todayHandler: () => void;
}

const Header = (props: HeaderProps) => {
    const {
        curMonth,
        preMonthHandler,
        nextMonthHandler,
        todayHandler
    } = props;

    const localeContext = useContext(LocaleContext);
    const CalendarContext = allLocales[localeContext.locale];

    return (
        <div className="calendar-header">
            <div className="calendar-header-left">
                <div className="calendar-header-icon" onClick={preMonthHandler}>&lt;</div>
                <div className="calendar-header-value">{curMonth.format(CalendarContext.formatMonth)}</div>
                <div className="calendar-header-icon" onClick={nextMonthHandler}>&gt;</div>
                <button className="calendar-header-btn" onClick={todayHandler}>{CalendarContext.today}</button>
            </div>
        </div>
    )
}

export default Header;