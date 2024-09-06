# API Manajemen Artikel

Proyek ini adalah API untuk mengelola artikel.

## Fitur yang Tersedia

- **Login**: Autentikasi admin untuk mengakses fitur-fitur API.

## Setup

1. **Clone Repository**

   Clone repository ini ke mesin lokal Anda:
   ```
   git clone https://github.com/aliefpg/artikel.git

2.  **Install Dependencies**

    >cd artikel api
    >npm install` 

3.  **Menjalankan Server**

    > npm start` 
    
    Server akan berjalan di `http://localhost:3000`
 
## Dependensi

Proyek ini menggunakan dependensi berikut:

-   **[@hapi/hapi](https://hapi.dev/)**: `^21.3.10`
-   **[nodemon](https://nodemon.io/)**: `^3.1.4`


## Endpoints API

### Login

-   **URL**: `/login`
-   **Metode**: `POST`
-   **Body**:
    
    	{
	      "username": "<YOUR_USERNAME>",
	      "password": "<YOUR_PASSWORD>"
		}` 

- **Response**
		
		{
	      "message": "Login successful", 
	      "user": {
	       "username": "<YOUR_USERNAME>",
	       "password": "<YOUR_PASSWORD>", 
	       "isAdmin": true 
	       }
		}
    

