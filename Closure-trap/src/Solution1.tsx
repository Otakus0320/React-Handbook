import { useEffect, useState } from 'react';

function AppWrong() {

    const [count,setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCount((prevState: number) => prevState + 1);
            console.log(count);
        }, 1000);
    }, []);

    return <div>{count}</div>
}

export default AppWrong;
