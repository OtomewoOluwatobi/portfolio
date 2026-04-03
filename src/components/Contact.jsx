import { contact } from '../data/portfolio.js';

export default function Contact() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Oluwatobi_Otomewo.pdf';
    link.download = 'Oluwatobi_Otomewo.pdf';
    link.click();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-left">
        <h2 className="contact-left-h">
          LET'S<br />
          <span className="lime-word">BUILD</span><br />
          TOGETHER.
        </h2>
        <p className="contact-left-sub">
          Open to senior / lead backend roles, contracts, and interesting collaborations.
          I work best with teams that care about quality, ownership, and impact.
        </p>
      </div>

      <div className="contact-right">
        <div className="c-links">
          <a className="c-link" href={`mailto:${contact.email}`}>
            <span className="c-link-icon">✉️</span>
            <span>
              <span className="c-lbl">EMAIL</span>
              {contact.email}
            </span>
          </a>
          <a className="c-link" href={`tel:${contact.phone}`}>
            <span className="c-link-icon">📞</span>
            <span>
              <span className="c-lbl">PHONE</span>
              {contact.phone}
            </span>
          </a>
          <a className="c-link" href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer">
            <span className="c-link-icon">🔗</span>
            <span>
              <span className="c-lbl">LINKEDIN</span>
              {contact.linkedin}
            </span>
          </a>
          <div className="c-link">
            <span className="c-link-icon">📍</span>
            <span>
              <span className="c-lbl">LOCATION</span>
              {contact.location}
            </span>
          </div>
        </div>

        <button className="dl-btn" onClick={downloadResume}>
          ↓ Download Resume
        </button>
      </div>
    </section>
  );
}
