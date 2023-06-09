export const drugsTextInput = {
  name: "drug",
  header: "Podaj nazwę leku",
  type: "text",
  frequency: true,
  required: true,
};

export const drugsFrequencyInput = {
  name: "drugFrequency",
  header: "Podaj częstotliwość stosowania leku",
  type: "number",
  required: true,
};

export const caresTextInput = {
  name: "care",
  header: "Podaj nazwę kosmetyku/zabiegu",
  type: "text",
  frequency: true,
  required: true,
};

export const caresFrequencyInput = {
  name: "careFrequency",
  header: "Podaj częstotliwość stosowania",
  type: "number",
  required: true,
};

export const eventsTextInput = {
  name: "event",
  header: "Podaj nazwę zdarzenia",
  frequency: false,
  required: true,
};

export const notesTextarea = {
  name: "note",
  header: "Wpisz notatkę",
  frequency: false,
  required: true,
};

export const sectionsData = [
  {
    name: "scorad",
    header: "SCORAD",
    width: "full-width",
  },
];

export const drugsMock = [
  {
    name: "Edelan",
    frequency: 1,
  },
  {
    name: "Protopic",
    frequency: 2,
  },
];

export const caresMock = [
  {
    name: "Krem rokitnikowy",
    frequency: 2,
  },
  {
    name: "Balsam",
    frequency: 3,
  },
];

export const eventsMock = [
  "Stres",
  "Jedzenie",
  "Kosmetyki",
  "Stan zapalny",
  "Zaburzenia snu",
  "Alergeny",
];

export const notesMock = [
  "Sucha i czerwona szyja - być może po maśle orzechowym?",
];
