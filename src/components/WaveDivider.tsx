const PATHS = [
  "M0,32 C180,88 360,8 600,46 C840,84 1020,10 1260,42 C1350,56 1410,50 1440,44 L1440,120 L0,120 Z",
  "M0,50 C220,10 420,96 660,54 C900,14 1140,92 1440,40 L1440,120 L0,120 Z",
  "M0,72 C220,18 420,8 640,34 C880,62 1120,78 1440,52 L1440,120 L0,120 Z",
];

export default function WaveDivider({
  from,
  to,
  variant = 0,
}: {
  /** background color the divider sits on top of (the section above) */
  from: string;
  /** color of the wave shape (the section below) */
  to: string;
  variant?: 0 | 1 | 2;
}) {
  return (
    <div
      aria-hidden
      className="relative h-14 w-full overflow-hidden sm:h-20"
      style={{ backgroundColor: from }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path d={PATHS[variant]} fill={to} />
      </svg>
    </div>
  );
}
