import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 800, height: 1000 } });

const pages = [
  ["home", "http://localhost:3000/"],
  ["blogs", "http://localhost:3000/blogs"],
  ["projects", "http://localhost:3000/projects"],
];

for (const [name, url] of pages) {
  await page.goto(url, { waitUntil: "networkidle" });
  await page.screenshot({ path: `/private/tmp/claude-501/-Users-niku-Documents-personal-personal-blog/35d21f42-e30d-4343-813c-ddc2add6e5f8/scratchpad/${name}.png`, fullPage: true });
  const errors = [];
  page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
}

await browser.close();
console.log("done");
