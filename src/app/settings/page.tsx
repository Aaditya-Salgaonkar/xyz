import { useUser } from "@clerk/clerk-react";

function SettingsPage() {
  const { user, setUser } = useUser();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Make a POST request to update the user's profile
    const formData = new FormData(event.target);
    const updatedUser = {
      ...user,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      emailAddress: formData.get("emailAddress"),
    };
    try {
      await setUser(updatedUser);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        defaultValue={user.firstName}
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        defaultValue={user.lastName}
      />
      <br />
      <label htmlFor="emailAddress">Email Address:</label>
      <input
        type="email"
        name="emailAddress"
        id="emailAddress"
        defaultValue={user.emailAddress}
      />
      <br />
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default SettingsPage;