import home from "./home.js";
import prices from "./prices.js";
import portfolio from "./portfolio.js";
import contact from "./contact.js";
import about from "./about.js";

export default {
  label: "Seiten",
  label_singular: "Seite",
  name: "page",
  files: [
    home,
    about,
    prices,
    portfolio,
    contact,
    {
      label: "Blog Page",
      name: "blog",
      file: "content/page/blog.json",
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
          ],
        },
        {label: 'Button', name: 'button', widget: 'string'}
      ],
    },
    {
      label: "General",
      name: "general",
      file: "content/page/general.json",
      fields: [
        {
          label: "Head",
          name: "head",
          widget: "object",
          fields: [
            { label: "Title", name: "title", widget: "string" },
            { label: "Description", name: "description", widget: "text" },
          ],
        },
        {
          label: "Footer",
          name: "footer",
          widget: "object",
          fields: [{ label: "Text", name: "text", widget: "text" }],
        },
      ],
    },
    {
      label: "Imprint Page",
      name: "imprint",
      extension: "md",
      file: "content/page/imprint.md",
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
            {
              label: "Subtitle",
              name: "subtitle",
              widget: "string",
              required: false,
            },
          ],
        },
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
    {
      label: "Data Protection Page",
      name: "dataProtection",
      file: "content/page/dataProtection.md",
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
            {
              label: "Subtitle",
              name: "subtitle",
              widget: "string",
              required: false,
            },
          ],
        },
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
    {
      label: "Lead Generator Page",
      name: "leadGenerator",
      file: "content/page/leadGenerator.json",
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
          label: "Stakes",
          name: "stakes",
          widget: "object",
          fields: [
            { label: "Title", name: "title", widget: "string" },
            { label: "Subtitle", name: "subtitle", widget: "text" },
          ],
        },
        {
          label: "Value Propositions",
          name: "valuePropositions",
          widget: "list",
          fields: [
            { label: "Title", name: "title", widget: "string" },
            { label: "Text", name: "text", widget: "text" },
          ],
        },
        {
          label: "Form",
          name: "form",
          widget: "object",
          fields: [
            { label: "Title", name: "title", widget: "string" },
            { label: "Button", name: "button", widget: "string" },
            { label: "Legal Notice", name: "legalNotice", widget: "text" },
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
    },
  ],
};
