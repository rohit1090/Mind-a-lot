import Image from "next/image";

const NODES = [
  {
    key: "schools",
    label: "Schools",
    description: "Early emotional development & counseling",
    x: 35,
    y: 11,
    image: "Schools.png",
    width: 70,
    height: 69,
  },
  {
    key: "universities",
    label: "Universities",
    description: "Student well-being, stress & career guidance",
    x: 73,
    y: 11,
    image: "Universities.png",
    width: 70,
    height: 69,
  },
  {
    key: "corporates",
    label: "Corporates",
    description: "EAP programs, burnout prevention & leadership wellness",
    x: 89,
    y: 43,
    image: "Corporates.png",
    width: 69,
    height: 68,
  },
  {
    key: "retirement",
    label: "Retirement",
    description: "Loneliness mitigation & purpose-driven wellness",
    x: 60,
    y: 83,
    image: "Retirement.png",
    width: 66,
    height: 68,
  },
  {
    key: "families",
    label: "Families",
    description: "Relationships, parenting & holistic family support",
    x: 18,
    y: 43,
    image: "Families.png",
    width: 69,
    height: 67,
  },
];

const LINE_TARGETS = [
  { x: 182, y: 60 },
  { x: 380, y: 60 },
  { x: 460, y: 220 },
  { x: 310, y: 430 },
  { x: 95, y: 220 },
];

const INNER_DOTS = [
  { x: 221, y: 160 },
  { x: 320, y: 160 },
  { x: 360, y: 240 },
  { x: 285, y: 345 },
  { x: 177, y: 240 },
];

const OUTER_DOTS = [
  { x: 194, y: 90 },
  { x: 362, y: 90 },
  { x: 430, y: 226 },
  { x: 303, y: 405 },
  { x: 120, y: 226 },
];

export function EcosystemDiagram() {
  return (
    <div className="mx-auto w-full max-w-[480px]">
      <div className="text-center">
        <p className="text-[10px] tracking-[0.18em] text-text-muted">
          LIFELONG CARE
        </p>
        <p className="mt-0.5 text-[10px] font-semibold tracking-[0.18em] text-brand">
          ONE ECOSYSTEM
        </p>
      </div>

      <div className="relative mt-4 aspect-square w-full">
        <svg viewBox="0 0 520 520" className="absolute inset-0 z-0 h-full w-full">
          <circle
            cx="260"
            cy="260"
            r="200"
            className="stroke-brand/15"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="260"
            cy="260"
            r="145"
            className="stroke-brand/10"
            strokeWidth="1"
            fill="none"
          />
          {LINE_TARGETS.map((target) => (
            <line
              key={`${target.x}-${target.y}`}
              x1="260"
              y1="260"
              x2={target.x}
              y2={target.y}
              className="stroke-brand/35"
              strokeWidth="1.2"
              strokeDasharray="5 4"
            />
          ))}
          {INNER_DOTS.map((point) => (
            <circle
              key={`inner-${point.x}-${point.y}`}
              cx={point.x}
              cy={point.y}
              r="4"
              className="fill-brand/40"
            />
          ))}
          {OUTER_DOTS.map((point) => (
            <circle
              key={`outer-${point.x}-${point.y}`}
              cx={point.x}
              cy={point.y}
              r="4"
              className="fill-text-muted/60"
            />
          ))}
        </svg>

        <div className="absolute top-1/2 left-1/2 z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full border border-brand/20" />
          <div className="absolute top-1/2 left-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-radial from-brand to-brand-dark shadow-xl shadow-brand/30">
            <Image
              src="/images/image.png"
              alt="Mind A Lot"
              width={75}
              height={98}
              className="h-auto w-[70px]"
            />
          </div>
        </div>

        {NODES.map((node) => (
          <div
            key={node.key}
            className="absolute z-10 flex w-28 flex-col items-center text-center"
            style={{
              top: `${node.y}%`,
              left: `${node.x}%`,
              transform: "translate(-50%,-50%)",
            }}
          >
            <Image
              src={`/images/${node.image}`}
              alt=""
              width={node.width}
              height={node.height}
              className="h-14 w-14 drop-shadow-sm"
            />
            <p className="mt-2 rounded-full border border-brand/20 bg-cream px-4 py-1 text-sm font-semibold text-text-dark">
              {node.label}
            </p>
            <p className="mt-2 text-[11px] leading-tight text-text-muted">
              {node.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
