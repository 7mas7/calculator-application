var math = [];
var arrayOfDeleted = [];
window.addEventListener("load",function(){
	clickButton(document.querySelectorAll(".calc-button"),document.querySelector(".calc-input"));
	equality(document.querySelector("#submit-button"),document.querySelector(".equal-input"));
	deleteNum(document.querySelector("#delete-num-button"),document.querySelector(".calc-input"));
	clearAllButton(document.querySelector("#clear-button"),document.querySelector(".calc-input"),document.querySelector(".equal-input"));
});


function clickButton(button,calcInput){
	for(let i = 0; i < button.length; i++){
		 button[i].addEventListener("click",function(){
		    if (calcInput.innerHTML == 0) {
		    	calcInput.innerHTML = '';
		    	if (button[i].getAttribute("notNum") == null) {
				 calcInput.value += this.innerHTML;

			 	if (button[i].getAttribute("sign") == null) {
			 		 math.push(this.innerHTML);
			 	}else {
			 		math.push(this.getAttribute("sign"));
			 	}
			 	console.log(math);	 		
			  }
		    }
		 });
	}
}

function equality(button,equality_container){
	equalStr = '';
	math = [];
	button.addEventListener("click",function(){		
		equalStr = '';
		for(let i = 0; i < math.length; i++){
			equalStr += math[i];
		}		
		equality_container.value = `= ${eval(equalStr)}`;
	});
}


function deleteNum(deleteButton,input){
	deleteButton.addEventListener("click",function(){
		for(let i = 0; i < input.value.length; i++){
			arrayOfDeleted.push(input.value[i]);
		}
		input.value = '';		
		arrayOfDeleted.pop();
		math.pop();
		for(let i = 0; i < arrayOfDeleted.length; i++){
			input.value += arrayOfDeleted[i];
		}
		arrayOfDeleted = [];
	});
}

function clearAllButton(button,calc,equality){
	button.addEventListener("click",function(){
	   equalStr = '';
	   math = [];
	   arrayOfDeleted = [];
	   calc.innerHTML = '';
	   calc.value = '';
	   equality.value = '';		
	});
}


setInterval(function(){
	if (document.querySelector(".calc-input").value == '') {
		document.querySelector(".equal-input").value = '';
		equalStr = '';
	}
},200);