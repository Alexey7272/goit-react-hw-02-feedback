import PropTypes from 'prop-types';

export default function Statistics ({ good, neutral, bad, total, positivePercentage }) {
    return (
        <ul>
            <li>
              <span>Good:</span>
              <span>{good}</span>
            </li>

            <li>
              <span>Neutral:</span>
              <span>{neutral}</span>
            </li>

             <li>
              <span>Bad:</span>
              <span>{bad}</span>
            </li>

            <li>
              <span>Total:</span>
              <span>{total}</span>
            </li>

            <li>
              <span>Positive feedback:</span>
              <span>{positivePercentage}%</span>
            </li>
        </ul>
    );
};


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};