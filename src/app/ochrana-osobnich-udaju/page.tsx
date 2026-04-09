import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description:
    "Zásady ochrany osobních údajů a používání cookies na webu VyberRostlinu.cz.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">
        Ochrana osobních údajů
      </h1>

      <div className="space-y-8 text-sm text-gray-600 leading-relaxed [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-gray-900 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        <section>
          <h2>1. Správce údajů</h2>
          <p>
            Provozovatelem webu VyberRostlinu.cz (dále jen „web") je fyzická
            osoba. Kontaktovat nás můžete na e-mailové adrese uvedené v patičce
            webu.
          </p>
        </section>

        <section>
          <h2>2. Jaké údaje shromažďujeme</h2>
          <p>Web neshromažďuje žádné osobní údaje přímo (nemáme registraci, formuláře ani newsletter). Pokud udělíte souhlas s cookies, využíváme:</p>
          <ul>
            <li>
              <strong>Google Analytics 4</strong> — anonymizované údaje o
              návštěvnosti (typ zařízení, přibližná poloha, zobrazené stránky,
              doba návštěvy). IP adresa je anonymizována.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Cookies</h2>
          <p>
            Při první návštěvě vás požádáme o souhlas s analytickými cookies.
            Bez vašeho souhlasu se žádné sledovací cookies neukládají.
          </p>
          <ul>
            <li>
              <strong>cookie-consent</strong> (localStorage) — uchovává vaše
              rozhodnutí o cookies. Platnost: neomezeně, dokud nevymažete data
              prohlížeče.
            </li>
            <li>
              <strong>_ga, _ga_*</strong> (Google Analytics) — pouze pokud
              udělíte souhlas. Platnost: až 2 roky.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Účel zpracování</h2>
          <p>
            Analytická data používáme výhradně ke zlepšení obsahu a funkčnosti
            webu. Údaje nesdílíme s třetími stranami nad rámec služby Google
            Analytics.
          </p>
        </section>

        <section>
          <h2>5. Vaše práva</h2>
          <p>Máte právo:</p>
          <ul>
            <li>Odmítnout cookies — web funguje plnohodnotně i bez nich.</li>
            <li>
              Odvolat souhlas — stačí vymazat data webu v nastavení prohlížeče.
            </li>
            <li>
              Požádat o informace o zpracování, opravu či výmaz údajů — napište
              nám na kontaktní e-mail.
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Změny zásad</h2>
          <p>
            Tyto zásady můžeme příležitostně aktualizovat. Aktuální verze je
            vždy dostupná na této stránce.
          </p>
        </section>

        <p className="pt-4 text-xs text-gray-400">
          Poslední aktualizace: duben 2026
        </p>
      </div>
    </div>
  );
}
