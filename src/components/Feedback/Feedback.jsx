import React, { Component } from 'react';
import s from 'components/Feedback/Feedback.module.css';
import Statistics from './Statistics';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const eventName = e.target.textContent.toLowerCase();
    this.setState(prevState => {
      return {
        [eventName]: prevState[eventName] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = Math.round(
      (this.state.good / totalFeedback) * 100
    );
    if (!positiveFeedback) {
      return 0;
    }
    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={s.feedback}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
