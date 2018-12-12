export function parse(timeStamps: string) {
    const regex = /^((?:\d{2,}:)?\d{2}:\d{2}[,.]\d{3}) --> ((?:\d{2,}:)?\d{2}:\d{2}[,.]\d{3})(?: (.*))?$/;
    const match = regex.exec(timeStamps)!;

    interface ICue {
        start: number,
        end: number,
        cueSettings?: string
    }

    const cue: ICue = {
        start: toMilliseconds(match[1]),
        end: toMilliseconds(match[2])
    }
    if (match[3]) {
        cue.cueSettings = match[3]
    }
    return <object>cue;
}

export function toMilliseconds(timeStamp: string) {
    if (!timeStamp) return 0;

    const match = timeStamp.match(/^(?:(\d{2,}):)?(\d{2}):(\d{2})[,.](\d{3})$/);
    if (!match) throw new Error("Invalid SRT/WebVTT Timestamp: " + timeStamp);

    const hours = match[1] ? parseInt(match[1], 10) * 3600000 : 0;
    const minutes = parseInt(match[2], 10) * 60000;
    const seconds = parseInt(match[3], 10) * 1000;
    const milliseconds = parseInt(match[4], 10);
    return hours + minutes + seconds + milliseconds;
}

export function toSrtTimestamp(msTimestamp: number) {
    if (isNaN(msTimestamp)) return msTimestamp;
    return _toSrtTimestamp(msTimestamp)
}

export function toVttTimestamp(msTimestamp: number) {
    if (isNaN(msTimestamp)) return msTimestamp;
    return _toSrtTimestamp(msTimestamp).replace(',', '.')
}

function _toSrtTimestamp(msTimestamp: number): string {
    const date = new Date(0, 0, 0, 0, 0, 0, msTimestamp);

    const hours = ('' + date.getHours()).padStart(2, '0');
    const minutes = ('' + date.getMinutes()).padStart(2, '0');
    const seconds = ('' + date.getSeconds()).padStart(2, '0');
    const milliseconds = ('' + date.getMilliseconds()).padStart(3, '0');

    return `${hours}:${minutes}:${seconds},${milliseconds}`
}