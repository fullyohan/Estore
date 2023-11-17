
from flask import Flask , render_template , request , url_for , redirect , make_response
import pdfkit
config = pdfkit.configuration(wkhtmltopdf="C:/Program Files/wkhtmltopdf/bin/wkhtmltopdf.exe")

app = Flask(__name__)

@app.route('/')
def index() :
    return render_template('index.html')

@app.route('/JD editions')
def JD() :
    return render_template('JD.html')

@app.route('/Editions_1er_cycle')
def first() :
    return render_template('Editions_1erCycle.html')

@app.route('/Editions_2nd_Cycle')
def second():
    return render_template('Editions_2ndCycle.html')


@app.route('/formulaire')
def form():
    return render_template('form.html')

@app.route("/treatment" , methods = ['POST', 'GET'])
def treatment():
    if request.method == 'POST':
        data = request.form
        rendered =  render_template('treatment.html', nom = data.get('nom'), prenom = data.get ('prenom') , tel = data.get('tel') , email = data.get('email') )
        pdf = pdfkit.from_string(rendered , 'reçu.pdf' , configuration=config)
        return  rendered
    else :
        return redirect(url_for('index'))


app.run(debug=True)