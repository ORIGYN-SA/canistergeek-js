import {Actor, HttpAgent} from "@dfinity/agent";

export const idlFactory = ({IDL}) => {
    const CandyValue = IDL.Rec();
    const Property = IDL.Record({
        'value' : CandyValue,
        'name' : IDL.Text,
        'immutable' : IDL.Bool,
      });
      CandyValue.fill(
        IDL.Variant({
          'Int' : IDL.Int,
          'Nat' : IDL.Nat,
          'Empty' : IDL.Null,
          'Nat16' : IDL.Nat16,
          'Nat32' : IDL.Nat32,
          'Nat64' : IDL.Nat64,
          'Blob' : IDL.Vec(IDL.Nat8),
          'Bool' : IDL.Bool,
          'Int8' : IDL.Int8,
          'Nat8' : IDL.Nat8,
          'Nats' : IDL.Variant({
            'thawed' : IDL.Vec(IDL.Nat),
            'frozen' : IDL.Vec(IDL.Nat),
          }),
          'Text' : IDL.Text,
          'Bytes' : IDL.Variant({
            'thawed' : IDL.Vec(IDL.Nat8),
            'frozen' : IDL.Vec(IDL.Nat8),
          }),
          'Int16' : IDL.Int16,
          'Int32' : IDL.Int32,
          'Int64' : IDL.Int64,
          'Option' : IDL.Opt(CandyValue),
          'Floats' : IDL.Variant({
            'thawed' : IDL.Vec(IDL.Float64),
            'frozen' : IDL.Vec(IDL.Float64),
          }),
          'Float' : IDL.Float64,
          'Principal' : IDL.Principal,
          'Array' : IDL.Variant({
            'thawed' : IDL.Vec(CandyValue),
            'frozen' : IDL.Vec(CandyValue),
          }),
          'Class' : IDL.Vec(Property),
        })
      );
    const MetricsGranularity = IDL.Variant({
        'hourly': IDL.Null,
        'daily': IDL.Null,
    });
    const GetMetricsParameters = IDL.Record({
        'dateToMillis': IDL.Nat,
        'granularity': MetricsGranularity,
        'dateFromMillis': IDL.Nat,
    });
    const UpdateCallsAggregatedData = IDL.Vec(IDL.Nat64);
    const CanisterHeapMemoryAggregatedData = IDL.Vec(IDL.Nat64);
    const CanisterCyclesAggregatedData = IDL.Vec(IDL.Nat64);
    const CanisterMemoryAggregatedData = IDL.Vec(IDL.Nat64);
    const HourlyMetricsData = IDL.Record({
        'updateCalls': UpdateCallsAggregatedData,
        'canisterHeapMemorySize': CanisterHeapMemoryAggregatedData,
        'canisterCycles': CanisterCyclesAggregatedData,
        'canisterMemorySize': CanisterMemoryAggregatedData,
        'timeMillis': IDL.Int,
    });
    const NumericEntity = IDL.Record({
        'avg': IDL.Nat64,
        'max': IDL.Nat64,
        'min': IDL.Nat64,
        'first': IDL.Nat64,
        'last': IDL.Nat64,
    });
    const DailyMetricsData = IDL.Record({
        'updateCalls': IDL.Nat64,
        'canisterHeapMemorySize': NumericEntity,
        'canisterCycles': NumericEntity,
        'canisterMemorySize': NumericEntity,
        'timeMillis': IDL.Int,
    });
    const CanisterMetricsData = IDL.Variant({
        'hourly': IDL.Vec(HourlyMetricsData),
        'daily': IDL.Vec(DailyMetricsData),
    });
    const CanisterMetrics = IDL.Record({'data': CanisterMetricsData});
    const GetLogMessagesFilter = IDL.Record({
        'messageRegex': IDL.Opt(IDL.Text),
        'analyzeCount': IDL.Nat32,
        'messageContains': IDL.Opt(IDL.Text),
    });
    const Nanos = IDL.Nat64;
    const GetLogMessagesParameters = IDL.Record({
        'count': IDL.Nat32,
        'filter': IDL.Opt(GetLogMessagesFilter),
        'fromTimeNanos': IDL.Opt(Nanos),
    });
    const GetLatestLogMessagesParameters = IDL.Record({
        'upToTimeNanos': IDL.Opt(Nanos),
        'count': IDL.Nat32,
        'filter': IDL.Opt(GetLogMessagesFilter),
    });
    const CanisterLogRequest = IDL.Variant({
        'getMessagesInfo': IDL.Null,
        'getMessages': GetLogMessagesParameters,
        'getLatestMessages': GetLatestLogMessagesParameters,
    });
    const CanisterLogFeature = IDL.Variant({
        'filterMessageByContains': IDL.Null,
        'filterMessageByRegex': IDL.Null,
    });
    const CanisterLogMessagesInfo = IDL.Record({
        'features': IDL.Vec(IDL.Opt(CanisterLogFeature)),
        'lastTimeNanos': IDL.Opt(Nanos),
        'count': IDL.Nat32,
        'firstTimeNanos': IDL.Opt(Nanos),
    });
    const Data = IDL.Variant({
        'Int' : IDL.Int,
        'Nat' : IDL.Nat,
        'Empty' : IDL.Null,
        'Nat16' : IDL.Nat16,
        'Nat32' : IDL.Nat32,
        'Nat64' : IDL.Nat64,
        'Blob' : IDL.Vec(IDL.Nat8),
        'Bool' : IDL.Bool,
        'Int8' : IDL.Int8,
        'Nat8' : IDL.Nat8,
        'Nats' : IDL.Variant({
          'thawed' : IDL.Vec(IDL.Nat),
          'frozen' : IDL.Vec(IDL.Nat),
        }),
        'Text' : IDL.Text,
        'Bytes' : IDL.Variant({
          'thawed' : IDL.Vec(IDL.Nat8),
          'frozen' : IDL.Vec(IDL.Nat8),
        }),
        'Int16' : IDL.Int16,
        'Int32' : IDL.Int32,
        'Int64' : IDL.Int64,
        'Option' : IDL.Opt(CandyValue),
        'Floats' : IDL.Variant({
          'thawed' : IDL.Vec(IDL.Float64),
          'frozen' : IDL.Vec(IDL.Float64),
        }),
        'Float' : IDL.Float64,
        'Principal' : IDL.Principal,
        'Array' : IDL.Variant({
          'thawed' : IDL.Vec(CandyValue),
          'frozen' : IDL.Vec(CandyValue),
        }),
        'Class' : IDL.Vec(Property),
      });
    const Caller = IDL.Opt(IDL.Principal);
    const LogMessagesData = IDL.Record({
        'data' : Data,
        'timeNanos' : Nanos,
        'message' : IDL.Text,
        'caller' : Caller,
    });
    const CanisterLogMessages = IDL.Record({
        'data': IDL.Vec(LogMessagesData),
        'lastAnalyzedMessageTimeNanos': IDL.Opt(Nanos),
    });
    const CanisterLogResponse = IDL.Variant({
        'messagesInfo': CanisterLogMessagesInfo,
        'messages': CanisterLogMessages,
    });
    return IDL.Service({
        'collectCanisterMetrics': IDL.Func([], [], []),
        'getCanisterMetrics': IDL.Func(
            [GetMetricsParameters],
            [IDL.Opt(CanisterMetrics)],
            ['query'],
        ),
        'getCanisterLog': IDL.Func(
            [IDL.Opt(CanisterLogRequest)],
            [IDL.Opt(CanisterLogResponse)],
            ['query'],
        ),
    });
};

