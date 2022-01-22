class Battery {
    constructor(energy) {
        this.energy = energy;
    }
    getEnergy(){
        return this.energy;
    }
    setEnergy(newEnergy){
        this.energy = newEnergy;
    }
    decreaseEnergy() {
        if (this.energy > 0){
            this.energy--;
        }else {
            alert("Bạn đã hết pin rồi");
        }
    }
}