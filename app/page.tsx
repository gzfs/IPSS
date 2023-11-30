"use client";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("./_components/Home"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main>
      <Home />
    </main>
  );
}
