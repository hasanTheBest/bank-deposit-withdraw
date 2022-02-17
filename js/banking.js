// Deposit and transit
document.getElementById("deposit-transit").addEventListener("click", (e) => {
  e.stopPropagation();

  const { id } = e.target;
  const prevAmount = Number(getValue("balance-total", "innerText"));
  const amount = Number(getValue(id + "-input"));

  updateBalance(amount, prevAmount, id);

  // clear input value
  setValue(id + "-input", "", "value");
});

function updateBalance(amount, prev, action) {
  let balance = 0;
  switch (action) {
    case "deposit":
      balance = prev + amount;
      break;

    case "withdraw":
      balance = prev - amount;
      break;
  }

  setValue(action + "-total", amount);
  setValue("balance-total", balance);
}

// get value
function getValue(id, method = "value") {
  return document.getElementById(id)[method];
}

// set Value
function setValue(id, content, method = "innerText") {
  document.getElementById(id)[method] = content;
}
