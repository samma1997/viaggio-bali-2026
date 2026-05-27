// Itinerario fotografico Bali — 14 giorni
// Categorie: temple, nature, beach, culture, city, waterfall, viewpoint
// Best time: sunrise, golden-am, midday, golden-pm, sunset, blue-hour, night

const ITINERARY = [
  {
    day: 1,
    title: "Arrivo & Seminyak",
    region: "Sud — Seminyak",
    summary: "Atterraggio a Denpasar, acclimatamento. Sera con il primo tramonto balinese sulla spiaggia e cena vista oceano. Inizia piano: il jet lag morde.",
    spots: [
      {
        id: "d1-doublesix",
        name: "Double Six Beach",
        emoji: "🌅",
        category: "beach",
        bestTime: "sunset",
        coords: "-8.6890,115.1665",
        whatToShoot: "Surfer in controluce, riflessi sulla sabbia bagnata, palme stagliate sul cielo arancione.",
        howToShoot: "Esponi per il cielo, lascia le sagome scure. Tempo lento (1/15s) sulle onde con ND per filare l'acqua. Posizionati con l'acqua davanti che riflette il sole.",
        gear: "Grandangolo 16-35, ND 6 stop opzionale, treppiede basso",
        cultural: "Spiaggia turistica ma autentica. Vendi-coni al tramonto, perfetti come soggetti secondari.",
        timing: "Arriva 45 min prima del tramonto. Resta per la blue hour (15 min dopo)."
      },
      {
        id: "d1-laplancha",
        name: "La Plancha Beach Bar",
        emoji: "🍹",
        category: "culture",
        bestTime: "sunset",
        coords: "-8.6951,115.1633",
        whatToShoot: "Bean bag colorati, lanterne accese, ambiente festa al tramonto.",
        howToShoot: "Apri f/2.8 per separare i soggetti, ISO basso finché c'è luce, poi sali a 1600 senza paura.",
        gear: "50mm f/1.8 o 35mm, no treppiede (mood reportage)",
        cultural: "Posto iconico di Seminyak. Tip lo staff se fai molti scatti vicino al bar.",
        timing: "Arriva 17:30, resta fino alle 20."
      }
    ]
  },

  {
    day: 2,
    title: "Tanah Lot & Taman Ayun",
    region: "Sud-Ovest — Tabanan",
    summary: "Due dei templi più fotografati di Bali. Tanah Lot al tramonto è imperdibile, ma arriva presto perché si riempie.",
    spots: [
      {
        id: "d2-tamanayun",
        name: "Pura Taman Ayun",
        emoji: "🏯",
        category: "temple",
        bestTime: "golden-am",
        coords: "-8.5417,115.1716",
        whatToShoot: "Pagode meru riflesse nelle vasche d'acqua, simmetrie, dettagli architettonici.",
        howToShoot: "Cerca pozzanghere o le vasche perimetrali per riflessi. Usa una mid focale (35-50mm) per comprimere le meru in fila. Polarizzatore per saturare il verde.",
        gear: "24-70mm, CPL fondamentale, treppiede solo se la sicurezza permette",
        cultural: "Sarong obbligatorio (lo affittano all'ingresso). Non entrare nelle aree sacre interne.",
        timing: "Apertura 8:00. Vai subito per evitare folla e luce dura."
      },
      {
        id: "d2-jatiluwih",
        name: "Risaie di Jatiluwih (UNESCO)",
        emoji: "🌾",
        category: "nature",
        bestTime: "golden-pm",
        coords: "-8.3700,115.1349",
        whatToShoot: "Terrazzamenti infiniti, contadini con cappello conico, geometrie verdi.",
        howToShoot: "Tele 70-200 per comprimere i terrazzamenti. Cerca punti alti. Drone (consentito qui) per pattern dall'alto. Persone come scala umana.",
        gear: "Tele 70-200, drone, CPL, scarpe fango-proof",
        cultural: "Patrimonio UNESCO. Pagamento ingresso ~40k IDR. I contadini posano volentieri per piccola mancia.",
        timing: "Arriva alle 15. Luce migliore 16:30-18:00."
      },
      {
        id: "d2-tanahlot",
        name: "Pura Tanah Lot",
        emoji: "🌊",
        category: "temple",
        bestTime: "sunset",
        coords: "-8.6212,115.0868",
        whatToShoot: "Tempio su scoglio con sole che cala dietro. Onde che si infrangono. Silhouette del tempio.",
        howToShoot: "Treppiede + ND per long exposure (30s) sull'acqua → effetto setoso. Tele 200mm per dettaglio sun-flare dietro il tempio. Composizione: tempio al terzo destro, sole basso.",
        gear: "Treppiede SOLIDO, ND 10 stop, CPL, tele + grandangolo",
        cultural: "Si paga 75k IDR. Folla enorme: arriva almeno 2 ore prima, conquista la postazione su roccia bassa a destra.",
        timing: "Arriva 15:30. Tramonto verso le 18:15. Resta per la blue hour."
      }
    ]
  },

  {
    day: 3,
    title: "Trasferimento a Ubud & primo assaggio",
    region: "Centro — Ubud",
    summary: "Spostamento da Seminyak a Ubud (1h30 di auto). Pomeriggio passeggiata e mercato, sera cerimonia/danza tradizionale.",
    spots: [
      {
        id: "d3-tegenungan",
        name: "Cascata Tegenungan",
        emoji: "💦",
        category: "waterfall",
        bestTime: "golden-am",
        coords: "-8.5749,115.2882",
        whatToShoot: "Salto d'acqua potente, persone in mezzo per scala, arcobaleni nella nebulizzazione.",
        howToShoot: "Tempo lento 1/4s-1s con ND per acqua setosa. Treppiede d'obbligo. Polarizzatore per togliere riflessi su rocce bagnate. Espolora il punto in alto per vista frontale e quello sotto per immersione.",
        gear: "Treppiede, ND 6/10, CPL, sacchetto impermeabile, panno microfibra",
        cultural: "Ingresso 20k IDR. Sentiero di 100 gradini.",
        timing: "Apertura 6:30. Vai presto: alle 10 è piena."
      },
      {
        id: "d3-ubudmarket",
        name: "Mercato di Ubud (Pasar)",
        emoji: "🧺",
        category: "culture",
        bestTime: "sunrise",
        coords: "-8.5070,115.2625",
        whatToShoot: "Donne che preparano canang sari, frutta esotica, tessuti, ritratti street.",
        howToShoot: "Reportage: 35mm fisso, f/2.8-f/4, ISO 800, scatti rapidi. Chiedi con il sorriso. Compra qualcosa, poi chiedi la foto.",
        gear: "Fisso 35mm o 50mm, nessun flash",
        cultural: "Mercato vero dalle 5 alle 8. Dopo diventa turistico. Lascia le offerte (canang) intatte a terra.",
        timing: "Arriva alle 6. Hai 2 ore di luce dolce."
      },
      {
        id: "d3-saraswati",
        name: "Pura Taman Saraswati",
        emoji: "🪷",
        category: "temple",
        bestTime: "golden-pm",
        coords: "-8.5060,115.2620",
        whatToShoot: "Stagno di fiori di loto rosa, gate balinese rosa al tramonto, danza Legong la sera.",
        howToShoot: "Mid focale per loto in primo piano + tempio sfocato dietro. La sera, alza ISO (3200) per la danza: tempo 1/250s minimo. Cattura mani e sguardi.",
        gear: "70-200mm per la danza, 35-50mm per il tempio, monopiede utile",
        cultural: "Danza Legong serale alle 19:30 (~100k IDR). Spettacolare fotograficamente. Non usare flash.",
        timing: "Visita pomeriggio + ritorno serale per la danza."
      }
    ]
  },

  {
    day: 4,
    title: "Ubud — Risaie & Monkey Forest",
    region: "Centro — Ubud",
    summary: "Giornata Ubud puro: risaie all'alba, scimmie a metà mattina, ridge walk al pomeriggio.",
    spots: [
      {
        id: "d4-tegallalang",
        name: "Risaie di Tegallalang",
        emoji: "🌾",
        category: "nature",
        bestTime: "sunrise",
        coords: "-8.4318,115.2789",
        whatToShoot: "Terrazzamenti a anfiteatro nella nebbia mattutina, altalene panoramiche (Bali Swing), palme di cocco.",
        howToShoot: "Sali sul lato opposto della strada principale per vista frontale. Tele 70-200 per pattern. Drone all'alba: terrazzamenti dall'alto sono iconici (zona drone-friendly). Le altalene danno foto 'da cartolina' ma a pagamento.",
        gear: "Tele 70-200, drone, CPL",
        cultural: "Donazione 25k IDR ai contadini lungo i sentieri. Sostieni l'economia locale.",
        timing: "ARRIVA ALLE 5:30. Alle 8 è invaso. Vale ogni sveglia."
      },
      {
        id: "d4-monkey",
        name: "Sacred Monkey Forest",
        emoji: "🐒",
        category: "nature",
        bestTime: "golden-am",
        coords: "-8.5189,115.2585",
        whatToShoot: "Macachi nei templi muschiati, bimbi-scimmia, ponti di pietra invasi dalla giungla.",
        howToShoot: "Tele 70-200 f/2.8 per ritratti scimmia (occhio sempre a fuoco). Mai flash. Mai cibo in mano: te lo rubano. Tieni gli oggetti riflettenti (occhiali, gioielli) in tasca.",
        gear: "Tele 70-200 f/2.8, NO zaino aperto",
        cultural: "Ingresso 80k IDR. Non guardare le scimmie negli occhi a lungo: per loro è sfida.",
        timing: "9-11 attività massima."
      },
      {
        id: "d4-campuhan",
        name: "Campuhan Ridge Walk",
        emoji: "🌿",
        category: "viewpoint",
        bestTime: "golden-pm",
        coords: "-8.5008,115.2510",
        whatToShoot: "Sentiero in cresta tra erba alta, valli verdi laterali, palme su crinale.",
        howToShoot: "Grandangolo per il sentiero in prospettiva. Mid-focale per soggetto umano in cammino. Cerca le 'vertebre' del sentiero al tramonto controluce.",
        gear: "16-35mm + 50mm",
        cultural: "Gratis, sempre aperto. 2km a/r facili.",
        timing: "Parti alle 16:30. Tramonto sul sentiero ~18:00."
      }
    ]
  },

  {
    day: 5,
    title: "Tempi sacri d'acqua",
    region: "Centro-Est — Tampaksiring",
    summary: "Giornata dedicata ai templi d'acqua sacri. Cerimonia di purificazione personale possibile a Tirta Empul.",
    spots: [
      {
        id: "d5-tirtaempul",
        name: "Pura Tirta Empul",
        emoji: "💧",
        category: "temple",
        bestTime: "sunrise",
        coords: "-8.4153,115.3155",
        whatToShoot: "Fedeli in sarong bianco sotto le fontane di purificazione (melukat), riflessi sull'acqua, pagode.",
        howToShoot: "Mid focale (50-85mm) per ritratti rispettosi a distanza. Tempo 1/250s per fermare le gocce. Espolora dall'alto-laterale, NON dall'altro davanti ai fedeli. Considera il tuo bagno rituale: comprerai un sarong bagnato e potrai chiedere a un amico di scattarti.",
        gear: "Tele leggero 50-85mm, sacchetto stagno per camera",
        cultural: "Tempio sacro vero. Vesti dignitoso (sarong + cintura). Per le foto dei fedeli durante il melukat: chiedi sempre. Molti accettano sereni, alcuni no.",
        timing: "Apertura 8:00. Cerimonie tutto il giorno, ma luce migliore mattino presto."
      },
      {
        id: "d5-gunungkawi",
        name: "Gunung Kawi",
        emoji: "🗿",
        category: "temple",
        bestTime: "golden-am",
        coords: "-8.4256,115.3127",
        whatToShoot: "Santuari rupestri scavati nella roccia, scalinata di pietra tra le risaie, ruscello.",
        howToShoot: "Grandangolo per inquadrare i 7 santuari verticali. Inserire una persona per la scala. CPL per gestire i contrasti tra ombra e sole.",
        gear: "16-35mm, treppiede",
        cultural: "300 scalini in discesa (e poi su). Costume tradizionale obbligatorio.",
        timing: "Apertura 7:00. Vai presto, è freschino e c'è poca gente."
      },
      {
        id: "d5-tegallalangsunset",
        name: "Bali Swing Tegallalang (opt.)",
        emoji: "🌳",
        category: "viewpoint",
        bestTime: "golden-pm",
        coords: "-8.4189,115.2812",
        whatToShoot: "Altalena con vista valle, persona vestita di rosso/giallo, valle dorata.",
        howToShoot: "Tele 70-200 per comprimere persona+valle. Tempo 1/500s per fermare l'altalena. Triggera lo scatto al punto più alto.",
        gear: "Tele 70-200",
        cultural: "Esperienza da turisti (~35€) ma fotograficamente paga.",
        timing: "Prenota slot 16:00-17:30."
      }
    ]
  },

  {
    day: 6,
    title: "Mt. Batur all'alba",
    region: "Nord-Est — Kintamani",
    summary: "Trekking notturno al vulcano per vedere l'alba sopra le nuvole. Esperienza ICONICA fotograficamente. Pomeriggio relax.",
    spots: [
      {
        id: "d6-batursummit",
        name: "Mount Batur (1717m) — Alba",
        emoji: "🌋",
        category: "viewpoint",
        bestTime: "sunrise",
        coords: "-8.2419,115.3753",
        whatToShoot: "Mare di nuvole, Monte Agung che spunta all'orizzonte, sole che sorge sopra il vapore dei crateri.",
        howToShoot: "Treppiede LEGGERO. Sotto stelle: 20s f/2.8 ISO 3200. All'alba: bracketing -2/0/+2 per HDR. Filtro GND per bilanciare cielo e crateri. Grandangolo per panoramica, tele per Agung lontano.",
        gear: "Tutto: grandangolo, tele, treppiede, frontalino con luce rossa, batterie extra (freddo le scarica)",
        cultural: "Trek con guida obbligatoria (~400k IDR). Partenza ore 3:00 dal punto base. 2h di salita su terreno vulcanico. Porta felpa: in vetta fa freddo davvero.",
        timing: "Sveglia 2:00. Vetta entro le 5:30. Alba 6:00-6:30."
      },
      {
        id: "d6-batulake",
        name: "Lago Batur & terme",
        emoji: "♨️",
        category: "nature",
        bestTime: "golden-pm",
        coords: "-8.2535,115.4127",
        whatToShoot: "Lago vulcanico, riflessi del cratere, terme naturali con vista lago.",
        howToShoot: "Grandangolo dal bordo lago. CPL per saturare l'acqua. Mid focale per dettagli dei pescatori in barca.",
        gear: "16-35 + 50mm",
        cultural: "Terme Toya Devasya o Batur Natural Hot Spring: relax meritato dopo il trekking.",
        timing: "Pomeriggio post-pranzo."
      }
    ]
  },

  {
    day: 7,
    title: "Lempuyang & Tirta Gangga",
    region: "Est — Karangasem",
    summary: "Le 'Gates of Heaven' (anche se la foto col riflesso è uno specchio, non acqua — saperlo è meglio!) e i giardini reali d'acqua.",
    spots: [
      {
        id: "d7-lempuyang",
        name: "Pura Lempuyang Luhur — Gates of Heaven",
        emoji: "🚪",
        category: "temple",
        bestTime: "sunrise",
        coords: "-8.3924,115.6309",
        whatToShoot: "Il gate spaccato (candi bentar) con il Monte Agung che spunta tra le due metà. Il riflesso 'magico' è creato dai fotografi locali con uno specchietto sotto la lente.",
        howToShoot: "Grandangolo 16-24mm per inquadrare gate+monte. Esposizione bilanciata (gate non in silhouette). Chiedi al fotografo locale lo specchio: te lo fanno gratis (mancia gradita). Anche senza specchio è bellissimo.",
        gear: "Grandangolo, treppiede",
        cultural: "Coda mattutina LUNGA (anche 2h). Ticket prenotabili online + numerino. Sarong obbligatorio. Sii paziente.",
        timing: "Arriva alle 6:30. L'Agung è libero da nuvole solo prima delle 9-10."
      },
      {
        id: "d7-tirtagangga",
        name: "Tirta Gangga Water Palace",
        emoji: "🐉",
        category: "temple",
        bestTime: "golden-am",
        coords: "-8.4117,115.5874",
        whatToShoot: "Pietre di passaggio sull'acqua con pesci koi, statue draghi, fontana centrale.",
        howToShoot: "Top-down dalle pietre. Long exposure 2-4s per togliere movimento dell'acqua. Compra cibo per pesci: i koi affollano e fanno foto stupende. Aspetta locali in costume tradizionale che passano sulle pietre.",
        gear: "Treppiede, ND, CPL",
        cultural: "Ingresso 50k IDR. Affollato dalle 10. Vacci subito dopo Lempuyang.",
        timing: "9:30-11:00."
      },
      {
        id: "d7-lahangan",
        name: "Lahangan Sweet Viewpoint",
        emoji: "⛰️",
        category: "viewpoint",
        bestTime: "sunset",
        coords: "-8.3760,115.5421",
        whatToShoot: "Vista frontale sul Monte Agung al tramonto, capanno di bambù iconico in primo piano.",
        howToShoot: "Mid focale (35-50mm) per equilibrio capanno+vulcano. GND morbido per cielo. Bracketing.",
        gear: "Treppiede, GND",
        cultural: "Strada sterrata in salita: meglio scooter o jeep.",
        timing: "Arriva 17:00. Tramonto stupendo qui."
      }
    ]
  },

  {
    day: 8,
    title: "Nord — Munduk & laghi",
    region: "Nord — Munduk/Bedugul",
    summary: "Trasferimento al nord montano. Templi sul lago, cascate nascoste, clima più fresco e nebbie magiche.",
    spots: [
      {
        id: "d8-ulundanu",
        name: "Pura Ulun Danu Beratan",
        emoji: "🏞️",
        category: "temple",
        bestTime: "sunrise",
        coords: "-8.2752,115.1675",
        whatToShoot: "Tempio sull'acqua del lago Bratan, nebbia mattutina, riflessi specchio.",
        howToShoot: "Mid focale 35-85mm. Cerca composizione che includa albero in primo piano + tempio + montagna sfocata dietro. CPL ATTENUATO (non esagerare con il taglio dei riflessi). Long exposure se c'è vento sull'acqua.",
        gear: "Treppiede, CPL, GND",
        cultural: "È sul biglietto da 50.000 rupie! Apertura 7:00 — sii in coda.",
        timing: "6:45 in coda. Hai 1h prima dei pullman."
      },
      {
        id: "d8-handara",
        name: "Handara Gate",
        emoji: "🚪",
        category: "culture",
        bestTime: "golden-am",
        coords: "-8.2447,115.1583",
        whatToShoot: "Il famoso gate balinese isolato con sentiero che scompare nella nebbia/giungla.",
        howToShoot: "Grandangolo, simmetria centrale, persona in mezzo (sarong colorato, schiena alla camera). Ora migliore: 7-8 con nebbia.",
        gear: "Grandangolo + treppiede leggero",
        cultural: "30k IDR per accesso fotografico. Coda controllata: massimo 5 min a turno.",
        timing: "Vai entro le 8:30."
      },
      {
        id: "d8-banyumala",
        name: "Cascate Banyumala Twin",
        emoji: "💦",
        category: "waterfall",
        bestTime: "midday",
        coords: "-8.2367,115.0972",
        whatToShoot: "Due cascate gemelle che cadono fianco a fianco in una piscina turchese.",
        howToShoot: "Grandangolo dal basso. Long exposure 1-2s per acqua morbida. Persona in costume bianco/rosso in piscina come scala umana. Polarizzatore essenziale per togliere riflessi dall'acqua e mostrare il turchese.",
        gear: "Treppiede, ND, CPL, sacchetto stagno",
        cultural: "Discesa 15 min ripida. Ingresso 30k IDR.",
        timing: "Vai 11-13: il sole entra nella gola e illumina l'acqua."
      },
      {
        id: "d8-wanagiri",
        name: "Wanagiri Hidden Hills",
        emoji: "🪺",
        category: "viewpoint",
        bestTime: "golden-pm",
        coords: "-8.2575,115.1183",
        whatToShoot: "Piattaforme a forma di nido d'uccello con vista sui laghi gemelli Buyan e Tamblingan.",
        howToShoot: "Grandangolo per inquadrare nido+lago. Persona dentro il nido. Cerca momento senza nuvole sui laghi.",
        gear: "Grandangolo",
        cultural: "Foto-spot a pagamento (35k IDR). Ma vista vera e propria gratuita lungo la strada.",
        timing: "16:00-17:30."
      }
    ]
  },

  {
    day: 9,
    title: "Sekumpul — la regina delle cascate",
    region: "Nord — Singaraja",
    summary: "Giornata trek alla cascata più spettacolare di Bali. Faticoso ma magico. Sera ritorno verso sud.",
    spots: [
      {
        id: "d9-sekumpul",
        name: "Cascate Sekumpul",
        emoji: "💎",
        category: "waterfall",
        bestTime: "golden-am",
        coords: "-8.1659,115.2107",
        whatToShoot: "7 cascate parallele che si tuffano da 80m in una gola verde. Probabilmente LA foto più epica del viaggio.",
        howToShoot: "Grandangolo 16mm per inquadrare tutto. Tempo 0.5-2s con ND. Treppiede d'obbligo. Persona in primo piano vista di schiena per scala. Cerca arcobaleno nel pulviscolo (sole dietro le spalle, mattino).",
        gear: "Treppiede SOLIDO, ND 6/10, CPL, scarpe trekking, drybag",
        cultural: "Trek di 1h30 a/r con guida obbligatoria (~125k IDR). Discesa di 500 scalini, attraversamento fiumi. Bagnati, ne vale la pena.",
        timing: "Parti alle 7. Sii alle cascate entro le 9 per arcobaleno + meno gente."
      },
      {
        id: "d9-gitgit",
        name: "Cascata Gitgit (opzionale)",
        emoji: "🍃",
        category: "waterfall",
        bestTime: "midday",
        coords: "-8.1854,115.1331",
        whatToShoot: "Cascata classica circondata da giungla fitta.",
        howToShoot: "Verticale, grandangolo, persona piccola per scala.",
        gear: "Treppiede, ND",
        cultural: "Facilmente accessibile, 15 min cammino. 20k IDR.",
        timing: "Pranzo light + fermata al ritorno."
      }
    ]
  },

  {
    day: 10,
    title: "Nusa Penida — Kelingking",
    region: "Isola di Nusa Penida (Sud-Est)",
    summary: "Ferry da Sanur (45 min). Tour ovest di Nusa Penida con la spiaggia più fotografata d'Indonesia.",
    spots: [
      {
        id: "d10-kelingking",
        name: "Kelingking Beach (T-Rex)",
        emoji: "🦖",
        category: "viewpoint",
        bestTime: "golden-am",
        coords: "-8.7506,115.4750",
        whatToShoot: "Promontorio a forma di T-Rex con baia di sabbia bianca. Una delle viste più iconiche del pianeta.",
        howToShoot: "Grandangolo 16-24mm dal punto panoramico classico. Tu seduto sul bordo (con cautela!) crea scala umana epica. Tele per dettagli sulla spiaggia in basso. Drone PERMESSO qui — sfruttalo.",
        gear: "Grandangolo, drone, tele",
        cultural: "Discesa alla spiaggia: 1h30 di sentiero verticale e scivoloso. Fattibile solo se in forma, MAI in infradito. Risalita brutale.",
        timing: "Arriva alle 8. Folla esplode dalle 10. Tramonto qui anche bello (controluce diverso)."
      },
      {
        id: "d10-broken",
        name: "Broken Beach (Pasih Uug)",
        emoji: "🕳️",
        category: "nature",
        bestTime: "midday",
        coords: "-8.7704,115.4737",
        whatToShoot: "Arco naturale che racchiude una baia circolare. Vista dall'alto.",
        howToShoot: "Drone fa foto irresistibili (sopra l'arco). Senza drone: grandangolo dal punto panoramico ufficiale.",
        gear: "Drone, grandangolo",
        cultural: "Ingresso 15k IDR. Strada terribile per arrivarci.",
        timing: "10-12."
      },
      {
        id: "d10-angel",
        name: "Angel's Billabong",
        emoji: "💎",
        category: "nature",
        bestTime: "midday",
        coords: "-8.7714,115.4733",
        whatToShoot: "Piscina naturale in roccia con acqua turchese cristallina.",
        howToShoot: "Tele dalla scogliera sopra. Grandangolo se scendi (PERICOLOSO con marea alta). CPL per turchese.",
        gear: "CPL, tele",
        cultural: "Pericolo onde anomale: chiedi sempre ai locali se è sicuro scendere.",
        timing: "Bassa marea. A pochi minuti da Broken Beach."
      },
      {
        id: "d10-crystal",
        name: "Crystal Bay (tramonto)",
        emoji: "🌅",
        category: "beach",
        bestTime: "sunset",
        coords: "-8.7233,115.4544",
        whatToShoot: "Tramonto dietro l'isola Nusa Ceningan, palme e barche a riva.",
        howToShoot: "Tele 200mm per sole grosso dietro isola. Grandangolo per panoramica spiaggia.",
        gear: "Tele + grandangolo",
        cultural: "Spiaggia stupenda anche per snorkeling diurno.",
        timing: "17:00-18:30."
      }
    ]
  },

  {
    day: 11,
    title: "Nusa Penida — Diamond & Atuh",
    region: "Nusa Penida (Est)",
    summary: "Tour est di Nusa Penida. Le spiagge più belle e meno affollate. Forse il giorno più bello del viaggio.",
    spots: [
      {
        id: "d11-diamond",
        name: "Diamond Beach",
        emoji: "💎",
        category: "beach",
        bestTime: "sunrise",
        coords: "-8.7919,115.6243",
        whatToShoot: "Spiaggia bianca, faraglione a forma di diamante, scogliera vertiginosa. Scalinata a zigzag scolpita nella roccia.",
        howToShoot: "Grandangolo dal punto panoramico in alto. Persona piccola in spiaggia per scala. Drone (consentito) per riprese aeree.",
        gear: "Grandangolo, drone, CPL",
        cultural: "Discesa con scale recenti. Bagno solo con marea bassa.",
        timing: "Alba: 5:45. Avrai la spiaggia praticamente vuota fino alle 9."
      },
      {
        id: "d11-atuh",
        name: "Atuh Beach",
        emoji: "🏖️",
        category: "beach",
        bestTime: "golden-am",
        coords: "-8.7951,115.6244",
        whatToShoot: "Baia chiusa da faraglioni, sabbia bianca, acqua cobalto.",
        howToShoot: "Vista dall'alto (sentiero panoramico). Grandangolo. Persone in costume colorato sulla spiaggia per scala.",
        gear: "Grandangolo",
        cultural: "Adiacente Diamond Beach. Discesa più ripida.",
        timing: "Subito dopo Diamond, 8:30-10."
      },
      {
        id: "d11-treehouse",
        name: "Rumah Pohon Tree House",
        emoji: "🌴",
        category: "viewpoint",
        bestTime: "golden-am",
        coords: "-8.7929,115.6213",
        whatToShoot: "Casetta su albero in legno con vista verticale sull'oceano e Atuh Beach.",
        howToShoot: "Grandangolo dentro la casetta + grandangolo da fuori che la inquadra contro l'oceano.",
        gear: "Grandangolo",
        cultural: "Si può anche pernottare. Ingresso 100k IDR per foto.",
        timing: "Pre-9:00 per evitare coda."
      },
      {
        id: "d11-saren",
        name: "Saren Cliff Point",
        emoji: "🌊",
        category: "viewpoint",
        bestTime: "sunset",
        coords: "-8.7898,115.5832",
        whatToShoot: "Scogliere infinite, sole che cala sul Pacifico.",
        howToShoot: "Grandangolo + GND. Cattura silhouette di gente che cammina sul bordo.",
        gear: "GND, grandangolo",
        cultural: "Poco turistico. Pace.",
        timing: "17:30-18:30."
      }
    ]
  },

  {
    day: 12,
    title: "Uluwatu & Kecak",
    region: "Sud — Bukit Peninsula",
    summary: "Ritorno a Bali. Le scogliere drammatiche del Bukit e il leggendario rito Kecak al tramonto.",
    spots: [
      {
        id: "d12-padangpadang",
        name: "Padang Padang Beach",
        emoji: "🏄",
        category: "beach",
        bestTime: "golden-am",
        coords: "-8.8089,115.1031",
        whatToShoot: "Surfer in tube, accesso suggestivo tra le rocce, sabbia bianca.",
        howToShoot: "Tele 200-400mm per surf (1/1000s). Grandangolo per accesso tra le rocce.",
        gear: "Tele lungo, custodia spruzzi",
        cultural: "Ingresso 15k IDR. Set di Eat Pray Love.",
        timing: "7-9 surf perfetto + luce dolce."
      },
      {
        id: "d12-melasti",
        name: "Melasti Beach",
        emoji: "🪨",
        category: "beach",
        bestTime: "midday",
        coords: "-8.8407,115.1530",
        whatToShoot: "Discesa scolpita in scogliera bianca, acqua turchese.",
        howToShoot: "Grandangolo per la curva della strada in scogliera. Drone se le no-fly zone lo consentono.",
        gear: "Grandangolo, drone",
        cultural: "Tradizionale spiaggia di cerimonia Melasti (prima di Nyepi).",
        timing: "11-13."
      },
      {
        id: "d12-uluwatu",
        name: "Pura Luhur Uluwatu + Kecak Dance",
        emoji: "🔥",
        category: "temple",
        bestTime: "sunset",
        coords: "-8.8290,115.0849",
        whatToShoot: "Tempio sulla scogliera a picco, danzatori Kecak in cerchio attorno al fuoco con tramonto sull'oceano dietro.",
        howToShoot: "Per il tempio diurno: grandangolo con scogliera 70m sotto. Per la danza: arriva PRIMA con biglietto in mano, postazione frontale. Tele 70-200 per dettagli volti+fuoco. ISO 1600-3200 quando cala il sole. Tempo 1/200s minimo. Catturali col fuoco riflesso negli occhi.",
        gear: "Grandangolo + tele 70-200 f/2.8, ISO performance",
        cultural: "Kecak alle 18:00 (~150k IDR). Posti a sedere su gradinate in pietra. Le scimmie del tempio RUBANO: niente occhiali, cappelli, telefoni in mano.",
        timing: "Tempio alle 16. Kecak biglietto preso entro le 17:00."
      }
    ]
  },

  {
    day: 13,
    title: "Canggu — Street & cafè",
    region: "Sud-Ovest — Canggu",
    summary: "Giornata più rilassata. Street photography nel quartiere hipster di Canggu, cafè, surf al tramonto.",
    spots: [
      {
        id: "d13-canggustreet",
        name: "Canggu — Batu Bolong street",
        emoji: "📸",
        category: "city",
        bestTime: "golden-am",
        coords: "-8.6580,115.1326",
        whatToShoot: "Murales colorati, scooter carichi, cani di strada, expat in moto, surfer che vanno al mare.",
        howToShoot: "35mm fisso. Reportage. Cammina lentamente. ISO 400, f/5.6, 1/250s per zona-fuoco.",
        gear: "35mm o 50mm fisso, niente flash",
        cultural: "Trattare cani con cura, sono coccolati dai locali.",
        timing: "7-10 luce migliore + strade meno trafficate."
      },
      {
        id: "d13-tibubeneng",
        name: "Risaie di Tibubeneng",
        emoji: "🌾",
        category: "nature",
        bestTime: "sunrise",
        coords: "-8.6553,115.1426",
        whatToShoot: "Risaie a 5 min dai cafè. Templi nelle risaie, contadini, anatre.",
        howToShoot: "Mid focale. Cerca contadino con cappello come soggetto.",
        gear: "35-85mm",
        cultural: "Risaie pubbliche, rispetta i piccoli sentieri.",
        timing: "6:00-7:30."
      },
      {
        id: "d13-echobeach",
        name: "Echo Beach — Tramonto",
        emoji: "🏄‍♂️",
        category: "beach",
        bestTime: "sunset",
        coords: "-8.6480,115.1238",
        whatToShoot: "Surfer in controluce, palme nere, cielo arancione/viola.",
        howToShoot: "Tele 200-400mm per silhouette surfer. Grandangolo per palme + cielo. Tieni il sole proprio sul bordo del frame per sun flare controllato.",
        gear: "Tele + grandangolo",
        cultural: "Vibe surfista, beach bar tipo La Brisa per drink dopo gli scatti.",
        timing: "17:30-19:00."
      }
    ]
  },

  {
    day: 14,
    title: "Sidemen, Sanur & ritorno",
    region: "Centro-Est → Sud — Sanur",
    summary: "Ultima alba sulle risaie meno turistiche di Sidemen. Pranzo a Sanur, ultimi acquisti, volo serale.",
    spots: [
      {
        id: "d14-sidemen",
        name: "Risaie di Sidemen",
        emoji: "🌾",
        category: "nature",
        bestTime: "sunrise",
        coords: "-8.4928,115.4530",
        whatToShoot: "Risaie più autentiche e meno turistiche, vista Monte Agung sullo sfondo, vita rurale vera.",
        howToShoot: "Mid focale per risaie+Agung. Reportage con contadini. Tele per dettagli (anatre, sandali nel fango, pannocchie).",
        gear: "Tutto: dal grandangolo al tele",
        cultural: "Il vero Bali rurale. Saluta sempre con 'om swastiastu'.",
        timing: "Alba 5:45. Ultima alba del viaggio, fai sul serio."
      },
      {
        id: "d14-sanur",
        name: "Sanur Beach — Pranzo",
        emoji: "🍽️",
        category: "beach",
        bestTime: "midday",
        coords: "-8.6849,115.2632",
        whatToShoot: "Jukung (barche tradizionali) colorate, pescatori al lavoro.",
        howToShoot: "Mid focale, persona+barca, polarizzatore.",
        gear: "35-85mm + CPL",
        cultural: "Spiaggia tranquilla, perfetta per ultime ore. Cena pesce vista mare.",
        timing: "12-15. Volo serale da Denpasar (a 20 min)."
      }
    ]
  }
];

const CATEGORIES = {
  temple: { label: "🏯 Templi", color: "#0f766e" },
  nature: { label: "🌿 Natura", color: "#16a34a" },
  beach: { label: "🏖️ Spiagge", color: "#0ea5e9" },
  waterfall: { label: "💦 Cascate", color: "#06b6d4" },
  viewpoint: { label: "⛰️ Panorami", color: "#a855f7" },
  culture: { label: "🎭 Cultura", color: "#ec4899" },
  city: { label: "🏙️ Città/Street", color: "#ea580c" }
};

const BEST_TIMES = {
  sunrise: "🌅 Alba (5:30-7:00)",
  "golden-am": "✨ Golden hour mattina (7-9)",
  midday: "☀️ Pieno giorno (11-15)",
  "golden-pm": "🌇 Golden hour pomeriggio (16-18)",
  sunset: "🌆 Tramonto (18-18:30)",
  "blue-hour": "💙 Blue hour (18:30-19)",
  night: "🌙 Notte"
};
