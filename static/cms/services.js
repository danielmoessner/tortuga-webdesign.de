export default {
  label: "Service",
  name: "service",
  folder: "content/service",
  create: true,
  identifier_field: "title",
  format: "frontmatter",
  slug: "{{fields.slug}}",
  fields: [
    { label: "Title", name: "title", widget: "string" },
    { label: "Slug", name: "slug", widget: "string" },
    { label: "Subtitle", name: "subtitle", widget: "string" },
    { label: "Sr-Only Title", name: "srOnlyTitle", widget: "string" },
    { label: "Meta-Description", name: "metaDescription", widget: "text" },
    { label: "Body", name: "body", widget: "markdown" },
  ],
};
