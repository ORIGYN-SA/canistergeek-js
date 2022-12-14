export function idlFactory({ IDL }: {
    IDL: any;
}): any;
export function createCanisterActor(canisterId: string, identity: import("@dfinity/agent").Identity, host: string, httpAgent: import("@dfinity/agent").HttpAgent | undefined): import("@dfinity/agent").ActorSubclass<any>;
