let Decoder: typeof TextDecoder;
let Encoder: typeof TextEncoder;

if (typeof window === "undefined") {
  ({ TextDecoder: Decoder, TextEncoder: Encoder } = require("util"));
} else {
  Decoder = TextDecoder;
  Encoder = TextEncoder;
}

export { Decoder, Encoder };
