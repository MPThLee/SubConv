import { parse as TimestampParse, toMilliseconds, toSrtTimestamp, toVttTimestamp } from './timestamp' 

export default {
    Timestamp: {
        parse: TimestampParse, 
        toMilliseconds, 
        toSrtTimestamp, 
        toVttTimestamp
    }
}