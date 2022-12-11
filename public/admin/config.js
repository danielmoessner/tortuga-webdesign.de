import articles from "../cms/articles.js";
import references from "../cms/references.js";
import tags from "../cms/tags.js";
import services from "../cms/services.js";
import pages from "../cms/pages/index.js";
import packages from "../cms/packages.js";

export default {
  backend: {
    name: "git-gateway",
    branch: "main",
    repo: "danielmoessner/tortuga-webdesign.de",
  },
  local_backend: true,
  display_url: "https://tortuga-webdesign.de",
  site_url: "https://tortuga-webdesign.de",
  media_folder: "/static/media",
  public_folder: "",
  load_config_file: false,
  collections: [articles, tags, references, packages, services, pages],
};
