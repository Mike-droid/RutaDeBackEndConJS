const messages = [
    "Miguel",
    "Oscar",
    "Jessica",
    "Diego",
    "Antonio",
    "Luis",
    "Daniela",
    "Federico",
    "Oliver"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = {randomMsg}