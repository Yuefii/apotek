# User API Spec

## Register User API

Endpoint : **POST** /api/auth/register

**Request Body** :
```json
{
    "username" : "rahasia",
    "password" : "rahasia",
}
```

**Response Body** :
```json
{
    "message": "User created successfully.",
    "user": {
        "id": 3,
        "username": "rahasia",
        "password": "$2b$10$RIIGaXqz4yqMr4T1VYzc5e45hETK/KXcieD7eAWBX4IQAgQzS8l.a"
    }
}
```

**Response Body Error** :
```json
{
    "error": "Username already exists."
}
```

## Login User API

Endpoint : **POST** /api/auth/login

**Request Body** :
```json
{
    "username" : "rahasia",
    "password" : "rahasia",
}
```

**Response Body** :
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTcwODUwNDA1MCwiZXhwIjoxNzA4NTQ3MjUwfQ.E0V0PFbzM08bNcRJ8d32Cqin8EiINqWLPuzdqwnMyec"
}
```

**Response Body Error** :
```json
{
    "error": "Invalid username or password."
}
```