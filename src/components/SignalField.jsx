import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { id: "product", x: 24, y: 24, label: "PRODUCT" },
  { id: "platform", x: 77, y: 25, label: "PLATFORM" },
  { id: "service", x: 74, y: 72, label: "SERVICE" },
  { id: "delivery", x: 27, y: 75, label: "DELIVERY" },
];

export default function SignalField() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="signal-field" aria-hidden="true">
      <div className="signal-field__halo signal-field__halo--one" />
      <div className="signal-field__halo signal-field__halo--two" />
      <svg viewBox="0 0 100 100" className="signal-field__svg" role="presentation">
        <defs>
          <linearGradient id="signal-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c8ff6a" />
            <stop offset="100%" stopColor="#64b7ff" />
          </linearGradient>
        </defs>
        <path className="signal-field__grid" d="M 0 25 H 100 M 0 50 H 100 M 0 75 H 100 M 25 0 V 100 M 50 0 V 100 M 75 0 V 100" />
        <path className="signal-field__route" d="M24 24 C42 10, 60 16, 77 25 S91 54, 74 72 S40 90, 27 75 S8 40, 24 24" />
        <path className="signal-field__route signal-field__route--secondary" d="M24 24 L74 72 M77 25 L27 75" />
        {nodes.map((node, index) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="6.8"
              className="signal-field__node-ring"
              animate={shouldReduceMotion ? undefined : { scale: [1, 1.18, 1], opacity: [0.25, 0.72, 0.25] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.32, ease: "easeInOut" }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
            <circle cx={node.x} cy={node.y} r="3.1" className="signal-field__node" />
            <text x={node.x} y={node.y + 11} textAnchor="middle" className="signal-field__label">
              {node.label}
            </text>
          </g>
        ))}
        {!shouldReduceMotion && (
          <motion.circle
            r="1.8"
            fill="#c8ff6a"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            style={{ offsetPath: "path('M24 24 C42 10, 60 16, 77 25 S91 54, 74 72 S40 90, 27 75 S8 40, 24 24')" }}
          />
        )}
      </svg>
      <div className="signal-field__terminal">
        <span>SYS / LA-01</span>
        <span className="signal-field__terminal-status"><i /> ONLINE</span>
      </div>
    </div>
  );
}
