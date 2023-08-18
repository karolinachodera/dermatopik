interface Input {
  name: string,
  header: string,
  type?: string,
  frequency?: boolean
  required: boolean
}

interface FormInput {
  name: string,
    frequency: number,
}

export const drugsTextInput: Input = {
  name: "drug",
  header: "Nazwa leku",
  type: "text",
  frequency: true,
  required: true,
};

export const drugsFrequencyInput: Input = {
  name: "drugFrequency",
  header: "Częstotliwość stosowania",
  type: "number",
  required: true,
};

export const caresTextInput: Input = {
  name: "care",
  header: "Nazwa pielęgnacji",
  type: "text",
  frequency: true,
  required: true,
};

export const caresFrequencyInput: Input = {
  name: "careFrequency",
  header: "Częstotliwość stosowania",
  type: "number",
  required: true,
};

export const eventsTextInput: Input = {
  name: "event",
  header: "Nazwa zdarzenia",
  frequency: false,
  required: true,
};

export const notesTextarea: Input = {
  name: "note",
  header: "Wpisz notatkę",
  frequency: false,
  required: true,
};

export const drugsMock: FormInput[] = [
  {
    name: "Edelan",
    frequency: 1,
  },
  {
    name: "Protopic",
    frequency: 2,
  },
];

export const caresMock: FormInput[] = [
  {
    name: "Krem rokitnikowy",
    frequency: 2,
  },
  {
    name: "Balsam",
    frequency: 3,
  },
];

export const eventsMock: string[] = [
  "Stres",
  "Jedzenie",
  "Kosmetyki",
  "Stan zapalny",
  "Zaburzenia snu",
  "Alergeny",
];

export const notesMock: string[] = [
  "Sucha i czerwona szyja - być może po maśle orzechowym?",
];
