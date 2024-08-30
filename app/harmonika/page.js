import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Harmonika() {
  return (
    <div className="flex flex-col items-center justify-between p-24 max-w-screen">
      <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
        Primer 1
      </h1>
      <Accordion type="single" collapsible className="w-fit mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            S klikom na gumb "Potrdi" soglašate z obdelavo osebnih podatkov v
            družbi Big Bang, d.o.o.
          </AccordionTrigger>
          <AccordionContent>
            S klikom na gumb "Potrdi" se strinjate, da družba Big Bang, d.o.o.
            (upravljalec) skupaj s pogodbenim obdelovalcem Adanta d.o.o. in
            njegovimi podobdelovalci AWS Offering, Amazon Web Services EMEA
            SARL, Axiom, Inc., Functional Software, Inc., PostHog Inc, Infobip
            Limited, E-RAČUNI, spletni poslovni programi, d.o.o., Google Ireland
            Limited, Facebook Ireland Limited, Stripe Payments Europe Limited
            obdeluje in uporablja zgoraj navedene podatke (elektronski naslov,
            ime in priimek, telefonska številka) izključno za namen obravnave
            posredovanega povpraševanja, to pa je rezervacije termina . Osebni
            podatki se ne uporabljajo in ne obdelujejo za druge namene.
            Seznanjen(a) sem, da imam glede mojih osebnih podatkov pravico
            seznanitve, popravka, dopolnitve, omejitve obdelave, preklica in
            izbrisa, prenosljivosti, in sicer s podajo pisnega zahtevka na
            naslov Big Bang, d.o.o., Madžarska ulica 12, 1000 Ljubljana, s
            pripisom »za DPO« ali na elektronsko pošto:{" "}
            <a className="underline" href="mailto: gdpr@bigbang.si">
              gdpr@bigbang.si
            </a>
            . Prav tako sem seznanjen(a), da imam pravico do vložitve pritožbe
            pri nadzornemu organu, v primeru, če menim, da obdelava osebnih
            podatkov krši zakonske predpise in Splošno uredbo o varstvu osebnih
            podatkov. Seznanjen(a) sem tudi, da lahko upravljavec moje osebne
            podatke posreduje svojim pogodbenim obdelovalcem, ki za upravljavca
            izvajajo pogodbene aktivnosti ter s katerimi ima upravljavec
            sklenjene ustrezne pogodbe o obdelavi osebnih podatkov in ki
            zagotavljajo ustrezno visoko raven varstva osebnih podatkov.
            Upravljavec se zavezuje, da bo zbrane osebne podatke obdeloval zgolj
            za prej določen namen in samo toliko časa, kolikor je potrebno za
            dosego namena, zaradi katerega so bili osebni podatki zbrani.
            Upravljavec se zavezuje, da bo zbrane osebne podatke hranil in
            varoval na primeren način, tako da ne bo prišlo do razkritij
            podatkov nepooblaščenih osebam, v skladu s Splošno uredbo o varstvu
            osebnih podatkov in v skladu s predpisi, ki urejajo varstvo osebnih
            podatkov ter Politiko zasebnosti – varstvo osebnih podatkov, ki jo
            je sprejel upravljavec v zvezi z zagotavljanjem varstva osebnih
            podatkov, ki mi je ves čas dostopna na povezavi{" "}
            <a
              className="underline"
              href="https://www.bigbang.si/politika-zasebnosti/#Big%20Bang"
            >
              Politika zasebnosti
            </a>
            . Z Izjavo zasebnosti našega pogodbenega obdelovalca Adanta d.o.o.
            se lahko seznanite{" "}
            <a
              className="underline"
              href="https://lime-booking.si/izjava-o-zasebnosti/"
            >
              tukaj
            </a>
            .
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="m-12">
        <Link href="/">Nazaj</Link>
      </Button>
    </div>
  );
}
