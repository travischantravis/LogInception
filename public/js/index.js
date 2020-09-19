let auth0 = null;

const fetchAuthConfig = () => fetch("/auth_config.json");

const configureClient = async () => {
  const response = await fetchAuthConfig();
  const config = await response.json();

  auth0 = await createAuth0Client({
    domain: config.domain,
    client_id: config.clientId,
  });
};

const updateUI = async () => {
  const isAuthenticated = await auth0.isAuthenticated();

  document.getElementById("btn-logout").disabled = !isAuthenticated;
  document.getElementById("btn-login").disabled = isAuthenticated;

  if (isAuthenticated) {
    // document.getElementById(
    //   "ipt-access-token"
    // ).innerHTML = await auth0.getTokenSilently();
    const userProfile = await auth0.getUser();
    console.log(userProfile);
    document.getElementById("user-profile").style.display = "block";

    document.getElementById("username").textContent = userProfile.name;
    document.getElementById("profile-pic").src = userProfile.picture;
  } else {
    document.getElementById("user-profile").style.display = "none";
  }
};

const login = async () => {
  console.log(window.location.origin);
  await auth0.loginWithRedirect({
    redirect_uri: "http://localhost:3000/level1",
    // redirect_uri: window.location.origin,
  });
};

const logout = () => {
  auth0.logout({
    returnTo: window.location.origin,
  });
};

window.onload = async () => {
  await configureClient();

  updateUI();

  const isAuthenticated = await auth0.isAuthenticated();

  if (isAuthenticated) {
    // show the gated content
    return;
  }

  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    // Process the login state
    await auth0.handleRedirectCallback();

    updateUI();

    // Use replaceState to redirect the user away and remove the querystring parameters
    // window.history.replaceState({}, document.title, "/");
  }
};
