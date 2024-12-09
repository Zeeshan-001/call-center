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

// Function to get customers by gender
function getCustomersByGender(gender) {
  return customers.filter((customer) => customer.geschlecht === gender);
}

// Function to get customers by type of contract
function getCustomersByContractType(contractType) {
  return customers.filter((customer) =>
    customer.vertrage.some((contract) => contract.typ === contractType)
  );
}

// Function to get customer by email
function getCustomerByEmail(email) {
  return customers.find((customer) => customer.email === email);
}

// Function to get total inkasso balance for a customer
function getInkassoBalanceForCustomer(email) {
  const customer = getCustomerByEmail(email);
  if (!customer) return null;

  return customer.inkasso.reduce((sum, entry) => sum + entry.betrag, 0);
}

// Function to get all active contracts
function getActiveContracts() {
  const currentDate = new Date();
  return customers.flatMap((customer) =>
    customer.vertrage.filter(
      (contract) => new Date(contract.startdatum) <= currentDate
    )
  );
}
