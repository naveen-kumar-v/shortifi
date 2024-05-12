# Shortifi

Shortifi simplifies lengthy URLs, making them easier to share and manage. Once shortened, these links can be shared with anyone, providing quick access to the original content. Shortifi also provides valuable insights by tracking the number of clicks and site accesses for each link. Stay tuned for upcoming features like timestamps to further enhance your URL management experience with Shortifi. Start shortening your URLs with Shortifi today!

## Technologies Used

- **Frontend**:
  - React
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Express.js
- **Database**:
  - MongoDB

## Features

- Shorten long URLs to make them easier to share.
- Track the number of clicks and site accesses for each shortened link.
- Fully responsive web application.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js installed on your local machine
- MongoDB installed and running

### Installation

1. Clone the repo
   git clone https://github.com/naveen-kumar-v/shortifi.git
   
2. Install NPM packages for both Client and Server

   - cd shortifi/Client
   - npm install
   - cd ../Server
   - npm install

3. Create a .env file in the backend directory and add your MongoDB connection string
   DATABASE_URL=your_mongodb_connection_string

4. Run the backend server

   cd ../Server
   npm run dev

5. Run the frontend server

   cd ../Client
   npm run dev


#Usage
1. Visit https://shortifi.netlify.app/
2. Paste your long URL into the input field and click on "Shorten"
3. Copy the shortened URL and share it with others

#Roadmap
1. Add timestamps for shortened URLs
2. Enhance analytics features

Contact
Naveen Kumar V - naveengv75@gmail.com

Project Link: https://shortifi.netlify.app
