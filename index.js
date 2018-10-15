const remarkBracketedSpans = require(`remark-bracketed-spans`)

const transformer = remarkBracketedSpans()

module.exports = ({ markdownAST }) => transformer(markdownAST)
