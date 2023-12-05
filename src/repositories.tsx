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

interface GitHubReposFetcherProps {
  repoName: string;
  desc: string;
}

const GitHubReposFetcher: React.FC<GitHubReposFetcherProps> = ({ repoName, desc }) => {
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
    <div className='mt-7 group'>
      <h1 className='group-hover:text-accent'>{repository.name}</h1>
      <p>{desc}</p>
      <a className='group-hover:text-accent' href={repository.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default GitHubReposFetcher;
