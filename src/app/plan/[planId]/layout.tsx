export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <Sidebar /> */}
      <main className="bg-[#F6F7F9]">{children}</main>
    </div>
  );
}
