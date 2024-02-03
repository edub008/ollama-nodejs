# Ollama Node.js Sample

This example shows how to run a large language model (Ollama) locally using Node.js. For a more detailed discussion check out the following [mini blog](https://ergin-d.com/blog/nodejs-run-local-llm).

## Requirements

* Node v20.11.0+
* NPM v10.2.4+
* 3GB+ Available Storage Space (for the model(s))
* MacOS or Linux (Windows coming soon according to docs)

## Steps to Run
1. Download and Install [Ollama](https://ollama.ai/)
2. Download a [model](https://github.com/ollama/ollama?tab=readme-ov-file#model-library) (such as Llama 2)
3. Install and Run Sample Code

## Run Sample
Download the code for this repo to your local machine then do: 

```shell
% cd ollama-nodejs
% npm install
% node index.js
```

That will run the default prompt "*Why is the sky blue?*".  To run a different prompt add the additional content argument, such as:

```shell
% node index.js "How old is the universe?"
```

## Sample Source Code
The `index.js` file contains all the code for this sample. It's contents are: 

```js
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
```
