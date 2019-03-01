import React from "react";

import { connect } from "react-redux";

class Api extends React.Component {

    componentDidMount() {
        this.props.onRequestData();
    }

    render() {
        const { fetching, data, error } = this.props;

        return (
            <div>
                {data ? (
                    <div>
                        Response from Backend (configuration/mode): "{data.mode}"
                    </div>
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
