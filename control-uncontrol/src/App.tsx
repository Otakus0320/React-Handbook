import { ChangeEvent } from "react"

function App() {

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
    }

    return <input defaultValue={''} onChange={onChange}/>
}

export default App
