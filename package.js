Package.describe({
  summary: "Tiny Scrollbar"
});

Package.on_use(function (api) {
  api.use("jquery", "client");
  api.add_files("./lib/jquery.tinyscrollbar.min.js", "client");
});
