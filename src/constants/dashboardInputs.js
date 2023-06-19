export const addingFormData = [
  {
    name: "drug",
    header: "Podaj nazwę leku",
    type: "text",
    frequency: true,
    required: true,
  },
  {
    name: "care",
    header: "Podaj nazwę kosmetyku/zabiegu",
    type: "text",
    frequency: true,
    required: true,
  },
  {
    name: "event",
    header: "Podaj nazwę zdarzenia",
    frequency: false,
    required: true,
  },
  {
    name: "note",
    header: "Wpisz notatkę",
    frequency: false,
    required: true,
  },
  {
    name: "frequency",
    header: "Podaj częstotliwość",
    type: "number",
    required: true,
  },
];

export const sectionsData = [
  {
    name: "scorad",
    header: "SCORAD",
    width: "full-width",
  },
];
