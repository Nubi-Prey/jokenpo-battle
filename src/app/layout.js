import "./global.css";
import {Poppins} from 'next/font/google'

const poppins = Poppins({weight: '500', subsets: ['latin']})

export const metadata = {
  title: "Jokenpo Battle!",
  description: "A mais incrivel batalha!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
