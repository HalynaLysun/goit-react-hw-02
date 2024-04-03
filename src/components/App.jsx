import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Description from "./Description/Description";
import Notification from "./Notification/Notification";
import { useState } from "react";

export default function App() {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  function updateFeedback(feedbackType) {
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  }

  return (
    <>
      <Description />
      <Options
        reviews={reviews}
        onUpdate={updateFeedback}
        total={totalFeedback}
      />
      <Feedback reviews={reviews} total={totalFeedback} />
      <Notification total={totalFeedback} />
    </>
  );
}
