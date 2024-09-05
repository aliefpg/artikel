

# API Manajemen Artikel

Proyek ini adalah API untuk mengelola artikel.

## Fitur yang Tersedia

- **Login**: Autentikasi admin untuk mengakses fitur-fitur API.

## Setup

1. **Clone Repository**

   Clone repository ini ke mesin lokal Anda:
   ```
   git clone <URL_REPOSITORY>

2.  **Install Dependencies**

    >cd artikel api
    >npm install` 

3.  **Menjalankan Server**

    > npm start` 
    
    Server akan berjalan di `http://localhost:3000` (atau port lain jika dikonfigurasi berbeda).
 
## Dependensi

Proyek ini menggunakan dependensi berikut:

-   **[@hapi/hapi](https://hapi.dev/)**: `^21.3.10` - Framework server untuk Node.js.
-   **[nodemon](https://nodemon.io/)**: `^3.1.4` - Alat untuk otomatisasi restart server saat file diubah.


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
    

