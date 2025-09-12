import plugin from "tailwindcss/plugin"
import { nodeToString, svgToDataUrl } from "./utils"
import icons from "../core/src/index"

interface IconPluginOptions {
  prefix?: string
  size?: string
  color?: string
}

const defaultOptions: IconPluginOptions = {
  prefix: "zi",
  size: "1rem",
  color: "currentColor",
}

export const zappicon = plugin.withOptions<IconPluginOptions>(
  (options = {}) => {
    const opts = { ...defaultOptions, ...options }

    return ({ matchComponents }) => {
      const components: Record<string, Record<string, string>> = {}

      for (const icon of icons) {
        for (const variant of icon.variants) {
          const svg = nodeToString(variant.svg)
          const dataUrl = svgToDataUrl(svg)
          const key = `${icon.name}-${variant.variant}`

          components[key] = {
            display: "inline-block",
            width: "1em",
            height: "1em",
            fontSize: opts.size!,
            "background-color": "currentColor",
            color: opts.color!,
            "-webkit-mask-image": "var(--svg)",
            "mask-image": "var(--svg)",
            "-webkit-mask-repeat": "no-repeat",
            "mask-repeat": "no-repeat",
            "-webkit-mask-size": "100% 100%",
            "mask-size": "100% 100%",
            "--svg": dataUrl,
          }
        }
      }

      matchComponents(
        {
          [opts.prefix!]: (value: string) => components[value] || {},
        },
        {
          values: Object.keys(components).reduce(
            (acc, key) => ({ ...acc, [key]: key }),
            {}
          ),
        }
      )
    }
  }
)

export default zappicon
