document.addEventListener('DOMContentLoaded', function() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const pmResume = document.getElementById('pm-resume');
    const sweResume = document.getElementById('swe-resume');
    const downloadBtn = document.getElementById('download-btn');

    const resumeFiles = {
        pm: 'files/NF_Emmanuel_PM_Resume.pdf',
        swe: 'files/NF_Emmanuel_SWE_Resume.pdf'
    };

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const resumeType = this.dataset.resume;

            toggleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            if (resumeType === 'pm') {
                pmResume.classList.remove('hidden');
                sweResume.classList.add('hidden');
            } else {
                pmResume.classList.add('hidden');
                sweResume.classList.remove('hidden');
            }

            downloadBtn.href = resumeFiles[resumeType];
        });
    });
});
