for (let i = 1; i <= 50; i++) {

	if (i === 50) {
		console.log(`${i}回カウントが終わりました。`);
		alert(`${i}回カウントが終わりました。`);
	} else if (i % 10 === 0) {
		console.log(`今${i}回ループしました。`);
	} else if (i % 4 === 0) {
		console.log(`4で割れる数です${i}`);
	} else {
		console.log(i);
	}
}
	
