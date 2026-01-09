document.addEventListener('DOMContentLoaded', function() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const pmResume = document.getElementById('pm-resume');
    const sweResume = document.getElementById('swe-resume');
    const downloadPm = document.getElementById('download-pm');
    const downloadSwe = document.getElementById('download-swe');
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const resumeType = this.dataset.resume;
            
            // Update active button
            toggleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide resumes
            if (resumeType === 'pm') {
                pmResume.classList.remove('hidden');
                sweResume.classList.add('hidden');
                downloadPm.classList.remove('hidden');
                downloadSwe.classList.add('hidden');
            } else {
                pmResume.classList.add('hidden');
                sweResume.classList.remove('hidden');
                downloadPm.classList.add('hidden');
                downloadSwe.classList.remove('hidden');
            }
        });
    });
});