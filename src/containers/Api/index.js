import React from "react";

import { connect } from "react-redux";

class Api extends React.Component {
    componentDidMount() {
        let apiInterval = setInterval(() => {
            this.props.onRequestData();
        }, 2000);
        this.setState({ apiInterval: apiInterval});
    }

    componentWillUnmount() {
        clearInterval(this.state.apiInterval);
    }

    render() {
        const { fetching, data, error } = this.props;

        if (error) {
            clearInterval(this.state.apiInterval);
        }

        return (
            <div>
                {data ? (
                    <div>
                        RESPONSE from Backend (configuration/mode): {data.mode}
                    </div>
                ) : null}
                {error ? (
                    <div>
                        ERROR from Backend (configuration/mode): {error.message}
                    </div>
                ) : null}
                {fetching ? (
                    <div>Fetching Data</div>
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
