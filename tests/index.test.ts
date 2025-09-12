import postcss from "postcss"
import tailwindcss from "tailwindcss"
import { zappicon } from "../src"

test("generates icon CSS correctly", async () => {
  const result = await postcss([
    tailwindcss({
      config: {
        content: [
          {
            raw: '<i class="i-angle-down-small-regular"></i><',
            extension: "html",
          },
        ],
        plugins: [
          zappicon({
            prefix: "i",
            size: "1em",
            color: "currentColor",
          }),
        ],
      },
    }),
  ]).process("@tailwind components;", { from: undefined })

  expect(result.css).toBe(`.i-angle-down-small-regular {
    display: inline-block;
    width: 1em;
    height: 1em;
    font-size: 1em;
    background-color: currentColor;
    color: currentColor;
    -webkit-mask-image: var(--svg);
    mask-image: var(--svg);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    --svg: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M6.47%209.47a.75.75%200%200%201%201.06%200L12%2013.94l4.47-4.47a.75.75%200%201%201%201.06%201.06l-5%205a.75.75%200%200%201-1.06%200l-5-5a.75.75%200%200%201%200-1.06%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E")
}`)
})
