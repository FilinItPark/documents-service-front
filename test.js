const generateFakeCars = count => {
	const cars = []
	for (let i = 0; i < count; i++) {
		cars.push({
			id: i,
			title: `Car ${i}`,
			description: `Description for Car ${i}`,
			price: Math.floor(Math.random() * 100000) + 10000, // Random price between 10,000 and 110,000
			enginePower: Math.floor(Math.random() * 300) + 100, // Random engine power between 100 and 400
		})
	}
	return cars
}

// Example: Generate an array of 10 fake cars
const fakeCars = generateFakeCars(20)
console.log(fakeCars)
