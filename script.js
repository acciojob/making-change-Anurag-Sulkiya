function makeAmount(amount)
{
	const result = {
		q:0,
		d:0,
		n:0,
		p:0
	}

	result.q = Math.floor(amount/25);
	amount = amount%25;

	result.d = Math.floor(amount/10);
	amount = amount%10;

	result.n = Math.floor(amount/5);
	amount = amount%5;

	result.p = amount;

	return result;
}
Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
