import css from "./Feedback.module.css";

export default function Feedback({
  reviews: { good, neutral, bad },
  total,
  positive,
}) {
  return (
    <>
      {total > 0 && <p className={css.text}> Good: {good}</p>}
      {total > 0 && <p className={css.text}>Neutral: {neutral}</p>}
      {total > 0 && <p className={css.text}>Bad: {bad}</p>}
      {total > 0 && <p className={css.text}>Total: {total}</p>}
      {total > 0 && <p className={css.text}>Positive: {positive}%</p>}
    </>
  );
}
