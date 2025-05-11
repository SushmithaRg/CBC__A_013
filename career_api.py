from flask import Flask, request, jsonify
from career_map_ai import generate_career_map

app = Flask(__name__)

@app.route("/generate-career-map", methods=["POST"])
def career_map():
    user_input = request.json
    result = generate_career_map(user_input)
    return jsonify({"career_map": result})

if __name__ == "__main__":
    app.run(debug=True)