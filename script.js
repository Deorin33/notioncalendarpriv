function updateCalendar() {
    const yearDiv = document.getElementById('year');
    const monthDiv = document.getElementById('month');
    const daysDiv = document.getElementById('days');

    const now = new Date();
    const year = now.getFullYear(); // Get the current year
    const month = now.getMonth(); // 0-indexed
    const day = now.getDate();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    yearDiv.textContent = year;
    monthDiv.textContent = monthNames[month];
    daysDiv.innerHTML = '';

    for (let i = 1; i <= daysInMonth; i++) {
        if(new Date(year, month, i).getDay() === 1 && i !== 1) {
            const separator = document.createElement('span');
            separator.classList.add('week-separator');
            separator.textContent = '|';
            daysDiv.appendChild(separator);
        }
        const daySpan = document.createElement('span');
        daySpan.classList.add('day');
        daySpan.textContent = i;

        if (i === day) {
            daySpan.classList.add('current-day');
        }
        daysDiv.appendChild(daySpan);
    }
}

updateCalendar();