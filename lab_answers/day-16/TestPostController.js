import PostController from "./PostController";

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';

//Call test function
run();

async function run() {
    const userId = 1;
    const postId = 1;
    const postController = new PostController(BASE_URL, SLUG);

// Verify post filtering




/**
 * Test Framework: Mocha
 * Assertion Library (optional) / nodejS assert built-in module
 * Test report: allure-mocha
 * ---> Generate allure report
 * 
 */