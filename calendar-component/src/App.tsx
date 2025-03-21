import Calendar from './Calendar/Calendar.tsx';
import dayjs from "dayjs";

function App() {
    return (
        <div className="App">
            <Calendar
                value={dayjs('2025-3-21')}
                locale="en-US"
            >
            </Calendar>
        </div>
    );
}

export default App;
