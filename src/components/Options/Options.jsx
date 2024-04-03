import css from "../Options/Options.module.css";

export default function Options({ reviews, onUpdate, total, onReset }) {
  const keys = Object.keys(reviews);

  return (
    <>
      <button
        onClick={() => {
          onUpdate(keys[0]);
        }}
        className={css.button}
      >
        {keys[0]}
      </button>
      <button
        onClick={() => {
          onUpdate(keys[1]);
        }}
        className={css.button}
      >
        {keys[1]}
      </button>
      <button
        onClick={() => {
          onUpdate(keys[2]);
        }}
        className={css.button}
      >
        {keys[2]}
      </button>
      {total > 0 && (
        <button onClick={onReset} className={css.button}>
          Reset
        </button>
      )}
    </>
  );
}
