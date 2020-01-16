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

for (prop in term) {
	count++;
	sum_temper += term.prop;
}

middl_temper = sum_temper / count;

alert (term);
