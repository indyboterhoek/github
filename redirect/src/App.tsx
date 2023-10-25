type Urls = {
	[key: string]: string
}

function App() {
	const urls: Urls = {
		"github.indyboterhoek.com": "https://github.com/indyboterhoek",
		"linkedin.indyboterhoek.com": "https://www.linkedin.com/in/indy-boterhoek/",
		"leet.indyboterhoek.com": "https://leetcode.com/IndyBoterhoek/",
	}

	const domain = window.location.host;

	window.location.replace(urls[domain])
}

export default App
