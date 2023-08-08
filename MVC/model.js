class Model{
    constructor() {
        this.counter = 0;
    }

    incrementCounter() {
        this.counter++;
        this.updateView(this.counter);
    }

    resetCounter() {
        this.counter = 0;
        this.updateView(this.counter);
    }
    
    updateView(val) {
        var counterValue = document.getElementById('val');
        counterValue.textContent = val;
    }
}
