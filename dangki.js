const data = [
    {
        username: "QuocChung",
        password: "Chung123",
        email: "liorion.nguyen@gmail.com" 
    },
    {
        username: "Admin",
        password: "admin123",
        email: "mindx@gmail.com" 
    }
]

if (localStorage.getItem('users')) {
    users = localStorage.getItem('users')
}
else {
    localStorage.setItem('users', JSON.stringify(data))
}