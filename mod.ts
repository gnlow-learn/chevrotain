import {
    Lexer,
    createToken,
} from "https://esm.sh/chevrotain@11.0.3"

const Id = createToken({
    name: "Id",
    pattern: /[a-zA-Z]\w*/,
})

const Select = createToken({
    name: "Select",
    pattern: /SELECT/,
    longer_alt: Id,
})
const From = createToken({
    name: "From",
    pattern: /FROM/,
    longer_alt: Id,
})

const Comma = createToken({
    name: "Comma",
    pattern: /,/,
})

const Integer = createToken({
    name: "Integer",
    pattern: /0|[1-9]\d*/,
})

const WS = createToken({
    name: "WS",
    pattern: /\s+/,
    group: Lexer.SKIPPED,
})

const SelectLexer = new Lexer([
    WS,

    Select,
    From,
    Comma,
    Integer,

    Id,
])

console.log(SelectLexer.tokenize("SELECT col1 FROM tab1").tokens.map(token => token.tokenType.name))
console.log(SelectLexer.tokenize("SELECTy col1 FROM tab1").tokens.map(token => token.tokenType.name))
