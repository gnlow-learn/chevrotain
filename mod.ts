import {
    Lexer,
    createToken,
} from "https://esm.sh/chevrotain@11.0.3"

const Select = createToken({
    name: "Select",
    pattern: /SELECT/,
})
const From = createToken({
    name: "From",
    pattern: /FROM/,
})

const Comma = createToken({
    name: "Comma",
    pattern: /,/,
})

const Integer = createToken({
    name: "Integer",
    pattern: /0|[1-9]\d*/,
})
const Id = createToken({
    name: "Id",
    pattern: /[a-zA-Z]\w*/,
})

const WS = createToken({
    name: "WS",
    pattern: /\s+/,
    group: Lexer.SKIPPED,
})

const SelectLexer = new Lexer([
    Select,
    From,
    Comma,
    Integer,
    Id,
    WS,
])

console.log(SelectLexer.tokenize("SELECT col1 FROM tab1").tokens.map(token => token.tokenType.name))
