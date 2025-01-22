class PUBLIC_DATA {
  
    static port = process.env.port || 4000
    static mongo_uri = process.env.mongo_uri || 'mongodb://localhost/IMS'

}

module.exports = {
    
    PUBLIC_DATA

}