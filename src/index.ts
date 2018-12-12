// export class C {
//     private x = 10
//     getX = () => this.x;
//     setX = (newVal: number) => { this.x = newVal; }
// }
// 
// export let x = new C();
// export let y = { ...{ some: "value" } }

import { parse as SRTParse, stringify as SRTStrigify } from './formats/srt'
import { parse as VTTParse, stringify as VTTStrigify } from './formats/vtt'
import { parse as TimestampParse, toMilliseconds, toSrtTimestamp, toVttTimestamp } from './utils/timestamp'

export const SRT = {
    parse: SRTParse,
    stringify: SRTStrigify
}

export const VTT = {
    parse: VTTParse,
    stringify: VTTStrigify
}

export const utils = {
    parse: TimestampParse, 
    toMilliseconds, 
    toSrtTimestamp, 
    toVttTimestamp
}

export { default as ISubtitleStructure } from './interface'

export default {
    SRT,
    VTT,
    utils
}