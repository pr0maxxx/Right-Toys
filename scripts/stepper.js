function stepper(button) {
  let inputStepper = document.getElementById("input-stepper");
  let id = button.getAttribute("id");
  let min = inputStepper.getAttribute("min");
  let max = inputStepper.getAttribute("max");
  let step = inputStepper.getAttribute("step");
  let value = inputStepper.getAttribute("value");

  let calcStep = id === "increment" ? step * 1 : step * -1;
  let newValue = parseInt(value) + calcStep;

  if (newValue >= min && newValue <= max) {
    inputStepper.setAttribute("value", newValue);
  }
}
