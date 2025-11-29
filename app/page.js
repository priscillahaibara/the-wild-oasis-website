import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-neutral-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-orange-400 px-8 py-6 text-neutral-800 text-lg font-semibold hover:bg-orange-500 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
