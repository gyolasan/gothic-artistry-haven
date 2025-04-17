
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('🚀 Application is attempting to render - v1.0.2');
console.log('Environment:', import.meta.env.MODE);

const rootElement = document.getElementById("root");
if (rootElement) {
  console.log('✅ Root element found');
  try {
    createRoot(rootElement).render(<App />);
    console.log('✨ Application rendered successfully');
  } catch (error) {
    console.error('❌ Rendering failed:', error);
  }
} else {
  console.error('❌ No root element found in the document');
}
