import { MapStore } from "../Stores/MapStore.js";

const DefaultOptions =
{
    WindowMs: 5 * 1000,
    DelayMs: () => 500,
    DelayAfter: 3,
    Store: new MapStore()
};

export default DefaultOptions;