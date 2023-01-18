import React, {Component} from "react";
import "./Feedback.module.css";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

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
        let total = 0;
        for (const key in this.state) {
           total = total + this.state[key];
        };
        return total;
    };

    countPositiveFeedbackPercentage = () => {
        let result;

        if( this.countTotalFeedback() === 0) {
            return result = 0;
        } else {
            result = Math.round(((this.state.good + this.state.neutral) / this.countTotalFeedback()) * 100);
            return result;
        };
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