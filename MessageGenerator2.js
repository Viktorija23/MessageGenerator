function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

const menu = {
    breakfast: ['coffee and a pastry', 'tea and oats', 'juice and yoghurt'],
    lunch: ['chicken salad wrap', 'omlette', 'vegetable soup'],
    dinner: [' stir-fry', 'fish and vegetables', 'spaghetti bolognese']
}

let menuDay = []

for (let prop in menu) {

    let optionIdx = generateRandomNumber(menu[prop].length)

    switch (prop) {
        case 'breakfast':
            menuDay.push(`Your random breakfast choice is "${menu[prop][optionIdx]}".`)
            break
        case 'lunch': menuDay.push(`Your random lunch choice is "${menu[prop][optionIdx]}".`)
            break
        case 'dinner': menuDay.push(`Your random diner choice is "${menu[prop][optionIdx]}".`)
            break
        default:
            menuDay.push('Menu of the day has not been generated.')
    }
}




function formatMenu(menu) {
    const formatted = menuDay.join('\n')
    document.write(formatted)
}

formatMenu(menuDay);