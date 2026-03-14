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

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="github-link__icon"
    >
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.95.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.45-2.7 5.42-5.28 5.7.41.36.78 1.07.78 2.17 0 1.57-.02 2.83-.02 3.22 0 .31.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="page">
      <a
        className="github-link"
        href="https://github.com/raimovv/visio"
        target="_blank"
        rel="noreferrer"
        aria-label="Open the Visio GitHub repository"
      >
        <span className="github-link__halo" aria-hidden="true" />
        <GitHubIcon />
        <span className="github-link__label">GitHub</span>
      </a>

      <div className="page__glow page__glow--left" aria-hidden="true" />
      <div className="page__glow page__glow--right" aria-hidden="true" />

      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Visio</p>
          <h1>Download the latest Visio installer.</h1>
          <p className="hero__copy">
            Visio is a Windows-first desktop app for reducing eye strain during
            screen work. It runs locally on your machine, uses your webcam for
            blink and face tracking, reminds you to blink when you stare too
            long, and supports a practical 20-20-20 break workflow.
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
