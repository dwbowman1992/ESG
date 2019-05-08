import React from 'react';
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.min.css';
import './styles.css';

class MainInformationView extends React.Component {
    constructor(props) {
        super(props);
        this.canvasref = React.createRef();
        this.apiResponse = null;
        this.dataIncrement = 0;
        this.state = {
            loaded: false,
            apiInterval: null,
            forceUpdate: false
        };
        toast.configure();
    }

    resetCanvas() {
        const canvas = document.getElementsByClassName('physicscanvas')[0];
        const ctx = canvas.getContext('2d');
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    updatePosition() {
        /*if(this.dataIncrement < 350) {
            this.dataIncrement += 10;
        } else {
            this.dataIncrement = 0;
        }
        let degree = this.dataIncrement;*/
        let frequency = parseInt(this.apiResponse.frequency);
        let degree = parseInt(this.apiResponse.direction);
        const canvas = document.getElementsByClassName('physicscanvas')[0];
        const ctx = canvas.getContext('2d');
        const height = canvas.height;
        const width = canvas.width;
        ctx.beginPath();
        ctx.fillStyle = "#c82124";
        ctx.translate(width / 2, height / 2);
        // let radius = 20;
        let degreeRadians = degree * Math.PI / 180;
        let xCoordinate = Math.cos(degreeRadians) * 45;
        let yCoordinate = Math.sin(degreeRadians) * 22;
        ctx.arc(xCoordinate, (yCoordinate) * -1, 4, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }

    componentDidMount() {
        this.state.apiInterval = this.startInterval();
    }

    componentDidUpdate() {
        if(this.props.error) {
            this.showError(this.props.error.message);
        }
    }
    componentWillUnmount() {
        this.stopInterval();
    }

    startInterval() {
        return setInterval(() => {
            this.props.onSoundRequestData();
        }, 500);
    };

    stopInterval() {
        clearInterval(this.state.apiInterval);
    }

    showError(message) {
        toast.error(message, {
            position: toast.POSITION.BOTTOM_CENTER,
            onClose: () => {
                this.apiResponse = null;
                this.props.onSoundRequestData();
            }
        });
    }

    render() {

        const { fetching, data, error } = this.props;

        if(error) {
            this.stopInterval();

            return (
                <div>
                    <canvas className="physicscanvas" ref={this.canvasref} />
                </div>
            );
        } else {
            if(fetching && !this.apiResponse) {
                this.stopInterval();
                return (
                    <canvas className="physicscanvas" ref={this.canvasref} />
                );
            } else {
                if (data) {
                    if(!this.apiResponse) {
                        this.state.apiInterval = this.startInterval();
                    }
                    this.resetCanvas();
                    this.apiResponse = data;
                    this.updatePosition();
                }

                return (
                    <canvas className="physicscanvas" ref={this.canvasref} />
                );
            }
        }
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
        onSoundRequestData: () => dispatch({ type: "GET_SOUND_REQUEST" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainInformationView)
