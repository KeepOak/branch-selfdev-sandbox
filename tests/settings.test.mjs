import test from "node:test";
import assert from "node:assert/strict";
import { readSetting } from "../src/settings.mjs";

test("theme defaults to light and keeps a valid saved value", () => {
  assert.equal(readSetting({}, "theme"), "light");
  assert.equal(readSetting({ theme: "dark" }, "theme"), "dark");
  assert.equal(readSetting({ theme: "purple" }, "theme"), "light");
});

test("knob0929t203751 defaults to medium and keeps a valid saved value", () => {
  assert.equal(readSetting({}, "knob0929t203751"), "medium");
  assert.equal(readSetting({ knob0929t203751: "long" }, "knob0929t203751"), "long");
  assert.equal(readSetting({ knob0929t203751: "huge" }, "knob0929t203751"), "medium");
});

test("knob0929t204327 defaults to medium and keeps a valid saved value", () => {
  assert.equal(readSetting({}, "knob0929t204327"), "medium");
  assert.equal(readSetting({ knob0929t204327: "long" }, "knob0929t204327"), "long");
  assert.equal(readSetting({ knob0929t204327: "huge" }, "knob0929t204327"), "medium");
});

test("knob0929t205616 defaults to medium and keeps a valid saved value", () => {
  assert.equal(readSetting({}, "knob0929t205616"), "medium");
  assert.equal(readSetting({ knob0929t205616: "long" }, "knob0929t205616"), "long");
  assert.equal(readSetting({ knob0929t205616: "huge" }, "knob0929t205616"), "medium");
});
