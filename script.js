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
var submitBtn=document.getElementById("submitBtn")
var resetBtn=document.getElementById("resetBtn")


fname.addEventListener('blur',() => {
    let regex=/^([a-zA-Z]){3,12}$/
    if (regex.test(fname.value)){
        document.getElementById("fname").style.border='2px solid green'
        msg[0].innerText="Valid"    
        msg[0].style.color='lime'
        submitBtn.disabled=false
    }
    else{
        document.getElementById("fname").style.border='2px solid red'
        msg[0].innerText="First name length must be greater than 3 and less than 12, Only Alphabeats Allowed !"
        msg[0].style.color='red'
        submitBtn.disabled=true
    }
})
lname.addEventListener('blur',() => {
    let regex=/^([a-zA-Z]){3,12}$/
    if (regex.test(lname.value)){
        document.getElementById("lname").style.border='2px solid green'
        msg[1].innerText="Valid"
        msg[1].style.color='lime'
        submitBtn.disabled=false


    }
    else{
        document.getElementById("lname").style.border='2px solid red'
        msg[1].innerText='Last name length must be greater than 3 and less than 12, Only Alphabeats Allowed !'
        msg[1].style.color='red'
        submitBtn.disabled=true

    }
})
address1.addEventListener('blur',() => {
    let regex=/^([a-zA-Z0-9]+[a-zA-Z0-9]){5,100}$/
    if (regex.test(address1.value)){
        document.getElementById("address1").style.border='2px solid green'
        msg[2].innerText="Valid"
        msg[2].style.color='lime'
        submitBtn.disabled=false

    }
    else{
        document.getElementById("address1").style.border='2px solid red'
        msg[2].innerText='Address length must be greater than 5 and less than 100 characters must contain Alphabets !'
        msg[2].style.color='red'
        submitBtn.disabled=true

    }
})
address2.addEventListener('blur',() => {
    let regex=/^([a-zA-Z0-9]+[a-zA-Z0-9]){5,100}$/
    if (regex.test(address2.value)){
        document.getElementById("address2").style.border='2px solid green'
        msg[3].innerText="Valid"
        msg[3].style.color='lime'
        submitBtn.disabled=false

    }
    else{
        document.getElementById("address2").style.border='2px solid red'
        msg[3].innerText='Address length must be greater than 5 and less than 100 characters must contain Alphabets !'
        msg[3].style.color='red'
        submitBtn.disabled=true

    }
})
state.addEventListener('blur',() => {
    let regex=/^([a-zA-Z]){3,20}$/
    if (regex.test(state.value)){
        document.getElementById("state").style.border='2px solid green'
        msg[4].innerText="Valid"
        msg[4].style.color='lime'
        submitBtn.disabled=false

    }
    else{
        document.getElementById("state").style.border='2px solid red'
        msg[4].innerText='state length must be greater than 3 and less than 20 characters !'
        msg[4].style.color='red'
        submitBtn.disabled=true

    }
})
zip.addEventListener('blur',() => {
    let regex=/^([0-9]){4,10}$/
    if (regex.test(zip.value)){
        document.getElementById("zip").style.border='2px solid green'
        msg[5].innerText="Valid"
        msg[5].style.color='lime'
        submitBtn.disabled=false

    }
    else{
        document.getElementById("zip").style.border='2px solid red'
        msg[5].innerText='Pin Code length must be greater than 4 and less than 10 characters, Only numbers allowed !'
        msg[5].style.color='red'
        submitBtn.disabled=true

    }
})
city.addEventListener('blur',() => {
    let regex=/^([a-zA-Z]){3,12}$/
    if (regex.test(city.value)){
        document.getElementById("city").style.border='2px solid green'
        msg[6].innerText="Valid"
        msg[6].style.color='lime'
        submitBtn.disabled=false

    }
    else{
        document.getElementById("city").style.border='2px solid red'
        msg[6].innerText='City length must be greater than 3 and less than 12 characters !'
        msg[6].style.color='red'
        submitBtn.disabled=true

    }
})
eaddress.addEventListener('blur',() => {
    let regex=/^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/
    if (regex.test(eaddress.value)){
        document.getElementById("eaddress").style.border='2px solid green'
        msg[7].innerText="Valid"
        msg[7].style.color='lime'
        submitBtn.disabled=false

    }
    else{
        document.getElementById("eaddress").style.border='2px solid red'
        msg[7].innerText='Your email is invalid !'
        msg[7].style.color='red'
        submitBtn.disabled=true

    }
})
phone.addEventListener('blur',() => {
    let regex=/^([0-9]){10,12}$/
    if (regex.test(phone.value)){
        document.getElementById("phone").style.border='2px solid green'
        msg[8].innerText="Valid"
        msg[8].style.color='lime'
        submitBtn.disabled=false

    }
    else{
        document.getElementById("phone").style.border='2px solid red'
        msg[8].innerText='Phone number length must be 10 to 12 !'
        msg[8].style.color='red'
        submitBtn.disabled=true

    }
})
resetBtn.addEventListener('click',()=>{
    document.getElementById("fname").style.border='1px solid black'
    document.getElementById("lname").style.border='1px solid black'
    document.getElementById("address1").style.border='1px solid black'
    document.getElementById("address2").style.border='1px solid black'
    document.getElementById("state").style.border='1px solid black'
    document.getElementById("city").style.border='1px solid black'
    document.getElementById("zip").style.border='1px solid black'
    document.getElementById("eaddress").style.border='1px solid black'
    document.getElementById("phone").style.border='0.1px solid black'
    
    for(i=0;i<=8;i++){
        msg[i].innerText=''
        msg[i].style.color='none'
    } 
})
