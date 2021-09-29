const div = document.querySelector('div')
const button = document.querySelector('button')
const input = document.createElement('input')
const para = document.querySelector('p')
const h2 = document.querySelector('h2')
const newH2 = document.createElement('h2')
const newBtn = document.createElement('button')
const newP = document.createElement('p')


const secretNum = () => {
   const string_num = prompt("What is your Secret Number?", '1 - 10')
   num = Number(string_num);
   if (isNaN(num)) {
      alert("That's not a number!");
      return;
   }
       // if secretnum is greater than 10 then alert its too high
       if (num > 10) {
        alert("That's too high!")
        // if secretnum is less that 0 alert its too low
    } else if (num < 1) {
        alert("That's too low!")
    } else {
    // remove button after obtaining secretnum
    // remove paragraph element
    // append input
        button.remove()
        para.remove()
        h2.remove()
        div.append(input)
        console.log(num)
    }
// check for equality between input and secretNum's value
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
	    guessed_number = Number(input.value);
	    if (isNaN(guessed_number)) {
                newH2.innerText = "That's not a number!"
                div.append(newH2)
                input.value = ''
		return;
	    }
            if(guessed_number < num) {
                newH2.innerText = 'go up'
                div.append(newH2)
                input.value = ''
            } else if(guessed_number > num) {
                newH2.innerText = 'go down'
                div.append(newH2)
                input.value = ''
            } else if(guessed_number === num) {
                newH2.innerText = 'YOU WON!!!! I knew you could do it!'
                div.append(newH2)
                newP.innerText = 'refresh the browser to play again...'
                div.append(newP)
                input.value = ''
            }
            }
        }
    )}

// run secretnum prompt when start game button is clicked
button.addEventListener('click', () => {
    secretNum()
    }
)

