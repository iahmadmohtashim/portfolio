import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Senior System Engineer - Java</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>
          Hello! I'm a Senior System Engineer Mohtashim Ahmad specializing in Java development. With over a decade of experience in designing and implementing scalable and efficient systems, I am passionate about solving complex problems and delivering high-quality software solutions.
			'Have 4+ yearsof experience in Object Oriented Software, Development of client/server systems following Agile and using  SQL,NoSQL, Design Patterns, SOLID, Core Java, REST, Microservice,Azure CI/CD.
        </p>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Senior System Engineer at Infosys Ltd</h3>
            <p>2023 - 2024</p>
            <p>Developed microservices and Restful services for our client that reduced manual effort to get useful information of day-to-day operation.</p>
	     <p>Worked with strong understanding in Design Pattern.</p>
	     <p>Designed and developed n-layer architecture and developed several DB scripts in SQL to interact with DB.Using SQL, EF and SSRS to generate weekly reports for services of clients.</p>
	     <p>Worked on implementing Restful microservices and used Kafka for new model of assessment of taxpayers.</p>
	     <p>Worked on CI/CD pipeline using Azure Devops and Azure Repos.</p>
	     <p>Writing Junit and mockito test for features to improve code coverage..</p>
          </li>
          <li>
            <h3>Software Engineer at CSM Technologies Pvt Ltd</h3>
            <p>2018 - 2020</p>
            <p>Worked on various Java-based projects, focusing on performance optimization and scalability.</p>
	     <p>Design and development of java based frameworks, Restful services and microservices to meet user requirements and reduce manual effort to get useful information of day-to-day operation.</p>
	     <p>Responsible for maintaining code quality and adhering to clean architecture and adherence to coding standards and quality across the team.</p>
	     <p>Extensively involved in writing and optimizing SQL queries.</p>
	     <p>Worked on upgrading projects to latest Spring Framework and uses its technologies like Springboot due to IT removing old frameworks from the servers.</p>
	     <p>Created CI/CD pipeline for automating builds and releases.</p>
	     <p>Implemented and evolved in design and development to build clean architecture and software systems.</p>
	     <p>Involved in code reviews.</p>
	     <p>Writing Junit tests for features to improve code coverage.</p>
          </li>
        </ul>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Bihar Aadhar Authentication Framework</h3>
            <p>The web portal allows clients and user departments to provides web based services and microservices
		    So they can authenticate citizen on the basis of aadhaar and provides benefits to beneficiary.Client is having many user departments in order to provide authenticate service our agency act as a System integrator on behalf of our client and manage day to day operation .
		    Design and development of java based frameworks, Restful services and microservices to meet user requirements and reduce manual effort to get useful information of day-to-day operation.</p>
          </li>
          <li>
            <h3>Income Tax</h3>
            <p>The project provides solution to Income tax department so the user can file their income tax and also they 
			Can view their tax related information using Rest Services, and Microservices using this services client 
			Can maintain the income tax related data of  citizens and provide services to its users .
			</p>
          </li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>You can reach me at <a href="iahmadmohtashim@gmail.com">seniorengineer@email.com</a></p>
      </section>
    </div>
  );
}

export default App;