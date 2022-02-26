const fname=document.getElementById("fname")
const lname=document.getElementById("lname")
const address1=document.getElementById("address1")
const address2=document.getElementById("address2")
const state = document.getElementById("state")
const city = document.getElementById("city")
const zip = document.getElementById("zip")
const eaddress = document.getElementById("eaddress")
const phone = document.getElementById("phone")
const membership=document.getElementsByClassName("radio")
const contactWay=document.getElementsByClassName("cw")
var msg= document.getElementsByClassName("msg")



fname.addEventListener('blur',() => {
    let regex=/^([a-zA-Z]){3,12}$/
    if (regex.test(fname.value)){
        document.getElementById("fname").style.borderColor='green'
        msg[0].innerText="Valid"    
        msg[0].style.color='lime'
    }
    else{
        document.getElementById("fname").style.borderColor='red'
        msg[0].innerText="First name length must be greter than 3 and less than 12, Only Alphabeats Allowed !"
        msg[0].style.color='red'
    }
})
lname.addEventListener('blur',() => {
    let regex=/^([a-zA-Z]){3,12}$/
    if (regex.test(lname.value)){
        document.getElementById("lname").style.borderColor='green'
        msg[1].innerText="Valid"
        msg[1].style.color='lime'
    }
    else{
        document.getElementById("lname").style.borderColor='red'
        msg[1].innerText='Last name length must be greter than 3 and less than 12, Only Alphabeats Allowed !'
        msg[1].style.color='red'
    }
})
address1.addEventListener('blur',() => {
    let regex=/^([a-zA-Z0-9]){5,100}$/
    if (regex.test(address1.value)){
        document.getElementById("address1").style.borderColor='green'
        msg[2].innerText="Valid"
        msg[2].style.color='lime'
    }
    else{
        document.getElementById("address1").style.borderColor='red'
        msg[2].innerText='Address length must be greter than 5 and less than 100 characters !'
        msg[2].style.color='red'
    }
})
address2.addEventListener('blur',() => {
    let regex=/^([a-zA-Z0-9]){5,100}$/
    if (regex.test(address2.value)){
        document.getElementById("address1").style.borderColor='green'
        msg[3].innerText="Valid"
        msg[3].style.color='lime'
    }
    else{
        document.getElementById("address").style.borderColor='red'
        msg[3].innerText='Address length must be greter than 5 and less than 100 characters !'
        msg[3].style.color='red'
    }
})
state.addEventListener('blur',() => {
    let regex=/^([a-zA-Z]){3,20}$/
    if (regex.test(state.value)){
        document.getElementById("state").style.borderColor='green'
        msg[4].innerText="Valid"
        msg[4].style.color='lime'
    }
    else{
        document.getElementById("state").style.borderColor='red'
        msg[4].innerText='state length must be greter than 3 and less than 20 characters !'
        msg[4].style.color='red'
    }
})
zip.addEventListener('blur',() => {
    let regex=/^([0-9]){4,10}$/
    if (regex.test(zip.value)){
        document.getElementById("zip").style.borderColor='green'
        msg[5].innerText="Valid"
        msg[5].style.color='lime'
    }
    else{
        document.getElementById("zip").style.borderColor='red'
        msg[5].innerText='Pin Code length must be greter than 4 and less than 10 characters, Only numbers allowed !'
        msg[5].style.color='red'
    }
})
city.addEventListener('blur',() => {
    let regex=/^([a-zA-Z]){3,12}$/
    if (regex.test(city.value)){
        document.getElementById("city").style.borderColor='green'
        msg[6].innerText="Valid"
        msg[6].style.color='lime'
    }
    else{
        document.getElementById("city").style.borderColor='red'
        msg[6].innerText='City length must be greter than 3 and less than 12 characters !'
        msg[6].style.color='red'
    }
})
eaddress.addEventListener('blur',() => {
    let regex=/^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/
    if (regex.test(eaddress.value)){
        document.getElementById("eaddress").style.borderColor='green'
        msg[7].innerText="Valid"
        msg[7].style.color='lime'
    }
    else{
        document.getElementById("eaddress").style.borderColor='red'
        msg[7].innerText='Your email is invalid !'
        msg[7].style.color='red'
    }
})
phone.addEventListener('blur',() => {
    let regex=/^([0-9]){10,12}$/
    if (regex.test(phone.value)){
        document.getElementById("phone").style.borderColor='green'
        msg[8].innerText="Valid"
        msg[8].style.color='lime'
    }
    else{
        document.getElementById("phone").style.borderColor='red'
        msg[8].innerText='Phone number length must be 10 to 12 !'
        msg[8].style.color='red'
    }
})
