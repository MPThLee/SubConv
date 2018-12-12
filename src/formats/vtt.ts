import { ISubtitleStructure } from '../interface';
import { parse as SRTParse } from './srt';
import { toVttTimestamp } from '../utils/timestamp'

export function parse(vtt: string) {
    return SRTParse(vtt.replace(/^WEBVTT.*\n(?:.*: .*\n)*\n/, ''));
}

export function stringify(subtitles: ISubtitleStructure[]) {
    return 'WEBVTT\n\n' +  subtitles.map((subtitle, index) => {
        return (index > 0 ? '\n' : '') + [
            subtitle.index,
            `${toVttTimestamp(subtitle.start)} --> ${toVttTimestamp(subtitle.end)}${subtitle.cueSettings ? ' ' + subtitle.cueSettings: ''}`,
            subtitle.text
        ].join('\n')
    }).join('\n') + '\n';
}