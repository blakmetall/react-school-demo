function areDatesEqual(date1, date2) {
    const first = new Date(date1);
    const second = new Date(date2);

    return first.getYear() === second.getYear() && first.getMonth() === second.getMonth() && first.getDate() === second.getDate();
}

export default areDatesEqual;
