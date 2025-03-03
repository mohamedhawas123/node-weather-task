import app from "./app";
import { connectDB } from "./config/database";
import { syncDatabase } from "./models";

const PORT = process.env.PORT || 5001;

// Start the server
const startServer = async () => {
  try {
    await connectDB(); 
    await syncDatabase(); 

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(" Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
