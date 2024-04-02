import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Description from "./Description/Description";
import { useState } from "react";

export default function App() {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function updateFeedback(feedbackType) {
    setReviews({ ...reviews, feedbackType: reviews.feedbackType + 1 });
  }

  return (
    <>
      <Description />
      <Options reviews={reviews} function={updateFeedback} />
      <Feedback reviews={reviews} />
    </>
  );
}
