import meta from "../symbols/meta.js";
import header from "../symbols/header.js";
import navigation from "../symbols/navigation.js";

export default {
  label: "Preise",
  name: "prices",
  file: "content/page/prices.json",
  editor: {
    preview: false,
  },
  fields: [
    meta,
    navigation,
    header,
    {
      label: "Inhalt",
      name: "content",
      widget: "object",
      fields: [
        { label: "Text", name: "text", widget: "text" },
        { label: "Features", name: "features", widget: "string" },
      ],
    },
  ],
};
