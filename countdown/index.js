import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    type: "number",
    name: "user_input",
    message: "Please enter the amount of seconds ",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter valid value ";
        }
        else if (input > 60) {
            return "Seconds must be under 60 ";
        }
        else {
            return true;
        }
    }
});
let input = res.user_input;
function start_time(val) {
    const initial_time = new Date().setSeconds(new Date().getSeconds() + val);
    const interval_Time = new Date(initial_time);
    setInterval((() => {
        const current_time = new Date();
        const time_diff = differenceInSeconds(interval_Time, current_time);
        if (time_diff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const min = Math.floor((time_diff % (3600 * 24)) / 3600);
        const sec = Math.floor(time_diff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
start_time(input);
