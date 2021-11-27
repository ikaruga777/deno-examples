import { delay } from "https://deno.land/std@0.116.0/async/delay.ts";

Deno.test("async hello world", async () => {
  const x = 1 + 2;

  await delay(100);

  if (x !== 3 ) {
    throw Error("x should be equal to 3");
  };
});
