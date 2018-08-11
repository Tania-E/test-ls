var colors = ['Небесный', 'Голубой', 'Глубокий', 'Королевский', 'Васильково-синий', 'Бирюзовый'];
var h2 = document.getElementsByClassName('order-title')[0];
var counter = document.querySelectorAll("input[name='check']:checked").length;
var checkboxes = document.querySelectorAll("input[name='check']");
var checkAll = document.getElementById('topCheckbox');
var color = '';
var text = 'Выбран';
changing();
h2.innerHTML = `${text} ${counter} ${color}`;
checkAll.checked = (counter === checkboxes.length);

//Добавляем цвета в селект
function drawSelect(colors) {
	var select = document.getElementsByClassName('order-table-select');
	for (var i = 0; i < select.length; i++) {
		if (i === (select.length - 1)) {
			for (var j = 0; j < colors.length; j++) {
				var newOption = document.createElement('option');
				newOption.innerHTML = colors[j];
				select[i].appendChild(newOption);
			}
		}
	}
}
drawSelect(colors);

var addElement = document.getElementById('add');
var table = document.getElementById('table');

//Добавляем новую строку в таблицу
addElement.addEventListener('click', function () {
	var newTr = document.createElement('tr');
	newTr.innerHTML = `
		<td>
			<label>
				<input type='checkbox' checked class="checkbox-input" name="check">
				<span class="checkbox-span"></span>
			</label>
		</td>
		<td>
			<select class="order-table-select"></select>
		</td>
		<td><input type="number" pattern="[0-9]*" class="order-table-input" value="1"> л</td>
		<td>банка</td>
		<td class="order-table-delete"><p class="td-delete"></p></td>`;
	table.appendChild(newTr);
	drawSelect(colors);
});

//Удаляем строку из таблицы
table.addEventListener('click', function (event) {
	var target = event.target;
	if (target.className != 'td-delete') return;
	if (target.id === 'topDelete') {
		var allTr = document.getElementsByTagName('Tr');
		for (var i = allTr.length - 1; i > 0; i--) {
			allTr[i].remove();
		}
	} else {
		target = target.parentNode;
		target = target.parentNode;
		target.parentNode.removeChild(target);
	}
});

//Считаем и показывает количество выделнных оттенков
window.onload = function () {
	document.getElementsByClassName('order-list')[0].onclick = function () {
		checkboxes = document.querySelectorAll("input[name='check']");
		checkAll = document.getElementById('topCheckbox');
		counter = document.querySelectorAll("input[name='check']:checked").length;
		checkAll.checked = (counter === checkboxes.length);
		if ( checkboxes.length === 0 ) {
			checkAll.checked = false;
		}
		changing();
		h2.innerHTML = `${text} ${counter} ${color}`;
	}
}

//Склоняем слова
function changing() {
	var i = counter;
	if ((i > 10) && (i < 20)) {
		color = 'оттенков';
		text = 'Выбраны'
	} else {
		i = counter % 10;
		if (i === 1) {
			color = 'оттенок';
			text = 'Выбран'
		} else if ((i === 2) || (i === 3) || (i === 4)) {
			color = 'оттенка';
			text = 'Выбраны'
		} else {
			color = 'оттенков';
			text = 'Выбраны'
		}
	}
}

//Управляем общим чекбоксом
var checkAll = document.getElementById('topCheckbox');
checkAll.addEventListener('click', function () {
	var allInputs = document.getElementsByTagName('input');
	if (checkAll.checked === true) {
		for (var i = 0; i < allInputs.length; i++) {
			if (allInputs[i].type === 'checkbox') {
				allInputs[i].checked = true;
			}
		}
	} else {
		for (var i = 0; i < allInputs.length; i++) {
			if (allInputs[i].type === 'checkbox') {
				allInputs[i].checked = false;
			}
		}
	}
});
