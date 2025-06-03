// Firebase Auth state observer
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("User signed in:", user.email);
  } else {
    console.log("No user signed in.");
  }
});

/* ---------------- STUDENT AUTH ---------------- */

// Student Login
async function loginStudent() {
  const email = document.getElementById("student-login-email").value;
  const password = document.getElementById("student-login-password").value;

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    alert("Student login successful!");
    window.location.href = "career-selection.html";
  } catch (error) {
    alert("Student login failed: " + error.message);
    console.error("Student Login Error:", error);
  }
}

// Student Registration
async function registerStudent() {
  const name = document.getElementById("student-register-name").value;
  const email = document.getElementById("student-register-email").value;
  const password = document.getElementById("student-register-password").value;

  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Optional: Store additional data in Firestore
    // await firebase.firestore().collection('students').doc(user.uid).set({ name, email, role: 'student' });

    alert("Student registered successfully!");
    window.location.href = "career-selection.html";
  } catch (error) {
    alert("Student registration failed: " + error.message);
    console.error("Student Registration Error:", error);
  }
}

/* ---------------- ADMIN AUTH ---------------- */

// Admin Login
async function loginAdmin(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    alert("Admin login successful!");
    window.location.href = "career-selection.html";
  } catch (error) {
    alert("Admin login failed: " + error.message);
    console.error("Admin Login Error:", error);
  }
}

// Admin Registration
async function registerAdmin() {
  const name = document.getElementById("admin-register-name").value;
  const email = document.getElementById("admin-register-email").value;
  const password = document.getElementById("admin-register-password").value;

  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Optional: Store additional data in Firestore
    // await firebase.firestore().collection('admins').doc(user.uid).set({ name, email, role: 'admin' });

    alert("Admin registered successfully!");
    window.location.href = "admin-dashboard.html";
  } catch (error) {
    alert("Admin registration failed: " + error.message);
    console.error("Admin Registration Error:", error);
  }
}

/* ---------------- COLLEGE AUTH ---------------- */

// College Login
async function loginCollege() {
  const email = document.getElementById("college-login-email").value;
  const password = document.getElementById("college-login-password").value;

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    alert("College login successful!");
    window.location.href = "college-dashboard.html";
  } catch (error) {
    alert("College login failed: " + error.message);
    console.error("College Login Error:", error);
  }
}

// College Registration
async function registerCollege() {
  const name = document.getElementById("college-register-name").value;
  const email = document.getElementById("college-register-email").value;
  const password = document.getElementById("college-register-password").value;

  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Optional: Store additional data in Firestore
    // await firebase.firestore().collection('colleges').doc(user.uid).set({ name, email, role: 'college' });

    alert("College registered successfully!");
    window.location.href = "college-dashboard.html";
  } catch (error) {
    alert("College registration failed: " + error.message);
    console.error("College Registration Error:", error);
  }
}

/* ---------------- LOGOUT FUNCTION ---------------- */

function logoutUser() {
  firebase.auth().signOut()
    .then(() => {
      alert("Logged out successfully!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Logout failed: " + error.message);
      console.error("Logout Error:", error);
    });
}
