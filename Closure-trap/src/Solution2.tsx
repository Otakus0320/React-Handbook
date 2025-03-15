import {useEffect, useReducer} from 'react';

interface Action{
    type: "increment"
}

function AppWrong() {
     const reducer = (state: number, action: Action) => {
         switch (action.type) {
             case "increment":
                 return state + 1;
         }
     }

    const [count, counterDispatch] = useReducer(reducer, 0);

    useEffect(() => {
        setInterval(() => {
            counterDispatch({type: "increment"});
            console.log(count);
        }, 1000);
    }, []);

    return <div>{count}</div>
}

export default AppWrong;
