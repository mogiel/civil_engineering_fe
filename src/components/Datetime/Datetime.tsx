interface Props {
    time: Date;
}

const zeroFirst = (value: number): string => {
    if (value < 10) {
        return `0${value}`
    } else {
        return `${value}`
    }
}

export const Datetime = (props:Props) => {
    const date = new Date(props.time)
    return <>{zeroFirst(date.getDay())}.{zeroFirst(date.getMonth())}.{date.getFullYear()} {zeroFirst(date.getHours())}:{zeroFirst(date.getMinutes())}</>
}