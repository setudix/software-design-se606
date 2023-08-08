document.addEventListener("DOMContentLoaded", () => {
    const model = new Model();
    const counterBtn = document.getElementById('counterBtn');
    const resetBtn = document.getElementById('resetBtn');

    counterBtn.addEventListener("click", () => model.incrementCounter());
    resetBtn.addEventListener("click", () => model.resetCounter());
});