import React, {Component} from "react";
import "./Feedback.module.css";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };


    clickFeedback = (event) => {
        const name = event.target.name;
        this.setState((prevState) => ({
            [name]: prevState[name] + 1,
        }))
    };

    countTotalFeedback = () => {
        const values = Object.values(this.state)

        const total = values.reduce((total, value) => {
         return total + value;
        }, 0);

        return total;
    };

    countPositiveFeedbackPercentage = () => {
        const result = Math.round(((this.state.good + this.state.neutral) / this.countTotalFeedback()) * 100);
        return result;
    };

    render () {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const percentage = this.countPositiveFeedbackPercentage();
        const clickFeedback = this.clickFeedback;

        const objKey = Object.keys(this.state)


        return (
            <div>
                <Section title={'Please leave feedback'}>
              
                <FeedbackOptions
                options={objKey}
                onLeaveFeedback={clickFeedback}
                />
                </Section>

                <Section title={'Statistics'}>
                {!this.countTotalFeedback() ? <Notification message={'No feedback given'}/> : <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={percentage}
                  />
                }
                </Section>
            </div>
        );
    };
};

export default Feedback;