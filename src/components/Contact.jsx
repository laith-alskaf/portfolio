import { useState } from "react";
import { usePrefs } from "../lib/prefs.jsx";
import { intents, person } from "../content/profile.js";
import { mailLink, waLink } from "../lib/format.js";
import { DownloadIcon, Mark, MailIcon, SendIcon } from "./Icons.jsx";

export default function Contact() {
  const { t, pick, lang } = usePrefs();
  const [intentId, setIntentId] = useState("idea");
  const [edited, setEdited] = useState(null); // text the visitor typed; null = use the template

  const intent = intents.find((i) => i.id === intentId) || intents[0];
  const template = pick(intent.message);
  const message = edited === null ? template : edited;
  const subject = lang === "ar" ? "رسالة من موقعك" : "Message from your portfolio";

  const choose = (id) => {
    setIntentId(id);
    setEdited(null);
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div>
          <p className="kicker">{t("contactKicker")}</p>
          <h2 className="display h2">{t("contactTitle")}</h2>
          <p className="lead">{t("contactIntro")}</p>

          <ul className="direct">
            <li>
              <a href={`mailto:${person.email}`}>
                <MailIcon /> <span dir="ltr">{person.email}</span>
              </a>
            </li>
            <li>
              <a href={waLink(person.whatsappNumber, "")} target="_blank" rel="noopener noreferrer">
                <Mark>WA</Mark> {t("contactWhatsApp")}
              </a>
            </li>
            <li>
              <a href={person.telegram} target="_blank" rel="noopener noreferrer">
                <Mark>TG</Mark> {t("contactTelegram")}
              </a>
            </li>
            <li>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                <Mark>in</Mark> {t("contactLinkedIn")}
              </a>
            </li>
            <li>
              <a href={person.github} target="_blank" rel="noopener noreferrer">
                <Mark>GH</Mark> {t("contactGitHub")}
              </a>
            </li>
            <li>
              <a href={person.cv.url} target="_blank" rel="noopener noreferrer">
                <DownloadIcon /> {t("contactCv")}
              </a>
            </li>
          </ul>
          <p className="muted small">
            {t("contactReply")} {t("contactLocation")}
          </p>
        </div>

        <div className="composer">
          <h3 className="h4" id="intent-title">
            {t("intentTitle")}
          </h3>
          <div className="filters" role="group" aria-labelledby="intent-title">
            {intents.map((i) => (
              <button key={i.id} type="button" className="chip-btn" aria-pressed={i.id === intentId} onClick={() => choose(i.id)}>
                {pick(i.label)}
              </button>
            ))}
          </div>

          <label className="field">
            <span>{t("messagePreview")}</span>
            <textarea rows={5} value={message} onChange={(e) => setEdited(e.target.value)} />
          </label>

          <div className="cta-row">
            <a className="btn btn-primary" href={waLink(person.whatsappNumber, message)} target="_blank" rel="noopener noreferrer">
              <SendIcon /> {t("sendVia")}
            </a>
            <a className="btn btn-ghost" href={mailLink(person.email, subject, message)}>
              <MailIcon /> {t("sendViaEmail")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
