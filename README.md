# Laravel Installation Guide (Fresh PC Setup)

This guide walks you through installing Laravel on a brand new PC.

---

## 1. Install Prerequisites

### 1.1 Install PHP
Laravel requires PHP 8.1 or higher.

**Windows:**
1. Download PHP from: [https://windows.php.net/download/](https://windows.php.net/download/)
2. Extract it to `C:\php`
3. Add `C:\php` to your **System Environment Path**

# Adding PHP to System Environment Variables (Windows)

If you installed PHP manually, you need to add it to your system `PATH` so it can be used in the terminal.

## 2. Open Environment Variables
1. Press **Windows Key + S** and search for **Environment Variables**  
2. Click **Edit the system environment variables**
3. In the **System Properties** window, click **Environment Variables…**

## 3. Edit the PATH Variable
1. Under **System variables**, find and select `Path`
2. Click **Edit**
3. Click **New**
4. Paste your PHP folder path (e.g., `C:\php`)
5. Click **OK** on all windows to save changes

## 4. Verify Installation
Open **Command Prompt** or **PowerShell** and run:
```bash
php -v
