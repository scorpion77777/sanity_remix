/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverDependenciesToBundle: [
    /^atropos.*/,
    /^remark.*/,
    /^unified.*/,
    "@sindresorhus/slugify",
  ],
  ignoredRouteFiles: ["**/.*"],
  tailwind: true,
  serverModuleFormat: "cjs",
  future: {
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_meta: true,
    v2_routeConvention: true,
  },
};
