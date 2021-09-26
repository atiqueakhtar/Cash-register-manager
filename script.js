let billAmount = document.querySelector("#bill-amount");
let cashAmount = document.querySelector("#cash-amount");
let button = document.querySelector("button");
let billError = document.querySelector("#bill-error");
let cashError = document.querySelector("#cash-error");
let noOfNotesList = document.querySelectorAll(".no-of-notes");

let denominations = [2000, 500, 100, 20, 10, 5, 1]
function billErroMessage(message)
{
    billError.style.display="block";
    billError.innerText = message;
}
function cashEerroMessage(message)
{
    cashError.style.display="block";
    cashError.innerText = message;
}
button.addEventListener("click", () => {
    if(billAmount.value>0)
    {
        billError.style.display="none";
        if(cashAmount.value>0)
        {
            cashError.style.display="none";
            if(parseInt(cashAmount.value) >= parseInt(billAmount.value))
            {
                cashError.style.display="none";
                let difference = cashAmount.value - billAmount.value;
                for(let i=0; i<denominations.length; i++)
                {
                    let noOfNotes = Math.floor(difference/denominations[i]);
                    difference = difference%denominations[i];
                    noOfNotesList[i].innerText = noOfNotes;
                }
            }
            else{
                cashEerroMessage("Cash Amount should be more that or equal to the Bill Amount");
            }
        }
        else{
            cashEerroMessage("Cash Amount should to be more that 0");
        }
    }
    else{
        billErroMessage("Bill Amount should to be more that 0");
    }
});