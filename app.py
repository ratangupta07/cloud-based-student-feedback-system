from flask import Flask, request, jsonify, send_from_directory
import os

app = Flask(__name__, static_folder=".", static_url_path="")


# -----------------------------------------
# Serve the frontend
# -----------------------------------------

@app.route("/")
def home():
    return send_from_directory(".", "index.html")


# -----------------------------------------
# Receive student feedback
# -----------------------------------------

@app.route("/submit-feedback", methods=["POST"])
def submit_feedback():

    data = request.get_json(silent=True)

    if not data:
        return jsonify({
            "success": False,
            "message": "No feedback data was received."
        }), 400

    name = str(data.get("studentName", "")).strip()
    email = str(data.get("studentEmail", "")).strip()
    department = str(data.get("department", "")).strip()
    year = str(data.get("year", "")).strip()
    rating = str(data.get("rating", "")).strip()
    feedback = str(data.get("feedback", "")).strip()

    # Validate required fields
    if not name:
        return jsonify({
            "success": False,
            "message": "Please enter your name."
        }), 400

    if not email:
        return jsonify({
            "success": False,
            "message": "Please enter your email."
        }), 400

    if not department:
        return jsonify({
            "success": False,
            "message": "Please select your department."
        }), 400

    if not year:
        return jsonify({
            "success": False,
            "message": "Please select your year."
        }), 400

    if not rating:
        return jsonify({
            "success": False,
            "message": "Please select a rating."
        }), 400

    if not feedback:
        return jsonify({
            "success": False,
            "message": "Please enter your feedback."
        }), 400

    # Display received feedback in the Flask terminal
    print("\n--------------------------------")
    print("NEW STUDENT FEEDBACK")
    print("--------------------------------")
    print("Name:", name)
    print("Email:", email)
    print("Department:", department)
    print("Year:", year)
    print("Rating:", rating)
    print("Feedback:", feedback)
    print("--------------------------------\n")

    return jsonify({
        "success": True,
        "message": "Thank you for submitting your feedback!"
    })


# -----------------------------------------
# Start Flask server
# -----------------------------------------

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))

    app.run(
        host="0.0.0.0",
        port=port,
        debug=True
    )