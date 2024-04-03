export default function Feedback({ reviews: { good, neutral, bad }, total }) {
  return (
    <>
      {total > 0 && <p> Good: {good}</p>}
      {total > 0 && <p>Neutral: {neutral}</p>}
      {total > 0 && <p>Bad: {bad}</p>}
    </>
  );
}
