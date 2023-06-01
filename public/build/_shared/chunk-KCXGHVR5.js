import {
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  process_exports
} from "/build/_shared/chunk-I4IZRGLP.js";

// app/sanity/projectDetails.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var projectDetails = () => {
  const { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION } = typeof document === "undefined" ? process_exports.env : window.ENV;
  return {
    projectId: SANITY_PROJECT_ID != null ? SANITY_PROJECT_ID : `pnkijp0b`,
    dataset: SANITY_DATASET != null ? SANITY_DATASET : `remix`,
    apiVersion: SANITY_API_VERSION != null ? SANITY_API_VERSION : `2022-09-19`
  };
};

export {
  projectDetails
};
//# sourceMappingURL=/build/_shared/chunk-KCXGHVR5.js.map
