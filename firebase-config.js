// firebase-config.js

/**
 * Ini adalah file konfigurasi standar untuk Firebase.
 * Ketika Anda mendeploy proyek ini ke lingkungan non-Canvas (misalnya, di hosting
 * yang dihubungkan ke GitHub Anda), Anda harus mengisi placeholder ini
 * dengan detail proyek Firebase Anda yang sebenarnya.
 */

// Ganti nilai-nilai placeholder ini dengan konfigurasi Firebase Anda
const FIREBASE_CONFIG = {
    apiKey: "GANTI_DENGAN_API_KEY_ANDA",
    authDomain: "GANTI_DENGAN_DOMAIN_AUTENTIKASI_ANDA.firebaseapp.com",
    projectId: "GANTI_DENGAN_PROJECT_ID_ANDA",
    storageBucket: "GANTI_DENGAN_STORAGE_BUCKET_ANDA.appspot.com",
    messagingSenderId: "GANTI_DENGAN_SENDER_ID_ANDA",
    appId: "GANTI_DENGAN_APP_ID_ANDA"
    // Tidak perlu databaseURL karena Firestore sudah ada di config
};

// Dalam konteks Canvas, variabel global __app_id digunakan
// Di lingkungan nyata, Anda bisa mendefinisikan ID aplikasi kustom atau environment
const APP_ID = "ganti-dengan-id-aplikasi-kustom-atau-gunakan-project-id";

// Token otentikasi awal biasanya tidak ada di front-end biasa
const INITIAL_AUTH_TOKEN = null;

// Ekspor konstanta ini agar dapat diimpor di file JavaScript utama Anda.
export { FIREBASE_CONFIG, APP_ID, INITIAL_AUTH_TOKEN };
