import test from "node:test";
import assert from "node:assert/strict";
import { readSetting } from "../src/settings.mjs";

test("theme defaults to light and keeps a valid saved value", () => {
  assert.equal(readSetting({}, "theme"), "light");
  assert.equal(readSetting({ theme: "dark" }, "theme"), "dark");
  assert.equal(readSetting({ theme: "purple" }, "theme"), "light");
});

test("knob0929t203437 defaults to medium and keeps a valid saved value", () => {
  assert.equal(readSetting({}, "knob0929t203437"), "medium");
  assert.equal(readSetting({ knob0929t203437: "long" }, "knob0929t203437"), "long");
  assert.equal(readSetting({ knob0929t203437: "huge" }, "knob0929t203437"), "medium");
});
