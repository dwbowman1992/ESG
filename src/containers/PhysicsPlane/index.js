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
            const dotArr = [{ x: 50, y: 100, size: 5 }, { x: 200, y: 60, size: 10 }, { x: 100, y: 30, size: 4 }]
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
            })
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
