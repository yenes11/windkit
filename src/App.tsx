import { Camera, Send } from 'react-feather';
import './App.css';
import Button from './components/button/Button';

function App() {
  return (
    <div>
      <div className="flex gap-4 items-center justify-center">
        <Button title="Click me" color="indigo" size="small" />
        <Button title="Click me" color="indigo" size="medium" />
        <Button
          // leftIcon={<Send size={10} />}
          title="Click me"
          color="blue"
          size="medium"
          variant="outline"
        />
        <Button title="Click me" color="indigo" size="large" />
      </div>
      <div className="flex gap-4 items-center justify-center mt-2">
        <Button
          title="Click me"
          color="blue"
          rounded
          size="small"
          variant="outline"
        />

        <Button
          title="Click me"
          color="indigo"
          size="large"
          variant="outline"
          rounded
        />
      </div>
    </div>
  );
}

export default App;
