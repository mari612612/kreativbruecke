import type { NextConfig } from "next";
import { STRIPE_DONATION_URL } from "./src/lib/donation";

const nextConfig: NextConfig = {
  // Kurze, druckbare Adresse (z. B. für QR-Codes): kreativbruecke.org/spenden
  // leitet direkt zur Stripe-Spendenseite weiter. Temporär (307), damit der
  // Ziel-Link später ohne Cache-Probleme ausgetauscht werden kann.
  async redirects() {
    return [
      { source: "/spenden", destination: STRIPE_DONATION_URL, permanent: false },
    ];
  },
};

export default nextConfig;
