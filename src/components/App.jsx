import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Description from "./Description/Description";
import Notification from "./Notification/Notification";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem("saved-clicks");

    if (savedReviews !== null) {
      return JSON.parse(savedReviews);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  const positive = Math.round((reviews.good / totalFeedback) * 100);

  function updateFeedback(feedbackType) {
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  }

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(reviews));
  }, [reviews]);

  function onReset() {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <>
      <Description />
      <Options
        reviews={reviews}
        onUpdate={updateFeedback}
        total={totalFeedback}
        onReset={onReset}
      />
      {totalFeedback > 0 && (
        <Feedback reviews={reviews} total={totalFeedback} positive={positive} />
      )}
      {totalFeedback === 0 && <Notification total={totalFeedback} />}
    </>
  );
}
