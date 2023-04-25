// Import required modules
import fs from 'fs'; // fs module provides methods for working with the file system
import path from 'path'; // path module provides methods for working with file and directory paths
import matter from 'gray-matter'; // gray-matter is a library for parsing front-matter from markdown files

// Define the directory where the markdown files are stored
const postsDirectory = path.join(process.cwd(), 'posts');

// Function to get all the data from the markdown files and sort them by date
export function getSortedPostsData() {
    // Get an array of file names from the directory using fs module
    const fileNames = fs.readdirSync(postsDirectory);

    // Map over each file and return an object containing the post data and id
    const allPostsData = fileNames.map((fileName) => {
        // Remove the .md file extension to get the post id
        const id = fileName.replace(/\.md$/, '');

        // Read the contents of the file as a string using fs module
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parse the front-matter from the file using gray-matter and return the data as an object
        const matterResult = matter(fileContents);

        // Combine the post data and id into a single object
        return {
            id,
            ...matterResult.data,
        };
    });

    // Sort the array of posts by date (newest to oldest)
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export const getAllPostsId = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export const getPostData = id => {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
        id,
        ...matterResult.data,
    };
}