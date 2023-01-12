

import { Feedback } from "./Feedback/Feedback";
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App =() =>  {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad:0,
  });
 
  const onLeaveFeedback = e => {
     const {name} = e.target;
  setFeedback(prev  => ({...prev,
  [name]:prev[name] + 1
 }))
}

  const totalFeedback = () => {
    let total = feedback.good + feedback.neutral + feedback.bad;
    return total;
  };

  const positivePercentage = () => {
    if (totalFeedback() === 0) {
      return 0;
    }
    return Math.round((feedback.good / totalFeedback()) * 100);
  };
    
  
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys(feedback)}
            onLeaveFeedback={onLeaveFeedback}
          />{' '}
        </Section>

        <Section title="Statistics">
          {totalFeedback() !== 0 ? (
          
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={totalFeedback()}
              positivePercentage={positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
