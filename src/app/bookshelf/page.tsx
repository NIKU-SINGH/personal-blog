export default function Bookshelf() {
  const books = {
    "Currently Reading": [
      {
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        description:
          "A comprehensive guide to building scalable, reliable, and maintainable applications.",
        category: "System Design",
      },
      {
        title: "The Pragmatic Programmer",
        author: "David Thomas & Andrew Hunt",
        description:
          "A guide to becoming a more effective and productive programmer.",
        category: "Software Development",
      },
    ],
    "Recently Read": [
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        description:
          "A handbook of agile software craftsmanship with practical examples.",
        category: "Software Development",
      },
      {
        title: "React Design Patterns and Best Practices",
        author: "Carlos Santana Roldán",
        description:
          "Learn how to write better React code with design patterns and best practices.",
        category: "Frontend Development",
      },
      {
        title: "TypeScript Programming",
        author: "Nathan Rozentals",
        description:
          "A comprehensive guide to TypeScript for building robust applications.",
        category: "Programming",
      },
    ],
    Recommended: [
      {
        title: "System Design Interview",
        author: "Alex Xu",
        description:
          "An insider's guide to system design interviews with real-world examples.",
        category: "System Design",
      },
      {
        title: "The Art of Computer Programming",
        author: "Donald E. Knuth",
        description: "A comprehensive treatise on the analysis of algorithms.",
        category: "Computer Science",
      },
      {
        title: "Refactoring",
        author: "Martin Fowler",
        description:
          "Improving the design of existing code with practical techniques.",
        category: "Software Development",
      },
    ],
  };

  return (
    <div className="flex flex-col py-10 px-4 bg-white text-gray-900 text-sm max-w-xl mx-auto">
      <div className="max-w-xl w-full">
        <h1 className="text-2xl font-semibold mb-6">Bookshelf</h1>

        <p className="text-gray-600 mb-8">
          A collection of books that have influenced my thinking about
          technology, software development, and system design. I believe in
          continuous learning and these books have been instrumental in my
          growth as a developer.
        </p>

        <div className="space-y-8">
          {Object.entries(books).map(([category, categoryBooks]) => (
            <section key={category}>
              <h2 className="text-lg font-medium mb-4">{category}</h2>
              <div className="space-y-4">
                {categoryBooks.map((book, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-4">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-medium">{book.title}</h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {book.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      by {book.author}
                    </p>
                    <p className="text-sm text-gray-700">{book.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-600">
            I'm always looking for new books to read. If you have any
            recommendations related to software development, system design, or
            technology in general, feel free to reach out!
          </p>
        </div>
      </div>
    </div>
  );
}
