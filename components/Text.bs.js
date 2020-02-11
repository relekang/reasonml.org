

import * as Util from "../common/Util.bs.js";
import * as React from "react";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as CodeExample from "./CodeExample.bs.js";
import * as CodeSignature from "./CodeSignature.bs.js";

var inline = "no-underline border-b border-night-dark hover:border-bs-purple text-inherit";

var Link = {
  inline: inline,
  standalone: "no-underline text-fire"
};

function Text$Anchor(Props) {
  var name = Props.name;
  var style = {
    position: "absolute",
    top: "-7rem"
  };
  return React.createElement("span", {
              style: {
                position: "relative"
              }
            }, React.createElement("a", {
                  style: style,
                  name: name
                }));
}

var Anchor = {
  make: Text$Anchor
};

function Text$H1(Props) {
  var children = Props.children;
  return React.createElement("h1", {
              className: "text-6xl md:text-7xl tracking-tight leading-1 font-sans font-black text-night-dark"
            }, children);
}

var H1 = {
  make: Text$H1
};

function Text$H2(Props) {
  var children = Props.children;
  return React.createElement("h2", {
              className: "text-4xl leading-3 font-sans font-medium text-night-dark"
            }, children);
}

var H2 = {
  make: Text$H2
};

function Text$H3(Props) {
  var children = Props.children;
  return React.createElement("h3", {
              className: "text-xl leading-3 font-sans font-bold text-night-darker"
            }, children);
}

var H3 = {
  make: Text$H3
};

function Text$H4(Props) {
  var children = Props.children;
  return React.createElement("h4", {
              className: "text-lg leading-2 font-sans font-semibold text-night-dark"
            }, children);
}

var H4 = {
  make: Text$H4
};

function Text$H5(Props) {
  var children = Props.children;
  return React.createElement("h5", {
              className: "text-xs leading-2 font-sans font-semibold uppercase tracking-wide"
            }, children);
}

var H5 = {
  make: Text$H5
};

function Text$Md$Pre(Props) {
  var children = Props.children;
  return React.createElement("pre", {
              className: "my-8 p-4 block"
            }, children);
}

var Pre = {
  make: Text$Md$Pre
};

function Text$Md$InlineCode(Props) {
  var children = Props.children;
  return React.createElement("code", {
              className: "md-inline-code px-1 text-smaller-1 rounded-sm font-mono bg-snow"
            }, children);
}

var InlineCode = {
  make: Text$Md$InlineCode
};

function Text$Md$Table(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: "overflow-x-auto mt-10 mb-16"
            }, React.createElement("table", {
                  className: "md-table"
                }, children));
}

var Table = {
  make: Text$Md$Table
};

function Text$Md$Thead(Props) {
  var children = Props.children;
  return React.createElement("thead", undefined, children);
}

var Thead = {
  make: Text$Md$Thead
};

function Text$Md$Th(Props) {
  var children = Props.children;
  return React.createElement("th", {
              className: "py-2 pr-8 text-sm uppercase font-medium tracking-wide text-left border-b-2 border-snow-darker"
            }, children);
}

var Th = {
  make: Text$Md$Th
};

function Text$Md$Td(Props) {
  var children = Props.children;
  return React.createElement("td", {
              className: "border-b border-snow-darker py-3 pr-8"
            }, children);
}

var Td = {
  make: Text$Md$Td
};

function typeOf (thing){{ return typeof thing; }};

function isArray (thing){{ return thing instanceof Array; }};

function isObject (thing){{ return thing instanceof Object; }};

function isString (thing){{ return thing instanceof String; }};

function makeCodeElement(code, metastring, lang) {
  var codeElement;
  if (metastring !== undefined) {
    var metaSplits = Belt_List.fromArray(metastring.split(" "));
    codeElement = Belt_List.has(metaSplits, "example", (function (prim, prim$1) {
            return prim === prim$1;
          })) ? React.createElement(CodeExample.make, {
            code: code,
            lang: lang
          }) : (
        Belt_List.has(metaSplits, "sig", (function (prim, prim$1) {
                return prim === prim$1;
              })) ? React.createElement(CodeSignature.make, {
                code: code,
                lang: lang
              }) : React.createElement(CodeExample.make, {
                code: code,
                lang: lang
              })
      );
  } else {
    codeElement = React.createElement(CodeExample.make, {
          code: code,
          lang: lang
        });
  }
  return React.createElement("div", {
              className: "md-code font-mono block leading-tight mt-4 mb-10"
            }, codeElement);
}

