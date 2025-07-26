import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"
import FuturisticBackground from "@/components/futuristic-background"
import AIChatbot from "@/components/ai-chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Apna Coding | Empowering the Next Generation of Developers",
  description:
    "Empowering the next generation of developers through innovative learning, community building, and real-world opportunities. Join Apna Coding to learn, build, and grow!",
  keywords: [
    "Apna Coding",
    "coding courses",
    "hackathons",
    "developer community",
    "tech jobs",
    "software development",
    "learn coding",
    "AI ML",
    "Web3",
    "real-world projects",
    "coding events",
    "India developer platform",
    "programming tutorials",
    "tech education",
    "career opportunities",
    "coding bootcamp",
    "developer training",
    "tech community",
    "coding competitions",
    "software engineering",
  ].join(", "),
  authors: [{ name: "Apna Coding", url: "https://apnacoding.tech" }],
  creator: "Apna Coding",
  publisher: "Apna Coding",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apnacoding.tech",
    title: "Apna Coding | Empowering the Next Generation of Developers",
    description:
      "Empowering the next generation of developers through innovative learning, community building, and real-world opportunities.",
    siteName: "Apna Coding",
    images: [
      {
        url: "https://apnacoding.tech/logo.png",
        width: 1200,
        height: 630,
        alt: "Apna Coding - Empowering Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apna Coding | Empowering Developers",
    description: "Learn, build, and grow through Apna Coding's tech community, hackathons, and job opportunities.",
    images: ["https://apnacoding.tech/logo.png"],
    creator: "@apnacoding",
    site: "@apnacoding",
  },
  verification: {
    google: "7uPGcbJ4A8BscPQWLdukpO5BDx2_rYSBeNv68OETXLA",
    other: {
      "google-site-verification": "7uPGcbJ4A8BscPQWLdukpO5BDx2_rYSBeNv68OETXLA",
    },
  },
  alternates: {
    canonical: "https://apnacoding.tech",
  },
  category: "Technology",
  classification: "Education",
  other: {
    "revisit-after": "7 days",
    distribution: "global",
    language: "English",
    rating: "General",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#000000",
    "msapplication-TileColor": "#000000",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="7uPGcbJ4A8BscPQWLdukpO5BDx2_rYSBeNv68OETXLA" />
        <meta name="google-site-verification" content="google70813dcc9805d190" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="canonical" href="https://apnacoding.tech" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Apna Coding",
              url: "https://apnacoding.tech",
              logo: "https://apnacoding.tech/logo.png",
              description:
                "Empowering the next generation of developers through innovative learning, community building, and real-world opportunities.",
              foundingDate: "2023",
              founder: {
                "@type": "Person",
                name: "Shriyash Soni",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8989976990",
                contactType: "Customer Service",
                email: "apnacoding.tech@gmail.com",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jabalpur",
                addressRegion: "MP",
                postalCode: "482001",
                addressCountry: "IN",
              },
              sameAs: [
                "https://discord.gg/krffBfBF",
                "https://github.com/APNA-CODING-BY-APNA-COUNSELLOR",
                "https://chat.whatsapp.com/HqVg4ctR6QKJnfvemsEQ8H",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        <Preloader />
        <FuturisticBackground />
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <AIChatbot />
        </div>
      </body>
    </html>
  )
}
