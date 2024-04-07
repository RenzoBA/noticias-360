import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/deporte">Category deporte</Link>
      <Link href="/deporte/my-primera-chamba">Article my primera chamba</Link>
    </main>
  );
}
