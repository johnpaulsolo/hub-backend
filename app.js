const { bodyParser, express, mongoose, graphHttp } = require("./packages/index");
const indexSchema = require("./graphql/schema/index");
const indexResolvers = require("./graphql/resolvers/index");
const isAuth = require("./middleware/is-Auth");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3022;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    }

    next();
});

app.use(bodyParser.json());

app.use(isAuth);

app.use('/api', graphHttp({
    schema: indexSchema,
    rootValue: indexResolvers,
    graphiql: true
}));

mongoose.connect(`
    mongodb+srv://${process.env.MongoUsername}:${process.env.MongoPassword}@cluster1-haukk.mongodb.net/${process.env.MongoDb}?retryWrites=true
`).then( () => {
    app.listen(port);
}).catch( err => {
    console.log(err);
})

