class ElectricLamp {
    constructor(status) {
        this.status = status;
    }

    turnOnOff(){
        this.status = !this.status;
        this.status? alert("Đèn sáng") : alert("Đèn bị tắt");
    }
}