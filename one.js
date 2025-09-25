const mySwitch = document.querySelector("#mySwitch");

const awesome = document.querySelector('[data-element="awesome"]');

mySwitch.addEventListener("change", () => {
    awesome.setAttribute("data-sizing", mySwitch.checked ? "intrinsic" : "extrinsic");
});
