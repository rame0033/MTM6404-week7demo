const balance = 450;

const checkBalance = (b) => {
    const balanceMin = 100;
    return console.log( b < balanceMin ? "Your balance is too low to qualify for No-Transaction fee." : "You qualify for No-Transaction fee.");
}

checkBalance(100);