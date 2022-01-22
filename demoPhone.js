function Mobile(id, name) {
    this.id = id;
    this.name = name;
    this.message = "";
    this.setMessage = function (message) {
        this.message = message;
    }
    this.getMessage = function () {
        return this.message;
    }
    this.sendMessage = function (message, mobile) {
       mobile.setMessage(message);
    }
}
let iphone = new Mobile(1, 'Iphone');
let android = new Mobile(2, 'Android');
iphone.sendMessage("Hi Android", android);
let message = android.getMessage();
console.log(message);