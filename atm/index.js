import inquirer from 'inquirer';
import { faker } from '@faker-js/faker';
const create_user = () => {
    let users = [];
    for (let i = 0; i < 5; i++) {
        let user = {
            id: i,
            pin: 1000 + i,
            name: faker.person.fullName(),
            account_num: Math.floor(10000000 * Math.random() * 90000000),
            balance: 100000 * 1
        };
        users.push(user);
    }
    return users;
};
// atm
const atm_machine = async (users) => {
    const resp = await inquirer.prompt({
        type: "number",
        message: "enter your pin code",
        name: "pin"
    });
    const user = users.find(val => val.pin == resp.pin);
    if (user) {
        console.log(`Welcome ${user.name}`);
        atm_func(user);
        return;
    }
    console.log("Invalid user");
};
// atm function
const atm_func = async (user) => {
    const ans = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "what do want to do?",
        choices: ["withdraw", "check balance", "exit"]
    });
    if (ans.select == "withdraw") {
        const amount = await inquirer.prompt({
            type: "number",
            message: "enter amount",
            name: "rupee"
        });
        if (amount.rupee > user.balance) {
            return console.log("insuficient balance");
        }
        if (amount.rupee > 25000) {
            return console.log("you can not withdraw more than 25000");
        }
        console.log(`withdraw amount: ${amount.rupee}`);
        console.log(`withdraw amount: ${user.balance - amount.rupee}`);
    }
    ;
    if (ans.select == "check balance") {
        console.log(`Balance: ${user.balance}`);
        return;
    }
    if (ans.select == "exit") {
        console.log("Thanks for using atm");
    }
};
const users = create_user();
atm_machine(users);
