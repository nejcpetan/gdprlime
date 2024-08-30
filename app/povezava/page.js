import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Povezava() {
  return (
    <div className="flex flex-col items-center justify-between p-24 max-w-screen">
      <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
        Primer 2
      </h1>
      <div className="m-12 text-center">
        <p>
          S klikom na gumb &quot;Potrdi&quot; soglašate z&nbsp;
          <Link className="text underline" href="/povezava/zasebnost">
            obdelavo osebnih podatkov v družbi Big Bang, d.o.o.
          </Link>
        </p>
        <Button className="mt-6">
          <Link href="/">Nazaj</Link>
        </Button>
      </div>
    </div>
  );
}
