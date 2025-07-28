export default function Papershelf() {
  const papers = {
    "Recent Reads": [
      {
        title: "Attention Is All You Need",
        authors: "Vaswani et al.",
        year: "2017",
        description:
          "The seminal paper introducing the Transformer architecture that revolutionized NLP and led to models like GPT and BERT.",
        category: "Machine Learning",
        link: "https://arxiv.org/abs/1706.03762",
      },
      {
        title:
          "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
        authors: "Devlin et al.",
        year: "2018",
        description:
          "Introduction of BERT, a powerful language model that achieved state-of-the-art results on various NLP tasks.",
        category: "NLP",
        link: "https://arxiv.org/abs/1810.04805",
      },
      {
        title: "GPT-3: Language Models are Few-Shot Learners",
        authors: "Brown et al.",
        year: "2020",
        description:
          "Demonstration of GPT-3's few-shot learning capabilities and its implications for AI development.",
        category: "Language Models",
        link: "https://arxiv.org/abs/2005.14165",
      },
    ],
    "System Design": [
      {
        title: "Dynamo: Amazon's Highly Available Key-value Store",
        authors: "DeCandia et al.",
        year: "2007",
        description:
          "A foundational paper on distributed systems that influenced many modern database designs.",
        category: "Distributed Systems",
        link: "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf",
      },
      {
        title: "The Google File System",
        authors: "Ghemawat et al.",
        year: "2003",
        description:
          "Design and implementation of Google's scalable distributed file system.",
        category: "Storage Systems",
        link: "https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf",
      },
    ],
    "Web Development": [
      {
        title: "React: A JavaScript Library for Building User Interfaces",
        authors: "Facebook",
        year: "2013",
        description:
          "The original React paper introducing the component-based architecture for building user interfaces.",
        category: "Frontend",
        link: "https://reactjs.org/",
      },
      {
        title: "Next.js: The React Framework for Production",
        authors: "Vercel",
        year: "2016",
        description:
          "Documentation and architecture of Next.js, focusing on server-side rendering and static generation.",
        category: "Full Stack",
        link: "https://nextjs.org/",
      },
    ],
  };

  return (
    <div className="flex flex-col py-10 px-4 bg-white text-gray-900 text-sm max-w-xl mx-auto">
      <div className="max-w-xl w-full">
        <h1 className="text-2xl font-semibold mb-6">Papershelf</h1>

        <p className="text-gray-600 mb-8">
          A curated collection of research papers, technical articles, and
          documentation that have shaped my understanding of modern software
          development, AI, and distributed systems. These papers represent
          foundational work in their respective fields.
        </p>

        <div className="space-y-8">
          {Object.entries(papers).map(([category, categoryPapers]) => (
            <section key={category}>
              <h2 className="text-lg font-medium mb-4">{category}</h2>
              <div className="space-y-4">
                {categoryPapers.map((paper, index) => (
                  <div key={index} className="border-l-4 border-green-200 pl-4">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-medium">
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          {paper.title}
                        </a>
                      </h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {paper.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      {paper.authors} ({paper.year})
                    </p>
                    <p className="text-sm text-gray-700">{paper.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-600">
            I regularly read research papers to stay updated with the latest
            developments in technology. If you have any interesting papers to
            recommend, especially in the areas of AI, distributed systems, or
            web development, I&apos;d love to hear about them!
          </p>
        </div>
      </div>
    </div>
  );
}
