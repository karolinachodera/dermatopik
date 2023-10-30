interface Input {
  name: string,
  header: string,
  type?: string,
  frequency?: boolean,
  required: boolean,
}

interface ScoradResult {
  result: number, description: string, date: Date | any,
}

interface FormInput {
  name: string,
  frequency?: number,
  isChecked: boolean[],
}

interface NoteType {
  note: string,
  date: Date,
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

export const scoradMock: ScoradResult[] = [
  {
    result: 12,
    description: "",
    date: new Date("2023-10-01"),
  },
  {
    result: 6,
    description: "",
    date: new Date("2023-10-05"),
  },
  {
    result: 10,
    description: "",
    date: new Date("2023-10-10"),
  },
  {
    result: 8,
    description: "",
    date: new Date("2023-10-15"),
  },
  {
    result: 14,
    description: "",
    date: new Date("2023-10-20"),
  },
]

export const drugsMock: FormInput[] = [
  {
    name: "Edelan",
    frequency: 1,
    isChecked: [false]
  },
  {
    name: "Protopic",
    frequency: 2,
    isChecked: [false, false]
  },
];

export const caresMock: FormInput[] = [
  {
    name: "Krem rokitnikowy",
    frequency: 2,
    isChecked: [false, false]
  },
  {
    name: "Balsam",
    frequency: 3,
    isChecked: [false, false, false]
  },
];

export const eventsMock: FormInput[] = [
  {
    name: "Stres",
    isChecked: [false],
  },
  {
    name: "Jedzenie",
    isChecked: [false],
  },
  {
    name: "Kosmetyki",
    isChecked: [false],
  },
  {
    name: "Stan zapalny",
    isChecked: [false],
  },
  {
    name: "Zaburzenia snu",
    isChecked: [false],
  },
  {
    name: "Alergeny",
isChecked: [false],  },
];

export const notesMock: NoteType[] = [
  {
    note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: new Date("2023-08-25"),
  },
  {
    note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: new Date("2023-08-30"),
  },
  {
    note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: new Date("2023-09-15"),
  }
  
];
