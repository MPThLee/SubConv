import { ISubtitleStructure, VTT } from '../src/index';

const vtt = ['WEBVTT', '',
             '1',
             '00:02:17.440 --> 00:02:20.375',
             'Senator, we\'re making',
             'our final approach into Coruscant.',
             '',
             '2',
             '00:02:20.476 --> 00:02:22.501',
             'Very good, Lieutenant.', ''].join('\n');

const structure: ISubtitleStructure[] = [{
        index: 1,
        start: 137440,
        end: 140375,
        text: 'Senator, we\'re making\nour final approach into Coruscant.'
    },
    {
        index: 2,
        start: 140476,
        end: 142501,
        text: 'Very good, Lieutenant.'
    }];

test('VTT to Internal Structure Test', () => {
    expect(VTT.parse(vtt)).toEqual(structure);
})

test('Internal Structure to VTT Test', () => {
    expect(VTT.stringify(structure)).toBe(vtt);
})