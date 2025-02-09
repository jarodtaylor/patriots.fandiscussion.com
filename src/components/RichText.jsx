import React from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const RichText = ({ content }) => {
  const Paragraph = ({ children }) => (
    <p className="mb-4 text-base">{children}</p>
  )
  const Heading1 = ({ children }) => (
    <h2 className="text-3xl mb-4 lg:text-4xl">{children}</h2>
  )
  const Heading2 = ({ children }) => (
    <h3 className="text-2xl mb-4 lg:text-3xl">{children}</h3>
  )
  const Heading3 = ({ children }) => (
    <h4 className="text-xl lg:text-2xl">{children}</h4>
  )
  const Heading4 = ({ children }) => (
    <h5 className="text-lg lg:text-xl">{children}</h5>
  )
  const Heading5 = ({ children }) => (
    <h6 className="text-base lg:text-lg">{children}</h6>
  )
  const Heading6 = ({ children }) => (
    <h6 className="text-base uppercase">{children}</h6>
  )
  const List = ({ children }) => (
    <ul className="list-disc list-outside pl-4 mb-6">{children}</ul>
  )
  const OrderedList = ({ children }) => (
    <ol className="list-decimal list-outside pl-4 mb-6">{children}</ol>
  )
  const ListItem = ({ children }) => <li className="mb-2">{children}</li>
  const BlockQuote = ({ children }) => (
    <blockquote className="article-blockquote">{children}</blockquote>
  )
  const HR = ({ children }) => <hr className="article-hr" />
  const Table = ({ children }) => (
    <table className="data-table-zebra">{children}</table>
  )
  const TableRow = ({ children }) => <tr>{children}</tr>
  const TableCell = ({ children }) => <td>{children}</td>
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
      [BLOCKS.DOCUMENT]: (node, children) => children,
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
      [BLOCKS.TABLE]: (node, children) => <table>{children}</table>,
      [BLOCKS.TABLE_ROW]: (node, children) => {
        if (children.every(node => node.type === "th")) {
          // all children are header cells, so we should wrap the row
          // with a <thead /> tag
          return (
            <thead>
              <tr>{children}</tr>
            </thead>
          )
        } else {
          // not a header row, so we can render an ordinary <tr />
          return <tr>{children}</tr>
        }
      },
      // [BLOCKS.TABLE_CELL]: (node, children) => {
      //   // console.log()
      //   // children.every((node) => {
      //   //   debugger;
      //   // })
      //   //data-column={node.content[0].content[0].value}
      //   return (
      //     <td data-column={node.content[0].content[0].value}>{children}</td>
      //   )
      // },
      [BLOCKS.TABLE_HEADER_CELL]: (node, children) => {
        // console.log()
        // children.every((node) => {
        //   debugger;
        // })
        //data-column={node.content[0].content[0].value}
        return <td>{children}</td>
      },
      // BLOCKS.TABLE_ROW
      // BLOCKS.TABLE_CELL
      // BLOCKS.TABLE_HEADER_CELL
      // [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      //   const title = node.data.target.fields.title["en-US"]
      //   const url = node.data.target.fields.file["en-US"].url
      //   return <img src={url} alt={title} />
      // },
      [INLINES.HYPERLINK]: node => {
        // const websiteUrl = window.location.hostname
        const websiteUrl = "patriots.fandiscussion.com"
        return (
          <a
            href={node.data.uri.trim()}
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

  return renderRichText(content, richTextOptions)
}

export default RichText
