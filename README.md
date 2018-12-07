<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Repro of conflicting Markdown fields
</h1>

This repo shows how conflicting Markdown frontmatter types can cause some issues with Gatsby.

Specifically, in this contrived example, I've used `category` to represent both a simple string and an array of strings. When this field is queried, we see an error like:

```
warning There are conflicting field types in your data. GraphQL schema will omit those fields.
MarkdownRemark.frontmatter.category:
 - type: array<string>
   value: [ 'sample', ... ]
   source: File "content/blog/hello-world.md"
 - type: string
   value: 'sample'
   source: File "content/case-studies/hello-world.md"
```
