<p align="center" style="margin: 2rem 0;">
  <picture>
    <source width="320" media="(prefers-color-scheme: dark)" srcset="https://zappicon.com/assets/frameworks/zappicon-tailwind-dark.svg">
    <source width="320" media="(prefers-color-scheme: light)" srcset="https://zappicon.com/assets/frameworks/zappicon-tailwind.svg">
    <img width="320" alt="zappicon vue plugin" src="https://zappicon.com/assets/frameworks/zappicon-tailwind.svg">
  </picture>
</p>

<p align="center">
  <a href="https://zappicon.com/">About</a>
  ·
  <a href="https://zappicon.com/icons/">Icons</a>
  ·
  <a href="https://zappicon.com/packages">Packages</a>
  ·
  <a href="https://zappicon.com/license">License</a>
  ·
  <a href="https://zappicon.com/contact">Support</a>
</p>

# Zappicon Tailwind CSS Plugin

[![npm version](https://badge.fury.io/js/%40zappicon%2Ftailwind.svg)](https://badge.fury.io/js/%40zappicon%2Ftailwind)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://zappicon.com/license)

A Tailwind CSS plugin for seamless integration of Zappicon's free and premium UI icon library into your Tailwind projects.

- 2,000+ Free icons (400+ Icons × 5 Styles).
- 5 Styles Available (Light, Regular, Filled, Duotone, Duotone Line).
- Unified keyline shapes on a 24×24 px grid.
- Easy customization of colors, sizes, and styles using Tailwind utilities.
  
>  **Pro Version**  with 23,000+ icons coming soon.

<a href="https://zappicon.com">
  <img 
    src="https://zappicon.com/images/og-image-zappicon.jpg" 
    alt="Zappicon - Free UI icons library"
    style="border: 1px solid #d1d9e0;"
  >
</a>

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
  prefix: "za";
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
      prefix: "za",
      size: "1em",
      color: "orange",
    }),
  ],
}
```

## Usage

You can also use icon classes in your markup (HTML, JSX, etc.):

```html
<i class="za-star-regular text-blue-500 w-6 h-6"></i>
```

## Icon Styles (Variants)

Each icon comes in 5 styles:

| Style        | Variant value  | Example class          |
| ------------ | -------------- | ---------------------- |
| Filled       | `filled`       | `za-star-filled`       |
| Regular      | `regular`      | `za-star-regular`      |
| Light        | `light`        | `za-star-light`        |
| Duotone      | `duotone`      | `za-star-duotone`      |
| Duotone Line | `duotone-line` | `za-star-duotone-line` |

## Customization

Use Tailwind utilities to customize icon size, color, and more:

```html
<i class="za-star-regular text-yellow-500"></i>
<i class="za-star-filled w-8 h-8 text-pink-600"></i>
```

## Support

- **Bug Reports**: [GitHub Issues](https://github.com/zappicon/zappicon-tailwind/issues)
- **Discussions**: [GitHub Discussions](https://github.com/zappicon/zappicon-tailwind/discussions)
- **Website**: [zappicon.com](https://zappicon.com)
