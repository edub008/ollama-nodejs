import ollama from 'ollama'

let modelResponse = ""

let chatConfig = {
	model: "llama2",
	role: "user",
	content: "Why is the sky blue?"
}

// check for chat content argument, otherwise use default query above
if( process.argv[2] && process.argv[2].length >= 2 ) {
	chatConfig.content = process.argv[2]
}

async function invokeLLM(props) {
	console.log(`-----`)
  console.log(`[${props.model}]: ${props.content}`)
  console.log(`-----`)
  try {
  	console.log(`Running prompt...`)
	  const response = await ollama.chat({
	    model: props.model,
	    messages: [{ role: props.role, content: props.content }],
	  })
	  console.log(`${response.message.content}\n`)
	  modelResponse = response.message.content
	}
	catch(error) {
		console.log(`Query failed!`)
		console.log(error)
	}
}

invokeLLM(chatConfig)