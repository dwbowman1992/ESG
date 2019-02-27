import React from 'react';

import './styles.css';

class PhysicsPlane extends React.Component {
    constructor(props) {
        super(props);
        this.canvasref = React.createRef();
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        if (!this.state.loaded) {
            const canvas = document.getElementsByClassName('physicscanvas')[0];
            const ctx = canvas.getContext('2d');
            ctx.moveTo(canvas.width / 2, canvas.height / 2);
            ctx.lineTo((canvas.width / 2) + 50, 50);
            ctx.stroke();
            this.state.loaded = true;
        }
    }

    render() {
        return (
            <canvas className="physicscanvas" ref="canvasref" />
        );
    }
}

export default PhysicsPlane
