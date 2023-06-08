export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      tilte: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: { hotspot: true },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "gender",
      title: "Gender",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
    },
    {
      name: "protype",
      title: "Protype",
      type: "string",
    },
    {
      name: "usage",
      title: "usage",
      type: "string",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
  ],
}
