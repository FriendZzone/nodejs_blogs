const Course = require('../models/Course')
const { multipleMongooseToObject, mongooseToObject } = require('../../utils/mongoose')

class CourseController {

    // GET / course/:slug
    show(req, res, next) {
        Course.findOne({ 'slug': req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next)
    }
    // GET /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // POST /courses/store
    store(req, res, next) {
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg;`
        const course = new Course(formData)
        course.save()
            .then(() => {
                res.redirect('/')
            })
            .catch(next)
    }

    // GET /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', { course: mongooseToObject(course) }))
            .catch(next);

    }

    // PUT course/:id
    update(req, res, next){
        Course.updateOne({'_id' : req.params.id}, req.body0)
        .then(() => {
            res.redirect('/me/stored/courses')
        })

    }

}

module.exports = new CourseController;