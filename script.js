

function chainPromise(){
let p = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve([1,2,3,4])
	},3000)
})
		p.then(res =>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let even = res.filter((v)=>{
				return v%2===0
			})
				let div = document.createElement("div")
			div.id = "output"
		div.textContent = even.join("")
	document.body.append(div)
			resolve(even)
		},1000)
	})
})
.then(data=>{
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
let multiple = data.map((v)=>{
	return v*2
})

		let div = document.querySelector("#output")
		div.textContent = multiple.join(",")
		resolve(multiple)
		
	},3000)
		
	})
})
	.catch(err=>{
		console.log(err.message)
	})

}

chainPromise()
