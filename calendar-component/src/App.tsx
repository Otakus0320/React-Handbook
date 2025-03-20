import Calendar from './Calendar/calendar.tsx';
import dayjs from "dayjs";
function App() {
    return (
        <div className="App">
            <Calendar value={dayjs('2025-3-20')}></Calendar>
        </div>
    );
}

export default App;
