import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/user-context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider> {children}</UserProvider> <ToastContainer />
      </body>
    </html>
  );
}
