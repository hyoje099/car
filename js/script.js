document.getElementById('policy-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const country = document.getElementById('country').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const link = document.getElementById('link').value;

    const policyList = document.querySelector('#policy-overview ul');
    const newPolicy = document.createElement('li');

    newPolicy.innerHTML = `
        <h3>${country} - <a href="${link}">${title}</a></h3>
        <p>${content}</p>
    `;

    policyList.appendChild(newPolicy);

    document.getElementById('policy-form').reset();
});
