import { ReactNode } from "react";

// Define the metadata for your layout
export const metadata = {
  title: "Tiply Authentication",
  description: "Authentication Page for Tiply",
};

// Layout component to wrap around pages
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 no-scrollbar">
      {children}
    </main>
  );
}