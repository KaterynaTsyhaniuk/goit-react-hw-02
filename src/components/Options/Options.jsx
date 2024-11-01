import css from "./Options.module.css";

function Options({ updateFeedback, feedbackReset, totalFeedback }) {
  return (
    <div className={css.optionBox}>
      <button
        className={css.feedbackBtn}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.feedbackBtn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={css.feedbackBtn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.feedbackBtn} onClick={feedbackReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
