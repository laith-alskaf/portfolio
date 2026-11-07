// Small inline icons. Stroke icons for actions; plain lettermarks for brands (no third-party logos).

const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
};

// Arrow that points "forward": right in LTR, left in RTL (flipped by CSS).
export const ArrowIcon = (props) => (
  <svg {...base} className="icon icon-arrow" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const BackIcon = (props) => (
  <svg {...base} className="icon icon-arrow icon-back" {...props}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const ExternalIcon = (props) => (
  <svg {...base} className="icon" {...props}>
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
);

export const MailIcon = (props) => (
  <svg {...base} className="icon" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const DownloadIcon = (props) => (
  <svg {...base} className="icon" {...props}>
    <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
  </svg>
);

export const CodeIcon = (props) => (
  <svg {...base} className="icon" {...props}>
    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
  </svg>
);

export const PlayIcon = (props) => (
  <svg {...base} className="icon" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m10 8.5 5 3.5-5 3.5z" />
  </svg>
);

export const GlobeIcon = (props) => (
  <svg {...base} className="icon" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
  </svg>
);

export const SendIcon = (props) => (
  <svg {...base} className="icon" {...props}>
    <path d="M21 3 10 14M21 3l-7 18-4-7-7-4z" />
  </svg>
);

export const Mark = ({ children }) => (
  <span className="mark" aria-hidden="true">
    {children}
  </span>
);
