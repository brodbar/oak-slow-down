export default class Controller
{
    constructor(Options)
    {
        Object.assign(this, { Options });
    }

    InitIfNotExist(ip)
    {
        if(!this.Options.Store.has(ip))
        !this.Options.Store.has(ip) && 
        this.Options.Store.set(ip,
        {
            Remaining: this.Options.DelayAfter,
            LastRequest: Date.now(),
        });        
    }

    IsExceeded(ip)
    {
        return this.Options.Store.has(ip) && this.Options.Store.get(ip).Remaining < 1;
    }

    TryRenew(ip)
    {
        if(
            this.Options.Store.has(ip) && 
            Date.now() - this.Options.Store.get(ip).LastRequest >= this.Options.WindowMs
        )
            this.Options.Store.delete(ip);
    }

    #RefreshVisit(ip)
    {
        this.Options.Store.get(ip).Remaining--;
        this.Options.Store.get(ip).LastRequest = Date.now();
    }

    Visited(ip)
    {
        this.Options.Store.has(ip) && this.#RefreshVisit(ip);
    }

    async Delay(ip)
    {
        const Hits = Math.abs(this.Options.Store.get(ip).Remaining);
        await new Promise((res) =>
        {
            setTimeout(() => res(), this.Options.DelayMs(Hits));
        });
    }
}