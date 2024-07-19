from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/update-anime', methods=['POST'])
def update_anime():
    data = request.json
    # Procesar los datos y actualizar la base de datos
    return jsonify({'status': 'success'})

@app.route('/get-anime', methods=['GET'])
def get_anime():
    with open('animes.json', 'r') as f:
        animes = json.load(f)
    return jsonify(animes)

if __name__ == '__main__':
    app.run(debug=True)
