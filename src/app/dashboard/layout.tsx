import Header from "@/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col bg-[#F6F7F9]">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
