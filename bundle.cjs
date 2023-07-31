const { context } = require("esbuild");

async function main() {
  const common = {
    bundle: true,
    minify: false,
    treeShaking: true,
    sourcemap: true,
    format: "esm",
  };
  const client = await context({
    ...common,
    entryPoints: ["src/client/main.tsx"],
    platform: "browser",
    outfile: "build/client.js",
  });
  await client.watch();
}

main().catch(console.error);
