import  propTypes  from 'prop-types';
import css from './Feedback.module.css';


   

export const Feedback = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option => (
                <li key={option}
                className={css.li}>
                    <button
                        name={option}
                        type="button"
                        onClick={onLeaveFeedback}
                        className={css.feedbackBtn}
                    >
                        {option}
                    </button>
                </li>
            ))}
        </div>
    );
};

Feedback.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};