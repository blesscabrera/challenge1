# Timestamp Microservice

## Overview
This is a FreeCodeCamp Timestamp Microservice project - a Node.js/Express application that provides a timestamp API service. The application serves both a web interface and RESTful API endpoints.

## Project Structure
- `index.js` - Main Express server application
- `views/index.html` - Frontend HTML interface
- `public/style.css` - Styling for the frontend
- `package.json` - Node.js dependencies and scripts

## Technology Stack
- **Backend**: Node.js with Express framework
- **Dependencies**: 
  - express: Web framework
  - cors: Cross-origin resource sharing middleware

## Configuration
- **Port**: 5000 (configured for Replit environment)
- **Host**: 0.0.0.0 (allows external access through Replit proxy)

## API Endpoints
- `GET /` - Serves the main HTML interface
- `GET /api/hello` - Test endpoint returning a greeting
- Additional timestamp endpoints to be implemented per FreeCodeCamp requirements

## Recent Changes (November 3, 2025)
- Imported from GitHub repository
- Configured for Replit environment:
  - Changed default port from 3000 to 5000
  - Added 0.0.0.0 host binding for proxy compatibility
  - Installed npm dependencies
  - Set up workflow for automatic server startup

## Running the Project
The project runs automatically via the configured workflow. The server starts with:
```bash
node index.js
```

## Deployment
Configured for Replit autoscale deployment, suitable for this stateless web service.
