import React from 'react';
import { connect } from "react-redux";
import './styles.css';

class MainInformationView extends React.Component {
    constructor(props) {
        super(props);
        this.canvasref = React.createRef();
        this.degreeResponse = null;
        this.prevXCoordinate = 0;
        this.prevYCoordinate = 0;
        this.prevRadius = null;
        this.dataIncrement = 0;
        this.state = {
            loaded: false
        }
    }

    resetCanvas() {
        const canvas = document.getElementsByClassName('physicscanvas')[0];
        const ctx = canvas.getContext('2d');
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0,
            0,
            canvas.width,
            canvas.height);
    }

    updatePosition() {
        if(this.dataIncrement < 350) {
            this.dataIncrement += 10;
        } else {
            this.dataIncrement = 0;
        }
        // TODO remove uncommented lines when api is in place.
        // const degree = parseInt(this.degreeResponse.data);
        const canvas = document.getElementsByClassName('physicscanvas')[0];
        const ctx = canvas.getContext('2d');
        let radius = Math.floor(Math.random() * Math.floor(canvas.height / 2));
        const height = canvas.height;
        const width = canvas.width;
        ctx.beginPath();
        ctx.fillStyle = "#c82124";
        ctx.translate(width / 2, height / 2);
        let degree = this.dataIncrement;
        // let radius = 50;
        let degreeRadians = degree * Math.PI / 180;
        let xCoordinate = Math.cos(degreeRadians) * radius;
        let yCoordinate = Math.sin(degreeRadians) * radius;
        this.prevXCoordinate = xCoordinate;
        this.prevYCoordinate = yCoordinate;
        this.prevRadius = radius;
        ctx.arc(xCoordinate, (yCoordinate) * -1, 4, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }

    componentDidMount() {
        this.startInterval();
    }

    componentWillUnmount() {
        this.stopInterval();
    }

    startInterval() {
        return setInterval(() => {
            this.props.onRequestData();
        }, 500);
    };

    stopInterval() {
        clearInterval(this.state.apiInterval);
    }

    render() {

        const { fetching, data, error } = this.props;

        if (data) {
            this.resetCanvas();
            this.degreeResponse = data;
            this.updatePosition();
        }

        this.degreeResponse = data;

        if (error) {
            this.stopInterval();
        }

        return (
            <canvas className="physicscanvas" ref={this.canvasRef} />
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
        onRequestData: () => dispatch({ type: "GET_SOUNDS_REQUEST" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainInformationView)
