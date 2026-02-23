export const metadata = {
  title: "Tahminova",
  description: "Yapay Zeka Destekli Profesyonel Maç Analizi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
