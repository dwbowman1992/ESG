import React from "react";

import { connect } from "react-redux";

class Api extends React.Component {
    componentDidMount() {
        const interval = this.startInterval();
        this.setState({ apiInterval: interval});
    }

    componentWillUnmount() {
        this.stopInterval();
    }

    startInterval() {
        return setInterval(() => {
            this.props.onRequestData();
        }, 2000);
    };

    stopInterval() {
        clearInterval(this.state.apiInterval);
    }

    render() {
        const { fetching, data, error } = this.props;

        /*let intervalFlag = false;

        if (fetching || error) {
            this.stopInterval();
            intervalFlag = true;
        }

        if (!fetching && !error && intervalFlag) {
            // reset interval
            console.log('resetting interval');
            this.startInterval();
            intervalFlag = false;
        }*/

        if (error) {
            this.stopInterval();
        }

        return (
            <div>
                {data ? (
                    <div>
                        RESPONSE from Backend (configuration/mode): {data}
                    </div>
                ) : null}
                {error ? (
                    <div>
                        ERROR from Backend (configuration/mode): {error.message}
                    </div>
                ) : null}
                {fetching ? (
                    <div>Fetching Data...</div>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.reducer.fetching,
        data: state.reducer.data,
        error: state.reducer.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestData: () => dispatch({ type: "API_CALL_REQUEST" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Api);