/**
 *
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @param {import("@dfinity/agent").HttpAgent | undefined} httpAgent
 * @return {import("@dfinity/agent").ActorSubclass<import("./canistergeek.did.d.ts")._SERVICE>}
 */
const createActor = (canisterId, options, httpAgent) => {
    const agent = httpAgent || new HttpAgent({...options?.agentOptions});

    // Fetch root key for certificate validation during development
    if (process.env.NODE_ENV !== "production") {
        agent.fetchRootKey().catch(err => {
            console.error("Unable to fetch root key. Check to ensure that your local replica is running");
            console.error(err);
        });
    }

    // Creates an actor with using the candid interface and the HttpAgent
    return Actor.createActor(idlFactory, {
        agent,
        canisterId,
        ...options?.actorOptions,
    });
};

/**
 *
 * @param {string} canisterId
 * @param {import("@dfinity/agent").Identity} identity
 * @param {string} host
 * @param {import("@dfinity/agent").HttpAgent | undefined} httpAgent
 * @return {import("@dfinity/agent").ActorSubclass<import("./canistergeek.did.d.ts")._SERVICE>}
 */
export const createCanisterActor = (canisterId, identity, host, httpAgent) => {
    return createActor(canisterId, {
        agentOptions: {
            identity: identity,
            host: host
        }
    }, httpAgent)
}