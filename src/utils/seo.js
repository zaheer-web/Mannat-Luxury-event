export const setSEO = ({
  title,
  description,
  keywords = [],
  url,
  canonical,
  schema
}) => {
  // ✅ TITLE
  if (title) document.title = title;

  // =========================
  // ✅ META HELPER
  // =========================
  const setMeta = (name, content, attr = "name") => {
    if (!content) return;

    let tag = document.querySelector(`meta[${attr}="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attr, name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  // =========================
  // ✅ BASIC SEO
  // =========================
  setMeta("description", description);

  if (keywords.length) {
    setMeta("keywords", keywords.join(", "));
  }

  // =========================
  // ✅ OG (DYNAMIC PART ONLY)
  // =========================
  setMeta("og:title", title, "property");
  setMeta("og:description", description, "property");
  setMeta("og:url", url, "property");

  // =========================
  // ✅ TWITTER (DYNAMIC)
  // =========================
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);

  // =========================
  // ✅ CANONICAL
  // =========================
  if (canonical || url) {
    let link = document.querySelector(`link[rel="canonical"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical || url);
  }

  // =========================
  // ✅ SCHEMA (PAGE LEVEL)
  // =========================
  if (schema) {
    let script = document.querySelector(
      'script[data-type="dynamic-schema"]'
    );

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-type", "dynamic-schema");
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }
};