const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [0, 100000],
        connect: true,
        step:1 ,
        range: {
            'min': [0],
            'max': [100000]
        }
    });

    const inputOne = document.getElementById('input-one');
    const inputTwo = document.getElementById('input-two');
    const inputs = [inputOne, inputTwo];

    rangeSlider.noUiSlider.on('update', function(values, handle) {
        inputs[handle].value = Math.round(values[handle])
    })
}

const rangeSliderInstallment = document.getElementById('range-slider__installment');

if (rangeSliderInstallment) {
    noUiSlider.create(rangeSliderInstallment, {
        start: [0, 175000],
        connect: true,
        step:1 ,
        range: {
            'min': [0],
            'max': [175000]
        }
    });

    const inputThree = document.getElementById('input-three');
    const inputFour = document.getElementById('input-four');
    const inputstwo = [inputThree, inputFour];

    rangeSliderInstallment.noUiSlider.on('update', function(values, handle) {
        inputstwo[handle].value = Math.round(values[handle])
    })
}