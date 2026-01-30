"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

export default function CookieConsentConfig() {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "cloud",
          position: "bottom center",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          position: "left",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      categories: {
        readiness: {
          enabled: true,
          readOnly: true,
        },
      },
      language: {
        default: "sl",
        translations: {
          sl: {
            consentModal: {
              title: "Uporaba piškotkov",
              description:
                "Spletna stran uporablja le nujne piškotke, ki so potrebni za nemoteno delovanje strani.",
              acceptAllBtn: "V redu",
              acceptNecessaryBtn: "", // Hide secondary button as it's redundant
              showPreferencesBtn: "Podrobnosti",
              footer: `
                <a href="/politika-zasebnosti">Politika zasebnosti</a>
              `,
            },
            preferencesModal: {
              title: "Nastavitve piškotkov",
              savePreferencesBtn: "Shrani nastavitve",
              acceptAllBtn: "Sprejmi vse",
              acceptNecessaryBtn: "Sprejmi samo nujne",
              closeIconLabel: "Zapri",
              sections: [
                {
                  title: "Uporaba piškotkov",
                  description:
                    "Piškotki so majhne tekstovne datoteke, ki jih spletna mesta uporabljajo za izboljšanje uporabniške izkušnje.",
                },
                {
                  title: "Nujni piškotki",
                  description:
                    "Ti piškotki so ključni za delovanje spletne strani in jih ni mogoče izklopiti.",
                  linkedCategory: "readiness",
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
