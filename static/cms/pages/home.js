export default {
  label: "Startseite",
  name: "home",
  file: "content/page/home.json",
  editor: {
    preview: false,
  },
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
      widget: "list",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Subtitle", name: "subtitle", widget: "string" },
        { label: "Button Text", name: "buttonText", widget: "string" },
        { label: "Button Link", name: "buttonLink", widget: "string" },
      ],
    },
    {
      label: "Stakes",
      name: "stakes",
      widget: "object",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Subtitle", name: "subtitle", widget: "string" },
        { label: "Button", name: "button", widget: "string" },
      ],
    },
    {
      label: "Value Proposition",
      name: "value",
      widget: "object",
      fields: [
        { label: "Pretitle", name: "pretitle", widget: "string" },
        { label: "Title", name: "title", widget: "string" },
        { label: "Subtitle", name: "subtitle", widget: "string" },
        {
          label: "Propositions",
          name: "propositions",
          widget: "list",
          fields: [
            { label: "Title", name: "title", widget: "string" },
            { label: "Text", name: "text", widget: "string" },
          ],
        },
        { label: "Bottom Left", name: "bottomLeft", widget: "string" },
        {
          label: "Bottom Right",
          name: "bottomRight",
          widget: "string",
        },
      ],
    },
    {
      label: "Guide",
      name: "guide",
      widget: "object",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Button", name: "button", widget: "string" },
        {
          label: "Kunden",
          name: "customers",
          widget: "list",
          fields: [
            { label: "Name", name: "name", widget: "string" },
            { label: "Bild", name: "image", widget: "image" },
          ],
        },
      ],
    },
    {
      label: "Plan",
      name: "plan",
      widget: "object",
      fields: [
        { label: "Pretitle", name: "pretitle", widget: "string" },
        { label: "Title", name: "title", widget: "string" },
        { label: "Subtitle", name: "subtitle", widget: "string" },
        {
          label: "Steps",
          name: "steps",
          widget: "list",
          fields: [
            { label: "Title", name: "title", widget: "string" },
            { label: "Text", name: "text", widget: "string" },
          ],
        },
      ],
    },
    {
      label: "Lead Generator Ad",
      name: "leadGeneratorAd",
      widget: "object",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Html Text", name: "htmlText", widget: "text" },
        { label: "Button", name: "button", widget: "string" },
      ],
    },
  ],
};
