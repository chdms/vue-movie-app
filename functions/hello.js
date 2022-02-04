exports.handler = async function (event, context){
    return {
        statusCode :200,
        body : JSON.stringify({
            name : 'choeun',
            age : 24,
            email : 'chdms267@naver.com'
        })
    }
}