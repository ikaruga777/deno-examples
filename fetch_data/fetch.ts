const jsonResponse = await fetch("https://api.github.com/users/ikaruga777");
const jsonData = await jsonResponse.json();
console.log(jsonData);

// $ deno run ./fetch_data/fetch.ts
// error: Uncaught PermissionDenied: Requires net access to "api.github.com", run again with the --allow-net flag
// const jsonResponse = await fetch("https://api.github.com/users/ikaruga777");
//                            ^
//     at Object.opSync (deno:core/01_core.js:142:12)
//     at opFetch (deno:ext/fetch/26_fetch.js:65:17)
//     at mainFetch (deno:ext/fetch/26_fetch.js:205:61)
//     at deno:ext/fetch/26_fetch.js:428:11
//     at new Promise (<anonymous>)
//     at fetch (deno:ext/fetch/26_fetch.js:397:12)
//     at file:///Users/akatsuura/dev/sandbox/deno/fetch_data/fetch.ts:1:28

const textResponse = await fetch("https://deno.land/");
const textData = await textResponse.text();
console.log(textData);

try {
  await fetch("https://does.not.exist/")
} catch (e) {
  console.log(e);
}
//TypeError: error sending request for url (https://does.not.exist/): error trying to connect: dns error: failed to lookup address information: nodename nor servname provided, or not known
//at async mainFetch (deno:ext/fetch/26_fetch.js:265:14)
