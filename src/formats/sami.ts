import * as subsrt from 'subsrt';
import { ISubtitleStructure } from "../interface";

export function parse(smi: string): ISubtitleStructure[] {
    const externParser: any[] = subsrt.parse(smi, { format: 'smi' });
    return externParser.reduce((acc, curr, index) => {
        if(curr.type === "caption") {
            if (acc[acc.length - 1].index) acc.push({});
            const subtitle = acc[acc.length - 1];
            
            subtitle.index = acc.length;
            subtitle.start = curr.start;
            subtitle.end = curr.end;
            subtitle.text = curr.text;
        } else {
            return acc;
        }

        return acc;

    }, [{}])

    // console.log(externParser);
    // const externParser = samiParser.parse(smi);
    // const parsed = externParser.result.map((subtitle, index) => {
    //     
    // }
}

export function stringify(subtitles: ISubtitleStructure[], options: object = { langName: "English", langCode: "en-US"}) {
    const subsrtFormat = subtitles.map((value, index) => {
        return {
            type: 'caption',
            start: value.start,
            end: value.end,
            text: value.text
        }
    })

    return subsrt.build(subsrtFormat, { format: 'smi', ...options});
}