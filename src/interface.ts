export interface ISubtitleStructure {
    index: number,
    start: number,
    end: number,
    text: string,
    cueSettings?: string
}

export default ISubtitleStructure;

// interface ISubtitle {
//     [index: number]: ISubtitleStructure;
// }
