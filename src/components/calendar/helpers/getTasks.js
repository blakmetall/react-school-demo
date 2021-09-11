import areDatesEqual from './areDateEqual';
// Mostrar el label en su fecha correspondiente
function getTasks(date, tasks) {
    const activities = tasks.filter(task => areDatesEqual(date, task.date));

    if (activities.length > 0) {
        const labelList = activities.map(v => {
            return { label: v.label, id: v.id, type: v.type };
        });
        return labelList;
    }
    return [];
}

export default getTasks;
