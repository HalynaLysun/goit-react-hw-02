import css from "../Options/Options.module.css";

export default function Options({ reviews, updateFeedback }) {
  const keys = Object.keys(reviews);
  return (
    <>
      <button onClick={updateFeedback(keys[0])} className={css.button}>
        {keys[0]}
      </button>
      <button onClick={updateFeedback(keys[1])} className={css.button}>
        {keys[1]}
      </button>
      <button onClick={updateFeedback(keys[2])} className={css.button}>
        {keys[2]}
      </button>
    </>
  );
}
