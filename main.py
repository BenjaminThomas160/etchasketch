from flask import Flask, render_template, url_for, Response, request, redirect
from os import path
app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('homepage.html')

@app.route('/sketch/')
def sketch():
    return render_template('sketch.html')

if __name__ == '__main__':
    app.run(debug=True)