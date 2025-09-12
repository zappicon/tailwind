# Zappicon Tailwind CSS Plugin

[![npm version](https://badge.fury.io/js/%40zappicon%2Ftailwind.svg)](https://badge.fury.io/js/%40zappicon%2Ftailwind)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://zappicon.com/license)

A Tailwind CSS plugin for seamless integration of Zappicon's free & premium UI icon library into your Tailwind projects.

- 11,000+ Free icons (220+ Icons × 5 Styles)
- 5 Styles Available (Light, Regular, Filled, Duotone, Duotone Line)
- Unified keyline shapes on a 24×24 px grid
- Easy customization of colors, sizes, and styles using Tailwind utilities

## Features

- Use Zappicon icons as Tailwind CSS components or utilities
- Full TypeScript support
- Works with all Tailwind CSS projects (v3+)
- SVG-based icons that scale perfectly on any device
- Tree-shakeable: only includes icons you use

## Installation

```bash
# Using npm
npm install @zappicon/tailwind

# Using yarn
yarn add @zappicon/tailwind

# Using pnpm
pnpm add @zappicon/tailwind
```

## Configuration

### TailwindCSS v4

```css
@plugin "zappicon-tailwind";

/* with options */
@plugin "zappicon-tailwind" {
  prefix: "zi";
  size: "1em";
  color: "orange";
}
```

### TailwindCSS v3

In your `tailwind.config.js`

```js
const { zappicon } = require("zappicon-tailwind")

module.exports = {
  plugins: [
    zappicon({
      prefix: "zi",
      size: "1em",
      color: "orange",
    }),
  ],
}
```

## Usage

You can also use icon classes in your markup (HTML, JSX, etc.):

```html
<i class="zi-star-regular text-blue-500 w-6 h-6"></i>
```

## Icon Styles (Variants)

Each icon comes in 5 styles:

| Style        | Variant value  | Example class          |
| ------------ | -------------- | ---------------------- |
| Filled       | `filled`       | `zi-star-filled`       |
| Regular      | `regular`      | `zi-star-regular`      |
| Light        | `light`        | `zi-star-light`        |
| Duotone      | `duotone`      | `zi-star-duotone`      |
| Duotone Line | `duotone-line` | `zi-star-duotone-line` |

## Customization

Use Tailwind utilities to customize icon size, color, and more:

```html
<i class="zi-star-regular text-2xl text-yellow-500"></i>
<i class="zi-star-filled w-8 h-8 text-pink-600"></i>
```

## Support

- **Bug Reports**: [GitHub Issues](https://github.com/zappicon/zappicon-tailwind/issues)
- **Discussions**: [GitHub Discussions](https://github.com/zappicon/zappicon-tailwind/discussions)
- **Website**: [zappicon.com](https://zappicon.com)
