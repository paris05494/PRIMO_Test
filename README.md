# Merge Sort Project (Without Built-in Sort Function)
TypeScript project that implements a function `merge` to merge and sort three arrays under specific constraints. The project includes unit tests using Jest.

## 📌 Project Requirements

The function follows this interface:
```typescript
function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[];
```
- collection_1 and collection_2 are sorted in ascending order.
- collection_3 is sorted in descending order.
- The function returns a single array sorted in ascending order.
- Do not use any built-in sort functions (.sort()).

## 🚀 Setup & Installation
1. Clone the Repository
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/merge-sort-project.git
cd merge-sort-project
```
2. Install Dependencies
```bash
npm install
```
3. Run Unit Tests
```bash
npm test
```

## ✅ Test Execution Results
![Screenshot 2025-03-12 233946](https://github.com/user-attachments/assets/29d1998d-0aed-4313-86c4-0997b09beb05)

## 📂 Project Structure
```
merge_sort_project/
│── src/
│   ├── merge.ts            # Implementation of the merge function
│   ├── merge.test.ts       # Unit tests using Jest
│── package.json            # Project dependencies and scripts
│── tsconfig.json           # TypeScript configuration
│── jest.config.js          # Jest configuration
│── README.md               # Project documentation
```

