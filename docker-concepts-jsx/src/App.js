import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Docker Concepts</h1>
      </header>

      {/* Docker File Section */}
      <section className="docker-section">
        <h2>Docker File</h2>
        <ul>
          <li><strong>FROM</strong>: Specifies the base image to build from.</li>
          <li><strong>RUN</strong>: Executes commands to modify the container's filesystem.</li>
          <li><strong>MAINTAINER</strong>: Provides information about the image creator.</li>
          <li><strong>LABEL</strong>: Adds metadata or build-time parameters.</li>
          <li><strong>ADD</strong>: Copies files from a source to the container.</li>
          <li><strong>COPY</strong>: Similar to ADD but does not support URLs.</li>
          <li><strong>VOLUME</strong>: Defines a mount point to be shared with the host or other containers.</li>
          <li><strong>EXPOSE</strong>: Informs Docker that the container listens on a specific port.</li>
          <li><strong>WORKDIR</strong>: Sets the working directory for subsequent instructions.</li>
          <li><strong>USER</strong>: Specifies the user to run the container processes.</li>
          <li><strong>STOPSIGNAL</strong>: Specifies the signal that will stop the container.</li>
          <li><strong>ENTRYPOINT</strong>: Sets the command that will run as the container starts.</li>
          <li><strong>CMD</strong>: Defines the default command to run within the container.</li>
          <li><strong>ENV</strong>: Defines environment variables.</li>
        </ul>
      </section>

      {/* Docker Run Section */}
      <section className="docker-section">
        <h2>Docker Run</h2>
        <ul>
          <li><strong>--name</strong>: Assigns a name to the container.</li>
          <li><strong>-v, --volume</strong>: Mounts a volume between the host and container filesystem.</li>
          <li><strong>--network</strong>: Connects the container to a specific network.</li>
          <li><strong>-d, --detach</strong>: Runs the container in the background.</li>
          <li><strong>-i, --interactive</strong>: Keeps STDIN open if not attached.</li>
          <li><strong>-t, --tty</strong>: Allocates a pseudo-TTY.</li>
          <li><strong>--rm</strong>: Automatically removes the container when it exits.</li>
          <li><strong>-e, --env</strong>: Sets environment variables.</li>
          <li><strong>--restart</strong>: Specifies the restart policy for the container.</li>
        </ul>
      </section>

      {/* Core Concepts Section */}
      <section className="docker-section">
        <h2>Core Concepts</h2>
        <ul>
          <li><strong>Docker Image</strong>: A read-only snapshot of a container, composed of layers.</li>
          <li><strong>Docker Container</strong>: A lightweight, portable, and executable software package that includes everything needed to run a piece of software, isolated from the system it’s running on.</li>
          <li><strong>Docker Client</strong>: The client application that communicates with the Docker Daemon, either locally or remotely.</li>
          <li><strong>Docker Daemon</strong>: The background service that manages Docker containers, images, and networks. It listens to commands from the Docker client.</li>
          <li><strong>Docker Registry</strong>: A storage and distribution system for Docker images. Public or private registries store Docker images that can be pulled by the Docker daemon.</li>
        </ul>
      </section>

      <footer>
        <p>Created by Shireesha | © 2024 Docker Concepts</p>
      </footer>
    </div>
  );
}

export default App;

