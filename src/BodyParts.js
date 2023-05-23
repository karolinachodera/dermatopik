import body from "./img/body.png";

function BodyParts({ handleChange, points }) {
  const frontParts = [
    [
      "head",
      "171,126,146,85,146,41,160,10,195,1,230,12,244,46,241,88,222,126,221,145,171,145",
      4.5,
    ],
    [
      "corpus",
      "96,169,171,145,221,145,301,171,271,343,290,481,98,482,120,342",
      18,
    ],
    [
      "left-arm",
      "60,185,97,168,111,295,98,409,72,511,74,586,34,601,1,544,42,516",
      4.5,
    ],
    [
      "right-arm",
      "301,171,329,190,349,515,385,548,357,603,315,589,314,516,289,390,278,299",
      4.5,
    ],
    ["crotch", "155,482,239,482,195,572", 1],
    [
      "left-leg",
      "96,482,154,482,195,574,180,999,124,985,150,929,114,771,122,705",
      9,
    ],
    [
      "right-leg",
      "240,481,291,481,268,704,273,775,241,932,267,984,208,999,197,568",
      9,
    ],
  ];

  const backParts = [
    [
      "head",
      "171,126,146,85,146,41,160,10,195,1,230,12,244,46,241,88,222,126,221,145,171,145",
      4.5,
    ],
    [
      "back",
      "96,169,171,145,221,145,301,171,271,343,290,481,98,482,120,342",
      18,
    ],
    [
      "left-arm",
      "60,185,97,168,111,295,98,409,72,511,74,586,34,601,1,544,42,516",
      4.5,
    ],
    [
      "right-arm",
      "301,171,329,190,349,515,385,548,357,603,315,589,314,516,289,390,278,299",
      4.5,
    ],
    [
      "left-leg",
      "96,482,194,482,195,574,180,999,124,985,150,929,114,771,122,705",
      9,
    ],
    [
      "right-leg",
      "195,481,291,481,268,704,273,775,241,932,267,984,208,999,196,566",
      9,
    ],
  ];

  function Areas({ parts, side }) {
    const areas = parts.map((part, index) => {
      index = side === "back" ? index + 7 : index;
      let isChecked = points[index] === 0 ? "true" : "false";
      return (
        <area
          alt={part[0]}
          title={part[0]}
          coords={part[1]}
          shape="poly"
          className={isChecked === "true" ? "checked" : ""}
          data-value={isChecked === "true" ? part[2] : 0}
          onClick={(e) => handleChange(e, index)}
        />
      );
    });
    return areas;
  }
  function FrontBody() {
    return (
      <div>
        <img
          src={body}
          useMap="#front-body"
          alt="Rysunek ciała człowieka służący do zaznaczania obszarów skóry dotknietych AZS"
        />

        <map name="front-body">
          <Areas parts={frontParts} points={points} side={"front"} />
        </map>
        <div className="shape"></div>
      </div>
    );
  }
  function BackBody() {
    return (
      <>
        <img
          src={body}
          useMap="#back-body"
          alt="Rysunek ciała człowieka służący do zaznaczania obszarów skóry dotknietych AZS"
        />

        <map name="back-body">
          <Areas parts={backParts} points={points} side={"back"} />
        </map>
      </>
    );
  }
  return (
    <>
      <FrontBody />
      <BackBody />
    </>
  );
}

export default BodyParts;
