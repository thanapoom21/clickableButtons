# MButtons

a library for buttons

## Dependencies

There are several dev-dependencies installed in this repo.

- husky
- lint-staged
- prettier
- sass

# Usage

## Basic Button

To use mButtons in your project, just add the classes of mButton you want to either `<button>` or `<a>` tags.

```html
<button class="sbtn basic-btn blue-btn">Button</button>
```

You can find all classes mentioned in our [MButtons Examples](https://mbuttons.io/examples) page.

## Issues

There's an issue with pre-commit hook with this configuration.

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
prettier --write "src/**/*.scss" "dist/dev/mbuttons.css" && git add .
```

```bash
✔ Preparing lint-staged...
✔ Running tasks for staged files...
✔ Applying modifications from tasks...
✔ Cleaning up temporary files...
.husky/pre-commit: line 5: prettier: command not found
husky - pre-commit hook exited with code 127 (error)
```

The problem is husky couldn't find the `prettier` command in the project directory.

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
node_modules/prettier/bin-prettier.js --write "src/**/*.scss" "dist/dev/mbuttons.css" && git add .
```

This is the temporary fix for the issue above. I'm not sure if there's a better solution like exporting $PATH to your machine's environment.
