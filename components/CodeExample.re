open Util.ReactStuff;

[@react.component]
let make = (~code: string, ~lang) => {
  let highlighted = HighlightJs.(highlight(~lang, ~value=code)->valueGet);

  let children =
    ReactDOMRe.createElementVariadic(
      "code",
      ~props=
        ReactDOMRe.objToDOMProps({
          "className": "wrap hljs lang-" ++ lang,
          "dangerouslySetInnerHTML": {
            "__html": highlighted,
          },
        }),
      [||],
    );

  let langShortname =
    switch (lang) {
    | "ocaml" => "ml"
    | "reason" => "re"
    | "bash" => "sh"
    | rest => rest
    };

  <div
    className="flex flex-col -mx-8 xs:mx-0 rounded-none xs:rounded border border-snow-dark bg-snow-light py-2 px-3 text-night-dark">
    <div className="font-sans text-sm mb-3 font-bold text-fire">
      {Js.String2.toUpperCase(langShortname)->s}
    </div>
    <div className="pl-5 text-base pb-4 overflow-x-auto"> children </div>
  </div>;
};
