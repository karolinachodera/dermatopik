interface BodyPart {
  bodyPartName: string,
  bodyPartProportion: number,
  id: number,
  frontSide: boolean,
  backSide: boolean,
  isFrontChecked: boolean,
  isBackChecked: boolean,
}

interface Symptom {
  name: string,
  polishLabel: string,
  points: number,
  id: number,
}

interface Range {
  symptomName: string,
    rangeDescription: string,
    points: number,
    id: number,
}

export const bodyPartsData: BodyPart[] = [
  {
    bodyPartName: "head",
    bodyPartProportion: 4.5,
    id: 0,
    frontSide: true,
    backSide: true,
    isFrontChecked: false,
    isBackChecked: false,
  },
  {
    bodyPartName: "corpus",
    bodyPartProportion: 18,
    id: 1,
    frontSide: true,
    backSide: true,
    isFrontChecked: false,
    isBackChecked: false,
  },
  {
    bodyPartName: "left-arm",
    bodyPartProportion: 4.5,
    id: 2,
    frontSide: true,
    backSide: true,
    isFrontChecked: false,
    isBackChecked: false,
  },
  {
    bodyPartName: "right-arm",
    bodyPartProportion: 4.5,
    id: 3,
    frontSide: true,
    backSide: true,
    isFrontChecked: false,
    isBackChecked: false,
  },
  {
    bodyPartName: "crotch",
    bodyPartProportion: 1,
    id: 4,
    frontSide: true,
    backSide: false,
    isFrontChecked: false,
    isBackChecked: false,
  },
  {
    bodyPartName: "left-leg",
    bodyPartProportion: 9,
    id: 5,
    frontSide: true,
    backSide: true,
    isFrontChecked: false,
    isBackChecked: false,
  },
  {
    bodyPartName: "right-leg",
    bodyPartProportion: 9,
    id: 6,
    frontSide: true,
    backSide: true,
    isFrontChecked: false,
    isBackChecked: false,
  },
];

export const symptoms: Symptom[] = [
  {
    name: "erythema",
    polishLabel: "Rumień",
    points: 0,
    id: 0,
  },
  { name: "edema", polishLabel: "Obrzęk", points: 0, id: 1 },
  {
    name: "oozing-crusting",
    polishLabel: "Wysięki i strupki",
    points: 0,
    id: 2,
  },
  {
    name: "lichenification",
    polishLabel: "Zgrubienie skóry",
    points: 0,
    id: 3,
  },
  {
    name: "scratch-marks",
    polishLabel: "Przeczosy (uszkodzenia od drapania)",
    points: 0,
    id: 4,
  },
  {
    name: "dryness",
    polishLabel: "Suchość (na obszarach niezajętych zmianami zapalnymi",
    points: 0,
    id: 5,
  },
];

export const symptomsValues: string[] = [
  "brak",
  "słabo nasilony",
  "średnio nasilony",
  "mocno nasilony",
];

export const rangeData: Range[] = [
  {
    symptomName: "itch",
    rangeDescription:
      "Nasilenie świądu w skali od 0 (brak świądu) do 10 (mocno nasilony)",
    points: 0,
    id: 0,
  },
  {
    symptomName: "sleep",
    rangeDescription:
      "Zaburzenia snu w skali od 0 (brak zaburzeń snu) do 10 (całkowita bezsenność)",
    points: 0,
    id: 1,
  },
];
