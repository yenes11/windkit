import './App.css';
import Input from './components/Input/Input';
import Button from './components/button/Button';

function App() {
  return (
    <div>
      <div className="flex gap-4 items-center justify-center">
        <Button title="Click me" size="small" />
        <Button title="Click me" />
        <Button title="Click me" size="large" />
      </div>
      <div className="flex gap-4 items-center justify-center mt-2">
        <Button color="blue" title="Click me" size="small" />
        <Button color="blue" title="Click me" />
        <Button color="blue" title="Click me" size="large" />
      </div>
      <div className="flex gap-4 items-center justify-center mt-2">
        <Button title="Click me" size="small" variant="outline" />
        <Button title="Click me" variant="outline" />
        <Button title="Click me" size="large" variant="outline" />
      </div>
      <div className="flex gap-4 items-center justify-center mt-2">
        <Button title="Click me" size="small" variant="soft" />
        <Button title="Click me" variant="soft" />
        <Button title="Click me" size="large" variant="soft" />
      </div>
      <div className="flex gap-4 items-center justify-center mt-2">
        <Input />
      </div>
    </div>
  );
}

export default App;
