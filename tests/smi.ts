import { ISubtitleStructure } from '../src/index';
import { parse, stringify } from '../src/formats/sami';

const smi = [
    '<SAMI>',
    '<HEAD>',
    '<TITLE></TITLE>',
    '<STYLE TYPE=\"text/css\">',
    '<!--',
    'P { font-family: Arial; font-weight: normal; color: white; background-color: black; text-align: center; }',
    '.LANG { Name: English; lang: en-US; SAMIType: CC; }',
    '-->',
    '</STYLE>',
    '</HEAD>',
    '<BODY>',
    '<SYNC Start=6144><P Class=LANG>Lorem ipsum dolor sit amet, consectetur<BR>Lorem ipsum dolor sit amet, consectetur<BR>Lorem ipsum dolor sit amet, consectetur',
    '<SYNC Start=10102><P Class=LANG>&nbsp;',
    '<SYNC Start=17976><P Class=LANG>Lorem ipsum dolor sit amet, consectetur<BR>Lorem ipsum dolor sit amet, consectetur<BR>Lorem ipsum dolor sit amet, consectetur',
    '<SYNC Start=7007908><P Class=LANG>&nbsp;',
    '</BODY>',
    '</SAMI>', ''
].join('\r\n')

const structure = [
    { index: 1, start: 6144, end: 10102, text: 'Lorem ipsum dolor sit amet, consectetur\r\nLorem ipsum dolor sit amet, consectetur\r\nLorem ipsum dolor sit amet, consectetur'}, 
    { index: 2, start: 17976, end: 7007908, text: 'Lorem ipsum dolor sit amet, consectetur\r\nLorem ipsum dolor sit amet, consectetur\r\nLorem ipsum dolor sit amet, consectetur'}];

test('SRT to Internal Structure Test', () => {
    expect(parse(smi)).toEqual(structure);
})

test('Internal Structure to SRT Test', () => {
    expect(stringify(structure)).toBe(smi);
})