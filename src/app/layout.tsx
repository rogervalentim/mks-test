import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { ReactQueryProvider } from "./react-query-provider";
import { Toaster } from "sonner";
import CartProvider from "@/context/cart-context";

export const metadata = {
  title: "MKS Sistemas",
  description: "Teste técnico"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <ReactQueryProvider>
        <html>
          <body>
            <StyledComponentsRegistry>
              <Navbar />
              {children}
              <Toaster richColors />
              <Footer />
            </StyledComponentsRegistry>
          </body>
        </html>
      </ReactQueryProvider>
    </CartProvider>
  );
}
