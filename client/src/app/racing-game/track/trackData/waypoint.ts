import * as THREE from 'three';

export class Waypoint {

    // TODO real setters and getters
    private _circleId: number = null;

    private _incomingPlaneId: number = null;

    private _outgoingPlaneId: number = null;

    public constructor(
        private _position: THREE.Vector3 = new THREE.Vector3(0, 0, 0)
    ) {}

    public get position(): THREE.Vector3 {
        return this._position;
    }

    public set position(position: THREE.Vector3) {
        this._position = position;
    }

    public setPositionZ(positionZ: number): void {
        this._position.z = positionZ;
    }

    public bindCircle( id: number): void {
        if (this._circleId === null)
            this._circleId = id;
    }

    public get circleId(): number {
        return this._circleId;
    }

    public unbindCircle(): void {
        this._circleId = null;
    }

    public bindIncomingPlane(id: number): void {
        if (this._incomingPlaneId === null)
        this._incomingPlaneId = id;
    }

    public unbindIncomingPlane(): void {
        this._incomingPlaneId = null;
    }

    public getIncomingPlaneId(): number {
        return this._incomingPlaneId;
    }

    public bindOutgoingPlane(id: number): void {
        if (this._outgoingPlaneId === null)
        this._outgoingPlaneId = id;
    }

    public unbindOutgoingPlane(): void {
        this._outgoingPlaneId = null;
    }

    public getOutgoingPlaneId(): number {
        return this._outgoingPlaneId;
    }
}
