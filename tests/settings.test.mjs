import test from "node:test";
import assert from "node:assert/strict";
import { readSetting } from "../src/settings.mjs";

test("theme defaults to light and keeps a valid saved value", () => {
  assert.equal(readSetting({}, "theme"), "light");
  assert.equal(readSetting({ theme: "dark" }, "theme"), "dark");
  assert.equal(readSetting({ theme: "purple" }, "theme"), "light");
});
