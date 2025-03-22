import type {Meta, StoryObj} from "@storybook/react";
import Calendar from "../Calendar/Calendar.tsx";
import dayjs from "dayjs";
import {CalendarProps} from "../Calendar/types.tsx";

const renderCalendar = (args: CalendarProps) => {
    if (typeof args.value === "number") {
        return <Calendar {...args} value={dayjs(new Date(args.value))} />;
    }
    return <Calendar {...args} />;
}

const meta = {
    title: "日历",
    component: Calendar,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        value: {
            control: "date"
        }
    }
} satisfies Meta<typeof Calendar>

export default meta;

type Story = StoryObj<typeof meta>;

export const Value: Story = {
    args: {
        value: dayjs(Date.now())
    },
    render: renderCalendar
};

export const DateRender: Story = {
    args: {
        value: dayjs(Date.now()),
        dateRender(currentDate){
            return(
                <div>
                    日期{currentDate.date()}
                </div>
            )
        }
    },
    render: renderCalendar
}

export const DataInnerContent: Story = {
    args: {
        value: dayjs(Date.now()),
        dateInnerContent(currentDate){
            return (
                <div>
                    日期{currentDate.date()}
                </div>
            )
        }
    }
}

export const Locale: Story = {
    args: {
        value: dayjs(Date.now()),
        locale: "en-US"
    }
}