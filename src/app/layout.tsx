import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/StoreContext";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { CrumbCanvas } from "@/components/CrumbCanvas";
import { Header } from "@/components/Header";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.awakenbg.com"),
  title: {
    default: "Awaken Bakery | 100% Gluten-Free Bakery in Bowling Green, KY",
    template: "%s | Awaken Bakery",
  },
  description:
    "Gluten free bakery that actually tastes like the real thing. 100% dedicated celiac-safe kitchen in downtown Bowling Green, KY — cakes, cookies, cupcakes, artisan bread, breakfast, lunch & nationwide shipping.",
  openGraph: {
    type: "website",
    siteName: "Awaken Bakery",
    title: "Awaken Bakery | 100% Gluten-Free Bakery in Bowling Green, KY",
    description:
      "100% dedicated gluten-free & celiac-safe bakery in downtown Bowling Green, KY. Cakes, cookies, cupcakes, artisan loaves, take & bake, and nationwide shipping.",
    images: ["/awaken/images/hero-bakery.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Awaken Bakery | 100% Gluten-Free Bakery",
    description:
      "100% dedicated gluten-free & celiac-safe bakery in downtown Bowling Green, KY.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <link
          rel="preconnect"
          href="https://d2j6dbq0eux0bg.cloudfront.net"
          crossOrigin=""
        />
      </head>
      <body>
        <a href="#main-content" className="Skip_Link">
          Skip to main content
        </a>
        <StoreProvider>
          <SmoothScrollProvider>
            <CrumbCanvas />
            <Header />
            <CartDrawer />
            <main id="main-content">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
