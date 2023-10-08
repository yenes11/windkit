import { useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Button from './components/button/Button';
import Checkbox from './components/checkbox';
import Chip from './components/chip';
import Select from './components/select';

function App() {
  const [value, setValue] = useState('');
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
        <Button
          color="indigo"
          title="Click me"
          size="small"
          variant="outline"
        />
        <Button title="Click me" variant="outline" />
        <Button title="Click me" size="large" variant="outline" />
      </div>
      <div className="flex gap-4 items-center justify-center mt-2">
        <Button color="blue" title="Click me" size="small" variant="soft" />
        <Button title="Click me" variant="soft" />
        <Button title="Click me" size="large" variant="soft" />
      </div>
      <div className="flex gap-4 items-center justify-center mt-2">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          size="small"
          variant="filled"
        />
        <Input size="large" />
        <Input size="large" variant="filled" />
      </div>
      <div className="flex gap-4 items-center justify-center mt-2">
        <Checkbox />
      </div>
      <div className="flex gap-4 items-center justify-center mt-2">
        <Chip color="blue" variant="soft" label="New" />
        <Chip label="Developer" />
        <Chip size="small" label="Lead" rounded />
        <Chip size="large" variant="soft" label="New" />
        <Chip variant="outline" color="blue" label="Developer" />
        <Chip variant="outline" label="Lead" />
      </div>
      <div className="flex gap-4 items-center justify-center mt-2">
        <Select />
      </div>
    </div>
  );
}

export default App;
