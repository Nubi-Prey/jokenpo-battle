import "./global.css";

export const metadata = {
  title: "Jokenpo Battle!",
  description: "A mais incrivel batalha!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
