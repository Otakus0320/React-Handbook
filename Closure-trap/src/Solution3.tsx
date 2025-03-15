import { useEffect, useState, useRef } from 'react';

function Solution3() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    };
    const ref = useRef(updateCount);

    ref.current = updateCount;

    useEffect(() => {
        const timer = setInterval(() => ref.current(), 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return <div>{count}</div>;
}

export default Solution3;
