import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";
import { StoreProvider } from "@/store/StoreProvider";

export const metadata: Metadata = {
  title: "Intervio",
  description: "Intervio",
  icons: "/icons/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* <Provider store={store}> */}
          <AntdRegistry>{children}</AntdRegistry>
          {/* </Provider> */}
        </body>
      </html>
    </StoreProvider>
  );
}
