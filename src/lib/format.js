// Month/year formatting that keeps Latin digits in Arabic too, so dates read consistently next to code and URLs.

export function formatMonth(ym, lang) {
  if (!ym) return "";
  const [year, month] = String(ym).split("-");
  const y = Number(year);
  const m = Number(month);
  if (!y) return String(ym);
  if (!m) return String(y);
  const locale = lang === "ar" ? "ar-u-nu-latn" : "en-GB";
  try {
    return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric", timeZone: "UTC" }).format(
      new Date(Date.UTC(y, m - 1, 1))
    );
  } catch {
    return `${year}-${month}`;
  }
}

export function formatPeriod(start, end, lang, presentLabel) {
  const a = formatMonth(start, lang);
  const b = end === "Present" || end === null ? presentLabel : formatMonth(end, lang);
  if (a && b) return `${a} – ${b}`;
  return b || a || "";
}

export function yearsSince(startYear, now = new Date()) {
  return Math.max(1, now.getFullYear() - startYear);
}

export function waLink(number, text) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function mailLink(email, subject, body) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
