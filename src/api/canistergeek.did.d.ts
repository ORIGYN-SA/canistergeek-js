import type {Principal} from '@dfinity/principal';
export type CanisterCyclesAggregatedData = Array<bigint>;
export type CanisterHeapMemoryAggregatedData = Array<bigint>;
export type CanisterMemoryAggregatedData = Array<bigint>;

export interface CanisterMetrics {
    'data': CanisterMetricsData
}

export type CanisterMetricsData = { 'hourly': Array<HourlyMetricsData> } |
    { 'daily': Array<DailyMetricsData> };

export interface DailyMetricsData {
    'updateCalls': bigint,
    'canisterHeapMemorySize': NumericEntity,
    'canisterCycles': NumericEntity,
    'canisterMemorySize': NumericEntity,
    'timeMillis': bigint,
}

export interface GetMetricsParameters {
    'dateToMillis': bigint,
    'granularity': MetricsGranularity,
    'dateFromMillis': bigint,
}

export interface HourlyMetricsData {
    'updateCalls': UpdateCallsAggregatedData,
    'canisterHeapMemorySize': CanisterHeapMemoryAggregatedData,
    'canisterCycles': CanisterCyclesAggregatedData,
    'canisterMemorySize': CanisterMemoryAggregatedData,
    'timeMillis': bigint,
}

export type MetricsGranularity = { 'hourly': null } |
    { 'daily': null };

export interface NumericEntity {
    'avg': bigint,
    'max': bigint,
    'min': bigint,
    'first': bigint,
    'last': bigint,
}

export type UpdateCallsAggregatedData = Array<bigint>;
export type CanisterLogFeature = { 'filterMessageByContains': null } |
    { 'filterMessageByRegex': null };

export interface CanisterLogMessages {
    'data': Array<LogMessagesData>,
    'lastAnalyzedMessageTimeNanos': [] | [Nanos],
}

export interface CanisterLogMessagesInfo {
    'features': Array<[] | [CanisterLogFeature]>,
    'lastTimeNanos': [] | [Nanos],
    'count': number,
    'firstTimeNanos': [] | [Nanos],
}

export type CanisterLogRequest = { 'getMessagesInfo': null } |
    { 'getMessages': GetLogMessagesParameters } |
    { 'getLatestMessages': GetLatestLogMessagesParameters };
export type CanisterLogResponse = { 'messagesInfo': CanisterLogMessagesInfo } |
    { 'messages': CanisterLogMessages };
export type Caller = [] | [Principal];
export type CandyValue = { 'Int' : bigint } |
    { 'Nat' : bigint } |
    { 'Empty' : null } |
    { 'Nat16' : number } |
    { 'Nat32' : number } |
    { 'Nat64' : bigint } |
    { 'Blob' : Array<number> } |
    { 'Bool' : boolean } |
    { 'Int8' : number } |
    { 'Nat8' : number } |
    { 'Nats' : { 'thawed' : Array<bigint> } | { 'frozen' : Array<bigint> } } |
    { 'Text' : string } |
    { 'Bytes' : { 'thawed' : Array<number> } | { 'frozen' : Array<number> } } |
    { 'Int16' : number } |
    { 'Int32' : number } |
    { 'Int64' : bigint } |
    { 'Option' : [] | [CandyValue] } |
    { 'Floats' : { 'thawed' : Array<number> } | { 'frozen' : Array<number> } } |
    { 'Float' : number } |
    { 'Principal' : Principal } |
    {
    'Array' : { 'thawed' : Array<CandyValue> } |
        { 'frozen' : Array<CandyValue> }
    } |
    { 'Class' : Array<Property> };
export type Data = { 'Int' : bigint } |
{ 'Nat' : bigint } |
{ 'Empty' : null } |
{ 'Nat16' : number } |
{ 'Nat32' : number } |
{ 'Nat64' : bigint } |
{ 'Blob' : Array<number> } |
{ 'Bool' : boolean } |
{ 'Int8' : number } |
{ 'Nat8' : number } |
{ 'Nats' : { 'thawed' : Array<bigint> } | { 'frozen' : Array<bigint> } } |
{ 'Text' : string } |
{ 'Bytes' : { 'thawed' : Array<number> } | { 'frozen' : Array<number> } } |
{ 'Int16' : number } |
{ 'Int32' : number } |
{ 'Int64' : bigint } |
{ 'Option' : [] | [CandyValue] } |
{ 'Floats' : { 'thawed' : Array<number> } | { 'frozen' : Array<number> } } |
{ 'Float' : number } |
{ 'Principal' : Principal } |
{
    'Array' : { 'thawed' : Array<CandyValue> } |
    { 'frozen' : Array<CandyValue> }
} |
{ 'Class' : Array<Property> };
export interface GetLatestLogMessagesParameters {
    'upToTimeNanos': [] | [Nanos],
    'count': number,
    'filter': [] | [GetLogMessagesFilter],
}

export interface GetLogMessagesFilter {
    'messageRegex': [] | [string],
    'analyzeCount': number,
    'messageContains': [] | [string],
}

export interface GetLogMessagesParameters {
    'count': number,
    'filter': [] | [GetLogMessagesFilter],
    'fromTimeNanos': [] | [Nanos],
}

export interface LogMessagesData {
    'data' : Data,
    'timeNanos' : Nanos,
    'message' : string,
    'caller' : Caller,
}
export interface Property {
    'value' : CandyValue,
    'name' : string,
    'immutable' : boolean,
}
export type Nanos = bigint;

export interface _SERVICE {
    'collectCanisterMetrics': () => Promise<undefined>,
    'getCanisterMetrics': (arg_0: GetMetricsParameters) => Promise<[] | [CanisterMetrics]>,
    'getCanisterLog': (arg_0: [] | [CanisterLogRequest]) => Promise<[] | [CanisterLogResponse]>,
}
