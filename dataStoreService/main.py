from flask import Flask, make_response, jsonify, request
import config
import DAL.dal

app = Flask(__name__)
dal = DAL.dal.MongoDal(config.DAL_URL)

@app.route('/save', methods=['POST'])
def saveToDoList():
    id = request.cookies.get('id')
    (isSucceed, id) = dal.insertData(request.json, id)
    res = jsonify(success=isSucceed)
    res.set_cookie('id', str(id))
    return res

@app.route('/load', methods=['GET'])
def loadToDoList():
    id = request.cookies.get('id')
    data = dal.getData(id)
    return jsonify({'list': data})

if __name__ == '__main__':
    app.run(port="5000", threaded=True, debug=True)
