import { Component, Container } from 'common';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Notification } from 'components/Notification';
import { Section } from 'components/Section';
import { Statistics } from 'components/Statistics';

// import PropTypes from 'prop-types'

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    const { name } = e.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    // Object.entries(this.state).reduce(
    //   (acc, [name, good]) =>
    //     name === 'good' ? ((good / total) * 100).toFixed(0) : acc,
    //   0,
    // );

    return total === 0 ? 0 : ((good * 100) / total).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <Container>
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.leaveFeedback}
            />
          </Container>
        </Section>

        <Section title="Statistics">
          <Container>
            {total > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Container>
        </Section>
      </div>
    );
  }
}
