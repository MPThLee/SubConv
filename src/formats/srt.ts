import { ISubtitleStructure } from "../interface";
import { parse as TimestampParse, toSrtTimestamp } from "../utils/timestamp";

export function parse (srt: string) {
    const source = srt
        .trim()
        .concat('\n')
        .replace(/\r\n/g, '\n') // Windows
        .replace(/\n{3,}/g, '\n\n')
        .split('\n')

    const Parser = (acc: any, curr: any, index: any) => {
        const subtitle: ISubtitleStructure = acc[acc.length - 1];
        if (!subtitle.index) {
            if (/^\d+$/.test(curr)) {
                subtitle.index = parseInt(curr, 10)
                return acc
            }
        }

        if (!subtitle.start) {
            Object.assign(subtitle, TimestampParse(curr))
            return acc
        }

        if (curr === '') {
            if (index !== source.length - 1) {
                acc.push({})
            }
        } else {
            subtitle.text = subtitle.text
                ? subtitle.text + '\n' + curr
                : curr
        }

        return acc
    }

    return source.reduce(Parser, [{}])
}

export function stringify(subtitles: ISubtitleStructure[]) {
    return subtitles.map((subtitle, index) => {
        return (index > 0 ? '\n' : '') + [
            subtitle.index,
            `${toSrtTimestamp(subtitle.start)} --> ${toSrtTimestamp(subtitle.end)}`,
            subtitle.text
        ].join('\n')
    }).join('\n') + '\n';
}