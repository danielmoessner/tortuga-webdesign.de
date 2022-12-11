export default {
  label: "About Page",
  name: "about",
  file: "content/page/about.json",
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
    {
      label: "About",
      name: "about",
      widget: "object",
      fields: [
        { label: "Pretitle", name: "pretitle", widget: "string" },
        { label: "Title", name: "title", widget: "string" },
        { label: "Subtitle", name: "subtitle", widget: "string" },
        { label: "Text", name: "text", widget: "markdown" },
        { label: "Image", name: "image", widget: "image" },
      ],
    },
    {
      label: "FAQ",
      name: "faq",
      widget: "object",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Subtitle", name: "subtitle", widget: "string" },
        {
          label: "Questions",
          name: "questions",
          widget: "list",
          fields: [
            { label: "Question", name: "question", widget: "string" },
            { label: "Answer", name: "answer", widget: "string" },
          ],
        },
      ],
    },
  ],
};
