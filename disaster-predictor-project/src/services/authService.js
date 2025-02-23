const authService = {
  register: async (userData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user exists
    if (users.some(user => user.email === userData.email)) {
      throw new Error('User already exists');
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      ...userData,
      password: btoa(userData.password) // Basic encoding (NOT for production)
    };

    // Save user
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Return user data without password
    const { password, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  },

  login: async (email, password) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && btoa(password) === u.password);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },

  logout: () => {
    localStorage.removeItem('currentUser');
  }
};

export default authService;