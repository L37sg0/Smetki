var i = 0;
function newIncome(element)
{
    var menu = document.getElementById(element);
    var newRow = document.createElement("p");
    newRow.innerHTML = "hello"+i;
    menu.appendChild(newRow);
    i += 1;
}

function newBill()
{

}