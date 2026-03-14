const download = {
  href: "/downloads/visio-setup-1.1.0-x64.exe",
  fileName: "visio-setup-1.1.0-x64.exe",
  version: "1.1.0",
  size: "95.5 MB",
  platform: "Windows x64",
};

const highlights = [
  "Direct installer download",
  "Single-file Windows setup",
  "Minimal landing page for the initial release",
];

export default function HomePage() {
  return (
    <main className="page">
      <div className="page__glow page__glow--left" aria-hidden="true" />
      <div className="page__glow page__glow--right" aria-hidden="true" />

      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Visio</p>
          <h1>Download the latest Visio installer.</h1>
          <p className="hero__copy">
            A focused landing page for the first release. Open the installer,
            run setup, and get into the product without extra friction.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#download">
              Get Visio
            </a>
            <a
              className="button button--secondary"
              href={download.href}
              download={download.fileName}
            >
              Download .exe
            </a>
          </div>

          <ul className="highlights" aria-label="Key highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <aside id="download" className="download-card">
          <p className="download-card__label">Current build</p>
          <h2>{download.fileName}</h2>

          <dl className="download-meta">
            <div>
              <dt>Version</dt>
              <dd>{download.version}</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>{download.platform}</dd>
            </div>
            <div>
              <dt>File size</dt>
              <dd>{download.size}</dd>
            </div>
          </dl>

          <a
            className="button button--primary button--full"
            href={download.href}
            download={download.fileName}
          >
            Download for Windows
          </a>

          <p className="download-card__note">
            The installer is hosted directly by this site from the static
            downloads folder.
          </p>
        </aside>
      </section>
    </main>
  );
}

