export default class customError {
    type;
    ok;
    status;

    constructor(type, ok, status){
        this.error = type;
        this.ok = ok;
        this.status = status;
    }
}