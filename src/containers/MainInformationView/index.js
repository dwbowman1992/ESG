import React from 'react';
import { connect } from "react-redux";
import './styles.css';

class MainInformationView extends React.Component {
    constructor(props) {
        super(props);
        this.canvasref = React.createRef();
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        const interval = this.startInterval();

        this.setState({ apiInterval: interval});

        if (!this.state.loaded) {
            const dotArr = [{ x: 50, y: 50, size: 4 }, { x: 200, y: 60, size: 4 }, { x: 250, y: 110, size: 4 }];
            // const dotArr = [{x:50, y:30, size: 4}];
            const canvas = document.getElementsByClassName('physicscanvas')[0];
            const ctx = canvas.getContext('2d');
            // ctx.moveTo(canvas.width / 2, canvas.height / 2);
            // ctx.lineTo((canvas.width / 2) + 50, 50);
            // arc(x,y, size, length of circle (leave at 0), circumference= 2* pi )
            dotArr.map(dot => {
              ctx.fillStyle = "#c82124"; //red
              ctx.strokeStyle = "#d9d9d9";
              ctx.lineWidth   = 1;
              ctx.beginPath();
              ctx.arc(dot.x, dot.y, dot.size, 0, 2 * Math.PI);
              ctx.closePath();
              ctx.fill();
              ctx.stroke();
            });
            this.state.loaded = true;
        }
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

        if (error) {
            this.stopInterval();
        }

        console.log(fetching, data, error);

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
