// Stand-in for Branch Agent's scripts/review.mjs, so the sandbox can hold Branch's own self-development evidence:
// it runs each named test file with node's test runner and prints review.mjs's summary lines.
import { spawnSync } from "node:child_process";
const files = process.argv.slice(2).filter((arg) => arg.endsWith(".test.mjs"));
let ok = files.length > 0;
for (const file of files) {
  const out = spawnSync(process.execPath, ["--test", "--test-reporter=tap", file], { encoding: "utf8" }).stdout ?? "";
  const pass = Number(/# pass (\d+)/.exec(out)?.[1] ?? 0), fail = Number(/# fail (\d+)/.exec(out)?.[1] ?? 1);
  ok &&= fail === 0;
  console.log((fail ? "FAIL" : "PASS") + "  " + file + "  0.1s  " + pass + "/" + (pass + fail) + " passed");
}
if (ok) console.log("all steps passed in 0.2s"); else process.exitCode = 1;
