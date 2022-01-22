class SwitchButton {
    constructor(status, electricLamp) {
        this.status = status;
        this.electricLamp = electricLamp;
    }

    switchOnOff(){
        //Chuyển trạng thái của công tắc
        this.status = !this.status;
        //Gán trạng thái của bóng đèn đúng với trạng thái của công tắc
        this.electricLamp.turnOnOff();
    }

    setElectricLamp(newLamp){
        this.electricLamp = newLamp;
    }
}