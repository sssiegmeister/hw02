(() => {
    "use strict";

	let display = document.querySelector("#display"),
	clear = document.querySelector("#clear"),
	nums = document.querySelectorAll(".num"),
	ops = document.querySelectorAll(".op"),
	currNum = "",
	lastNum = "",
	operator;
	
    
    function init() {
		
		clear.onclick = () => {
			currNum = "";
			lastNum = "";
			display.value = "";
		};

		for (let i = 0; i < nums.length; i++) {
			nums[i].onclick = () => {
				const nextDigit = nums[i].getAttribute("id");
				if (operator && currNum === "")
					display.value = nextDigit;
				else if (currNum.includes(".") && nextDigit === ".")
					return;
				else 
					display.value += nextDigit;
				currNum += nextDigit;
			}
		}

		for (let i = 0; i < ops.length; i++) {
			ops[i].onclick = () => {
				if (currNum !== "" && operator) {
					switch (operator) {
						case "+":
							currNum = (Number(lastNum) + Number(currNum)).toString();
							break;
						case "-":
							currNum = (Number(lastNum) - Number(currNum)).toString();
							break;
                        case "x":
                            currNum = (Number(lastNum) * Number(currNum)).toString();
                            break;
                        case "%":
                            currNum = (Number(lastNum) / Number(currNum)).toString();
                            break;
						default:
							break;
					}
					operator = ops[i].getAttribute("id");
					display.value = currNum;
					lastNum = currNum;
					currNum = "";
				}
				else if (currNum !== "" && !operator) {
					operator = ops[i].getAttribute("id");
					lastNum = currNum;
					currNum = "";
				}
			}
		}
    }

    window.addEventListener("load", init, false);
})();
