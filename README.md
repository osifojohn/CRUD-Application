# CRUD Application with Next.js, TypeScript, and JSONPlaceholder API

This project is a frontend application built with Next.js, TypeScript, and Tailwind CSS. It allows users to perform CRUD (Create, Read, Update, Delete) operations on posts by interacting with the JSONPlaceholder API.

## Features

- **View Posts**: Display a list of posts fetched from the API.
- **Create Post**: Add new posts using a simple form.
- **Edit Post**: Modify existing posts.
- **Delete Post**: Remove posts from the list.

## Tech Stack

- **Next.js**: React framework for building server-side rendering and static web applications.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development environment:

- **Node.js** (v14 or later)
- **npm** or **yarn** for package management

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/osifojohn/march-task.git
   cd march-task
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### API Reference

This application uses the JSONPlaceholder API. Below are the main endpoints utilized:

- **`GET /posts`**: Fetches a list of posts.
- **`POST /posts`**: Creates a new post.
- **`PUT /posts/{id}`**: Updates an existing post.
- **`DELETE /posts/{id}`**: Deletes a specific post.

You can learn more about the API by visiting the [JSONPlaceholder API documentation](https://jsonplaceholder.typicode.com/).

### Styling with Tailwind CSS

- The application is styled using Tailwind CSS for rapid and modern UI design.
- Tailwind's utility classes are used for consistent and responsive styling across all components.

### Additional Notes

- This project uses a mock API, so changes made through the application will not persist permanently.
- Basic error handling and state management are implemented using React Context api.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

---

Thank you for checking out this project! If you have any questions or feedback, feel free to reach out.
