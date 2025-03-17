interface AaaProps {
    name: string;
}

function Aaa(props: AaaProps) {
    return <div>aaa, {props.name}</div>
}

function App() {
    return <div>
        <Aaa name="guang"></Aaa>
    </div>
}

export default App;
