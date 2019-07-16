class Player{
	constructor(name, results){
		this.name = name;
		this.results = results;
		this.points =[10,8,6,4,2,0,-2,-4];
	}

	get avgRank(){
		var sum = 0;
		var count = 0;
		for(let i = 0;i<this.results.length;i++){
			if(this.results[i]!='-')
				sum+=this.results[i];
			else
				count++;
		}
		var result = sum/(this.results.length-count);
		return result;
	}

	get point(){
		var sum = 0;
		for(let i = 0;i<this.results.length;i++){
			if(this.results[i]!='-')
				sum+=this.points[this.results[i]-1];
		}
		return sum;
	}
}