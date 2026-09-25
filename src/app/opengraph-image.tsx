import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.roles[0]}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #050508 0%, #1a1030 55%, #06242c 100%)",
          color: "#f4f1ea",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#22d3ee",
          }}
        >
          {site.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 0.95 }}>
            {site.name}
          </div>
          <div style={{ marginTop: 20, fontSize: 32, color: "#c4b5fd" }}>
            {site.roles[0]}
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#a8a3b5", maxWidth: 900 }}>
          {site.pitch}
        </div>
      </div>
    ),
    size,
  );
}
