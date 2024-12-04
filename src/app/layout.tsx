// RootLayout.tsx
import type { Metadata } from "next";
import ClientRootLayout from "./ClientRootLayout"; // クライアントコンポーネントをインポート

export const metadata: Metadata = {
  title: "つなぐ3",
  description: "aa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
