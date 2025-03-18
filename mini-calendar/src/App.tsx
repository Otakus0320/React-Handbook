import Calendar from "./components/Calendar.tsx";

const App = () => {
    return (
        <Calendar defaultValue={new Date()} onChange={(date: Date) => {
            alert(date);
        }} />
    )
}

export default App;