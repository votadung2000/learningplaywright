const todo1Endpoint = 'http://jsonplaceholder.typicode.com/todos/1';
Test();
async function Test(){
    const response = await fetch(todo1Endpoint);
    const json = await response.json();
    console.log(JSON.stringify(json));
}

// fetch(todo1Endpoint)
//     .then(getResponse)
//     .then(validateTodo1Response);

// function getResponse(response){
//     return response.json();
// }
// function validateTodo1Response(todo1){
//     if(todo1.completed) {
//         console.log('Task completed!');
//     } else {
//         console.log('Task is in progress');
//     }
// }