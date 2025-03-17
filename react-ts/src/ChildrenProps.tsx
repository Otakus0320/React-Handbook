import { ReactNode } from "react";

interface CccProps {
    content: ReactNode,
    children: ReactNode
}

function Ccc(props: CccProps) {
    return <div>ccc,{props.content}{props.children}</div>
}

function App() {

    return <div>
        <Ccc content={<div>666</div>}>
            <button>7777</button>
        </Ccc>
    </div>
}

export default App;
