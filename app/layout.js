import localFont from "next/font/local";
import { DM_Sans, Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const norsyFont = localFont({
  src: "../public/fonts/norsy-regular.otf",
  variable: "--font-norsy-custom",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-aktiv-grotesk",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://www.captureatrip.com"),
  title: {
    default: "Capture A Trip — India's Most Fun Group Travel Community",
    template: "%s | Capture A Trip",
  },
  description:
    "Discover upcoming group trips, backpacking expeditions, treks, and curated getaways to Leh Ladakh, Kashmir, Spiti Valley, Goa, and Thailand with Capture A Trip.",
  keywords: [
    "Capture A Trip",
    "group travel India",
    "backpacking trips",
    "Leh Ladakh tours",
    "Kashmir group trip",
    "Spiti Valley trek",
    "solo travel community",
    "trip itinerary analyzer",
  ],
  authors: [{ name: "Capture A Trip Team" }],
  creator: "Capture A Trip",
  publisher: "Capture A Trip",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Capture A Trip — India's Most Fun Group Travel Community",
    description:
      "Join India's most vibrant group travel community. We don't do boring. Explore handpicked group trips, backpacking expeditions & adventure getaways.",
    url: "https://www.captureatrip.com",
    siteName: "Capture A Trip",
    images: [
      {
        url: "https://res.cloudinary.com/de5h0meps/image/upload/v1789739384/CATLogo_1_pf0r8a.webp",
        width: 1200,
        height: 630,
        alt: "Capture A Trip Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capture A Trip — India's Most Fun Group Travel Community",
    description:
      "Join India's most vibrant group travel community. Explore handpicked group trips & adventure getaways.",
    images: ["https://res.cloudinary.com/de5h0meps/image/upload/v1789739384/CATLogo_1_pf0r8a.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// structured json-ld schema for search engines
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Capture A Trip",
  url: "https://www.captureatrip.com",
  logo: "https://res.cloudinary.com/de5h0meps/image/upload/v1789739384/CATLogo_1_pf0r8a.webp",
  description:
    "India's most fun group travel community. Discover group trips, backpacking expeditions, and curated getaways.",
  sameAs: [
    "https://instagram.com",
    "https://youtube.com",
    "https://x.com",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${norsyFont.variable} ${dmSans.variable} ${plusJakartaSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full bg-[#03100A] text-white flex flex-col selection:bg-[#008342] selection:text-white">
        {children}
      </body>
    </html>
  );
}
