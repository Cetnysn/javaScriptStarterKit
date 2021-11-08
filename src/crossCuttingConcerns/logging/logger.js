export class BaseLogger {
    log(data){
        console.log("Default Logger : " + data)
    }
}


//extends inherit için kullandık baselogger ın referansını aldık
export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Log to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{
   //default olarak baseloggerın fonksiyonu çalışacak
}
