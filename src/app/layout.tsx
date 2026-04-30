import "@/styles/globals.css"
export const metadata = { title: "Tunee AI Character" }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body className="font-sans">{children}</body></html>
}
