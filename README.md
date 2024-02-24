
# Language Learning and Study Group Management System Documentation

## Overview
The Language Learning and Study Group Management System is a web-based application designed to facilitate language learning activities and manage study groups efficiently. It provides functionalities for adding, updating, and retrieving language learning content, as well as creating, updating, and managing study groups. The system aims to enhance language learning experiences and promote collaborative learning through study groups.

The application is built using Rust programming language with the Internet Computer (IC) Canister SDK, ensuring secure and decentralized management of language learning content and study group information. It leverages stable data structures for efficient storage and retrieval of data, providing a reliable platform for language learners and study group organizers.

## Table of Contents
1. [Dependencies](#dependencies)
2. [Data Structures](#data-structures)
3. [Functions](#functions)
4. [Usage](#usage)
5. [Setting Up the Project](#setup)

## Dependencies <a name="dependencies"></a>
- `serde`: Serialization and deserialization library for Rust.
- `candid`: Library for Candid serialization and deserialization.
- `ic_stable_structures`: Library providing stable data structures for the Internet Computer.
- `std`: Standard library for Rust.

## Data Structures <a name="data-structures"></a>
### Structs
1. `LanguageLearningContent`: Represents language learning content with fields such as ID, text, image URL, sound URL, scent description, creation timestamp, and optional update timestamp.
2. `StudyGroup`: Represents a study group with fields including ID, name, and members.

### Enums
1. `Error`: Represents possible error types including "Not Found".

## Functions <a name="functions"></a>
The Language Learning and Study Group Management System provides various functions for managing language learning content and study groups. Some key functions include:
- `get_language_content`: Retrieve language learning content by ID.
- `add_language_content`: Add new language learning content.
- `update_language_content`: Update existing language learning content.
- `delete_language_content`: Delete language learning content.
- `list_language_content`: List all language learning content.
- `search_language_content_by_text`: Search language learning content by text.
- `filter_language_content_by_scent`: Filter language learning content by scent description.
- `sort_language_content_by_creation_date`: Sort language learning content by creation date.
- `create_study_group`: Create a new study group.
- `get_study_group`: Retrieve a study group by ID.
- `update_study_group`: Update an existing study group.
- `delete_study_group`: Delete a study group.
- `list_study_groups`: List all study groups.

## Usage <a name="usage"></a>
The Language Learning and Study Group Management System offers a user-friendly interface for users to interact with the system. Language learners can access language learning content, search/filter content based on their preferences, and collaborate with others by joining study groups. Study group organizers can create and manage study groups, invite members, and facilitate collaborative learning activities.

To use the application, users can navigate through the interface, perform desired actions, and interact with the system seamlessly. Proper error handling is implemented to handle cases such as invalid input or missing data.

## Setting Up the Project <a name="setup"></a>
To set up and start working on the Language Learning and Study Group Management System project, follow these steps:

### 1. Install Rust and Dependencies
- Ensure you have Rust installed, version 1.64 or higher. You can install it using the following commands:
  ```bash
  $ curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
  $ source "$HOME/.cargo/env"
  ```
- Install the `wasm32-unknown-unknown` target:
  ```bash
  $ rustup target add wasm32-unknown-unknown
  ```
- Install `candid-extractor`:
  ```bash
  $ cargo install candid-extractor
  ```

### 2. Install DFINITY SDK (`dfx`)
- Install `dfx` using the following commands:
  ```bash
  $ DFX_VERSION=0.15.0 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
  $ echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"
  $ source ~/.bashrc
  $ dfx start --background
  ```

### 3. Update Dependencies
- Update the `dependencies` block in `/src/{canister_name}/Cargo.toml` with the required dependencies.

### 4. Autogenerate DID
- Add the provided script to the root directory of the project.
- Update line 16 with the name of your canister.
- Run the script each time you modify/add/remove exported functions of the canister.

### 5. Running the Project Locally
- Start the replica, running in the background:
  ```bash
  $ dfx start --background
  ```
- Deploy your canisters to the replica and generate your Candid interface:
  ```bash
  $ npm run gen-deploy
  ```
