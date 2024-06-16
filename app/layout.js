import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Greatings",
    description: "Custamized Greating of Festivals",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark:bg-black">
            <body className={`${inter.className} `}>
                <main >{children}</main>
            </body>
        </html>
    );
}
    