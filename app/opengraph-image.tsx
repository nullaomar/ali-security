import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Capra Security - Security You Can Trust";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f1b2d 0%, #1a2d47 50%, #0f1b2d 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://caprasecurity.ca/logoo.jpg"
          alt="Capra Security Logo"
          width={180}
          height={180}
          style={{ borderRadius: "20px", marginBottom: "30px" }}
        />
        <div
          style={{
            fontSize: "52px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "6px",
            marginBottom: "8px",
          }}
        >
          CAPRA
        </div>
        <div
          style={{
            fontSize: "22px",
            fontWeight: 400,
            color: "#a08030",
            letterSpacing: "3px",
          }}
        >
          Security Services Inc.
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "#8899aa",
            marginTop: "24px",
            letterSpacing: "1px",
          }}
        >
          Security You Can Trust
        </div>
      </div>
    ),
    { ...size }
  );
}
