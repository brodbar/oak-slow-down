export class MapStore
{
    #store;
    constructor()
    {
        this.#store = new Map();
    }

    get(ip) { return this.#store.get(ip); }
    set(ip, opt) { this.#store.set(ip, opt); }
    has(ip) { return this.#store.has(ip); }
    delete(ip) { return this.#store.delete(ip); }
}