import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Counter.scss';

const Counter = (props) => {
    const {
        increment,
        incrementIfOdd,
        incrementAsync,
        decrement,
        counter,
    } = props;
    return (
        <div>
            <div className={styles.backButton} data-tid="backButton">
                <Link to={routes.HOME}>
                    <i className="fa fa-arrow-left fa-3x" />
                </Link>
            </div>
            <div className={`counter ${styles.counter}`} data-tid="counter">
                {counter}
            </div>
            <div className={styles.btnGroup}>
                <button
                    className={styles.btn}
                    onClick={increment}
                    data-tclass="btn"
                    type="button"
                >
                    <i className="fa fa-plus" />
                </button>
                <button
                    className={styles.btn}
                    onClick={decrement}
                    data-tclass="btn"
                    type="button"
                >
                    <i className="fa fa-minus" />
                </button>
                <button
                    className={styles.btn}
                    onClick={incrementIfOdd}
                    data-tclass="btn"
                    type="button"
                >
                    odd
                </button>
                <button
                    className={styles.btn}
                    onClick={() => incrementAsync()}
                    data-tclass="btn"
                    type="button"
                >
                    async
                </button>
            </div>
        </div>
    );
};

Counter.propTypes = {
    increment: PropTypes.func,
    incrementIfOdd: PropTypes.func,
    incrementAsync: PropTypes.func,
    decrement: PropTypes.func,
    counter: PropTypes.number,
};

Counter.defaultProps = {
    increment: () => null,
    incrementIfOdd: () => null,
    incrementAsync: () => null,
    decrement: () => null,
    counter: 0,
};

export default Counter;
