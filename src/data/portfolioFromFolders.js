const modules = import.meta.glob(
  "../assets/portfolio/*/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,avif,AVIF}",
  { eager: true, import: "default" }
);

function prettifyName(name) {
  return decodeURIComponent(name).replace(/[-_]+/g, " ").trim();
}

export function buildPortfolioData() {
  const items = Object.entries(modules).map(([path, src]) => {
    const parts = path.split("/");
    const category = parts[parts.length - 2];
    const file = parts[parts.length - 1];
    const labelRaw = file.replace(/\.[^/.]+$/, "");

    return {
      id: path,
      category: prettifyName(category),
      label: prettifyName(labelRaw),
      src,
    };
  });

  const categories = Array.from(new Set(items.map((x) => x.category))).sort((a, b) =>
    a.localeCompare(b, "fa")
  );

  return {
    categories: ["همه نمونه‌کارها", ...categories],
    items,
  };
}
