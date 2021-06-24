import articles from "../cms/articles.js";
import references from "../cms/references.js";
import tags from "../cms/tags.js";
import services from "../cms/services.js";
import pages from "../cms/pages/index.js";
import packages from "../cms/packages.js";

export default {
  backend: {
    name: "git-gateway",
    branch: "master",
    repo: "danielmoessner/tortuga-webdesign.de",
  },
  local_backend: true,
  media_folder: "/static/media",
  public_folder: "",
  collections: [articles, tags, references, packages, services, pages],
};
