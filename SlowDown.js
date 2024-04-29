import DefaultOptions from "./Utils/DefaultOptions.js";
import Controller from "./Utils/Controller.js";

export const SlowDown = (Options) =>
{
    const _Controller = new Controller({ ...DefaultOptions, ...Options});
    return async (Ctx, Next) =>
    {
        const { ip } = Ctx.request;
        _Controller.TryRenew(ip);
        _Controller.InitIfNotExist(ip);

        if(_Controller.IsExceeded(ip))
            await _Controller.Delay(ip);

        _Controller.Visited(ip);
        await Next();
    }
};