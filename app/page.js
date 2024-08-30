import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 max-w-screen">
      <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
        Primeri izgleda izjave za Big Bang d.o.o.
      </h1>

      <p className="w-fit mt-10 mb-10 mx-auto text-center leading-relaxed max-w-md">
        Tukaj si lahko pogledate primere, kako bi lahko preko sistema Lime
        Booking izgledalo besedilo pogojev za Big Bang d.o.o. za primere
        naročanja strank na izris kuhinj v novem oddelku Kuhinj.
      </p>

      <Button className="m-12">
        <Link href="/harmonika">Primer 1</Link>
      </Button>
      <Button className="m-12">
        <Link href="/povezava">Primer 2</Link>
      </Button>
    </main>
  );
}
