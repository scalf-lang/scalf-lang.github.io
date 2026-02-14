window.ERROR_DOCS = {
  "LEX0001": {
    "title": "Lexing failed",
    "problem": "The lexer could not tokenize part of the source file.",
    "fix": "Check for invalid characters, bad escape sequences, or unterminated strings near the reported location."
  },
  "PARSE0001": {
    "title": "Parse error",
    "problem": "The parser found invalid syntax.",
    "fix": "Review tokens around the pointed line/column and fix delimiters, keywords, or statement structure."
  },
  "TYPE0001": {
    "title": "Type mismatch",
    "problem": "Type checking found incompatible values or signatures.",
    "fix": "Adjust annotations or values so assigned and returned values match expected types."
  },
  "LINT0001": {
    "title": "Panic unwrap risk",
    "problem": "The panic unwrap operator `!` may crash at runtime.",
    "fix": "Prefer `or` fallback logic or explicit error handling."
  },
  "LINT0002": {
    "title": "Empty test block",
    "problem": "A `test` block has no assertions or behavior.",
    "fix": "Add assertions or remove the empty test."
  },
  "LINT0004": {
    "title": "No-effect expression",
    "problem": "An expression statement does not change program behavior.",
    "fix": "Assign the result, print it, or remove the statement."
  },
  "LINT0005": {
    "title": "Trivial assert",
    "problem": "`assert true` has no effect.",
    "fix": "Replace it with a meaningful assertion."
  },
  "RUNTIME0001": {
    "title": "Generic runtime error",
    "problem": "An uncategorized runtime failure occurred.",
    "fix": "Read the attached message, stack trace, and hint for the exact failing operation."
  },
  "RUNTIME0102": {
    "title": "Non-callable invoked",
    "problem": "Code attempted to call a value that is not a function.",
    "fix": "Call functions/methods only, or validate the value before invoking it."
  },
  "RUNTIME0200": {
    "title": "Nil member access",
    "problem": "Code tried to access a member on `nil`.",
    "fix": "Use `?.` optional chaining or provide defaults with `or`."
  },
  "RUNTIME0201": {
    "title": "Missing module member",
    "problem": "Requested module property does not exist.",
    "fix": "Check the member name and use available exports from the module."
  },
  "RUNTIME0202": {
    "title": "Invalid member access",
    "problem": "Member access was attempted on an unsupported value type.",
    "fix": "Verify type before property access and convert where needed."
  },
  "RUNTIME0203": {
    "title": "Unknown string method",
    "problem": "A string method name was not recognized.",
    "fix": "Use a supported string method name."
  },
  "RUNTIME0204": {
    "title": "Unknown list method",
    "problem": "A list method name was not recognized.",
    "fix": "Use a supported list method name."
  },
  "RUNTIME0205": {
    "title": "Unknown map method",
    "problem": "A map method name was not recognized.",
    "fix": "Use a supported map method name."
  },
  "RUNTIME0206": {
    "title": "Unknown path method",
    "problem": "A path method name was not recognized.",
    "fix": "Use a supported `path` module API member."
  },
  "RUNTIME0207": {
    "title": "Unknown HTTP response method",
    "problem": "A method on an HTTP response value was not recognized.",
    "fix": "Use supported response methods like `text()` or `json()`."
  },
  "RUNTIME0208": {
    "title": "Unknown module",
    "problem": "The module name in a `use` statement is not built-in or available.",
    "fix": "Use a valid std module name or verify import path/specifier."
  },
  "RUNTIME0300": {
    "title": "Assert expected boolean true",
    "problem": "`assert` received a non-boolean or false value.",
    "fix": "Assert expressions that evaluate to boolean true."
  },
  "RUNTIME0301": {
    "title": "Return inside test block",
    "problem": "`return` is not allowed directly in `test` blocks.",
    "fix": "Remove `return` or wrap logic in a function."
  },
  "RUNTIME0401": {
    "title": "Read permission denied",
    "problem": "Filesystem read access is blocked by permissions.",
    "fix": "Pass `--allow-read=<path>`, `--prompt-permissions`, or `--allow-all`."
  },
  "RUNTIME0402": {
    "title": "Write permission denied",
    "problem": "Filesystem write access is blocked by permissions.",
    "fix": "Pass `--allow-write=<path>`, `--prompt-permissions`, or `--allow-all`."
  },
  "RUNTIME0403": {
    "title": "Environment permission denied",
    "problem": "Environment variable access is blocked by permissions.",
    "fix": "Pass `--allow-env`, `--prompt-permissions`, or `--allow-all`."
  },
  "RUNTIME0404": {
    "title": "Network permission denied",
    "problem": "Network access is blocked or host is not allowlisted.",
    "fix": "Pass `--allow-net=<domain>`, `--prompt-permissions`, or `--allow-all`."
  },
  "RUNTIME0501": {
    "title": "Network feature unavailable",
    "problem": "This build does not include network support.",
    "fix": "Rebuild with network support enabled."
  },
  "RUNTIME0502": {
    "title": "HTTP API unavailable",
    "problem": "HTTP operation requested in a build without network support.",
    "fix": "Rebuild with network support enabled."
  },
  "RUNTIME0503": {
    "title": "JSON feature unavailable",
    "problem": "JSON APIs were called in a build without JSON support.",
    "fix": "Rebuild with JSON support enabled."
  },
  "RUNTIME0504": {
    "title": "Crypto feature unavailable",
    "problem": "Crypto APIs were called in a build without crypto support.",
    "fix": "Rebuild with crypto support enabled."
  }
};
