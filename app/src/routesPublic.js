'use strict';

const router = require('express').Router();
const { home, salary } = require('./controllers');

router.route('/test').get(salary.testSalaryData);
router.route('/salaryData').get(salary.fullSalaryData);
router.route('/queryData').post(salary.querySalaryData);
router.route('/downloadData').post(salary.downloadSalaryData);

module.exports = router;
