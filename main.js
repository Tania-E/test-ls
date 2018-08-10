var colors = ['Небесный', 'Голубой', 'Глубокий', 'Королевский', 'Васильково-синий', 'Бирюзовый'];
var counter = document.querySelectorAll("input[type='checkbox']:checked").length;
var h2 = document.getElementsByClassName('order-title')[0];
var color = '';
changing();
h2.innerHTML = `Выбраны ${counter} ${color}`;

function drawSelect(colors) {
//	debugger;
	var select = document.getElementsByClassName('order-table-select');
	var clear = document.getElementsByTagName('option');
	for (var a = 0; a < clear.length; a++) {
		clear[a].remove();
	}
	for (var i = 0; i < select.length; i++) {

		for (var j = 0; j < colors.length; j++) {
			var newOption = document.createElement('option');
			newOption.innerHTML = colors[j];
			select[i].appendChild(newOption);
		}
	}
}
drawSelect(colors);

var addElement = document.getElementById('add');
var table = document.getElementById('table');

addElement.addEventListener('click', function () {
	var newTr = document.createElement('tr');
	newTr.innerHTML = `
		<td class="order-table-color"><p class="order-table-color-text"></p></td>
		<td>
			<label>
				<input type='checkbox' checked class="checkbox-input">
				<span class="checkbox-span"></span>
			</label>
		</td>
		<td>
			<select class="order-table-select" id='select'>
			</select>
		</td>
		<td><input type="number" id='' placeholder='' class="order-table-input" value="1"> л</td>
		<td>банка</td>
		<td class="order-table-delete"><p class="td-delete"></p></td>`;
	table.appendChild(newTr);
	drawSelect(colors);
	//	counter++;
	//	console.log(counter);
});

//1) вариант
//table.onclick = function (event) {
//	var target = event.target;
//	if (target.tagName != 'P') return;
//	target = target.parentNode;
//	target = target.parentNode;
//	target.parentNode.removeChild(target);
//	counter--;
//	console.log(counter);
//};

//2) вариант
table.addEventListener('click', function (event) {
	var target = event.target;
	if (target.tagName != 'P') return;
	target = target.parentNode;
	target = target.parentNode;
	target.parentNode.removeChild(target);
	//	counter--;
	//	console.log(counter);
});

window.onload = function () {
	document.getElementsByClassName('order-list')[0].onclick = function () {
		counter = document.querySelectorAll("input[type='checkbox']:checked").length;
		console.log(counter);
		changing();
		h2.innerHTML = `Выбраны ${counter} ${color}`;

	};
}

function changing() {
	var i = counter;
	if ((i > 10) && (i < 20)) {
		color = 'оттенков';
	} else {
		i = counter % 10;
		if (i === 1) {
			color = 'оттенок';
		} else if ((i === 2) || (i === 3) || (i === 4)) {
			color = 'оттенка';
		} else {
			color = 'оттенков';
		}
	}
}


//onclick = function(event) {
//	event.target.style.backgroundColor = 'yellow';
//	console.log(event);
//};
