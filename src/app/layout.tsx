import "@/app/globals.css"
export const metadata = { title: "Tunee AI Character" }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body className="font-['Noto_Sans_JP',sans-serif]">{children}</body></html>
}
