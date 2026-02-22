#Running the program
After downloading file, unzip, move the folder outside the unziped folder
Open folder in vscode
Open terminal run (npm install)
then, (node server.js)
right-click index.html (open with live server)

This portfolio presents the integration of various APIs and showcases my work in the field of Information Technology. It provides an overview of who I am as an aspiring IT professional and highlights my technical skills, strengths, and interests in technology. The portfolio also includes my contact information and professional links, such as my GitHub, email, location, and LinkedIn profile, to make it easy to connect and collaborate.

#API 1: Custom Testimonials API (Built with Node.js and Express)
This is a REST API created using Node.js and Express.js. It handles storing and retrieving testimonials submitted by users.
How it works: 
• When a user submits feedback, the frontend sends
a POST request. 
• The server validates the data. 
• It generates the current date. 
• It stores the testimonial in memory. 
• It sends the saved testimonial back as a JSON response. When the page
loads: 
• A GET request retrieves all stored testimonials. 
• The frontend displays them dynamically without refreshing the page.
Important: The data is stored temporarily in memory, so it resets when
the server restarts.

#API 2: Dev.to Public API (Technology Articles)
This API comes from the Dev.to platform. It allows the website to fetch real technology articles
automatically. 
How it works: 
• The website sends a GET request to the Dev.to API. 
• It requests
articles tagged with 'technology'. 
• Dev.to returns article data in JSON format. 
• The website reads the title, author, date, and description. 
• Articles are displayed dynamically as cards. This eliminates the need to manually add blog content.

#API 3: EmailJS API (Contact Form Email Service)
EmailJS is a third-party service that allows sending emails directly from the frontend. 
How it works: 
• When a user fills out the contact form, the form data is sent to EmailJS. 
• EmailJS uses a predefined email template. 
• The service sends the email to the configured email address. 
• A success or error message is returned. This means no backend email server is required.