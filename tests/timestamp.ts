import { Utils } from '../src/index';

test('Empty Timestamp', () => {
    const invalidFunction = () => {
        Utils.Timestamp.parse('')
    }
    expect(invalidFunction)
        .toThrowError('Invalid SRT/WebVTT Timestamp');
});

test('Invalid Timestamps', () => {
    const invalidStamp = 'AA:BB:CC,DDD --> WW:XX:YY,ZZZ';
    const invalidFunction = () => {
        Utils.Timestamp.parse(invalidStamp)
    }
    expect(invalidFunction)
        .toThrowError('Invalid SRT/WebVTT Timestamp');
});


test('Empty Timestamp to Milliseconds', () => {
    expect(Utils.Timestamp.toMilliseconds(''))
        .toBe(0);
});

test('Invalid Timestamp to Milliseconds', () => {
    const invalidStamp = 'AA:BB:CC,DDD';
    const invalidFunction = () => {
        Utils.Timestamp.toMilliseconds(invalidStamp)
    }
    expect(invalidFunction)
        .toThrowError('Invalid SRT/WebVTT Timestamp');
});