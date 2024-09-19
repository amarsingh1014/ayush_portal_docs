document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');
    const modal = document.getElementById('feature-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.querySelector('.close');

    features.forEach(feature => {
        feature.addEventListener('click', () => {
            showFeatureDetails(feature);
        });

        feature.addEventListener('mouseenter', () => {
            feature.querySelector('.know-more').style.transform = 'translateY(0)';
        });

        feature.addEventListener('mouseleave', () => {
            feature.querySelector('.know-more').style.transform = 'translateY(100%)';
        });
    });

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    function showFeatureDetails(feature) {
        console.log('Showing feature details');
        const title = feature.querySelector('h3').textContent;
        const details = feature.querySelector('.feature-details').innerHTML;
        
        modalTitle.textContent = title;
        modalContent.innerHTML = details;
        modal.style.display = 'block';
        
        features.forEach(f => f.classList.remove('active'));
        feature.classList.add('active');
    }

    function closeModal() {
        modal.style.display = 'none';
        features.forEach(f => f.classList.remove('active'));
    }

    // Chart for Reduced Latency
    const latencyCtx = document.getElementById('latencyChart').getContext('2d');
    new Chart(latencyCtx, {
        type: 'bar',
        data: {
            labels: ['Before', 'After'],
            datasets: [{
                label: 'Response Time (ms)',
                data: [100, 40],
                backgroundColor: ['#4a90e2', '#f5a623']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Chart for Faster Processing
    const processingCtx = document.getElementById('processingChart').getContext('2d');
    new Chart(processingCtx, {
        type: 'bar',
        data: {
            labels: ['Before', 'After'],
            datasets: [{
                label: 'Processing Time (hours)',
                data: [48, 29],
                backgroundColor: ['#4a90e2', '#f5a623']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

// Remove the toggleFeatureDetails function as it's no longer needed
