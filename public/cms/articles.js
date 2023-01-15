export default {
  name: "blog",
  label: "Blog",
  folder: "content/blog",
  create: true,
  slug: "{{fields.slug}}",
  fields: [
    // { label: "Image", name: "image", widget: "image" },
    { label: "Title", name: "title", widget: "string" },
    { label: "Slug", name: "slug", widget: "string" },
    { label: "Publish Date", name: "date", widget: "datetime", time_format: false },
    { label: "Description", name: "description", widget: "text" },
    // {
    //   label: "Tags",
    //   name: "tags",
    //   required: false,
    //   widget: "relation",
    //   multiple: true,
    //   searchFields: ["title"],
    //   collection: "tag",
    //   valueField: "title",
    // },
    { label: "Body", name: "body", widget: "markdown" },
    // {
    //   label: "Author",
    //   name: "author",
    //   widget: "object",
    //   fields: [
    //     { label: "Name", name: "name", widget: "string" },
    //     { label: "Image", name: "image", widget: "image" },
    //   ],
    // },
  ],
};
