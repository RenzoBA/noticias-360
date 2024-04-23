import CategorySection from "@/components/home-page/CategorySection";
import MainSection from "@/components/home-page/MainSection";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[1400px] flex-col items-center justify-center px-5 py-8 lg:px-8">
      <MainSection />
      <CategorySection id={1} />
      <CategorySection id={2} />
      <CategorySection id={3} />
      <CategorySection id={4} />
    </main>
  );
}
