export class Point{
    private x:number;
    private y:number;

    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }

    public getX():number{
        return this.x;
    }
    public setX(x:number){
        this.x = x;
    }

    public getY():number{
        return this.y;
    }
    public setY(y:number){
        this.y = y;
    }

    public toString(): string {
        return `(${this.x},${this.y})`;
    }

    public distanceToOrigin(): number {
        const distance = Math.sqrt(this.x * this.x + this.y * this.y);
        return distance;
    }

    public calculateDistance(anotherPoint: Point): number {
        const distance = Math.sqrt(
            Math.pow(anotherPoint.getX() - this.x, 2) + Math.pow(anotherPoint.getY() - this.y, 2)
        );
        return distance;
    }
}