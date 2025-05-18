
const numberInput = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

convertBtn.addEventListener("click", () => {

    if(!numberInput.value)
    {
        length.innerHTML = `
        <h3>
            Length (Meters/Feet)
        </h3>
        <p>
            PLEASE TYPE IN A NUMBER
        </p>
        `

        volume.innerHTML = `
        <h3>
            Volume (Liters/Gallons)
        </h3>
        <p>
            PLEASE TYPE IN A NUMBER
        </p>
        `

        mass.innerHTML = `
        <h3>
            Mass (Kilograms/Pounds)
        </h3>
        <p>
            PLEASE TYPE IN A NUMBER
        </p>
        `

        numberInput.value = ""
    }
    else
    {
        let feetSum = numberInput.value * 3.281
        let gallonSum = numberInput.value *.264
        let poundSum = numberInput.value * 2.204

        length.innerHTML = `
        <h3>
            Length (Meters/Feet)
        </h3>
        <p>
            ${numberInput.value} meters = ${feetSum.toFixed(3)} feet | ${numberInput.value} feet = ${(numberInput.value / 3.281).toFixed(3)} meters.
        </p>`

        volume.innerHTML = `
        <h3>
            Volume (Liters/Gallons)
        </h3>
        <p>
            ${numberInput.value} liters = ${gallonSum.toFixed(3)} gallons | ${numberInput.value} gallons = ${(numberInput.value / .264).toFixed(3)} liters.
        </p>`

        mass.innerHTML = `
        <h3>
            Mass (Kilograms/Pounds)
        </h3>
        <p>
            ${numberInput.value} kilos = ${poundSum.toFixed(3)} pounds | ${numberInput.value} pounds = ${(numberInput.value / 2.204).toFixed(3)} kilos.
        </p>`

        numberInput.value = ""
    }
})



/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/