#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 150000; // in Dollor
let myPin = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter Your Pin",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["Cash Withdraw", "Check Balance", "Fast cash"],
        },
    ]);
    if (operationAns.operation === "Cash Withdraw") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "Enter your amount",
            type: "number",
        });
        if (amountAns.amount <= myBalance) {
            let remainBalance = myBalance - amountAns.amount;
            console.log(`Your remaining balance is ${remainBalance}$\n Thankyou for using this ATM`);
        }
        else {
            console.log("Sorry we can't proceed ! Due to Low Balance!");
        }
    }
    else if (operationAns.operation === "Fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "please select amount",
                type: "list",
                choices: [1000, 2000, 5000, 10000],
            },
        ]);
        let remBalance = myBalance - fastcashAns.fastcash;
        console.log(`Your remaining balance is ${remBalance}$\n Thankyou for using this ATM`);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your current Balance is ${myBalance}$ \n Thankyou for using this ATM`);
    }
}
else {
    console.log("incorrect Pin Code");
}
