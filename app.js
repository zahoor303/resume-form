document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var summary = document.getElementById('summary').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        summary: summary,
        experience: experience,
        education: education
    };
    generateResume(resumeData);
});
document.getElementById('editButton').addEventListener('click', function () {
    document.getElementById('resumeOutput').classList.add('hidden');
    document.getElementById('resumeForm').classList.remove('hidden');
});
function generateResume(data) {
    var resumeContent = "\n        <h3>".concat(data.name, "</h3>\n        <p>Email: ").concat(data.email, "</p>\n        <p>Phone: ").concat(data.phone || 'N/A', "</p>\n        <div class=\"section\">\n            <h4>Summary</h4>\n            <p>").concat(data.summary, "</p>\n        </div>\n        <div class=\"section\">\n            <h4>Experience</h4>\n            <p>").concat(data.experience, "</p>\n        </div>\n        <div class=\"section\">\n            <h4>Education</h4>\n            <p>").concat(data.education, "</p>\n        </div>\n    ");
    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resumeOutput').classList.remove('hidden');
    document.getElementById('resumeForm').classList.add('hidden');
}
