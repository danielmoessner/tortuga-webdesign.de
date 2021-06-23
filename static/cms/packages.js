export default {
  label: "Pakete",
  label_singular: "Paket",
  name: "package",
  folder: "content/packages",
  create: true,
  identifier_field: "title",
  editor: {
    preview: false,
  },
  format: "frontmatter",
  slug: "{{fields.slug}}",
  fields: [
    { label: "Title", name: "title", widget: "string" },
    { label: "Slug", name: "slug", widget: "string" },
    { label: "Beschreibung", name: "description", widget: "text" },
    { label: "Preis", name: "price", widget: "number" },
    {
      label: "Features",
      name: "features",
      widget: "list",
      fields: [{ label: "Text", name: "text", widget: "string" }],
    },
  ],
};
