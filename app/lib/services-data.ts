export type ServiceData = {
  title: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  iconPath: string;
  image: string;
};

// Main 4 services (displayed prominently on homepage)
export const services: ServiceData[] = [
  {
    title: "REIT Security",
    slug: "reit-security",
    shortDesc:
      "Comprehensive security solutions for real estate investment trusts, protecting multi-property portfolios and tenants.",
    longDesc:
      "Capra Security delivers tailored security programs for Real Estate Investment Trusts managing residential, commercial, and mixed-use portfolios. We provide consistent, professional security across all your properties - from concierge-level lobby presence to overnight patrol coverage. Our REIT-focused approach ensures tenant satisfaction, asset protection, and regulatory compliance across your entire portfolio.",
    features: [
      "Multi-property portfolio security management",
      "Tenant safety and satisfaction programs",
      "Lobby and common area security presence",
      "Parking structure and amenity monitoring",
      "Incident reporting with portfolio-wide analytics",
      "Scalable coverage across residential and commercial assets",
    ],
    iconPath: "M3 21h18 M3 7v14 M21 7v14 M6 11h2 M6 15h2 M10 11h2 M10 15h2 M14 11h2 M14 15h2 M18 11h2 M18 15h2 M12 3l9 4H3l9-4z",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format",
  },
  {
    title: "Property Management Security",
    slug: "property-management",
    shortDesc:
      "Dedicated security services for property managers overseeing residential, commercial, and mixed-use buildings.",
    longDesc:
      "Capra Security partners with property management companies to deliver reliable, professional security tailored to each building's needs. From access control and visitor management to emergency response and overnight patrols, our guards integrate seamlessly with your management team. We help reduce liability, protect tenants, and maintain the safety standards that elevate your properties.",
    features: [
      "Access control and visitor management",
      "Overnight and weekend patrol coverage",
      "Emergency response coordination",
      "Tenant complaint and disturbance resolution",
      "Building safety compliance support",
      "Detailed shift reports for property managers",
    ],
    iconPath: "M3 21h18 M9 8h1 M9 12h1 M9 16h1 M14 8h1 M14 12h1 M14 16h1 M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format",
  },
  {
    title: "Commercial & Industrial Logistics",
    slug: "commercial-industrial-logistics",
    shortDesc:
      "Specialized security for commercial facilities, manufacturing plants, warehouses, and distribution centres.",
    longDesc:
      "Capra Security provides specialized security solutions for commercial operations, manufacturing plants, warehouses, distribution centres, and industrial facilities. Our guards are trained in industrial safety protocols, access control systems, and hazard awareness. We protect your assets, personnel, and supply chain operations while maintaining compliance with workplace safety regulations.",
    features: [
      "Manufacturing plant and warehouse security",
      "Supply chain and logistics protection",
      "Access control and visitor management",
      "Perimeter security and intrusion detection",
      "Hazardous materials area monitoring",
      "Asset protection and inventory security",
    ],
    iconPath: "M2 20h20 M5 20V8l5 4V8l5 4V4l5 4v12",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80&auto=format",
  },
  {
    title: "Mobile Security Guard",
    slug: "mobile-security",
    shortDesc:
      "Marked vehicle patrols with randomized routes providing a visible deterrent and rapid on-site response capabilities.",
    longDesc:
      "Our Mobile Security Guard service provides marked vehicle patrols with randomized routes, creating a visible deterrent across your properties. GPS-tracked guards deliver real-time reporting and rapid on-site response. Whether you manage multiple locations, large campuses, or remote sites, our mobile patrol teams cover more ground efficiently while maintaining the highest standards of vigilance and professionalism.",
    features: [
      "Marked patrol vehicles for maximum deterrence",
      "GPS-tracked routes with real-time monitoring",
      "Randomized patrol schedules",
      "Rapid on-site emergency response",
      "Multi-property coverage capability",
      "Digital reporting after each patrol checkpoint",
    ],
    iconPath: "M1 3h15a2 2 0 012 2v11H1V5a2 2 0 012-2z M16 8h4l3 3v5h-7V8z M5.5 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z M18.5 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
    image: "/mobile-patrol-new.jpg",
  },
  // ── Additional services (dropdown / services page only) ──
  {
    title: "Loss Prevention",
    slug: "loss-prevention",
    shortDesc:
      "Security audits and on-site loss prevention for retail, logistics, and transportation providers.",
    longDesc:
      "Loss prevention security audits are an invaluable tool for retail, logistics, and transportation providers. Capra Security delivers comprehensive assessments that inform decision-making on security investments. Our loss prevention specialists combine undercover and uniformed approaches to reduce theft, fraud, and shrinkage. We analyze your operations, identify vulnerabilities, and implement targeted strategies to protect your bottom line.",
    features: [
      "Comprehensive security audits and assessments",
      "Undercover and uniformed loss prevention officers",
      "Retail theft and fraud reduction strategies",
      "Logistics and supply chain security",
      "Employee awareness and training programs",
      "Data-driven reporting on shrinkage reduction",
    ],
    iconPath: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    image: "/loss-prevention.jpeg",
  },
  {
    title: "Event Security",
    slug: "event-security",
    shortDesc:
      "Professional security personnel acting as friendly and approachable ambassadors for safe, high-visibility events.",
    longDesc:
      "Capra Security provides professional security personnel who are focused on customer service, acting as friendly and approachable ambassadors for your event. Our teams maintain high-visibility, safe environments for events of any scale - from corporate conferences and festivals to private gatherings and sporting events. We handle crowd management, access control, VIP protection, and emergency coordination.",
    features: [
      "Crowd management and flow control",
      "VIP and executive protection details",
      "Access control and credential verification",
      "Emergency evacuation planning and execution",
      "Customer-service-focused security presence",
      "Pre-event security assessments and planning",
    ],
    iconPath: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75",
    image: "/event-security.jpeg",
  },
  {
    title: "Onsite Construction Security",
    slug: "construction-security",
    shortDesc:
      "Dedicated security for construction sites protecting equipment, materials, and personnel around the clock.",
    longDesc:
      "Our Onsite Construction Security service provides dedicated protection for construction sites of all sizes. We prevent theft of equipment and materials, deter vandalism, and control unauthorized access. Our guards understand construction site safety protocols, work alongside your project team, and provide 24/7 coverage to keep your investment protected throughout every phase of the build.",
    features: [
      "24/7 construction site coverage",
      "Equipment and materials theft prevention",
      "Unauthorized access control",
      "Vandalism deterrence and reporting",
      "Construction safety protocol compliance",
      "Coordination with site foremen and project managers",
    ],
    iconPath: "M2 6h20v12H2z M12 2v4 M6 18v4 M18 18v4 M2 12h20",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format",
  },
  {
    title: "Fire Watch Security Guard",
    slug: "fire-watch",
    shortDesc:
      "Provincial Fire Code compliant fire watch services for fire departments, commercial enterprises, construction, and restoration companies.",
    longDesc:
      "Capra Security provides Fire Watch security for fire departments, commercial enterprises, construction, and restoration companies. Our guards ensure full compliance with Provincial Fire Code Regulations and Municipal/City Bylaws. We deploy immediately when fire suppression systems are down, during hot work operations, or whenever a fire watch is mandated. Our personnel are trained in fire prevention protocols, evacuation procedures, and emergency response coordination.",
    features: [
      "Provincial Fire Code Regulation compliance",
      "Municipal and City Bylaw adherence",
      "Immediate emergency deployment",
      "Hot work monitoring and supervision",
      "Fire suppression system downtime coverage",
      "Detailed incident and patrol logging",
    ],
    iconPath: "M12 22c-4.97 0-9-2.686-9-6v-.002C3 8.168 12 2 12 2s9 6.168 9 13.998V16c0 3.314-4.03 6-9 6z M12 22c-1.657 0-3-1.343-3-3v-.002C9 14.998 12 12 12 12s3 2.998 3 6.998V19c0 1.657-1.343 3-3 3z",
    image: "/fire-watch-security.jpg",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
