const Course = require('../models/Course')
const { multipleMongooseToObject, mongooseToObject } = require('../../utils/mongoose')

class MeController {

    // GET / me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, count]) => {
                res.render('me/stored-courses', { courses: multipleMongooseToObject(courses), count })


            })
            .catch(next)
    }
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => {
                res.render('me/trash-courses', { courses: multipleMongooseToObject(courses) })
            })
            .catch(next)
    }

}

module.exports = new MeController;