const express = require('express');
const router = express.Router();
const apiRoutes = require('./routes/apiRoutes');

router.use(require('./candidateRoutes'));
app.use('/api', apiRoutes);

module.exports = router;