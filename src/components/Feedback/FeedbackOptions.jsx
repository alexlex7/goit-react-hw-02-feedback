import PropTypes from 'prop-types';
import s from 'components/Feedback/Feedback.module.css';
function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <button type="button" className={s.btn} onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" className={s.btn} onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button
        type="button"
        className={(s.btn, s.lastBtn)}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </>
  );
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
