import { MapStore } from "../Stores/MapStore.js";

const DefaultOptions =
{
    WindowMs: 5 * 1e3,
    DelayMs: (Hits) => 500 + Hits * 100,
    DelayAfter: 3,
    Store: new MapStore()
};

export default DefaultOptions;