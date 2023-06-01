import {
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-I4IZRGLP.js";

// node_modules/groq/lib/groq.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function groq(strings) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }
  const lastIndex = strings.length - 1;
  return strings.slice(0, lastIndex).reduce((acc, str, i) => {
    return acc + str + keys[i];
  }, "") + strings[lastIndex];
}

export {
  groq
};
//# sourceMappingURL=/build/_shared/chunk-6TKMBU2E.js.map
