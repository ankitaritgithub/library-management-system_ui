import React, { useState } from "react";
import axios from "axios";
import "./Addbook.css";
import { useNavigate } from "react-router-dom";

const Addbook = (props) => {
  const [isbn, setIsbn] = useState("");
  const [libId, setLibId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [version, setVersion] = useState("");
  const [totalCopies, setTotalCopies] = useState("");
  const [availableCopies, setAvailableCopies] = useState("");
  const [isbnError, setIsbnError] = useState("");
  const [libidError, setLibIdError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [publisherError, setPublisherError] = useState("");
  const [versionError, setVersionError] = useState("");
  const [totalCopiesError, setTotalCopiesError] = useState("");
  const [availableCopiesError, setAvailableCopiesError] = useState("");

  const token = sessionStorage.getItem("token");
 

  const navigate = useNavigate()

  const onButtonClick = async () => {
    
    setIsbnError("");
    setLibIdError("");
    setTitleError("");
    setAuthorError("");
    setPublisherError("");
    setVersionError("");
    setTotalCopiesError("");
    setAvailableCopiesError("");

    // Validate input fields
    if (!isbn < 0) {
      setIsbnError("Please enter your ISBN");
      return;
    }

    if (!libId < 0) {
      setLibIdError("Please enter your Libid");
      return;
    }

    if (!title) {
      setTitleError("Please enter a title");
      return;
    }

    if (!author) {
      setAuthorError("Please enter an author");
      return;
    }

    if (!publisher) {
      setPublisherError("Please enter a publisher");
      return;
    }

    if (!version ) {
      setVersionError("Please enter a version");
      return;
    }

    if (!totalCopies < 0) {
      setTotalCopiesError("Please enter total copies");
      return;
    }

    if (availableCopies < 0) {
      setAvailableCopiesError("Please enter available copies");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/admin/add-book",
        {
          isbn: parseInt(isbn),
          libId: parseInt(libId),
          title,
          author,
          publisher,
          version,
          totalCopies: parseInt(totalCopies),
          availableCopies: parseInt(availableCopies),
        },
        {
          headers: {
            "token": token,
          },
        }
      );
      // Clear form after successful submission
      setIsbn("");
      setLibId("");
      setTitle("");
      setAuthor("");
      setPublisher("");
      setVersion("");
      setTotalCopies("");
      setAvailableCopies("");

      // Handle successful response from backend
      console.log("Book added successfully:", response.data);
      navigate("/getallbook");
    } catch (error) {
      // Handle error
      console.error("Error adding book:", error);
    }
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>AddBook</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={isbn}
          placeholder="Enter your Isbn here"
          onChange={(ev) => setIsbn(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{isbnError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={libId}
          placeholder="Enter your Libid here"
          onChange={(ev) => setLibId(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{libidError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={title}
          placeholder="Enter your Title here"
          onChange={(ev) => setTitle(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{titleError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={author}
          placeholder="Enter your Author here"
          onChange={(ev) => setAuthor(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{authorError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={publisher}
          placeholder="Enter your Publisher here"
          onChange={(ev) => setPublisher(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{publisherError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={version}
          placeholder="Enter your Version here"
          onChange={(ev) => setVersion(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{versionError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={availableCopies}
          placeholder="Enter your AvailableCopies here"
          onChange={(ev) => setAvailableCopies(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{availableCopiesError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={totalCopies}
          placeholder="Enter your TotalCopies here"
          onChange={(ev) => setTotalCopies(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{totalCopiesError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"submit"}
        />
      </div>
    </div>
  );
};

export default Addbook;
