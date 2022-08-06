
type BlogPost = {
    post: string,
    timestamp: number,
    user: string
}

interface AddToPost {
    (post: BlogPost) : BlogPost[]
}

interface IBlogPost {
    allPost: BlogPost[];
    addToPost: AddToPost;
}

class BlogPostClass implements IBlogPost {
    allPost: BlogPost[] = [];
    addToPost(post: BlogPost) : BlogPost[] {
        this.allPost = [...this.allPost, post]
        return this.allPost
    }

}

const blog = new BlogPostClass()

let post1: BlogPost = {post: 'Goodbye, 2020', timestamp: 12345678,
user: 'Rayon'}
let post2: BlogPost = {post: 'Welcome, 2021', timestamp: 12345678,
user: 'Mark'}
let post3: BlogPost = {post: 'What happened to 1999?', timestamp:
12345678, user: 'Will'}

blog.addToPost(post1)
blog.addToPost(post2)
blog.addToPost(post3)

console.log(blog.allPost)



