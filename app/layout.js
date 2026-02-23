export const metadata = {
  title: "Tahminova",
  description: "Yapay Zeka Destekli Profesyonel Maç Analizi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
