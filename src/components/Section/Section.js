import { AddingForm } from "../AddingForm/AddingForm";

function Section({
  children,
  header,
  width,
  addingFormInputs,
  handleInputChange,
  handleSubmit,
  listItem,
}) {
  return (
    <section className={`${header} ${width} main`}>
      <h2>{header}</h2>
      {children}
      {addingFormInputs && (
        <AddingForm
          inputs={addingFormInputs}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          listItem={listItem}
        />
      )}
    </section>
  );
}

export default Section;
