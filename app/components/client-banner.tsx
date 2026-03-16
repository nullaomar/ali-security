"use client";

const clients = [
  { name: "Hilton Hotels & Resorts", logo: "/clients/hilton.jpg" },
  { name: "Cineplex", logo: "/clients/cineplex.png" },
  { name: "Hampton by Hilton", logo: "/clients/hampton.png" },
  { name: "La Primavera Event Space", logo: "/clients/la-primavera.webp" },
  { name: "Hyatt", logo: "/clients/hyatt.jpg" },
  { name: "Precision Final Mile", logo: "/clients/precision-final-mile.jpeg" },
  { name: "Bridge Connect", logo: "/clients/bridge-connect.png" },
  { name: "Dream Unlimited", logo: "" },
];

export default function ClientBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0a1220] py-8 md:py-10">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a1220] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a1220] to-transparent" />

      <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white/20">
        Trusted by industry leaders
      </p>

      <div className="client-banner overflow-hidden">
        <div className="client-banner-track flex items-center">
          {[0, 1].map((setIdx) => (
            <div key={setIdx} className="flex shrink-0 items-center">
              {clients.map((client) => (
                <div
                  key={`${setIdx}-${client.name}`}
                  className="mx-10 flex shrink-0 items-center gap-3 md:mx-14"
                >
                  {client.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-9 w-9 shrink-0 rounded-lg object-cover grayscale opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                    />
                  ) : (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                      <span className="text-[14px] font-bold text-white/30">
                        {client.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="whitespace-nowrap text-[13px] font-medium text-white/30 transition-colors duration-500 hover:text-white/70">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
