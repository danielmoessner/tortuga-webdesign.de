export default {
  label: "Contact Page",
  name: "contact",
  file: "content/page/contact.json",
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
      label: "Thank You",
      name: "thankYou",
      widget: "object",
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
          label: "Text",
          name: "text",
          widget: "object",
          fields: [
            { label: "Title", name: "title", widget: "string" },
            { label: "Text", name: "text", widget: "text" },
            {
              label: "Link",
              name: "link",
              widget: "object",
              fields: [
                { label: "To", name: "to", widget: "string" },
                { label: "Text", name: "text", widget: "string" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
