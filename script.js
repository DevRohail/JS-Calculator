class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }
    delete() {

    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation) {

    }
    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}




const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })

})





/*
Document.querySelectorAll looks for all the numberButtons in the document
*/

/* 
plus = Sum
minus = subtract
multiply = multiply
divide = divide

On each button down - check what type of button is clicked 
    is it a number button or an equal button or is it a mathemical operation button
    if its an equal sign clicked then if the text box is empty - you dont wanna do anything

1) when a number button is clicked or pressed write in the text box the number
2) Append the next number button clicked to the text from (1) as text 
3) keep doing this until an mathematical function button is clicked
4) then do the points (1) and (2) until an equal sign is clicked
*/