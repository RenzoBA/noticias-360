# 1. Base image
FROM node:22.6.0-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# 4. Copy the rest of the application code
COPY . .

# 5. Build the application
RUN npm run build

# 6. Expose the port Next.js will listen on
EXPOSE 3000

# 7. Start the Next.js server
CMD ["npm", "start"]