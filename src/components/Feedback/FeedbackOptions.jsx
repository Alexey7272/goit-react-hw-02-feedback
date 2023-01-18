import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (

        <div>
            {options.map ((option) => (
                <button
                   key={option}
                   type="button"
                   onClick={onLeaveFeedback}
                   name={option}
                   >
                   {option}
                </button>
            ))}
        </div>  
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;