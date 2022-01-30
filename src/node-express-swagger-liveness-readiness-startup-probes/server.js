// minimalist web framework - https://www.npmjs.com/package/express
const express = require('express');
const os = require('os')
// API docs from express - https://www.npmjs.com/package/swagger-ui-express
const app = express();
const swaggerUi = require('swagger-ui-express');
// YAML parser and encoder - https://www.npmjs.com/package/yamljs
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const bodyParser = require('body-parser');
// Kubernetes lifecycle: liveness, readiness and startup probes - https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/
const config = require('./config/k8s-lifecycle');
const { Console } = require('console');

// Configure routes
app.use(config.middlewares.healthMiddleware);
app.use('/', config.routers);
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

// Implement route: GET /
app.get('/', (req, res) => {
    res.render('index',{resultValue: ''});
});

// Implement route: POST /
app.post('/', (req, res) => {
    let resultValue = '';

    if (req.body.inputMessage) {
        resultValue = req.body.inputMessage
    }

    res.render('index', {resultValue: resultValue});
 });

// Starting listening
app.listen(8080, () => {
    console.log("Server is running `node-express-swagger-liveness-readiness-startup-probes` on port 8080");
});
