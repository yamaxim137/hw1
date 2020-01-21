var term =
 {
		Ukr: 11,
		Ru: -3,
		By: 5,
		Can: 0,
		Uk: 8,
		Ge: 13,
		Sp: 23,
	};

var middl_temper = 0;
var sum_temper = 0;
var count = 0;

for (let prop in term) {
	sum_temper += term[prop];
	count++;
}

middl_temper = sum_temper / count;

alert (middl_temper);
// alert(count);

function maxTemper(term) {
	var middl_temper = 0;
	var sum_temper = 0;
	var count = 0;

	for (let prop in term) {
		sum_temper += term[prop];
		count++;
	}

	middl_temper = sum_temper / count;

	return middl_temper;
}

var i = maxTemper(term);
alert (i);

var term2 =
 {
		Ukr: 11,
		Ru: -3,
		By: 5,
		Can: 0,
		Uk: 8,
		Sp: 23,
	};

i = maxTemper(term2);
alert (i);
