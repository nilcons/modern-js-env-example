# How to use rollup in prod, and ONLY a browser in dev

This repository demonstrates how to have an environment, where
developers can start to work on the code with an editor right away and
test the code just with a browser, even on `file://` (assuming they
use Firefox or Chrome with `--allow-file-access-from-files`).

In this environment they can use ES6 features via Babel, they can use
the `import` syntax, do the fancy and modern `async`-`await`, the
lambda arrows, the React JSX kludge and all that...

When time comes to ship their code, it's ready to be rolled up into a
self-contained, cozy bundle, provided from `npm` packages via `rollup`.

No software engineering has been done on my part, I just stood on the
shoulders of giants and hit the not-so-high-quality tools that came
out of their heads until everything was working together.  No giant
was hurt.

Next time please give me taller ones, and if I failed to notice
something from up there that you know about, please leave a ticket or
a code comment for me on Github!

# Usage instructions

In dev: just use an editor and a browser (I checked Firefox and Chrome).

In prod: `npm install`, `npm run build` and ship the prod directory.

# Demo

https://nilcons.github.io/modern-js-env-example/

Don't forget to hit F12 and look around in your debugger on the
network and the console tab.
