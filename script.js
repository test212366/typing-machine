const text = [
	`Test row lorem is a run`
]

function typeText() {
	let line = 0
	let count = 0
	let out = ''
	let htmlOut = document.getElementById('run-row')

	function typeLine() {
		let interval = setTimeout(function () {
			out += text[line][count]
			htmlOut.innerText = out + '|'
			count++

			if (count >= text[line].length) {
				count = 0
				line++
				if (line == text.length) {
					clearTimeout(interval)
					htmlOut.innerText = out
					return true
				}

			}
			typeLine()



		}, 100)
	}
	typeLine()
}
typeText()