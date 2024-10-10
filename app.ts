interface ResumeData {
    name: string;
    email: string;
    phone?: string;
    summary: string;
    experience: string;
    education: string;
}

document.getElementById('resumeForm')!.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    
    const resumeData: ResumeData = {
        name,
        email,
        phone,
        summary,
        experience,
        education
    };
    
    generateResume(resumeData);
});

document.getElementById('editButton')!.addEventListener('click', () => {
    document.getElementById('resumeOutput')!.classList.add('hidden');
    document.getElementById('resumeForm')!.classList.remove('hidden');
});

function generateResume(data: ResumeData) {
    const resumeContent = `
        <h3>${data.name}</h3>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone || 'N/A'}</p>
        <div class="section">
            <h4>Summary</h4>
            <p>${data.summary}</p>
        </div>
        <div class="section">
            <h4>Experience</h4>
            <p>${data.experience}</p>
        </div>
        <div class="section">
            <h4>Education</h4>
            <p>${data.education}</p>
        </div>
    `;
    
    document.getElementById('resumeContent')!.innerHTML = resumeContent;
    document.getElementById('resumeOutput')!.classList.remove('hidden');
    document.getElementById('resumeForm')!.classList.add('hidden');
}
