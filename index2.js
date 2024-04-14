let Container1 = document.querySelector('.Container1');


function redirectTo(url) {
    window.location.href = url;
}

let Data = [{
    "_id": "ObjectId('Book1') ",
    "name": "Engineering Mathematics",
    "year": "1st Sem",
    "author": "R.K Das",
    "img": "https://d3i3lzopayriz.cloudfront.net/books/0_front_cover_1660716982.jpg",
    "descrip": " Engineering Mathematics provides a comprehensive overview of mathematical concepts essential for engineering students. This textbook covers topics such as calculus, differential equations, linear algebra, and complex analysis, presenting them in a clear and accessible manner. With numerous examples and exercises, students can develop a solid understanding of mathematical principles and their practical applications in engineering. Written by renowned author R.K Das, this book is an indispensable resource for engineering students seeking to master the mathematical foundations of their field."
},
{
    "_id": "ObjectId('Book2')",
    "name": "Engineering Physics",
    "year": "2nd Sem",
    "author": "V.K Jain",
    "img": " https://m.media-amazon.com/images/I/51fybioFl+L.jpg",
    "descrip": "Engineering Physics offers a fundamental understanding of physical principles crucial for engineering applications. This comprehensive textbook covers topics including mechanics, thermodynamics, electromagnetism, and quantum mechanics, presenting them in a coherent and logical manner. With practical examples and real-world applications, students can grasp complex concepts and apply them to engineering problems. Authored by esteemed physicist V.K Jain, this book serves as an indispensable resource for engineering students aiming to build a strong foundation in physics for their future careers."
},
{
    "_id": "ObjectId('Book3')",
    "name": "Engineering Chemistry",
    "year": "1st Sem",
    "author": "R.K Ghosh",
    "img": "https://m.media-amazon.com/images/I/61GOCXVfisL._AC_UF1000,1000_QL80_.jpg",
    "descrip": "Book overview. This book has been divided into seventeen chapters covering all the disciplines of engineering Chemistry such as Inorganic, Organic, synthetic, physical, applied, industrial, spectroscopic and Environmental Chemistry."
},
{
    "_id": "ObjectId('Book4')",
    "name": "Engineering Biotech",
    "year": "1st Sem",
    "author": "V.K Sainyam",
    "img": "https://www.cbspd.co.in/media/catalog/product/cache/1/image/c66ed2c04ee7ca3766803238dbeea301/9/7/9789354660344.jpg",
    "descrip": "Engineering Biotechnology delves into the interdisciplinary field of biotechnology with a focus on engineering principles and applications. This cutting-edge textbook covers a wide range of topics including genetic engineering, biochemical engineering, bioprocess engineering, and biomanufacturing, providing students with a comprehensive understanding of the field. Through case studies and practical examples, readers will explore the integration of engineering techniques with biological systems to develop innovative solutions for healthcare, agriculture, and environmental sustainability. Authored by leading experts in the field, this book is essential for students and researchers seeking to leverage engineering principles for advancements in biotechnology."
},
{
    "_id": "ObjectId('Book5')",
    "name": "Data Structure and Algorithim",
    "year": "3rd Sem",
    "author": "D.B Bhatia",
    "img": "https://m.media-amazon.com/images/I/71kBRLo8ZtL._AC_UF1000,1000_QL80_.jpg",
    "descrip": "Data Structures and Algorithms is an indispensable resource for computer science students and professionals alike. This comprehensive textbook covers fundamental concepts such as arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and hashing, providing a solid foundation in data organization and manipulation. With clear explanations, pseudocode, and implementation examples in various programming languages, readers can grasp complex algorithms and their applications in solving real-world problems efficiently. Authored by renowned experts in the field, this book equips readers with the knowledge and skills necessary for designing and analyzing efficient algorithms, making it an essential reference for anyone working in the field of computer science and software engineering."
},
{
    "_id": "ObjectId('Book6')",
    "name": "Discrete Structure",
    "year": "3rd Sem",
    "author": "T.M Emanuel",
    "img": "https://m.media-amazon.com/images/I/41k8JpL423L.jpg",
    "descrip": "Discrete Mathematical Structures provides comprehensive, reasonably rigorous and simple explanation of the concepts with the help of numerous applications from computer science and engineering. Every chapter is equipped with a good number of solved examples that elucidates the definitions and theorems discussed."
}


];

Data.forEach((Element) => {
    var productCard = document.querySelector('.ProductCard');
    var product = document.createElement('div');
    product.classList.add('product');
    var Img = document.createElement('div');
    var name = document.createElement('div');
    name.classList.add('Name');
    Img.classList.add('pimage');
    product.appendChild(Img);
    product.appendChild(name);
    productCard.appendChild(product);
    name.innerHTML = Element.name;
    Img.style.backgroundImage = "url(' " + Element.img + " ')";
    product.setAttribute("id", Element._id);
    product.addEventListener('click', function () {
        redirectTo('productpage.html?id=' + Element._id);
        ;
    })
})

let Item = document.querySelector('.Item');
document.querySelectorAll('.items').forEach((item) => {
    item.addEventListener('click', function () {
        redirectTo('YEAR1.html?id=' + this.id);
    });
});