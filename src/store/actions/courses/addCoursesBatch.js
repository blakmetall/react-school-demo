import { promise } from '../../../helpers';
// import { validateCourse } from '../../../views/admin/courses/form/helpers';
// import { findBookByIdSAP, findBookByName } from '../books';
// import { findCategoryByName } from '../categories';
// import findCourseByName from './findCourseByName';
// import addCourse from './addCourse';

// eslint-disable-next-line
const addCoursesBatch = batchData => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => {
        return promise({
            completed: 0,
            failed: 0,
            invalid: 0,
        });
    };
};

export default addCoursesBatch;

// const asyncRequests = [];
// const invalidItems = [];

// batchData.forEach((data, index) => {
//     const {
//         'Nombre del curso': courseName,
//         Categoría: categoryName,
//         'ID (SAP)': bookIdSAP,
//         'Nombre del libro': bookName,
//     } = data;

//     asyncRequests.push(
//         dispatch(findCourseByName(courseName)).then(course => {
//             const tmpCourse = course || { name: courseName, id: '' };

//             return dispatch(findCategoryByName(categoryName)).then(category => {
//                 if (category) {
//                     return dispatch(findBookByName(bookName)).then(bookByName => {
//                         if (bookByName) {
//                             return promise({
//                                 ...{
//                                     course: tmpCourse,
//                                     category,
//                                     book: bookByName,
//                                 },
//                                 success: true,
//                             });
//                         }

//                         return dispatch(findBookByIdSAP(bookIdSAP)).then(bookByIdSAP => {
//                             if (bookByIdSAP) {
//                                 return promise({
//                                     ...{
//                                         course: tmpCourse,
//                                         category,
//                                         book: bookByIdSAP,
//                                     },
//                                     success: true,
//                                 });
//                             }

//                             return promise({ success: false });
//                         });
//                     });
//                 }

//                 return promise({ success: false });
//             });
//         }),
//     );
// });

// return Promise.all(asyncRequests).then(responses => {
//     const items = [];

//     console.log(11);

// console.log('responses', responses);

// responses.forEach(data => {
//     const { success, course, category, book } = data;

//     if (success && course && category && book) {
//         const item = {
//             categoryId: category.id,
//             name: course.name,
//             booksIds: [book.id],
//         };

//         if (validateCourse(item)) {
//             const tmpItem = items.filter(v => v.categoryId === category.id && v.name === course.name);

//             if (tmpItem.length) {
//                 tmpItem[0].booksIds.push(book.id);
//                 tmpItem[0].booksIds.filter((bookId, index) => tmpItem[0].booksIds.indexOf(bookId) === index);
//                 items.push(tmpItem[0]);
//             } else {
//                 items.push(item);
//             }
//         } else {
//             invalidItems.push({});
//         }
//     } else {
//         invalidItems.push({});
//     }
// });

// console.log('items', items);

// return promise(items);
// return Promise.all(saveRequests).then(saveResponses => {
//     const completed = saveResponses.filter(res => res.success).length;
//     const failed = saveResponses.filter(res => !res.success).length;
//     const invalid = invalidItems.length;

//     return promise({
//         completed,
//         failed,
//         invalid,
//     });
// });
// });

// return Promise.all(asyncRequests).then(responses => {
//     const completed = responses.filter(res => res.success).length;
//     const failed = responses.filter(res => !res.success).length;
//     const invalid = invalidItems.length;

//     return promise({
//         completed,
//         failed,
//         invalid,
//     });
// });
