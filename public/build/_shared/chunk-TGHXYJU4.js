import {
  __commonJS,
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-I4IZRGLP.js";

// empty-module:~/lib/og.server
var require_og = __commonJS({
  "empty-module:~/lib/og.server"(exports, module) {
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = {};
  }
});

// app/routes/resource.og.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_og = __toESM(require_og());
var OG_IMAGE_WIDTH = 1200;
var OG_IMAGE_HEIGHT = 630;

// app/lib/secondsToMinutes.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function secondsToMinutes(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

export {
  secondsToMinutes,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT
};
//# sourceMappingURL=/build/_shared/chunk-TGHXYJU4.js.map
