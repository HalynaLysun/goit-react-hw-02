import css from "../Options/Options.module.css";

export default function Options({ reviews, onUpdate, total }) {
  const keys = Object.keys(reviews);
  console.log(total);
  console.log(keys[0]);
  function onReset() {
    console.log(reviews.good);

    {
      total > 0 && reviews.good === 0;
    }
  }

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
      {total > 0 && <button onClick={onReset}>Reset</button>}
    </>
  );
}
