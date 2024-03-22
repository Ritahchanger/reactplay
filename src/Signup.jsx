import { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [erros, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    const emailMatcher = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!firstName.trim()) {
      errors.firstName = "This field is required";
    }
    if (!lastName.trim()) {
      errors.lastName = "This field is required";
    }
    if (!email.trim()) {
      errors.email = "This field is required";
    }
    if (!emailMatcher.test(email)) {
      errors.email = "Please input the correct email format";
    }
    if (!password.trim()) {
      errors.password = "This field is required";
    } else if (password.length !== 6) {
      errors.password = "Password should be more than six";
    }

    if (!confirmPassword.trim()) {
      errors.confirmPassword = "This field is required";
    } else if (confirmPassword.length !== 6) {
      errors.password = "Password should be more than six";
    } else if (confirmPassword !== password) {
      errors.password = "Your passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    } else {
      console.log(
        `${firstName},${lastName},${email},${password},${confirmPassword}`
      );
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form" id="form">
        <div className="input-group">
          <p>First </p>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        { erros.firstName && <span>{erros.firstName}</span> }

        <div className="input-group">
          <p>Last Name</p>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>


        { erros.lastName && <span>{erros.lastName}</span> }



        <div className="input-group">
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        { erros.email && <span>{erros.email}</span> }

        <div className="input-group">
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        { erros.password && <span>{erros.password}</span> }

        <div className="input-group">
          <p>Confirm Password</p>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        { erros.confirmPassword && <span>{erros.confirmPassword}</span> }

        <div className="input-group">
          <input type="submit" placeholder="submit" value="SUBMIT" />
        </div>

    
      </form>
    </div>
  );
};

export default Signup;
