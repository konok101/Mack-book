// function for calculating total cost
function choosingOption(price, choose) {
    const previousTotal = document.getElementById('total-price');
    const previousTotalText = previousTotal.innerText;
    const previousTotalValue = parseFloat(previousTotalText);
    const chooseOption = document.getElementById(choose);
    const previousprice = parseFloat(price);
    if (previousprice == 180 || previousprice == 80) {
        chooseOption.innerText = 180;
    }
    else if (previousprice == -80) {
        chooseOption.innerText = 100;
    }
    else {
        chooseOption.innerText = price;
    }
    let newTotal = price;
    let newTotalValue = parseFloat(newTotal);
    previousTotal.innerText = previousTotalValue + newTotalValue;
    let finalTotal = document.getElementById('finalTotal');
    finalTotal.innerText = previousTotalValue + newTotalValue;

}
// function for substraction of cost
function substraction(price) {

    const previousCost = document.getElementById('total-price');
    const previousCostText = previousCost.innerText;
    const previousCostValue = parseFloat(previousCostText);
    if (previousCostValue > 1299) {
        const totalnumber = parseFloat(price);
        const newSubstraction = previousCostValue - totalnumber;
        previousCost.innerText = newSubstraction;
        finalTotal.innerText = newSubstraction;
    }
}
// Handling Event for memory
document.getElementById('memory-8Gb').addEventListener
    ('click', function () {
        let previous16gbMemory = document.getElementById('memory-Cost');
        let previous16gbMemoryText = previous16gbMemory.innerText;
        let previous16gbMemoryCost = parseFloat(previous16gbMemoryText);
        if (previous16gbMemoryCost == 180) {
            choosingOption(0, 'memory-Cost');
            substraction(180);
        }
    })
document.getElementById('memory-16Gb').addEventListener
    ('click', function () {
        let previous16gbMemory = document.getElementById('memory-Cost');
        let previous16gbMemoryText = previous16gbMemory.innerText;
        let previous16gbMemoryCost = parseFloat(previous16gbMemoryText);
        if (previous16gbMemoryCost == 0) {
            choosingOption(180, 'memory-Cost');
        }
    })
// handling Event for storage
document.getElementById('ssd-256gb').addEventListener
    ('click', function () {
        let previous256Storage = document.getElementById('storage-cost');
        let previous256StorageText = previous256Storage.innerText;
        let previous256StorageValue = parseFloat(previous256StorageText);
        if (previous256StorageValue == 100) {
            substraction(100);
            choosingOption(0, 'storage-cost');
        }
        else if (previous256StorageValue == 180) {
            substraction(180);
        }
        else if (previous256StorageValue == 0) {
            substraction(0);
        }
        choosingOption(0, 'storage-cost');
    })
document.getElementById('ssd-512gb').addEventListener
    ('click', function () {


        let previous512Storage = document.getElementById('storage-cost');
        let previous512StorageText = previous512Storage.innerText;
        let previous512StorageValue = parseFloat(previous512StorageText);
        if (previous512StorageValue == 0) {
            choosingOption(100, 'storage-cost');
        }
        else if (previous512StorageValue == 180) {
            choosingOption(-80, 'storage-cost');
        }

    })
document.getElementById('ssd-1tb').addEventListener
    ('click', function () {
        let previous1tbStorage = document.getElementById('storage-cost');
        let previous1tbStorageText = previous1tbStorage.innerText;
        let previous1tbStorageValue = parseFloat(previous1tbStorageText);
        if (previous1tbStorageValue == 100) {
            choosingOption(80, 'storage-cost');
        }
        else if (previous1tbStorageValue == 0) {
            choosingOption(180, 'storage-cost');
        }
    })
// Handling Event for delivery
document.getElementById('free-delivery').addEventListener
    ('click', function () {
        let previousDelivery = document.getElementById('delivery-cost');
        let previousDeliveryText = previousDelivery.innerText;
        let previousDeliveryCost = parseFloat(previousDeliveryText);
        if (previousDeliveryCost == 20) {
            substraction(20);
        }
        choosingOption(0, 'delivery-cost');
    })
document.getElementById('delivery-charge').addEventListener
    ('click', function () {
        let previousDelivery = document.getElementById('delivery-cost');
        let previousDeliveryText = previousDelivery.innerText;
        let previousDeliveryCost = parseFloat(previousDeliveryText);
        if (previousDeliveryCost == 0) {
            choosingOption(20, 'delivery-cost');
        }
    });
//  for checking discount 

document.getElementById('aply-btn').addEventListener
    ('click', function () {
        const inputText = document.getElementById('inputText');
        const inputPomoCode = inputText.value;
        const totalText = document.getElementById('finalTotal');
        const totalValueText = totalText.innerText;
        const totalValueCost = parseFloat(totalValueText);

        // checking if code is used again
        if (totalValueCost % 1 != 0) {
            inputText.value = 'Already used';
        }
        //  matching pomo code
        else if (inputPomoCode == 'stevekaku') {
            const discount = totalValueCost - (totalValueCost * 0.20);
            totalText.innerText = discount;
            inputText.value = '';
        }
    });