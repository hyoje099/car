from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Mock data for policies
policies = [
    {
        'country': 'USA',
        'title': 'Federal Automated Vehicles Policy',
        'content': 'The policy provides guidance for the safe deployment of automated vehicles.',
        'link': 'https://www.transportation.gov/AV'
    },
    {
        'country': 'South Korea',
        'title': 'Autonomous Vehicle Act',
        'content': 'The act outlines the requirements for testing and deploying autonomous vehicles.',
        'link': 'https://elaw.klri.re.kr/eng_mobile/viewer.do?hseq=53143&type=part&key=41'
    }
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/policy')
def policy():
    return render_template('policy.html', policies=policies)

@app.route('/research')
def research():
    return render_template('research.html')

@app.route('/submit_policy', methods=['POST'])
def submit_policy():
    country = request.form['country']
    title = request.form['title']
    content = request.form['content']
    link = request.form['link']
    policies.append({'country': country, 'title': title, 'content': content, 'link': link})
    return redirect(url_for('policy'))

if __name__ == '__main__':
    app.run(debug=True)
