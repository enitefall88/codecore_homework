class Turtle {


    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.path = [[this.x, this.y]];
        this.direction = 'right';
    }

    forward(steps) {
        for (let i = 0; i < steps; i++) {
            switch (this.direction) {
                case 'right':
                    this.x += 1;
                    this.path.push([this.x, this.y]);
                    this.direction = 'right';
                    break;
                case 'left':
                    this.x -= 1;
                    this.direction = 'left';
                    this.path.push([this.x, this.y]);
                    break;
                case 'up':
                    this.y += 1;
                    this.direction = 'up';
                    this.path.push([this.x, this.y]);
                    break;
                default:
                    this.y -= 1;
                    this.direction = 'down';
                    this.path.push([this.x, this.y]);
                    break;
            }
        }
        return this;
    }

    left() {
        switch (this.direction) {
            case 'right':
                this.direction = 'up'
                break;
            case 'left':
                this.direction = 'down'
                break;
            case 'up':
                this.direction = 'left'
                break;
            default:
                this.direction = 'right'
                break;
        }
        return this;
    }

    right() {
        switch (this.direction) {
            case 'right':
                this.direction = 'down'
                break;
            case 'left':
                this.direction = 'up'
                break;
            case 'down':
                this.direction = 'left'
                break;
            default:
                this.direction = 'right'
                break;
        }
        return this;
    }

    allPoints() {
        console.log(this.path);
    }
}

// print() {
//}

const proba = new Turtle(0, 0);
proba.forward(3)
    .left()
    .forward(3)
    .right()
    .forward(3)
    .right()
    .forward(2)
    .right()
    .forward(1)
    .right()
    .forward(3)
    .left()
    .forward(2)
    .allPoints();