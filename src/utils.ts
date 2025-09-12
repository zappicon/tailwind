type Node = {
  name: string
  type?: string
  value?: string
  parent?: Node | null
  attributes?: Record<string, string>
  children?: readonly Node[]
}

export function nodeToString(node: Node): string {
  const { name, attributes, children } = node
  const attrs = Object.entries(attributes || {})
    .map(([k, v]) => `${k}="${v}"`)
    .join(" ")

  const childrenStr = (children || []).map(nodeToString).join("")

  return `<${name}${attrs ? " " + attrs : ""}>${childrenStr}</${name}>`
}
export function svgToDataUrl(svg: string) {
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`
}
