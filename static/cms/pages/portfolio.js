export default {
  label: "Portfolio Page",
  name: "portfolio",
  file: "content/page/portfolio.json",
  fields: [
    { label: "Title", name: "title", widget: "string" },
    {
      label: "Description",
      name: "description",
      widget: "text",
      required: false,
    },
    {
      label: "Header",
      name: "header",
      widget: "object",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Subtitle", name: "subtitle", widget: "string" },
      ],
    },
  ],
};
