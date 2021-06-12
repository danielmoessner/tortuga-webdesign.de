import articles from "../cms/articles.js";
import references from "../cms/references.js";
import tags from "../cms/tags.js";
import services from "../cms/services.js";
import pages from "../cms/pages.js";

export default {
  backend: { name: "git-gateway", branch: "master" },
  local_backend: true,
  media_folder: "/static/media",
  public_folder: "",
  collections: [articles, tags, references, services, pages],
};
