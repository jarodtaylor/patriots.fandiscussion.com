import React from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const RichText = ({ content }) => {
  const Article = ({ children }) => (
    <article className="article">{children}</article>
  )
  const Paragraph = ({ children }) => (
    <p className="article-paragraph">{children}</p>
  )
  const Heading1 = ({ children }) => (
    <h1 className="article-heading-1">{children}</h1>
  )
  const Heading2 = ({ children }) => (
    <h2 className="article-heading-2">{children}</h2>
  )
  const Heading3 = ({ children }) => (
    <h3 className="article-heading-3">{children}</h3>
  )
  const Heading4 = ({ children }) => (
    <h4 className="article-heading-4">{children}</h4>
  )
  const Heading5 = ({ children }) => (
    <h5 className="article-heading-5">{children}</h5>
  )
  const Heading6 = ({ children }) => (
    <h6 className="article-heading-6">{children}</h6>
  )
  const List = ({ children }) => <ul className="article-ul">{children}</ul>
  const OrderedList = ({ children }) => (
    <ol className="article-ol">{children}</ol>
  )
  const ListItem = ({ children }) => (
    <li className="article-list-item">{children}</li>
  )
  const BlockQuote = ({ children }) => (
    <blockquote className="article-blockquote">{children}</blockquote>
  )
  const HR = ({ children }) => <hr className="article-hr" />
  const Bold = ({ children }) => <b className="article-bold">{children}</b>
  const Italic = ({ children }) => <i className="article-italic">{children}</i>
  const Underline = ({ children }) => (
    <u className="article-underline">{children}</u>
  )
  const Code = ({ children }) => (
    <code className="article-code">{children}</code>
  )

  const richTextOptions = {
    renderNode: {
      [BLOCKS.DOCUMENT]: (node, children) => <Article>{children}</Article>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
      [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
      [BLOCKS.HEADING_4]: (node, children) => <Heading4>{children}</Heading4>,
      [BLOCKS.HEADING_5]: (node, children) => <Heading5>{children}</Heading5>,
      [BLOCKS.HEADING_6]: (node, children) => <Heading6>{children}</Heading6>,
      [BLOCKS.UL_LIST]: (node, children) => <List>{children}</List>,
      [BLOCKS.OL_LIST]: (node, children) => (
        <OrderedList>{children}</OrderedList>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
      [BLOCKS.QUOTE]: (node, children) => <BlockQuote>{children}</BlockQuote>,
      [BLOCKS.HR]: (node, children) => <HR>{children}</HR>,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const title = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={title} />
      },
      [INLINES.HYPERLINK]: node => {
        const websiteUrl = window.location.hostname
        return (
          <a
            href={node.data.uri}
            className="article-link"
            target={`${
              node.data.uri.startsWith(websiteUrl) ? "_self" : "_blank"
            }`}
            rel={`${
              node.data.uri.startsWith(websiteUrl) ? "" : "noopener noreferrer"
            }`}
          >
            {node.content[0].value}
          </a>
        )
      },
    },
    renderMark: {
      [MARKS.BOLD]: children => <Bold>{children}</Bold>,
      [MARKS.ITALIC]: children => <Italic>{children}</Italic>,
      [MARKS.UNDERLINE]: children => <Underline>{children}</Underline>,
      [MARKS.CODE]: children => <Code>{children}</Code>,
    },
  }

  return documentToReactComponents(content, richTextOptions)
}

export default RichText
