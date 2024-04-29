<iframe src="https://ghbtns.com/github-btn.html?user=brodbar&repo=oak-slow-down&type=watch&count=true&v=2" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
<iframe src="https://ghbtns.com/github-btn.html?user=brodbar&repo=oak-slow-down&type=fork&count=true&v=2" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
[![deno.land](https://shields.io/badge/deno.land-gray?logo=deno&style=for-the-badge)](https://deno.land/x/oak_slow_down)

# oak-slow-down

**oak-slow-down** is a basic rate-limiting middleware for [Oak](https://github.com/oakserver/oak) that slows down responses.

---

## Features

- Increasing the delay for every request over the limit

## Usage

```js
import { SlowDown } from "https://deno.land/x/oak_slow_down@v0.1.0-rc1/mod.js";

// Below are default settings
const slowDown = SlowDown({
  WindowMs: 5 * 1000, // Window for the requests that can be made in milliseconds
  DelayMs: () => 500, // Response delay in milliseconds
  DelayAfter: 3 // Max requests within the predefined window before the delay
});

app.use(slowDown);
```

To get increasing delay set:
```js
// Delay starts as 500ms and increased by 100ms for every request over the limit
DelayMs: (Hits) => 500 + Hits * 100
```
