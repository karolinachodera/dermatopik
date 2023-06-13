function Result({ scoradResult }) {
  let description;
  if (scoradResult <= 14) {
    description = "Twoje AZS ma łagodny przebieg";
  } else if (scoradResult > 14 && scoradResult <= 39) {
    description = "Twoje AZS ma umiarkowany przebieg";
  } else {
    description = "Twoje AZS ma ciężki przebieg";
  }

  return (
    <section>
      <h2>Wynik SCORAD: {scoradResult}</h2>
      <p>{description}</p>
    </section>
  );
}

export default Result;
