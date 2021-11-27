// $ deno run --unstable os_signals/async_iterator_signal.ts
// error: Module evaluation is still pending but there are no pending ops or dynamic imports. This situation is often caused by unresolved promise.
// ??


import { signal } from "https://deno.land/std@0.116.0/signal/mod.ts";

const sig = signal("SIGUSR1", "SIGINT");

setTimeout(() => {}, 5000);

for await (const _ of sig) {
  console.log("interrupt or usr1 signal received");
}
