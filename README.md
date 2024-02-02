# Ollama Node.js Sample

This example shows how to run a large language model (Ollama) locally using Node.js.

## Requirements

* Node v20.11.0+
* NPM v10.2.4+
* 3GB+ Available Storage Space (for the model(s))
* MacOS or Linux (Windows coming soon according to docs)

## Steps to Run
1. Download and Install Ollama
2. Download a model (such as Llama 2)
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
