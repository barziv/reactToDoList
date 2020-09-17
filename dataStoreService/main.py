from flask import Flask, make_response, jsonify, request
from flask_cors import CORS, cross_origin
import json
import config
import DAL.dal

app = Flask(__name__)
app.config['CORS_HEADERS'] = config.CORS_HEADERS
cors = CORS(app)

dal = DAL.dal.MongoDal(config.DAL_URL)

@app.route('/save', methods=['POST'])
def saveToDoList():
    id = request.cookies.get(config.COOKIE_ID)
    (isSucceed, id) = dal.insertData(json.loads(request.data), id)
    res = jsonify(success=True)
    res.set_cookie(config.COOKIE_ID, str(id))
    return res

@app.route('/load', methods=['GET'])
def loadToDoList():
    id = request.cookies.get(config.COOKIE_ID)
    data = dal.getData(id)
    response = make_response(jsonify(data), 200)
    response.headers = config.LOAD_RESPONSE_HEADERS
    return response

if __name__ == '__main__':
    app.run(port=config.PORT, threaded=True, debug=True)
