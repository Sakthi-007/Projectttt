export const PRODUCTS = [
    {
      "id": 1,
        "title": "JavaScript for Beginners: Learn JavaScript from Scratch",
        "price": 59.99,
        "description": "This course provides an introduction to JavaScript, the most popular programming language in web development. You'll learn the fundamentals, including variables, loops, functions, and event handling.",
        "category": "web development",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqKmgwX1P_1Ps9LNEVKGJHBXBJ-5RSStg6A&s",
        "rating": {
            "rate": 4.5,
            "count": 1500
      }
    },
    {
      "id": 2,
      "title": "Python Programming Masterclass",
      "price": 75.99,
      "description": "Master Python programming from the ground up. This course covers all the basics and more, preparing you for advanced Python development.",
      "category": "programming",
      "image": "https://www.ascend.io/wp-content/uploads/2023/09/python-for-data-engineering-1024x577.jpg",
      "rating": {
          "rate": 4.7,
          "count": 2000
          
    }},
    {
      "id": 3,
      "title": "Web Development Bootcamp: HTML, CSS, JavaScript",
      "price": 99.99,
      "description": "A comprehensive bootcamp that covers the essentials of web development. Learn HTML, CSS, and JavaScript to build responsive and dynamic websites.",
      "category": "web development",
      "image": "https://static.skillshare.com/uploads/video/thumbnails/c38251fc34fe43812b476c376c5d6945/original",
      "rating": {
          "rate": 4.8,
          "count": 3200
      }
    },
    
      {
        "id": 4,
        "title": "Digital Marketing: SEO, Social Media, and Content Marketing",
        "price": 89.99,
        "description": "Learn the strategies and techniques of digital marketing, including search engine optimization (SEO), social media marketing, and content creation.",
        "category": "marketing",
        "image": "https://teresas.ac.in/wp-content/uploads/2021/07/20190820185239-GettyImages-985550942.jpeg",
        "rating": {
            "rate": 4.6,
            "count": 1700
        }
    },
    {
      "id": 5,
        "title": "Graphic Design for Beginners: Adobe Photoshop and Illustrator",
        "price": 49.99,
        "description": "Discover the fundamentals of graphic design using Adobe Photoshop and Illustrator. This course is perfect for beginners who want to learn design principles and techniques.",
        "category": "design",
        "image": "https://www.creativeitinstitute.com/images/course/course_1665409737.jpg",
        "rating": {
            "rate": 4.4,
            "count": 1200
        }
    },
    {
      "id": 6,
        "title": "Data Science and Machine Learning with Python",
        "price": 129.99,
        "description": "Dive into data science and machine learning with this comprehensive course. Learn to analyze data, build models, and use Python libraries such as NumPy, pandas, and scikit-learn.",
        "category": "data science",
        "image": "https://timesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com/Post_Graduate_Advanced_Certificate_in_Data_Science_bbed602487.webp",
        "rating": {
            "rate": 4.7,
            "count": 2500
        }
    },
    {
      "id": 7,
      "title": "Business Analytics: Data-Driven Decision Making",
      "price": 79.99,
      "description": "Learn how to make data-driven decisions in business. This course covers data analysis, visualization, and the application of statistical techniques to business scenarios.",
      "category": "business",
      "image": "https://images.shiksha.ws/mediadata/images/articles/industrial-growth-of-business-chart-picture-id900144946.jpg",
      "rating": {
          "rate": 4.3,
          "count": 1100
      }
    },
    {
      "id": 8,
      "title": "Full-Stack Web Development with React and Node.js",
      "price": 109.99,
      "description": "Become a full-stack developer with this in-depth course covering React for the front-end and Node.js for the back-end.",
      "category": "web development",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3VrYD5wJJ7LFfnJQBcFSH2xvBohLNmPijxyujQxOcyo1gw8Gj-i2gE8nR3Hf3RcPY6s&usqp=CAU",
      "rating": {
          "rate": 4.8,
          "count": 2800
      }
    },
    {
      "id": 9,
        "title": "Introduction to Cybersecurity: Protect Your Online Presence",
        "price": 69.99,
        "description": "Understand the fundamentals of cybersecurity and learn how to protect your online presence. This course covers key concepts such as encryption, firewalls, and network security.",
        "category": "cybersecurity",
        "image": "data:image/jpeg;base64,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",
        "rating": {
            "rate": 4.5,
            "count": 1300
        }
    },
    {
      "id": 10,
      "title": "Introduction to Artificial Intelligence: Concepts and Applications",
      "price": 119.99,
      "description": "Explore the fundamentals of artificial intelligence, including machine learning, neural networks, and natural language processing. This course provides a comprehensive overview of AI concepts and practical applications.",
      "category": "artificial intelligence",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkUFmp5jSF-DhrD5102bzHU7RbidetfqYfA&s",
      "rating": {
          "rate": 4.9,
          "count": 1800
      }
    },
    {
      "id": 11,
      "title": "Mobile App Development with Flutter and Dart",
      "price": 89.99,
      "description": "Learn to develop cross-platform mobile applications using Flutter and Dart. This course covers everything from setting up your environment to deploying your app on iOS and Android.",
      "category": "mobile development",
      "image": "https://cdn.prod.website-files.com/654366841809b5be271c8358/659efd7c0732620f1ac6a1d6_why_flutter_is_the_future_of_app_development%20(1).webp",
      "rating": {
          "rate": 4.6,
          "count": 1500
      }
    },
    {
      "id": 12,
      "title": "Cloud Computing with AWS: From Beginner to Expert",
      "price": 99.99,
      "description": "Master cloud computing with Amazon Web Services (AWS). This course covers key AWS services, cloud architecture, and best practices for deploying scalable and secure applications.",
      "category": "cloud computing",
      "image": "https://yt3.googleusercontent.com/HRJKaJg70sqBrCNh7Tf2RSjXTb_5hCUn7Hht7mxUJMg77EWkihh55JklD-KhwAMhwY31ox5O=s900-c-k-c0x00ffffff-no-rj",
      "rating": {
          "rate": 4.8,
          "count": 2100
      }
    }
   
  ]