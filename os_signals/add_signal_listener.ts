console.log("Press Ctrl-C to trigger a SIGINT signal");

Deno.addSignalListener("SIGINT", () => {
  console.log("interrupted");
  Deno.exit();
});

setTimeout(() => {}, 5000);
