function checker() {
    const num = (checkInput.value)
    if (num === '') {
        show.innerHTML = '<p title="Error" class="alert alert-danger text-center fs-2">Please enter a number ❌</p>'
    } else {
        if (num % 3 == 0 && num % 5 == 0) {
            show.innerHTML = '<p class="alert alert-success text-center fs-2">'+ num +' is a Fizz-Buzz ✅</p>'
        }else if (num % 3 == 0) {
            show.innerHTML = '<p class="alert alert-light text-center fs-2"> ' + num + ' is a Fizz ✅</p>'
        }else if (num % 5 == 0){
            show.innerHTML = '<p class="alert alert-warning text-center fs-2">'+ num +' is a Buzz ✅</p>'
        }else if (num % 3 !== 0 && num % 5 !==0){
            show.innerHTML = '<p class="alert alert-danger text-center fs-2">'+ num +' is neither a Fizz nor Buzz ❌</p>'
        }
    }
}