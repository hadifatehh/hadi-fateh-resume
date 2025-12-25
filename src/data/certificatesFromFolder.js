const certModules = import.meta.glob(
  "../assets/certificates/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,avif,AVIF}",
  { eager: true, import: "default" }
);

function labelFromPath(path) {
  const file = path.split("/").pop() || "";
  return decodeURIComponent(file.replace(/\.[^/.]+$/, "")).replace(/[-_]+/g, " ").trim();
}

export function buildCertificates() {
  return Object.entries(certModules).map(([path, src]) => ({
    id: path,
    title: labelFromPath(path),
    src,
  }));
}
