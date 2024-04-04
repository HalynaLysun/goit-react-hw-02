import css from "./Feedback.module.css";

export default function Feedback({
  reviews: { good, neutral, bad },
  total,
  positive,
}) {
  return (
    <>
      <p className={css.text}> Good: {good}</p>
      <p className={css.text}>Neutral: {neutral}</p>
      <p className={css.text}>Bad: {bad}</p>
      <p className={css.text}>Total: {total}</p>
      <p className={css.text}>Positive: {positive}%</p>
    </>
  );
}
