import GitHubReposFetcher from "../repositories";

export function Project() {
    return (
        <div className='mt-16 mb-20'>
            <h2 className="text-lg font-semibold text-accent opacity-75">Relevant Projects</h2>
            <GitHubReposFetcher repoName='Hack-BYUI' desc='Created an engaging and user-friendly hackathon website using JavaScript, React, HTML, and CSS, focusing on intuitive design and easy access to essential information'/>
            <GitHubReposFetcher repoName='Recipe-Finder' desc='A simple recipe finder web application using a third party API to display recipes created with JavaScript, HTML and CSS'/>
            <GitHubReposFetcher repoName='typescript-todo' desc='A simple to-do-list implementing typescript'/>
            <GitHubReposFetcher repoName='Contacts-Web-App' desc='A react web application that displays contacts from an API that was created using Node.js and MongoDB for the database'/>
            <GitHubReposFetcher repoName='my-portfolio' desc='A simple project to create a portfolio displaying my experience and skills. Used TypeScript, React and Tailwind for this project'/>
        </div>
    )
}