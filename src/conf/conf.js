const conf = {
  endpoint: import.meta.env.VITE_APPWRITE_URL,
  project: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  database: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  collection: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
  bucket: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};




export default conf;
