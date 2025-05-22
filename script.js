

function chainPromise() {
    // Step 1: Immediately resolve the array
    Promise.resolve([1,2,3,4])
	.then((res)=>{
		return new Promise((resolve,reject)=>{

			setTimeout(()=>{
				
			let even = res.filter((v)=>{
					return v%2==0
			}) 
			let div = document.querySelector("#output")
			div.textContent=even.join(",")
			resolve(even)
			},1000)
		})
	})
	.then((num)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				
			let multiple = num.map((v)=> v*2)
			let div = document.querySelector("#output")
			div.textContent = multiple.join(",")
			resolve(multiple)
			},2000)
		})
	})
	.catch((err)=>{
		console.log(err.message)
	})


}

// Ensure it runs when the DOM is ready
window.onload = chainPromise;
