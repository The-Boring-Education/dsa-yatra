
export interface Question {
  title: string;
  leetcode_url: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Topic {
  topic: string;
  emoji: string;
  questions: Question[];
}

export const targetBasedData = {
  startup: [
    {
      topic: "Arrays & Strings",
      emoji: "📝",
      questions: [
        {
          title: "Two Sum",
          leetcode_url: "https://leetcode.com/problems/two-sum/",
          difficulty: "Easy" as const
        },
        {
          title: "Valid Anagram",
          leetcode_url: "https://leetcode.com/problems/valid-anagram/",
          difficulty: "Easy" as const
        },
        {
          title: "Best Time to Buy and Sell Stock",
          leetcode_url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
          difficulty: "Easy" as const
        },
        {
          title: "Product of Array Except Self",
          leetcode_url: "https://leetcode.com/problems/product-of-array-except-self/",
          difficulty: "Medium" as const
        },
        {
          title: "Group Anagrams",
          leetcode_url: "https://leetcode.com/problems/group-anagrams/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "Hash Maps",
      emoji: "🗂️",
      questions: [
        {
          title: "Contains Duplicate",
          leetcode_url: "https://leetcode.com/problems/contains-duplicate/",
          difficulty: "Easy" as const
        },
        {
          title: "Valid Parentheses",
          leetcode_url: "https://leetcode.com/problems/valid-parentheses/",
          difficulty: "Easy" as const
        },
        {
          title: "Top K Frequent Elements",
          leetcode_url: "https://leetcode.com/problems/top-k-frequent-elements/",
          difficulty: "Medium" as const
        },
        {
          title: "Encode and Decode Strings",
          leetcode_url: "https://leetcode.com/problems/encode-and-decode-strings/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "Stack & Queue",
      emoji: "📚",
      questions: [
        {
          title: "Valid Parentheses",
          leetcode_url: "https://leetcode.com/problems/valid-parentheses/",
          difficulty: "Easy" as const
        },
        {
          title: "Min Stack",
          leetcode_url: "https://leetcode.com/problems/min-stack/",
          difficulty: "Medium" as const
        },
        {
          title: "Evaluate Reverse Polish Notation",
          leetcode_url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
          difficulty: "Medium" as const
        },
        {
          title: "Generate Parentheses",
          leetcode_url: "https://leetcode.com/problems/generate-parentheses/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "Basic Dynamic Programming",
      emoji: "🧮",
      questions: [
        {
          title: "Climbing Stairs",
          leetcode_url: "https://leetcode.com/problems/climbing-stairs/",
          difficulty: "Easy" as const
        },
        {
          title: "House Robber",
          leetcode_url: "https://leetcode.com/problems/house-robber/",
          difficulty: "Medium" as const
        },
        {
          title: "Coin Change",
          leetcode_url: "https://leetcode.com/problems/coin-change/",
          difficulty: "Medium" as const
        },
        {
          title: "Longest Increasing Subsequence",
          leetcode_url: "https://leetcode.com/problems/longest-increasing-subsequence/",
          difficulty: "Medium" as const
        }
      ]
    }
  ],
  mnc: [
    {
      topic: "Arrays & Strings",
      emoji: "📝",
      questions: [
        {
          title: "Two Sum",
          leetcode_url: "https://leetcode.com/problems/two-sum/",
          difficulty: "Easy" as const
        },
        {
          title: "3Sum",
          leetcode_url: "https://leetcode.com/problems/3sum/",
          difficulty: "Medium" as const
        },
        {
          title: "Container With Most Water",
          leetcode_url: "https://leetcode.com/problems/container-with-most-water/",
          difficulty: "Medium" as const
        },
        {
          title: "Longest Substring Without Repeating Characters",
          leetcode_url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "Binary Trees",
      emoji: "🌳",
      questions: [
        {
          title: "Invert Binary Tree",
          leetcode_url: "https://leetcode.com/problems/invert-binary-tree/",
          difficulty: "Easy" as const
        },
        {
          title: "Maximum Depth of Binary Tree",
          leetcode_url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
          difficulty: "Easy" as const
        },
        {
          title: "Binary Tree Level Order Traversal",
          leetcode_url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
          difficulty: "Medium" as const
        },
        {
          title: "Validate Binary Search Tree",
          leetcode_url: "https://leetcode.com/problems/validate-binary-search-tree/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "Graphs",
      emoji: "🕸️",
      questions: [
        {
          title: "Clone Graph",
          leetcode_url: "https://leetcode.com/problems/clone-graph/",
          difficulty: "Medium" as const
        },
        {
          title: "Course Schedule",
          leetcode_url: "https://leetcode.com/problems/course-schedule/",
          difficulty: "Medium" as const
        },
        {
          title: "Number of Islands",
          leetcode_url: "https://leetcode.com/problems/number-of-islands/",
          difficulty: "Medium" as const
        },
        {
          title: "Pacific Atlantic Water Flow",
          leetcode_url: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "Sliding Window",
      emoji: "🪟",
      questions: [
        {
          title: "Maximum Average Subarray I",
          leetcode_url: "https://leetcode.com/problems/maximum-average-subarray-i/",
          difficulty: "Easy" as const
        },
        {
          title: "Longest Substring Without Repeating Characters",
          leetcode_url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
          difficulty: "Medium" as const
        },
        {
          title: "Minimum Window Substring",
          leetcode_url: "https://leetcode.com/problems/minimum-window-substring/",
          difficulty: "Hard" as const
        },
        {
          title: "Sliding Window Maximum",
          leetcode_url: "https://leetcode.com/problems/sliding-window-maximum/",
          difficulty: "Hard" as const
        }
      ]
    }
  ],
  faang: [
    {
      topic: "Advanced Arrays",
      emoji: "🚀",
      questions: [
        {
          title: "Median of Two Sorted Arrays",
          leetcode_url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
          difficulty: "Hard" as const
        },
        {
          title: "Trapping Rain Water",
          leetcode_url: "https://leetcode.com/problems/trapping-rain-water/",
          difficulty: "Hard" as const
        },
        {
          title: "First Missing Positive",
          leetcode_url: "https://leetcode.com/problems/first-missing-positive/",
          difficulty: "Hard" as const
        },
        {
          title: "Largest Rectangle in Histogram",
          leetcode_url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
          difficulty: "Hard" as const
        }
      ]
    },
    {
      topic: "Tries",
      emoji: "🌿",
      questions: [
        {
          title: "Implement Trie",
          leetcode_url: "https://leetcode.com/problems/implement-trie-prefix-tree/",
          difficulty: "Medium" as const
        },
        {
          title: "Design Add and Search Words Data Structure",
          leetcode_url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
          difficulty: "Medium" as const
        },
        {
          title: "Word Search II",
          leetcode_url: "https://leetcode.com/problems/word-search-ii/",
          difficulty: "Hard" as const
        },
        {
          title: "Maximum XOR of Two Numbers in an Array",
          leetcode_url: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "Advanced Dynamic Programming",
      emoji: "💎",
      questions: [
        {
          title: "Edit Distance",
          leetcode_url: "https://leetcode.com/problems/edit-distance/",
          difficulty: "Hard" as const
        },
        {
          title: "Regular Expression Matching",
          leetcode_url: "https://leetcode.com/problems/regular-expression-matching/",
          difficulty: "Hard" as const
        },
        {
          title: "Longest Valid Parentheses",
          leetcode_url: "https://leetcode.com/problems/longest-valid-parentheses/",
          difficulty: "Hard" as const
        },
        {
          title: "Maximal Rectangle",
          leetcode_url: "https://leetcode.com/problems/maximal-rectangle/",
          difficulty: "Hard" as const
        }
      ]
    },
    {
      topic: "Bit Manipulation",
      emoji: "⚡",
      questions: [
        {
          title: "Single Number",
          leetcode_url: "https://leetcode.com/problems/single-number/",
          difficulty: "Easy" as const
        },
        {
          title: "Number of 1 Bits",
          leetcode_url: "https://leetcode.com/problems/number-of-1-bits/",
          difficulty: "Easy" as const
        },
        {
          title: "Counting Bits",
          leetcode_url: "https://leetcode.com/problems/counting-bits/",
          difficulty: "Easy" as const
        },
        {
          title: "Reverse Bits",
          leetcode_url: "https://leetcode.com/problems/reverse-bits/",
          difficulty: "Easy" as const
        }
      ]
    }
  ]
};

export const domainBasedData = {
  fullstack: [
    {
      topic: "Arrays & Strings",
      emoji: "💻",
      questions: [
        {
          title: "Two Sum",
          leetcode_url: "https://leetcode.com/problems/two-sum/",
          difficulty: "Easy" as const
        },
        {
          title: "Valid Palindrome",
          leetcode_url: "https://leetcode.com/problems/valid-palindrome/",
          difficulty: "Easy" as const
        },
        {
          title: "Longest Common Prefix",
          leetcode_url: "https://leetcode.com/problems/longest-common-prefix/",
          difficulty: "Easy" as const
        },
        {
          title: "String to Integer (atoi)",
          leetcode_url: "https://leetcode.com/problems/string-to-integer-atoi/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "Hash Maps & Sets",
      emoji: "🗂️",
      questions: [
        {
          title: "Two Sum",
          leetcode_url: "https://leetcode.com/problems/two-sum/",
          difficulty: "Easy" as const
        },
        {
          title: "Group Anagrams",
          leetcode_url: "https://leetcode.com/problems/group-anagrams/",
          difficulty: "Medium" as const
        },
        {
          title: "Top K Frequent Elements",
          leetcode_url: "https://leetcode.com/problems/top-k-frequent-elements/",
          difficulty: "Medium" as const
        },
        {
          title: "LRU Cache",
          leetcode_url: "https://leetcode.com/problems/lru-cache/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "Stacks & Queues",
      emoji: "📚",
      questions: [
        {
          title: "Valid Parentheses",
          leetcode_url: "https://leetcode.com/problems/valid-parentheses/",
          difficulty: "Easy" as const
        },
        {
          title: "Implement Queue using Stacks",
          leetcode_url: "https://leetcode.com/problems/implement-queue-using-stacks/",
          difficulty: "Easy" as const
        },
        {
          title: "Min Stack",
          leetcode_url: "https://leetcode.com/problems/min-stack/",
          difficulty: "Medium" as const
        },
        {
          title: "Design Circular Queue",
          leetcode_url: "https://leetcode.com/problems/design-circular-queue/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "Recursion & Backtracking",
      emoji: "🔄",
      questions: [
        {
          title: "Generate Parentheses",
          leetcode_url: "https://leetcode.com/problems/generate-parentheses/",
          difficulty: "Medium" as const
        },
        {
          title: "Letter Combinations of a Phone Number",
          leetcode_url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
          difficulty: "Medium" as const
        },
        {
          title: "Permutations",
          leetcode_url: "https://leetcode.com/problems/permutations/",
          difficulty: "Medium" as const
        },
        {
          title: "Subset",
          leetcode_url: "https://leetcode.com/problems/subsets/",
          difficulty: "Medium" as const
        }
      ]
    }
  ],
  datascience: [
    {
      topic: "Matrix Operations",
      emoji: "📊",
      questions: [
        {
          title: "Rotate Image",
          leetcode_url: "https://leetcode.com/problems/rotate-image/",
          difficulty: "Medium" as const
        },
        {
          title: "Spiral Matrix",
          leetcode_url: "https://leetcode.com/problems/spiral-matrix/",
          difficulty: "Medium" as const
        },
        {
          title: "Set Matrix Zeroes",
          leetcode_url: "https://leetcode.com/problems/set-matrix-zeroes/",
          difficulty: "Medium" as const
        },
        {
          title: "Search a 2D Matrix",
          leetcode_url: "https://leetcode.com/problems/search-a-2d-matrix/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "Statistical Problems",
      emoji: "📈",
      questions: [
        {
          title: "Median of Two Sorted Arrays",
          leetcode_url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
          difficulty: "Hard" as const
        },
        {
          title: "Kth Largest Element in an Array",
          leetcode_url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
          difficulty: "Medium" as const
        },
        {
          title: "Find Peak Element",
          leetcode_url: "https://leetcode.com/problems/find-peak-element/",
          difficulty: "Medium" as const
        },
        {
          title: "Random Pick with Weight",
          leetcode_url: "https://leetcode.com/problems/random-pick-with-weight/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "Graph Algorithms",
      emoji: "🕸️",
      questions: [
        {
          title: "Number of Islands",
          leetcode_url: "https://leetcode.com/problems/number-of-islands/",
          difficulty: "Medium" as const
        },
        {
          title: "Course Schedule",
          leetcode_url: "https://leetcode.com/problems/course-schedule/",
          difficulty: "Medium" as const
        },
        {
          title: "Network Delay Time",
          leetcode_url: "https://leetcode.com/problems/network-delay-time/",
          difficulty: "Medium" as const
        },
        {
          title: "Minimum Spanning Tree",
          leetcode_url: "https://leetcode.com/problems/min-cost-to-connect-all-points/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "Hash Tables & Frequency",
      emoji: "🔢",
      questions: [
        {
          title: "Top K Frequent Elements",
          leetcode_url: "https://leetcode.com/problems/top-k-frequent-elements/",
          difficulty: "Medium" as const
        },
        {
          title: "Group Anagrams",
          leetcode_url: "https://leetcode.com/problems/group-anagrams/",
          difficulty: "Medium" as const
        },
        {
          title: "Find All Anagrams in a String",
          leetcode_url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
          difficulty: "Medium" as const
        },
        {
          title: "Frequency of the Most Frequent Element",
          leetcode_url: "https://leetcode.com/problems/frequency-of-the-most-frequent-element/",
          difficulty: "Medium" as const
        }
      ]
    }
  ],
  // Add other domain data...
  appdev: [
    {
      topic: "Priority Queues & Heaps",
      emoji: "📱",
      questions: [
        {
          title: "Kth Largest Element in a Stream",
          leetcode_url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
          difficulty: "Easy" as const
        },
        {
          title: "Last Stone Weight",
          leetcode_url: "https://leetcode.com/problems/last-stone-weight/",
          difficulty: "Easy" as const
        },
        {
          title: "K Closest Points to Origin",
          leetcode_url: "https://leetcode.com/problems/k-closest-points-to-origin/",
          difficulty: "Medium" as const
        },
        {
          title: "Task Scheduler",
          leetcode_url: "https://leetcode.com/problems/task-scheduler/",
          difficulty: "Medium" as const
        }
      ]
    }
  ],
  ml: [
    {
      topic: "Optimization Problems",
      emoji: "🤖",
      questions: [
        {
          title: "Maximum Subarray",
          leetcode_url: "https://leetcode.com/problems/maximum-subarray/",
          difficulty: "Easy" as const
        },
        {
          title: "Best Time to Buy and Sell Stock",
          leetcode_url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
          difficulty: "Easy" as const
        },
        {
          title: "Coin Change",
          leetcode_url: "https://leetcode.com/problems/coin-change/",
          difficulty: "Medium" as const
        },
        {
          title: "Minimum Path Sum",
          leetcode_url: "https://leetcode.com/problems/minimum-path-sum/",
          difficulty: "Medium" as const
        }
      ]
    }
  ],
  analyst: [
    {
      topic: "Array Manipulation",
      emoji: "📈",
      questions: [
        {
          title: "Two Sum",
          leetcode_url: "https://leetcode.com/problems/two-sum/",
          difficulty: "Easy" as const
        },
        {
          title: "Product of Array Except Self",
          leetcode_url: "https://leetcode.com/problems/product-of-array-except-self/",
          difficulty: "Medium" as const
        },
        {
          title: "Maximum Subarray",
          leetcode_url: "https://leetcode.com/problems/maximum-subarray/",
          difficulty: "Easy" as const
        },
        {
          title: "Container With Most Water",
          leetcode_url: "https://leetcode.com/problems/container-with-most-water/",
          difficulty: "Medium" as const
        }
      ]
    }
  ],
  ai: [
    {
      topic: "Graph Algorithms",
      emoji: "🧠",
      questions: [
        {
          title: "Number of Islands",
          leetcode_url: "https://leetcode.com/problems/number-of-islands/",
          difficulty: "Medium" as const
        },
        {
          title: "Course Schedule",
          leetcode_url: "https://leetcode.com/problems/course-schedule/",
          difficulty: "Medium" as const
        },
        {
          title: "Word Ladder",
          leetcode_url: "https://leetcode.com/problems/word-ladder/",
          difficulty: "Hard" as const
        },
        {
          title: "Alien Dictionary",
          leetcode_url: "https://leetcode.com/problems/alien-dictionary/",
          difficulty: "Hard" as const
        }
      ]
    }
  ]
};

export const timeBasedData = {
  "2months": [
    {
      topic: "Arrays Fundamentals",
      emoji: "📝",
      questions: [
        {
          title: "Two Sum",
          leetcode_url: "https://leetcode.com/problems/two-sum/",
          difficulty: "Easy" as const
        },
        {
          title: "Best Time to Buy and Sell Stock",
          leetcode_url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
          difficulty: "Easy" as const
        },
        {
          title: "Contains Duplicate",
          leetcode_url: "https://leetcode.com/problems/contains-duplicate/",
          difficulty: "Easy" as const
        },
        {
          title: "Maximum Subarray",
          leetcode_url: "https://leetcode.com/problems/maximum-subarray/",
          difficulty: "Easy" as const
        },
        {
          title: "Product of Array Except Self",
          leetcode_url: "https://leetcode.com/problems/product-of-array-except-self/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "Basic String Problems",
      emoji: "🔤",
      questions: [
        {
          title: "Valid Anagram",
          leetcode_url: "https://leetcode.com/problems/valid-anagram/",
          difficulty: "Easy" as const
        },
        {
          title: "Valid Palindrome",
          leetcode_url: "https://leetcode.com/problems/valid-palindrome/",
          difficulty: "Easy" as const
        },
        {
          title: "Longest Common Prefix",
          leetcode_url: "https://leetcode.com/problems/longest-common-prefix/",
          difficulty: "Easy" as const
        },
        {
          title: "Group Anagrams",
          leetcode_url: "https://leetcode.com/problems/group-anagrams/",
          difficulty: "Medium" as const
        }
      ]
    }
  ],
  "3-4months": [
    {
      topic: "Arrays & Two Pointers",
      emoji: "📝",
      questions: [
        {
          title: "Two Sum",
          leetcode_url: "https://leetcode.com/problems/two-sum/",
          difficulty: "Easy" as const
        },
        {
          title: "3Sum",
          leetcode_url: "https://leetcode.com/problems/3sum/",
          difficulty: "Medium" as const
        },
        {
          title: "Container With Most Water",
          leetcode_url: "https://leetcode.com/problems/container-with-most-water/",
          difficulty: "Medium" as const
        },
        {
          title: "Remove Duplicates from Sorted Array",
          leetcode_url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
          difficulty: "Easy" as const
        }
      ]
    },
    {
      topic: "Binary Trees",
      emoji: "🌳",
      questions: [
        {
          title: "Maximum Depth of Binary Tree",
          leetcode_url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
          difficulty: "Easy" as const
        },
        {
          title: "Same Tree",
          leetcode_url: "https://leetcode.com/problems/same-tree/",
          difficulty: "Easy" as const
        },
        {
          title: "Invert Binary Tree",
          leetcode_url: "https://leetcode.com/problems/invert-binary-tree/",
          difficulty: "Easy" as const
        },
        {
          title: "Binary Tree Level Order Traversal",
          leetcode_url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "Dynamic Programming",
      emoji: "🧮",
      questions: [
        {
          title: "Climbing Stairs",
          leetcode_url: "https://leetcode.com/problems/climbing-stairs/",
          difficulty: "Easy" as const
        },
        {
          title: "House Robber",
          leetcode_url: "https://leetcode.com/problems/house-robber/",
          difficulty: "Medium" as const
        },
        {
          title: "Coin Change",
          leetcode_url: "https://leetcode.com/problems/coin-change/",
          difficulty: "Medium" as const
        },
        {
          title: "Longest Increasing Subsequence",
          leetcode_url: "https://leetcode.com/problems/longest-increasing-subsequence/",
          difficulty: "Medium" as const
        }
      ]
    }
  ],
  "5+months": [
    {
      topic: "Advanced Arrays",
      emoji: "🚀",
      questions: [
        {
          title: "4Sum",
          leetcode_url: "https://leetcode.com/problems/4sum/",
          difficulty: "Medium" as const
        },
        {
          title: "Trapping Rain Water",
          leetcode_url: "https://leetcode.com/problems/trapping-rain-water/",
          difficulty: "Hard" as const
        },
        {
          title: "Median of Two Sorted Arrays",
          leetcode_url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
          difficulty: "Hard" as const
        },
        {
          title: "First Missing Positive",
          leetcode_url: "https://leetcode.com/problems/first-missing-positive/",
          difficulty: "Hard" as const
        }
      ]
    },
    {
      topic: "Advanced Trees",
      emoji: "🌲",
      questions: [
        {
          title: "Binary Tree Maximum Path Sum",
          leetcode_url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
          difficulty: "Hard" as const
        },
        {
          title: "Serialize and Deserialize Binary Tree",
          leetcode_url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
          difficulty: "Hard" as const
        },
        {
          title: "Lowest Common Ancestor of a Binary Tree",
          leetcode_url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
          difficulty: "Medium" as const
        },
        {
          title: "Binary Tree Right Side View",
          leetcode_url: "https://leetcode.com/problems/binary-tree-right-side-view/",
          difficulty: "Medium" as const
        }
      ]
    },
    {
      topic: "System Design Patterns",
      emoji: "⚙️",
      questions: [
        {
          title: "LRU Cache",
          leetcode_url: "https://leetcode.com/problems/lru-cache/",
          difficulty: "Medium" as const
        },
        {
          title: "Design Twitter",
          leetcode_url: "https://leetcode.com/problems/design-twitter/",
          difficulty: "Medium" as const
        },
        {
          title: "Design Search Autocomplete System",
          leetcode_url: "https://leetcode.com/problems/design-search-autocomplete-system/",
          difficulty: "Hard" as const
        },
        {
          title: "Insert Delete GetRandom O(1)",
          leetcode_url: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
          difficulty: "Medium" as const
        }
      ]
    }
  ]
};
