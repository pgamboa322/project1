$.getJSON("https://api.watchmode.com/v1/list-titles/?apiKey=iz9NkyrVvBW1tKCzczoBIdy9CJB21p4ZR3moNFp0&source_ids=203,57", function(){

});


var requestUrl = 'https://watchmode.p.rapidapi.com/list-titles/?types=movie&regions=US&source_types=sub%2Cfree&page=1,&limit=10&sort_by=titleasc&release_date_start=20010101&release_date_end=20220426', data;
document.getElementById('fetchTitleBtn').addEventListener('click', requestData)


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'watchmode.p.rapidapi.com',
		'X-RapidAPI-Key': '555d11ba4dmsh8b699aaadcb1a6ap1cb171jsn36d588927cd4'
	}
};

function requestData (){
fetch('https://watchmode.p.rapidapi.com/list-titles/?types=movie&regions=US&source_types=sub%2Cfree&page=1,&limit=10&sort_by=titleasc&release_date_start=20010101&release_date_end=20220426', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}

var movieChoice = options

const points = [0,];

for (let i = requestData.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = points[i]
  points[i] = points[j]
  points[j] = k
}


 var movieTitle = document.createElement('p');

movieTitle.textContent = "requestData";

function displayTitle(data){
    const title = data.titles[i];
    const titleDiv = document.getElementById("movieChoice");
}



  
      