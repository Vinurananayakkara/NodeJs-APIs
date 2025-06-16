const http = require ('http');

http.createServer((req,res)=>{
    console.log(req);
    //res.end("Hello Suddah !! Response ek wada");
    console.log(req.url);
    console.log(req.method);
    
    //Route Logics - req.url
    if (req.url ==='/add'){
        res.end("Added Item");
    }else if(req.url ==='/update'){
        res.end("Updated Data");
    }

    //Route+Method Logics - req.url && req.method
    if(req.url ==='/products' && req.method =='GET'){
        res.end("See All Products")
    } else if (req.url==='/users' && req.method =='GET'){
        res.end("See All Users")
    } else if(req.url ==='/products' && req.method =='POST'){
        res.end("Product Created")
    }else if (req.url ==='/users' && req.method =='POST'){
        res.end("User Created")
    }


}).listen(8001)