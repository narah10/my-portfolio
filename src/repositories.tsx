import React, { useEffect, useState } from 'react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

const fetchGitHubRepo = async (repoName: string) => {
  try {
    const response = await fetch(`https://api.github.com/repos/narah10/${repoName}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch GitHub repository. Status: ${response.status}`);
    }

    const data: Repository = await response.json();
    console.log('GitHub Repository:', data);
    return data;
  } catch (error) {
    console.error('Error fetching GitHub repository:');
    throw error;
  }
};

const GitHubReposFetcher: React.FC<{ repoName: string }> = ({ repoName }) => {
  const [repository, setRepository] = useState<Repository | null>(null);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const repoData = await fetchGitHubRepo(repoName);
        setRepository(repoData);
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchRepo();
  }, [repoName]);

  if (!repository) {
    return <div>Fetching GitHub Repository...</div>;
  }

  return (
    <div>
      <h1>{repository.name}</h1>
      <p>{repository.description}</p>
      <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default GitHubReposFetcher;

