export default {
  name: "portfolio",
  label: "Portfolio",
  format: "json",
  folder: "content/portfolio",
  create: true,
  editor: {
    preview: false,
  },
  identifier_field: "title",
  slug: "{{fields.slug}}",
  fields: [
    { label: "Title", name: "title", widget: "string" },
    { label: "Slug", name: "slug", widget: "string" },
    { label: "Url", name: "url", widget: "string", required: false },
    { label: "Date", name: "date", widget: "datetime", date_format: "YYYY-MM-DD" },
    {
      label: "Image",
      name: "image",
      widget: "image",
      hint:
        "Je größer, desto besser. Das Bild wird von der Webseite automatisch optimiert. JPG und PNG wird bevorzugt.",
    },
    { label: "Active", name: "active", widget: "boolean", required: false },
    {
      label: "Height",
      name: "height",
      widget: "string",
      required: false,
      hint: "Has to be a percentage, e.g. 10%, 90% or 200%.",
    },
    {
      label: "Featured",
      name: "featured",
      widget: "boolean",
      required: false,
    },
    { label: "Description", name: "description", widget: "text" },
    {
      label: "Tags",
      name: "tags",
      required: false,
      widget: "relation",
      multiple: true,
      search_fields: ["title"],
      collection: "tag",
      value_field: "title",
    },
  ],
};
