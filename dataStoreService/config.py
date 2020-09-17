PORT = 5000
DAL_URL = "mongodb://127.0.0.1:27017/?compressors=zlib&gssapiServiceName=mongodb"
COOKIE_ID = "ListID"
CORS_HEADERS = 'Content-Type'
ACCESS_CONTROL_ALLOW_ORIGIN = 'http://localhost:3000'
LOAD_RESPONSE_HEADERS = {
    'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
    'Access-Control-Allow-Credentials': 'true'
}