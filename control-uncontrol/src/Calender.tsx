import { useEffect, useRef, useState } from "react"

interface CalendarProps{
    value?: Date;
    defaultValue?: Date;
    onChange?: (date: Date) => void;
}

function Calendar(props: CalendarProps) {

    const {
        value: propsValue,
        defaultValue,
        onChange
    } = props;

    const [value, setValue] = useState(() => {
        if (propsValue !== undefined) {
            return propsValue;
        } else {
            return defaultValue;
        }
    });

    const isFirstRender = useRef(true);

    useEffect(() => {
        if(propsValue === undefined && !isFirstRender.current) {
            setValue(propsValue);
        }
        isFirstRender.current = false;
    }, [propsValue]);

    const mergedValue = propsValue === undefined ? value : propsValue;

    function changeValue(date: Date) {
        if (propsValue === undefined) {
            setValue(date);
        }
        onChange?.(date);
    }

    return <div>
        {mergedValue?.toLocaleDateString()}
        <div onClick={()=> {changeValue(new Date('2024-5-1'))}}>2023-5-1</div>
        <div onClick={()=> {changeValue(new Date('2024-5-2'))}}>2023-5-2</div>
        <div onClick={()=> {changeValue(new Date('2024-5-3'))}}>2023-5-3</div>
    </div>
}

function App() {
    const [value, setValue] = useState(new Date('2024-5-1'));
    return (
        <div>
            <Calendar defaultValue={new Date('2024-5-1')} onChange={(date) => {
                console.log(date.toLocaleDateString());
            }}/>
            <Calendar value={value} onChange={(date) => {
                setValue(date);
                console.log(date.toLocaleDateString());
            }}/>
        </div>
    )
}

export default App
