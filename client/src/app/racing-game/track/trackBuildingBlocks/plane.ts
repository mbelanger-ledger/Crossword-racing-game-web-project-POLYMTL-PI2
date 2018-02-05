import {Waypoint} from "../trackData/waypoint";
import * as THREE from "three";

const CIRLEDIAMETER: number = 20;

const REFERENCEVECTOR: THREE.Vector3 = new THREE.Vector3(1, 0, 0);


export class Plane {

    private beginPoint: THREE.Vector3;

    private endPoint: THREE.Vector3;

    private previousAngle: number = 0;

    private mesh: THREE.Mesh;

    public constructor(waypoint1: Waypoint, waypoint2: Waypoint) {
        this.beginPoint = waypoint1.getPosition();
        this.endPoint = waypoint2.getPosition();
        this.mesh = null;
    }

    public setPreviousAngle(newAngle: number): void {
        this.previousAngle = newAngle;
    }

    public getPreviousAngle(): number {
        return this.previousAngle;
    }

    public calculateRadianAngle(): number {
        const directionVector: THREE.Vector3 = new THREE.Vector3();
        directionVector.subVectors(this.endPoint, this.beginPoint);
        let angle: number = directionVector.angleTo(REFERENCEVECTOR);
        if (directionVector.y < REFERENCEVECTOR.y)
            angle *= -1;

        return angle;
    }

    public getId(): number {
        return this.mesh.id;
    }

    public getMesh(): THREE.Mesh {
        return this.mesh;
    }

    public setMesh(mesh: THREE.Mesh): void {
        this.mesh = mesh;
    }

    public getLength(): number {
        return Math.sqrt(Math.pow(this.beginPoint.x - this.endPoint.x, 2)
                                + Math.pow(this.beginPoint.y - this.endPoint.y, 2)
                                + Math.pow(this.beginPoint.z - this.endPoint.z, 2))
                                - CIRLEDIAMETER;
    }

    public getCenterPoint(): THREE.Vector3 {
        const centerPoint: THREE.Vector3 = new THREE.Vector3((this.endPoint.x - this.beginPoint.x) / 2,
                                                           (this.endPoint.y - this.beginPoint.y) / 2,
                                                           (this.endPoint.z - this.beginPoint.z) / 2
                                                    );

        return centerPoint.add(this.beginPoint);
    }

    public setEndPoint(newPos: THREE.Vector3): THREE.Vector3 {
        const oldEndPoint: THREE.Vector3 = this.endPoint;
        this.endPoint = newPos;

        return oldEndPoint;
    }

    public getEndPoint(): THREE.Vector3 {
        return this.endPoint;
    }

    public setBeginingPoint(newPos: THREE.Vector3): THREE.Vector3 {
        const oldBeginPoint: THREE.Vector3 = this.beginPoint;
        this.beginPoint = newPos;

        return oldBeginPoint;
    }

    public getBeginingPoint(): THREE.Vector3 {
        return this.beginPoint;
    }
}
