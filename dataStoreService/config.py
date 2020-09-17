PORT = 5000 
DAL_URL = "mongodb+srv://bar:Password1@todolist.3zpqm.mongodb.net/toDoList?retryWrites=true&w=majority"
COOKIE_ID = "ListID"
CORS_HEADERS = 'Content-Type'
ACCESS_CONTROL_ALLOW_ORIGIN = 'http://localhost:3000'
LOAD_RESPONSE_HEADERS = {
    'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
    'Access-Control-Allow-Credentials': 'true'
}