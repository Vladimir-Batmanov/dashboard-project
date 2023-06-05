import css from "./ComponentYears.module.css";

export const ComponentYears = ({ years, onYearButtonClick }) => {
  return (
    <div className={css.root}>
      {years.map((year) => (
        <button
          type="button"
          className={css.yearButton}
          key={year}
          onClick={() => onYearButtonClick(year)}
        >
          {year}
        </button>
      ))}
    </div>
  );
};
