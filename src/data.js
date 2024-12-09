const customers = [
  {
    id: 1,
    anrede: "Herr",
    vorname: "Paul",
    nachname: "Meier",
    geburtsdatum: "12.01.1980",
    geschlecht: "männlich",
    adresse: "Hauptstraße 45, 81234 Musterstadt",
    rechnungsanschrift: "c/o Paul Meier, Poststraße 21, 81234 Musterstadt",
    telefon: "040 - 234578123",
    mobil: "0176 - 12345678",
    email: "paul.meier@email.de",
    vertrage: [
      {
        typ: "Zahnzusatzversicherung",
        nummer: "SMART4001-1234567",
        startdatum: "01.05.2023",
      },
      {
        typ: "Hausratversicherung",
        nummer: "HV-1234567-003",
        startdatum: "15.06.2021",
      },
      { typ: "Strom", nummer: "S-x0-9876543", startdatum: "01.01.2018" },
      {
        typ: "KFZ Versicherung",
        nummer: "KFZ-11111-AAA",
        startdatum: "03.03.2015",
      },
    ],
    inkasso: [
      {
        typ: "Versicherung SMART4001-1234567",
        datum: "01.04.2024",
        betrag: -12.95,
      },
      {
        typ: "Versicherung HV-1234567-003",
        datum: "01.04.2024",
        betrag: -50.99,
      },
      { typ: "Einzug (SEPA)", datum: "15.03.2024", betrag: 63.94 },
    ],
    schäden: [
      { typ: "Versicherung_S-x0-4958737", datum: "02.04.2017" },
      { typ: "Versicherung_HV-4382391-003", datum: "06.07.2018" },
      { typ: "Versicherung_KFZ-33994-BHI", datum: "01.06.2024" },
      { typ: "Versicherung_HV-4382391-003", datum: "02.04.2023" },
    ],
  },
  {
    id: 2,
    anrede: "Frau",
    vorname: "Anna",
    nachname: "Schmitt",
    geburtsdatum: "22.10.1985",
    geschlecht: "weiblich",
    adresse: "Gartenstraße 7, 10178 Berlin",
    rechnungsanschrift: "c/o Anna Schmitt, Mauerweg 3, 10178 Berlin",
    telefon: "030 - 1234567",
    mobil: "0157 - 98765432",
    email: "anna.schmitt@webmail.de",
    vertrage: [
      {
        typ: "Zahnzusatzversicherung",
        nummer: "SMART4001-2233445",
        startdatum: "01.07.2021",
      },
      {
        typ: "Hausratversicherung",
        nummer: "HV-2233445-003",
        startdatum: "01.12.2019",
      },
      { typ: "Strom", nummer: "S-x0-6677889", startdatum: "01.06.2017" },
      {
        typ: "KFZ Versicherung",
        nummer: "KFZ-44444-BBB",
        startdatum: "01.02.2014",
      },
    ],
    inkasso: [
      {
        typ: "Versicherung SMART4001-2233445",
        datum: "01.04.2024",
        betrag: -15.99,
      },
      {
        typ: "Versicherung HV-2233445-003",
        datum: "01.04.2024",
        betrag: -48.5,
      },
      { typ: "Einzug (SEPA)", datum: "15.03.2024", betrag: 64.49 },
    ],
    schäden: [
      { typ: "Versicherung_S-x0-4958737", datum: "02.04.2017" },
      { typ: "Versicherung_HV-4382391-003", datum: "06.07.2018" },
      { typ: "Versicherung_KFZ-33994-BHI", datum: "01.06.2024" },
      { typ: "Versicherung_HV-4382391-003", datum: "02.04.2023" },
    ],
  },
  {
    id: 3,
    anrede: "Herr",
    vorname: "Peter",
    nachname: "Krause",
    geburtsdatum: "08.06.1990",
    geschlecht: "männlich",
    adresse: "Bergstraße 15, 22303 Hamburg",
    rechnungsanschrift: "c/o Peter Krause, Hafenweg 45, 22303 Hamburg",
    telefon: "040 - 66554433",
    mobil: "0172 - 99887766",
    email: "peter.krause@domain.com",
    vertrage: [
      {
        typ: "Zahnzusatzversicherung",
        nummer: "SMART4001-4455667",
        startdatum: "01.02.2020",
      },
      {
        typ: "Hausratversicherung",
        nummer: "HV-4455667-003",
        startdatum: "15.08.2018",
      },
      { typ: "Strom", nummer: "S-x0-2233445", startdatum: "01.10.2016" },
      {
        typ: "KFZ Versicherung",
        nummer: "KFZ-77777-CCC",
        startdatum: "01.05.2014",
      },
    ],
    inkasso: [
      {
        typ: "Versicherung SMART4001-4455667",
        datum: "01.04.2024",
        betrag: -18.95,
      },
      {
        typ: "Versicherung HV-4455667-003",
        datum: "01.04.2024",
        betrag: -39.99,
      },
      { typ: "Einzug (SEPA)", datum: "15.03.2024", betrag: 58.94 },
    ],
    schäden: [
      { typ: "Versicherung_S-x0-4958737", datum: "02.04.2017" },
      { typ: "Versicherung_HV-4382391-003", datum: "06.07.2018" },
      { typ: "Versicherung_KFZ-33994-BHI", datum: "01.06.2024" },
      { typ: "Versicherung_HV-4382391-003", datum: "02.04.2023" },
    ],
  },

  {
    id: 4,
    anrede: "Frau",
    vorname: "Lisa",
    nachname: "Schmidt",
    geburtsdatum: "24.03.1990",
    geschlecht: "weiblich",
    adresse: "Gartenweg 12, 12345 Berlin",
    rechnungsanschrift: "Lisa Schmidt, Blumenstraße 5, 12345 Berlin",
    telefon: "030 - 56789345",
    mobil: "0157 - 98765432",
    email: "lisa.schmidt@email.de",
    vertrage: [
      {
        typ: "Reiseversicherung",
        nummer: "TRAVEL-567890",
        startdatum: "01.02.2022",
      },
      {
        typ: "Privathaftpflicht",
        nummer: "PHV-12345-678",
        startdatum: "15.07.2020",
      },
      { typ: "Strom", nummer: "S-45-5678910", startdatum: "01.03.2019" },
    ],
    inkasso: [
      { typ: "Versicherung PHV-12345-678", datum: "01.04.2024", betrag: -10.5 },
      { typ: "Einzug (SEPA)", datum: "15.03.2024", betrag: 55.0 },
    ],
    schäden: [
      { typ: "Versicherung_TRAVEL-567890", datum: "10.08.2023" },
      { typ: "Versicherung_PHV-12345-678", datum: "12.01.2021" },
    ],
  },
  {
    id: 5,
    anrede: "Herr",
    vorname: "Markus",
    nachname: "Klein",
    geburtsdatum: "15.08.1975",
    geschlecht: "männlich",
    adresse: "Bergstraße 8, 54321 München",
    rechnungsanschrift: "Markus Klein, Talstraße 18, 54321 München",
    telefon: "089 - 12345678",
    mobil: "0178 - 23456789",
    email: "markus.klein@email.de",
    vertrage: [
      {
        typ: "Lebensversicherung",
        nummer: "LIFE-87654321",
        startdatum: "01.01.2015",
      },
      {
        typ: "Hausratversicherung",
        nummer: "HR-7654321-004",
        startdatum: "10.10.2020",
      },
    ],
    inkasso: [
      {
        typ: "Versicherung LIFE-87654321",
        datum: "01.02.2024",
        betrag: -100.75,
      },
      {
        typ: "Versicherung HR-7654321-004",
        datum: "01.04.2024",
        betrag: -15.0,
      },
    ],
    schäden: [{ typ: "Versicherung_HR-7654321-004", datum: "25.12.2022" }],
  },
  {
    id: 6,
    anrede: "Frau",
    vorname: "Anna",
    nachname: "Fischer",
    geburtsdatum: "30.11.1985",
    geschlecht: "weiblich",
    adresse: "Seestraße 22, 98765 Hamburg",
    rechnungsanschrift: "Anna Fischer, Am See 3, 98765 Hamburg",
    telefon: "040 - 98765432",
    mobil: "0160 - 54321098",
    email: "anna.fischer@email.de",
    vertrage: [
      {
        typ: "KFZ Versicherung",
        nummer: "CAR-12345-A",
        startdatum: "01.06.2023",
      },
      {
        typ: "Rechtsschutzversicherung",
        nummer: "RS-2345678",
        startdatum: "15.09.2020",
      },
    ],
    inkasso: [
      { typ: "Versicherung CAR-12345-A", datum: "01.03.2024", betrag: -75.2 },
      { typ: "Versicherung RS-2345678", datum: "01.04.2024", betrag: -25.0 },
    ],
    schäden: [{ typ: "Versicherung_CAR-12345-A", datum: "01.01.2024" }],
  },
  {
    id: 7,
    anrede: "Herr",
    vorname: "Thomas",
    nachname: "Wolf",
    geburtsdatum: "10.06.1968",
    geschlecht: "männlich",
    adresse: "Mühlenweg 6, 12346 Bremen",
    rechnungsanschrift: "Thomas Wolf, Bahnhofstraße 11, 12346 Bremen",
    telefon: "0421 - 123456",
    mobil: "0151 - 65432109",
    email: "thomas.wolf@email.de",
    vertrage: [
      {
        typ: "Wohngebäudeversicherung",
        nummer: "WG-9876543",
        startdatum: "01.12.2018",
      },
    ],
    inkasso: [
      { typ: "Versicherung WG-9876543", datum: "01.04.2024", betrag: -200.0 },
    ],
    schäden: [{ typ: "Versicherung_WG-9876543", datum: "15.02.2021" }],
  },
  {
    id: 8,
    anrede: "Frau",
    vorname: "Sophie",
    nachname: "Müller",
    geburtsdatum: "22.07.1992",
    geschlecht: "weiblich",
    adresse: "Waldweg 9, 65432 Frankfurt",
    rechnungsanschrift: "Sophie Müller, Eichenstraße 20, 65432 Frankfurt",
    telefon: "069 - 87654321",
    mobil: "0170 - 98765432",
    email: "sophie.mueller@email.de",
    vertrage: [
      { typ: "Strom", nummer: "S-99-1234567", startdatum: "01.01.2020" },
      {
        typ: "Zahnzusatzversicherung",
        nummer: "DENTAL-202020",
        startdatum: "10.04.2023",
      },
    ],
    inkasso: [
      { typ: "Versicherung DENTAL-202020", datum: "01.03.2024", betrag: -15.5 },
      { typ: "Einzug (SEPA)", datum: "20.03.2024", betrag: 45.0 },
    ],
    schäden: [{ typ: "Versicherung_S-99-1234567", datum: "12.08.2021" }],
  },
];

export function extractCustomerInfo() {
  return customers.map((customer) => ({
    id: customer.id,
    anrede: customer.anrede,
    vorname: customer.vorname,
    nachname: customer.nachname,
    geburtsdatum: customer.geburtsdatum,
  }));
}

export function getAllCustomers() {
  return customers;
}

export function getCustomerByID(id) {
  return customers.find((customer) => customer.id === id);
}
