import { useMemo } from 'react';
import { coursesSort } from '../../../../helpers/sort';

export default function useCoursesOptions(courses) {
    return useMemo(() => {
        if (courses && courses.length) {
            const coursesArray = Object.keys(courses).map(key => courses[key]);

            return coursesArray.sort(coursesSort).map(course => ({
                label: course.name,
                value: course.id,
            }));
        }

        return [];
    }, [courses]);
}
