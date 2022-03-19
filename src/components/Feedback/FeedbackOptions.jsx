import PropTypes from 'prop-types';
import Button from './Button/Button';
function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(value => (
        <Button
          key={value}
          value={value}
          handleFeedback={() => onLeaveFeedback(value)}
        />
      ))}
    </>
  );
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
export default FeedbackOptions;
