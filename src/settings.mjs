/** The app's settings knobs: each has a default and says which values it accepts. */
export const knobs = {
  knob0929t203628: { default: "medium", valid: (value) => ["short", "medium", "long"].includes(value) },
  theme: { default: "light", valid: (value) => ["light", "dark"].includes(value) },
};

/** A saved value when it is valid, else the knob's default. Unknown names are refused. */
export function readSetting(saved, name) {
  const knob = knobs[name];
  if (!knob) throw new Error(`No setting called ${name}`);
  return Object.hasOwn(saved, name) && knob.valid(saved[name]) ? saved[name] : knob.default;
}
// probe
