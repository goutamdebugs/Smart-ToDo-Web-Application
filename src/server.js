const express = require('express');
const cors = require('cors');
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes');
const taskRoutes = require('./routes/task.routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();
const PORT = process.env.PORT || 5000;

// database connect
connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


    // swagger Configuration
const path = require('path'); 
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Smart ToDo API',
      version: '1.0.0',
      description: 'API documentation for Smart ToDo App'
    },
    servers: [
      {
        url: `http://localhost:${PORT}`
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
 apis: [path.join(__dirname, 'routes', '*.js')] 
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//    routes

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Smart ToDo API is running'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// error middleware
app.use(errorMiddleware);

// start server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  console.log(`API URL: http://localhost:${PORT}`);
  console.log(`swagger Docs: http://localhost:${PORT}/api-docs`);
});
