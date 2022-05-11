const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@fullcalendar/react",
  "@fullcalendar/interaction",
  "@fullcalendar/daygrid",
]);

module.exports = withTM({
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    loader: "cloudinary",
  },
  trailingSlash: true,
});
