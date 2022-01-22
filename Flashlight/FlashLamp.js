class FlashLamp {
    constructor(status, battery) {
        this.status = status;
        this.battery = battery;
    }

    setBattery(newBattery){
        this.battery = newBattery;
    }
    getBatteryInfor(){
        return this.battery.getEnergy();
    }
    light(){
        if (this.status){
            if (this.battery.getEnergy()>0){
                alert("Đèn có thể bật!");
                this.battery.decreaseEnergy();
            }else {
                alert("Hết điện rồi!");
            }
        }else {
            alert("Tắt điện!")
        }
    }
    turnOnOff(){
        this.status = !this.status;
    }
}
let pin1 = new Battery(2);
let pin2 = new Battery(12);

let den = new FlashLamp(true, pin1);