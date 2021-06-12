export default {
  label: "Seiten",
  label_singular: "Seite",
  name: "page",
  files: [
    {
      label: "Startseite",
      name: "home",
      file: "content/page/home.json",
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
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
            { label: "Subtitle", name: "subtitle", widget: "string" },
          ],
        },
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
