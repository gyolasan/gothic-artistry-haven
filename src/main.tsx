
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('🚀 Application is attempting to render - v1.0.3');
console.log('Environment:', import.meta.env.MODE);

// Helper function to log more detailed error information
const logError = (error: any) => {
  console.error('❌ Rendering failed:', error);
  console.error('Error details:', {
    name: error.name,
    message: error.message,
    stack: error.stack
  });
};

const rootElement = document.getElementById("root");
if (rootElement) {
  console.log('✅ Root element found');
  try {
    createRoot(rootElement).render(<App />);
    console.log('✨ Application rendered successfully');
  } catch (error) {
    logError(error);
  }
} else {
  console.error('❌ No root element found in the document');
}
