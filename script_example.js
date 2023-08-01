/*
 * Loon script example
 */
//log
console.log('This is a log');

//http get params
var params = {
    url:"https://api.example.com/post",
    headers:{
        Host:"api.example.com",
        Content-Type: "application/json",
    },
    body:"string"
}

$httpClient.get('https://example.com/index',function(error, response, data){
    console.log(response);
});

//http get
$httpClient.get(params,function(error, response, data){
    console.log(response);
});

//http post
$httpClient.post(params,function(error, response, data){
    console.log(response);
});

//notification
$notification.post('title<String>', 'subtitle<String>', 'body<String>')

//persistentStore
$persistentStore.write('data<String>', 'key<String>')
$persistentStore.read('key<String>')