function Text$Md$Code(Props) {
  var className = Props.className;
  var metastring = Props.metastring;
  var children = Props.children;
  var lang;
  if (className !== undefined) {
    var match = className.split("-");
    if (match.length !== 2) {
      lang = "none";
    } else {
      var match$1 = match[0];
      if (match$1 === "language") {
        var lang$1 = match[1];
        lang = lang$1 === "" ? "none" : lang$1;
      } else {
        lang = "none";
      }
    }
  } else {
    lang = "re";
  }
  if (isArray(children)) {
    var code = children.join("");
    return React.createElement(Text$Md$InlineCode, {
                children: Util.ReactStuff.s(code)
              });
  } else if (isObject(children)) {
    return children;
  } else {
    return makeCodeElement(children, metastring, lang);
  }
}

var Code = {
  typeOf: typeOf,
  isArray: isArray,
  isObject: isObject,
  isString: isString,
  makeCodeElement: makeCodeElement,
  make: Text$Md$Code
};

function Text$Md$P(Props) {
  var children = Props.children;
  return React.createElement("p", {
              className: "text-lg leading-4 my-6 text-inherit"
            }, children);
}

var P = {
  make: Text$Md$P
};

var refPrefix = "ref-";

var textRefPrefix = "ref-text-";

function Text$Md$A(Props) {
  var href = Props.href;
  var children = Props.children;
  var num = Number(href);
  if (isNaN(num)) {
    return React.createElement("a", {
                className: inline,
                href: href,
                rel: "noopener noreferrer"
              }, children);
  } else {
    var id = String(num | 0);
    return React.createElement(React.Fragment, undefined, React.createElement(Text$Anchor, {
                    name: textRefPrefix + id
                  }), React.createElement("a", {
                    className: "no-underline text-inherit",
                    href: "#" + (refPrefix + id)
                  }, React.createElement("span", {
                        className: "hover:border-b border-fire"
                      }, children), React.createElement("sup", {
                        className: "font-sans border-b-0 font-bold text-fire text-xs",
                        style: {
                          left: "0.05rem",
                          top: "-0.5rem"
                        }
                      }, Util.ReactStuff.s(id))));
  }
}

var A = {
  refPrefix: refPrefix,
  textRefPrefix: textRefPrefix,
  make: Text$Md$A
};

function Text$Md$Ul(Props) {
  var children = Props.children;
  return React.createElement("ul", {
              className: "md-ul my-4"
            }, children);
}

var Ul = {
  make: Text$Md$Ul
};

function Text$Md$Ol(Props) {
  var children = Props.children;
  return React.createElement("ol", {
              className: "md-ol ml-2"
            }, children);
}

var Ol = {
  make: Text$Md$Ol
};

function typeOf$1 (thing){{ return typeof thing; }};

function isArray$1 (thing){{ return thing instanceof Array; }};

function isSublist (element){{
        if(element == null || element.props == null) {
          return false;
        }
        const type = element.props.mdxType;
        return type === 'ul' || type === 'ol';
      }};

function Text$Md$Li(Props) {
  var children = Props.children;
  var elements;
  if (isArray$1(children)) {
    var last = Belt_Array.getExn(children, children.length - 1 | 0);
    if (isSublist(last)) {
      var head = children.slice(0, children.length - 1 | 0);
      elements = React.createElement(React.Fragment, undefined, React.createElement("p", undefined, Util.ReactStuff.ate(head)), last);
    } else {
      elements = React.createElement("p", undefined, children);
    }
  } else {
    elements = typeOf$1(children) === "string" ? React.createElement("p", undefined, children) : children;
  }
  return React.createElement("li", {
              className: "md-li mt-4 leading-4 ml-4 text-lg"
            }, elements);
}

var Li = {
  typeOf: typeOf$1,
  isArray: isArray$1,
  isSublist: isSublist,
  make: Text$Md$Li
};

var Md = {
  Pre: Pre,
  InlineCode: InlineCode,
  Table: Table,
  Thead: Thead,
  Th: Th,
  Td: Td,
  Code: Code,
  P: P,
  A: A,
  Ul: Ul,
  Ol: Ol,
  Li: Li
};

function Text$Introduction(Props) {
  var children = Props.children;
  return React.createElement("span", {
              className: "text-xl block"
            }, children);
}

var Introduction = {
  make: Text$Introduction
};

export {
  Link ,
  Anchor ,
  H1 ,
  H2 ,
  H3 ,
  H4 ,
  H5 ,
  Md ,
  Introduction ,
  
}
/* react Not a pure module */
