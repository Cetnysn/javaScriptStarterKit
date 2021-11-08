<<<<<<< HEAD
export class BaseLogger {
    log(data){
        console.log("Default Logger : " + data)
    }
}


//extends inherit için kullandık baselogger ın referansını aldık
export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Log to Elastic" + data)
=======
export class BaseLogger{
    log(data){
        console.log("Default logger : " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic" + data)
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
    }
}

export class MongoLogger extends BaseLogger{
<<<<<<< HEAD
   //default olarak baseloggerın fonksiyonu çalışacak
}
=======
    log(data){
        console.log("Logged to Mongo" + data)
    }
}

>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
