const scheduleData = {
    "group1": [
        {"day": "Понедельник", "time": "08:00 - 09:30", "subject": "Математика", "teacher": "Иванов И.И.", "room": "101"},
        {"day": "Понедельник", "time": "10:00 - 11:30", "subject": "Физика", "teacher": "Петров П.П.", "room": "102"},
        {"day": "Вторник", "time": "08:00 - 09:30", "subject": "Информатика", "teacher": "Смирнов С.С.", "room": "103"},
        {"day": "Вторник", "time": "10:00 - 11:30", "subject": "Химия", "teacher": "Иванова И.И.", "room": "104"},
        {"day": "Среда", "time": "08:00 - 09:30", "subject": "Биология", "teacher": "Сидоров С.С.", "room": "105"},
        {"day": "Среда", "time": "10:00 - 11:30", "subject": "Литература", "teacher": "Петрова П.П.", "room": "106"},
        {"day": "Четверг", "time": "08:00 - 09:30", "subject": "История", "teacher": "Васильев В.В.", "room": "107"},
        {"day": "Четверг", "time": "10:00 - 11:30", "subject": "География", "teacher": "Морозова М.М.", "room": "108"},
        {"day": "Пятница", "time": "08:00 - 09:30", "subject": "Физическая культура", "teacher": "Кузнецов К.К.", "room": "109"},
        {"day": "Пятница", "time": "10:00 - 11:30", "subject": "Музыка", "teacher": "Лебедев Л.Л.", "room": "110"}
    ],
    "group2": [
        {"day": "Вторник", "time": "08:00 - 09:30", "subject": "Химия", "teacher": "Сидоров С.С.", "room": "201"},
        {"day": "Вторник", "time": "10:00 - 11:30", "subject": "Биология", "teacher": "Кузнецова К.К.", "room": "202"},
        {"day": "Среда", "time": "08:00 - 09:30", "subject": "Математика", "teacher": "Иванов И.И.", "room": "203"},
        {"day": "Среда", "time": "10:00 - 11:30", "subject": "Физика", "teacher": "Петров П.П.", "room": "204"},
        {"day": "Четверг", "time": "08:00 - 09:30", "subject": "Информатика", "teacher": "Смирнов С.С.", "room": "205"},
        {"day": "Четверг", "time": "10:00 - 11:30", "subject": "Литература", "teacher": "Петрова П.П.", "room": "206"},
        {"day": "Пятница", "time": "08:00 - 09:30", "subject": "История", "teacher": "Васильев В.В.", "room": "207"},
        {"day": "Пятница", "time": "10:00 - 11:30", "subject": "География", "teacher": "Морозова М.М.", "room": "208"},
        {"day": "Понедельник", "time": "08:00 - 09:30", "subject": "Физическая культура", "teacher": "Кузнецов К.К.", "room": "209"},
        {"day": "Понедельник", "time": "10:00 - 11:30", "subject": "Музыка", "teacher": "Лебедев Л.Л.", "room": "210"}
    ],
    "group3": [
        {"day": "Среда", "time": "08:00 - 09:30", "subject": "История", "teacher": "Васильев В.В.", "room": "301"},
        {"day": "Среда", "time": "10:00 - 11:30", "subject": "География", "teacher": "Морозова М.М.", "room": "302"},
        {"day": "Четверг", "time": "08:00 - 09:30", "subject": "Математика", "teacher": "Иванов И.И.", "room": "303"},
        {"day": "Четверг", "time": "10:00 - 11:30", "subject": "Физика", "teacher": "Петров П.П.", "room": "304"},
        {"day": "Пятница", "time": "08:00 - 09:30", "subject": "Информатика", "teacher": "Смирнов С.С.", "room": "305"},
        {"day": "Пятница", "time": "10:00 - 11:30", "subject": "Литература", "teacher": "Петрова П.П.", "room": "306"},
        {"day": "Понедельник", "time": "08:00 - 09:30", "subject": "Биология", "teacher": "Сидоров С.С.", "room": "307"},
        {"day": "Понедельник", "time": "10:00 - 11:30", "subject": "Химия", "teacher": "Иванова И.И.", "room": "308"},
        {"day": "Вторник", "time": "08:00 - 09:30", "subject": "Физическая культура", "teacher": "Кузнецов К.К.", "room": "309"},
        {"day": "Вторник", "time": "10:00 - 11:30", "subject": "Музыка", "teacher": "Лебедев Л.Л.", "room": "310"}
    ]
};

document.getElementById('groupSelect').addEventListener('change', function() {
    const selectedGroup = this.value;
    const scheduleTableBody = document.querySelector('#scheduleTable tbody');
    scheduleTableBody.innerHTML = '';

    if (selectedGroup && scheduleData[selectedGroup]) {
        scheduleData[selectedGroup].forEach(lesson => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${lesson.day}</td>
                <td>${lesson.time}</td>
                <td>${lesson.subject}</td>
                <td>${lesson.teacher}</td>
                <td>${lesson.room}</td>
            `;
            scheduleTableBody.appendChild(row);
        });
    }
});