# CRM Dashboard

A simple CRM system built with Next.js that helps manage company statistics and promotions. The app provides an overview of all companies and allows users to view, manage, and add promotions for individual companies.

## Description

- Dashboard: Displays general statistics for all companies and their promotions.
- Companies: A detailed view of all companies with the ability to:

1. Navigate to individual company pages.
2. View all promotions for a specific company.
3. Add new promotions directly from the company's page.

### Key Features:

**Dashboard**:

- Provides a clear overview of company and promotion statistics.
- User-friendly interface for quick insights.

  **Companies Page**:

- Lists all companies with key details.
- Enables navigation to individual company pages for more detailed management.

  **Company Details Page**:

- Displays a company's promotions.
- Allows the addition of new promotions.

  **Add Promotion**:

- Easy-to-use form for adding promotions to a specific company.

## Technologies Used

- Frontend:

**Next.js** — React framework for server-side rendering and static site generation.
**React** — User interface library.
**Tailwind CSS (optional)** — For styling.

- Backend:

**mockapi.io**

## Installation

1. Clone this repository:

`git clone https://github.com/OleksandraStepanova/crm-next.js`

2. Navigate to the project directory:

`cd crm-next`

3. Install dependencies:

`npm install`

4. Configure the environment variables:
   Create a .env.local file in the root directory and add your variables (e.g., database URL, API keys).

Example:

`NEXT_PUBLIC_PROJECT_TOKEN = 65c21c4ff7e6ea59682aa7e1`

5. Run the development server:

`npm run dev`

6. Open the app in your browser at http://localhost:3000.

## Usage

### Dashboard

- View general statistics for all companies and their promotions.
- Quickly navigate to detailed company information.

### Companies Page

- Browse a list of all companies.
- Click on a company to view its details and promotions.

### Company Details

- See all promotions related to a company.
- Add new promotions with an easy-to-use form.

## Future Improvements

- Add user authentication and role-based access control.
- Enable editing and deleting promotions.
- Enhance statistics visualization with charts or graphs.

## Contributors

Oleksandra Stepanova — Full-Stack Developer
